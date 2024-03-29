import { GraphQLClient } from "graphql-request";

declare const process: {
  env: { NEXT_PUBLIC_GQL_PATH: string };
};

const endpoint: string = "https://countries.trevorblades.com/";

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: <HeadersInit | undefined>{
    Authorization: Boolean(
      typeof window !== "undefined" && localStorage.getItem("JWT"),
    )
      ? `Bearer ${typeof window !== "undefined" && localStorage.getItem("JWT")}`
      : undefined,
    "Content-Type": "application/json",
  },
});
