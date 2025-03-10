import React, { useEffect, useState, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import repairFw from "@ledgerhq/live-common/hw/firmwareUpdate-repair";
import { useDispatch } from "react-redux";
import Button, { Props as ButtonProps } from "~/renderer/components/Button";
import RepairModal from "~/renderer/modals/RepairModal";
import logger from "~/renderer/logger";
import { useHistory } from "react-router-dom";
import { setTrackingSource } from "~/renderer/analytics/TrackPage";
import { openModal, closeModal } from "~/renderer/actions/modals";
import { Subscription } from "rxjs";

type Props = {
  buttonProps?: ButtonProps;
  disableDescription?: boolean;
  onRepair?: (a: boolean) => void;
  onClose?: (a: { needHelp?: boolean }) => void;
  Component?: React.ComponentType<{ onClick: () => void }>;
};

const RepairDeviceButton = React.forwardRef(function RepairDevice(
  { onRepair, onClose, buttonProps, Component, disableDescription }: Props,
  ref: React.Ref<HTMLButtonElement>,
) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [opened, setOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const timeout = useRef<NodeJS.Timeout | null>(null);
  const sub = useRef<Subscription | null>(null);
  const history = useHistory();
  useEffect(() => {
    return () => {
      if (timeout && timeout.current) {
        clearTimeout(timeout.current);
      }
      if (sub && sub.current) sub.current.unsubscribe();
    };
  }, []);
  const open = useCallback(() => {
    setError(null);
    // NB due to the fact that this modal is not part of the modals layer, we need to dispatch the open modal
    // event to have the backdrop layer added. I'm not refactoring the modal because of fear.
    dispatch(openModal("MODAL_STUB", undefined));
    setOpened(true);
  }, [dispatch]);
  const close = useCallback(
    ({ needHelp }: { needHelp?: boolean } = {}) => {
      if (sub && sub.current) sub.current.unsubscribe();
      if (timeout && timeout.current) clearTimeout(timeout.current);
      if (onRepair) {
        onRepair(false);
      }
      if (onClose) {
        onClose({
          needHelp,
        });
      }
      setOpened(false);
      dispatch(closeModal("MODAL_STUB"));
      setIsLoading(false);
      setError(null);
      setProgress(0);
    },
    [onRepair, onClose, dispatch],
  );
  const repair = useCallback(
    (version = null) => {
      if (isLoading) return;
      if (onRepair) {
        onRepair(true);
      }
      timeout.current = setTimeout(() => setIsLoading(true), 500);
      sub.current = repairFw("", version).subscribe({
        next: ({ progress }) => {
          setIsLoading(isLoading);
          setProgress(progress);
        },
        error: error => {
          logger.critical(error);
          if (timeout.current) clearTimeout(timeout.current);
          setError(error);
          setIsLoading(false);
          setProgress(0);
        },
        complete: () => {
          if (timeout.current) clearTimeout(timeout.current);
          setOpened(false);
          setIsLoading(false);
          setProgress(0);
          setTrackingSource("repair device button");
          history.push({
            pathname: "manager",
          });
          if (onRepair) {
            onRepair(false);
          }
        },
      });
    },
    [history, isLoading, onRepair],
  );
  return (
    <>
      {Component ? (
        <Component onClick={open} />
      ) : (
        <Button {...buttonProps} ref={ref} onClick={open} event="RepairDeviceButton">
          {t("settings.repairDevice.button")}
        </Button>
      )}
      <RepairModal
        cancellable
        analyticsName="RepairDevice"
        isOpened={opened}
        onReject={close}
        repair={repair}
        isLoading={isLoading}
        title={t("settings.repairDevice.title")}
        desc={!disableDescription ? t("settings.repairDevice.desc") : undefined}
        progress={progress}
        error={error}
        enableSomethingElseChoice
      />
    </>
  );
});
export default RepairDeviceButton;
