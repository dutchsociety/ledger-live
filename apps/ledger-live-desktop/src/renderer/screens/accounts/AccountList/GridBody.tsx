import React from "react";
import styled from "styled-components";
import { Account, PortfolioRange, AccountLike } from "@ledgerhq/types-live";
import Box from "~/renderer/components/Box";
import AccountCard from "../AccountGridItem";
import AccountCardPlaceholder from "../AccountGridItem/Placeholder";
type Props = {
  visibleAccounts: AccountLike[];
  hiddenAccounts: AccountLike[];
  onAccountClick: (a: AccountLike) => void;
  lookupParentAccount: (id: string) => Account | undefined | null;
  range: PortfolioRange;
  showNewAccount: boolean;
  horizontal: boolean;
};
export default function GridBody({
  visibleAccounts,
  hiddenAccounts,
  range,
  showNewAccount,
  onAccountClick,
  lookupParentAccount,
  ...rest
}: Props) {
  return (
    <GridBox {...rest}>
      {[...visibleAccounts, ...(showNewAccount ? [null] : []), ...hiddenAccounts].map(
        (account, i) =>
          !account ? (
            <AccountCardPlaceholder key="placeholder" />
          ) : (
            <AccountCard
              hidden={i >= visibleAccounts.length}
              key={account.id}
              account={account}
              parentAccount={
                account.type !== "Account" ? lookupParentAccount(account.parentId) : null
              }
              range={range}
              onClick={onAccountClick}
            />
          ),
      )}
    </GridBox>
  );
}
const GridBox = styled(Box)`
  margin-top: 18px;
  display: grid;
  grid-gap: 18px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
`;
