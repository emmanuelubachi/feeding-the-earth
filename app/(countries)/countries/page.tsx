"use client";
import YearFilter from "@/components/filters/YearFilter";
import { DatasetProps } from "@/types";
import React, { useEffect, useState } from "react";

const years = [
  { value: 2018, label: "2018" },
  { value: 2017, label: "2017" },
  { value: 2016, label: "2016" },
  { value: 2015, label: "2015" },
];

async function getData() {
  const res = await fetch(
    "https://api-fte.vizstats.com/data/imports_by_commodity.json"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  return res.json();
}

export default function Countries() {
  const [data, setData] = useState<DatasetProps | null>(null); // You can replace "any" with the appropriate data type

  useEffect(() => {
    const fetchData = async () => {
      const response = await getData();
      setData(response);
    };
    fetchData();
  }, []);

  return (
    <div className="m-auto max-w-screen-xl">
      {data?.length && <YearFilter dataset={data} filter={years} />}
    </div>
  );
}
