import { SyncOneAccountOnMount } from "@ledgerhq/live-common/bridge/react/index";
import React from "react";
import { Trans } from "react-i18next";
import TrackPage from "~/renderer/analytics/TrackPage";
import Box from "~/renderer/components/Box";
import BroadcastErrorDisclaimer from "~/renderer/components/BroadcastErrorDisclaimer";
import Button from "~/renderer/components/Button";
import ErrorDisplay from "~/renderer/components/ErrorDisplay";
import RetryButton from "~/renderer/components/RetryButton";
import SuccessDisplay from "~/renderer/components/SuccessDisplay";
import { StepProps } from "../types";
import * as S from "./StepConfirmation.styles";
export const StepConfirmationFooter = ({ account, onRetry, error, onClose }: StepProps) => {
  return (
    <Box horizontal alignItems="right">
      {/**
       * We're rendering the <SyncOneAccountOnMount /> component
       * here to ensure that it will always be rendered after a transaction
       * is broadcasted so that account balances are correct/up-to-date
       * before a future operation/transaction can be created.
       */}
      <SyncOneAccountOnMount priority={10} accountId={account.id} />
      {error ? (
        <RetryButton primary ml={2} onClick={onRetry} />
      ) : (
        <Button ml={2} primary onClick={onClose}>
          <Trans i18nKey={`common.done`} />
        </Button>
      )}
    </Box>
  );
};
const StepConfirmation = ({ optimisticOperation, error, signed, mode }: StepProps) => {
  if (optimisticOperation) {
    return (
      <S.Container>
        <TrackPage
          category="Celo SimpleOperation"
          name="Step Confirmed"
          flow="stake"
          action={mode}
          currency="celo"
        />
        <SuccessDisplay
          title={
            <Trans
              i18nKey={`celo.simpleOperation.steps.confirmation.modes.${mode}.success.title`}
            />
          }
          description={
            <div>
              <Trans i18nKey={`celo.simpleOperation.steps.confirmation.modes.${mode}.success.text`}>
                <b></b>
              </Trans>
            </div>
          }
        />
      </S.Container>
    );
  }
  if (error) {
    return (
      <S.Container shouldSpace={signed}>
        <TrackPage
          category="Celo SimpleOperation"
          name="Step Confirmation Error"
          flow="stake"
          action={mode}
          currency="celo"
        />
        {signed ? (
          <BroadcastErrorDisclaimer
            title={<Trans i18nKey="celo.simpleOperation.steps.confirmation.broadcastError" />}
          />
        ) : null}
        <ErrorDisplay error={error} withExportLogs />
      </S.Container>
    );
  }
  return null;
};
export default StepConfirmation;
