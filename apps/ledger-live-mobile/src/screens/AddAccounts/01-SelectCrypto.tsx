import React, { useMemo } from "react";
import { Trans } from "react-i18next";
import { StyleSheet, View, FlatList, SafeAreaView } from "react-native";
import type {
  CryptoCurrency,
  CryptoCurrencyId,
  CryptoOrTokenCurrency,
  TokenCurrency,
} from "@ledgerhq/types-cryptoassets";
import {
  isCurrencySupported,
  listTokens,
  useCurrenciesByMarketcap,
  listSupportedCurrencies,
} from "@ledgerhq/live-common/currencies/index";
import { useTheme } from "@react-navigation/native";
import useFeature from "@ledgerhq/live-common/featureFlags/useFeature";
import useEnv from "@ledgerhq/live-common/hooks/useEnv";
import { ScreenName } from "../../const";
import { TrackScreen } from "../../analytics";
import FilteredSearchBar from "../../components/FilteredSearchBar";
import CurrencyRow from "../../components/CurrencyRow";
import LText from "../../components/LText";
import { AddAccountsNavigatorParamList } from "../../components/RootNavigator/types/AddAccountsNavigator";
import { StackNavigatorProps } from "../../components/RootNavigator/types/helpers";
import { getEnv } from "@ledgerhq/live-env";
import { Feature } from "@ledgerhq/types-live";

const SEARCH_KEYS = getEnv("CRYPTO_ASSET_SEARCH_KEYS");

type NavigationProps = StackNavigatorProps<
  AddAccountsNavigatorParamList,
  ScreenName.AddAccountsSelectCrypto
>;

type Props = {
  devMode?: boolean;
} & NavigationProps;

const keyExtractor = (currency: CryptoOrTokenCurrency) => currency.id;

const renderEmptyList = () => (
  <View style={styles.emptySearch}>
    <LText style={styles.emptySearchText}>
      <Trans i18nKey="common.noCryptoFound" />
    </LText>
  </View>
);

const listSupportedTokens = () => listTokens().filter(t => isCurrencySupported(t.parentCurrency));

