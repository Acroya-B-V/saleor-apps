import { TransactionCancelationRequestedEventFragment } from "@/generated/graphql";

import { mockedSaleorChannelId } from "../constants";
import { mockedStripePaymentIntentId } from "../mocked-stripe-payment-intent-id";

export const getMockedTransactionCancelationRequestedEvent =
  (): TransactionCancelationRequestedEventFragment => ({
    transaction: {
      pspReference: mockedStripePaymentIntentId,
      checkout: {
        id: "mock-channel-1",
        channel: {
          id: mockedSaleorChannelId,
          slug: "channel-slug",
        },
      },
    },
  });
