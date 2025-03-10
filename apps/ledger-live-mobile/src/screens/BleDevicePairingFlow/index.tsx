import { Device, DeviceModelId } from "@ledgerhq/types-devices";
import React, { useCallback } from "react";
import { has as hasFromPath, set as setFromPath } from "lodash";
import { Flex } from "@ledgerhq/native-ui";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigatorName, ScreenName } from "../../const";
import { useIncrementOnNavigationFocusState } from "../../helpers/useIncrementOnNavigationFocusState";
import BleDevicePairingFlowComponent, {
  SetHeaderOptionsRequest,
} from "../../components/BleDevicePairingFlow/index";
import {
  ReactNavigationHeaderOptions,
  RootComposite,
  StackNavigatorProps,
} from "../../components/RootNavigator/types/helpers";
import { BaseNavigatorStackParamList } from "../../components/RootNavigator/types/BaseNavigator";
import { NavigationHeaderBackButton } from "../../components/NavigationHeaderBackButton";

export type Props = RootComposite<
  StackNavigatorProps<BaseNavigatorStackParamList, ScreenName.BleDevicePairingFlow>
>;

// Defines here some of the header options for this screen to be able to reset back to them.
export const bleDevicePairingFlowHeaderOptions: ReactNavigationHeaderOptions = {
  headerShown: true,
  headerLeft: () => <NavigationHeaderBackButton />,
  title: "",
  headerRight: () => null,
};

// Necessary when the pairing flow is opened from a deeplink without any params
// Shouldn't be relied upon for other usages
const defaultNavigationParams = {
  filterByDeviceModelId: DeviceModelId.stax, // This needs to be removed when nanos are supported
  areKnownDevicesDisplayed: true,
  onSuccessAddToKnownDevices: false,
  successNavigateToConfig: {
    navigationType: "navigate",
    pathToDeviceParam: "params.params.params.device",
    navigateInput: {
      name: NavigatorName.BaseOnboarding,
      params: {
        screen: NavigatorName.SyncOnboarding,
        params: {
          screen: ScreenName.SyncOnboardingCompanion,
          params: {
            device: null,
          },
        },
      },
    },
  },
};

/**
 * Screen handling the BLE flow with a scanning step and a pairing step
 *
 * Note: this screen will disappear in the future, but still necessary for now.
 *
 * @param navigation react-navigation navigation object
 * @param route react-navigation route object. The route params are:
 * - filterByDeviceModelId: (optional, default to none) a device model id to filter on
 * - areKnownDevicesDisplayed: boolean, display the already known device if true,
 *   filter out them if false (default to true)
 * - onSuccessNavigateToConfig: object containing navigation config parameters when successful pairing:
 *   - navigateInput: navigation object given as input to navigation.navigate. 2 mandatory props:
 *     - name: navigator name or screen name if no need to specify a navigator
 *     - params: navigation params
 *     Ex for a nested navigation:
 *      {
 * .      name: NavigatorName.A_NAVIGATOR,
 *        params: {
 *          screen: ScreenName.A_SCREEN,
 *          params: {
 *            ...SOME_PARAMS,
 *            pairedDevice: null,
 *          },
 *        },
 *      }
 *   - pathToDeviceParam: path to device property that is nested into navigateInput
 *     From the ex of navigateInput, it would be: "params.params.pairedDevice"
 *   - navigationType: (optional, default to "navigate") when navigating after a successful pairing,
 *     choose between a "replace" or a "navigate"
 *   The default success config will navigate to the synchronous onboarding, however it shouldn't be
 *   relied upon and exist solely to simplify deeplinking to the sync onboarding.
 * - onSuccessAddToKnownDevices: boolean, if true the successfully paired device is added to the redux
 *   list of known devices. Not added if false (default to false).
 * @returns a JSX component
 */
export const BleDevicePairingFlow = ({ navigation, route }: Props) => {
  const params = route?.params || defaultNavigationParams;

  const {
    filterByDeviceModelId = undefined,
    areKnownDevicesDisplayed = true,
    areKnownDevicesPairable = false,
    onSuccessAddToKnownDevices = false,
    onSuccessNavigateToConfig = defaultNavigationParams.successNavigateToConfig,
  } = params;

  const {
    navigateInput,
    pathToDeviceParam,
    navigationType = "navigate",
  } = onSuccessNavigateToConfig;

  // Makes sure the pairing components are reset when navigating back to this screen
  const keyToReset = useIncrementOnNavigationFocusState<Props["navigation"]>(navigation);

  const onPairingSuccess = useCallback(
    (device: Device) => {
      const hasDeviceParam = hasFromPath(navigateInput, pathToDeviceParam);
      if (hasDeviceParam) {
        setFromPath(navigateInput, pathToDeviceParam, device);
      } else {
        console.error(
          `BLE pairing flow: device path param ${String(
            pathToDeviceParam,
          )} not existing on navigation input`,
        );
      }

      const params = navigateInput.params
        ? {
            ...navigateInput.params,
          }
        : undefined;

      if (navigationType === "push") {
        // @ts-expect-error this seems complicated to type properly
        // the typings for react-navigation cannot reconciliate screens having "undefined" params and object params.
        // And this will disappear in a future screen.
        navigation.push(navigateInput.name, params);
      } else if (navigationType === "replace") {
        // @ts-expect-error this seems complicated to type properly
        navigation.replace(navigateInput.name, params);
      } else {
        // @ts-expect-error this seems complicated to type properly
        navigation.navigate(navigateInput.name, params);
      }
    },
    [navigateInput, navigation, navigationType, pathToDeviceParam],
  );

  const requestToSetHeaderOptions = useCallback(
    (request: SetHeaderOptionsRequest) => {
      if (request.type === "set") {
        navigation.setOptions({
          headerLeft: request.options.headerLeft,
          headerRight: request.options.headerRight,
        });
      } else {
        // Sets back the header to its initial values set for this screen
        navigation.setOptions({
          ...bleDevicePairingFlowHeaderOptions,
        });
      }
    },
    [navigation],
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Flex px={6} flex={1}>
        <BleDevicePairingFlowComponent
          key={keyToReset}
          filterByDeviceModelId={filterByDeviceModelId}
          areKnownDevicesDisplayed={areKnownDevicesDisplayed}
          areKnownDevicesPairable={areKnownDevicesPairable}
          onPairingSuccess={onPairingSuccess}
          onPairingSuccessAddToKnownDevices={onSuccessAddToKnownDevices}
          requestToSetHeaderOptions={requestToSetHeaderOptions}
        />
      </Flex>
    </SafeAreaView>
  );
};