export default function AddAccountsSelectCrypto({ navigation, route }: Props) {
  const { colors } = useTheme();
  const devMode = useEnv("MANAGER_DEV_MODE");
  const { filterCurrencyIds = [], currency } = route.params || {};

  const axelar = useFeature("currencyAxelar");
  const stargaze = useFeature("currencyStargaze");
  const secretNetwork = useFeature("currencySecretNetwork");
  const umee = useFeature("currencyUmee");
  const desmos = useFeature("currencyDesmos");
  const onomy = useFeature("currencyOnomy");
  const quicksilver = useFeature("currencyQuicksilver");
  const persistence = useFeature("currencyPersistence");
  const avaxCChain = useFeature("currencyAvalancheCChain");
  const stacks = useFeature("currencyStacks");
  const optimism = useFeature("currencyOptimism");
  const optimismGoerli = useFeature("currencyOptimismGoerli");
  const arbitrum = useFeature("currencyArbitrum");
  const arbitrumGoerli = useFeature("currencyArbitrumGoerli");
  const rsk = useFeature("currencyRsk");
  const bittorrent = useFeature("currencyBittorrent");
  const kavaEvm = useFeature("currencyKavaEvm");
  const evmosEvm = useFeature("currencyEvmosEvm");
  const energyWeb = useFeature("currencyEnergyWeb");
  const astar = useFeature("currencyAstar");
  const metis = useFeature("currencyMetis");
  const boba = useFeature("currencyBoba");
  const moonriver = useFeature("currencyMoonriver");
  const velasEvm = useFeature("currencyVelasEvm");
  const syscoin = useFeature("currencySyscoin");
  const internetComputer = useFeature("currencyInternetComputer");
  const telosEvm = useFeature("currencyTelosEvm");
  const coreum = useFeature("currencyCoreum");
  const polygonZkEvm = useFeature("currencyPolygonZkEvm");
  const polygonZkEvmTestnet = useFeature("currencyPolygonZkEvmTestnet");
  const base = useFeature("currencyBase");
  const baseGoerli = useFeature("currencyBaseGoerli");
  const klaytn = useFeature("currencyKlaytn");
  const mock = useEnv("MOCK");
  const featureFlaggedCurrencies = useMemo(
    (): Partial<Record<CryptoCurrencyId, Feature<unknown> | null>> => ({
      axelar,
      stargaze,
      umee,
      desmos,
      secret_network: secretNetwork,
      onomy,
      quicksilver,
      persistence,
      avalanche_c_chain: avaxCChain,
      stacks,
      optimism,
      optimism_goerli: optimismGoerli,
      arbitrum,
      arbitrum_goerli: arbitrumGoerli,
      rsk,
      bittorrent,
      kava_evm: kavaEvm,
      evmos_evm: evmosEvm,
      energy_web: energyWeb,
      astar,
      metis,
      boba,
      moonriver,
      velas_evm: velasEvm,
      syscoin,
      internet_computer: internetComputer,
      telos_evm: telosEvm,
      coreum,
      polygon_zk_evm: polygonZkEvm,
      polygon_zk_evm_testnet: polygonZkEvmTestnet,
      base,
      base_goerli: baseGoerli,
      klaytn,
    }),
    [
      axelar,
      stargaze,
      umee,
      desmos,
      secretNetwork,
      onomy,
      quicksilver,
      persistence,
      avaxCChain,
      stacks,
      optimism,
      optimismGoerli,
      arbitrum,
      arbitrumGoerli,
      rsk,
      bittorrent,
      kavaEvm,
      evmosEvm,
      energyWeb,
      astar,
      metis,
      boba,
      moonriver,
      velasEvm,
      syscoin,
      internetComputer,
      telosEvm,
      coreum,
      polygonZkEvm,
      polygonZkEvmTestnet,
      base,
      baseGoerli,
      klaytn,
    ],
  );

  const cryptoCurrencies = useMemo(() => {
    const currencies = [...listSupportedCurrencies(), ...listSupportedTokens()].filter(
      ({ id }) => filterCurrencyIds.length <= 0 || filterCurrencyIds.includes(id),
    );
    const deactivatedCurrencies = mock
      ? []
      : Object.entries(featureFlaggedCurrencies)
          .filter(([, feature]) => !feature?.enabled)
          .map(([name]) => name);

    const currenciesFiltered = currencies.filter(c => !deactivatedCurrencies.includes(c.id));

    if (!devMode) {
      return currenciesFiltered.filter(c => c.type !== "CryptoCurrency" || !c.isTestnetFor);
    }
    return currenciesFiltered;
  }, [devMode, featureFlaggedCurrencies, filterCurrencyIds, mock]);

  const sortedCryptoCurrencies = useCurrenciesByMarketcap(cryptoCurrencies);

  const onPressCurrency = (currency: CryptoCurrency) => {
    navigation.navigate(ScreenName.AddAccountsSelectDevice, {
      ...(route?.params ?? {}),
      currency,
    });
  };

  const onPressToken = (token: TokenCurrency) => {
    navigation.navigate(ScreenName.AddAccountsTokenCurrencyDisclaimer, {
      token,
    });
  };

  const onPressItem = (currencyOrToken: CryptoOrTokenCurrency) => {
    if (currencyOrToken.type === "TokenCurrency") {
      onPressToken(currencyOrToken);
    } else {
      onPressCurrency(currencyOrToken);
    }
  };

  const renderList = (items: CryptoOrTokenCurrency[]) => (
    <FlatList
      contentContainerStyle={styles.list}
      data={items}
      renderItem={({ item }: { item: CryptoOrTokenCurrency }) => (
        <CurrencyRow currency={item} onPress={onPressItem} />
      )}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      keyboardDismissMode="on-drag"
    />
  );

  return (
    <SafeAreaView
      style={[
        styles.root,
        {
          backgroundColor: colors.background,
        },
      ]}
    >
      <TrackScreen category="AddAccounts" name="SelectCrypto" />
      <View style={styles.searchContainer}>
        <FilteredSearchBar
          keys={SEARCH_KEYS}
          inputWrapperStyle={styles.filteredSearchInputWrapperStyle}
          list={sortedCryptoCurrencies}
          renderList={renderList}
          renderEmptySearch={renderEmptyList}
          initialQuery={currency}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  searchContainer: {
    paddingTop: 16,
    flex: 1,
  },
  list: {
    paddingBottom: 32,
  },
  filteredSearchInputWrapperStyle: {
    marginHorizontal: 16,
  },
  emptySearch: {
    paddingHorizontal: 16,
  },
  emptySearchText: {
    textAlign: "center",
  },
});
