import React from "react";
import { useTranslation } from "react-i18next";
import styled, { DefaultTheme, withTheme } from "styled-components";
import { Currency } from "@ledgerhq/types-cryptoassets";
import { rgba } from "~/renderer/styles/helpers";
import Tooltip from "~/renderer/components/Tooltip";
import Text from "~/renderer/components/Text";
import CryptoCurrencyIcon from "~/renderer/components/CryptoCurrencyIcon";

type ParentCryptoCurrencyIconWrapperProps = {
  doubleIcon?: boolean;
  bigger?: boolean;
  flat?: boolean;
};

const ParentCryptoCurrencyIconWrapper: React.ComponentType<ParentCryptoCurrencyIconWrapperProps> = styled.div`
  ${(p: ParentCryptoCurrencyIconWrapperProps) =>
    p.doubleIcon && !p.flat
      ? `
        padding-right: 10px;
        > :nth-child(2) {
            position: absolute;
            bottom: -8px;
            left: 8px;
            border: 2px solid transparent;
        }
      `
      : `
    display: flex;
    align-items: center;
  `}
  position: relative;
  line-height: ${p => (p.bigger ? "18px" : "18px")};
  font-size: 12px;
  max-height: 25px;
`;
const TooltipWrapper = styled.div`
  display: flex;
  max-width: 150px;
  flex-direction: column;
`;
const CryptoCurrencyIconTooltip = withTheme(
  ({ name, theme }: { theme: DefaultTheme; name: string }) => {
    const { t } = useTranslation();
    return (
      <TooltipWrapper>
        <Text color={rgba(theme.colors.palette.background.paper, 0.5)}>
          {t("tokensList.tooltip")}
        </Text>
        <Text>{name}</Text>
      </TooltipWrapper>
    );
  },
);
type Props = {
  currency: Currency;
  withTooltip?: boolean;
  bigger?: boolean;
  inactive?: boolean;
  flat?: boolean;
};
const ParentCryptoCurrencyIcon = ({
  currency,
  withTooltip,
  bigger,
  inactive,
  flat = false,
}: Props) => {
  const parent = currency.type === "TokenCurrency" ? currency.parentCurrency : null;
  const content = (
    <ParentCryptoCurrencyIconWrapper doubleIcon={!!parent} bigger={bigger} flat={flat}>
      {parent && (
        <CryptoCurrencyIcon inactive={inactive} currency={parent} size={bigger ? 20 : 16} />
      )}
      <CryptoCurrencyIcon inactive={inactive} currency={currency} size={bigger ? 20 : 16} />
    </ParentCryptoCurrencyIconWrapper>
  );
  if (withTooltip && parent) {
    return <Tooltip content={<CryptoCurrencyIconTooltip name={parent.name} />}>{content}</Tooltip>;
  }
  return content;
};
export default ParentCryptoCurrencyIcon;
