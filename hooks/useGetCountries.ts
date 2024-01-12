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
  console.log(res);
  return res?.countries;
};

export const useGetCountries = () => {
  return useQuery({
    queryFn: () => getCountries(),
    queryKey: ["Countries"],
  });
};
