import { EmptyConfigs, Layout } from "@saleor/apps-ui";
import { Skeleton, Text } from "@saleor/macaw-ui";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { trpcClient } from "@/modules/trpc/trpc-client";
import { StripeConfigsList } from "@/modules/ui/stripe-configs/stripe-configs-list";

export const ChannelConfigSection = () => {
  const { data, error, refetch } = trpcClient.appConfig.getStripeConfigsList.useQuery();
  const router = useRouter();

  useEffect(() => {
    void refetch();
  }, []);

  if (error) {
    return <Text color="critical1">Error fetching config: {error.message}</Text>;
  }

  if (data && data.length === 0) {
    return <EmptyConfigs onConfigurationAdd={() => router.push("/config/new")} />;
  }

  if (data && data.length > 0) {
    return <StripeConfigsList configs={data} />;
  }

  return (
    <Layout.AppSectionCard footer={<Skeleton />}>
      <Skeleton />
    </Layout.AppSectionCard>
  );
};
