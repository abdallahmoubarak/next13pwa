"use client";
import Button from "@/components/atoms/Button";
import { useGetCountries } from "@/hooks/useGetCountries";

export default function Home() {
  const { data: countries, isFetching } = useGetCountries();
  return (
    <div className="px-4">
      <h1 className="text-blue-500 text-5xl">Home</h1>
      {isFetching ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-wrap py-4 gap-2 ">
          {countries?.map((country: any) => (
            <div
              className="border border-gray-300 p-4 flex-auto rounded-xl"
              key={country?.code}>
              <div className="text-lg text-blue-500">{country?.name}</div>
              <div className="text-gray-500">{country?.capital}</div>
            </div>
          ))}
        </div>
      )}
      <Button text={"click"} />
    </div>
  );
}
