import { graphQLClient } from "@/utils/graphQLInstance";
import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";

const getCountriesQuery = gql`
  query {
    countries {
      code
      name
      phone
      capital
    }
  }
`;

const getCountries = async () => {
  const res: any = await graphQLClient.request(getCountriesQuery);
  return res?.countries.slice(0, 20);
};

export const useGetCountries = () => {
  return useQuery({
    queryFn: () => getCountries(),
    queryKey: ["Countries"],
  });
};
