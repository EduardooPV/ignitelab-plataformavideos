import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4os5nze0uuk01xx6mut0p4z/master",
  cache: new InMemoryCache()
});