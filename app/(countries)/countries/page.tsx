import { years } from "@/constants";

import { getData } from "@/lib/utils";

import YearFilter from "@/components/filters/YearFilter";

export default async function Countries() {
  const data = await getData(
    "https://api-fte.vizstats.com/data/imports_by_commodity.json"
  );

  return (
    <div className="m-auto max-w-screen-xl overflow-hidden">
      {data?.length && (
        <YearFilter dataset={data} filter={years} defaultChart="Treemap" />
      )}
    </div>
  );
}
