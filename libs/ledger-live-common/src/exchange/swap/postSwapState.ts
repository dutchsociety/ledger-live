import network from "@ledgerhq/live-network/network";
import { getSwapAPIBaseURL } from "./";
import { mockPostSwapAccepted, mockPostSwapCancelled } from "./mock";
import type { PostSwapAccepted, PostSwapCancelled } from "./types";
import { isIntegrationTestEnv } from "./utils/isIntegrationTestEnv";

export const postSwapAccepted: PostSwapAccepted = async ({
  provider,
  swapId = "",
  transactionId,
}) => {
  if (isIntegrationTestEnv()) return mockPostSwapAccepted({ provider, swapId, transactionId });

  /**
   * Since swapId is requiered by the endpoit, don't call it if we don't have
   * this info
   */
  if (!swapId) {
    return null;
  }

  try {
    await network({
      method: "POST",
      url: `${getSwapAPIBaseURL()}/swap/accepted`,
      data: { provider, swapId, transactionId },
    });
  } catch (error) {
    console.error(error);
  }

  return null;
};

export const postSwapCancelled: PostSwapCancelled = async ({ provider, swapId = "" }) => {
  if (isIntegrationTestEnv()) return mockPostSwapCancelled({ provider, swapId });

  /**
   * Since swapId is requiered by the endpoit, don't call it if we don't have
   * this info
   */
  if (!swapId) {
    return null;
  }

  try {
    await network({
      method: "POST",
      url: `${getSwapAPIBaseURL()}/swap/cancelled`,
      data: { provider, swapId },
    });
  } catch (error) {
    console.error(error);
  }

  return null;
};
