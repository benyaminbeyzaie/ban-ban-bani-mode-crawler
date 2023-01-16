import React from "react";
import Card from "../components/card";
import errorImage from "/src/assets/error.svg";
import { useQuery } from "react-query";
import CardSkeleton from "../components/card_skeleton";

function Products() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("http://localhost:7500/products").then((res) => res.json())
  );

  if (error)
    return (
      <div className="w-full max-w-screen-lg flex flex-col items-center justify-start">
        <img className="max-w-lg h-[30rem]" src={errorImage} alt="" />
        <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-800">
          {error?.message ?? "Some error has been occured"}
        </p>
      </div>
    );

  if (isLoading)
    return (
      <div className="w-full max-w-screen-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4 px-5 sm:px-10 py-10">
          {new Array(5).fill(false).map((item) => (
            <CardSkeleton />
          ))}
        </div>
      </div>
    );

  return (
    <div className="w-full max-w-screen-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4 px-5 sm:px-10 py-10">
        {data.map((item) => (
          <Card
            image={item["images"]["large_default"][0]}
            description={item.product_price}
            link={"https://www.banimode.com/" + item["link"]}
            title={item["product_name"]}
          ></Card>
        ))}
      </div>
    </div>
  );
}

export default Products;
