import { getData } from "@/lib/utils";

import MapFilter from "@/components/filters/MapFilter";

export default async function Map() {
  const data = await getData(
    "https://api-fte.vizstats.com/data/food_imports_map.json"
  );

  return (
    <div className="m-auto max-w-screen-xl overflow-hidden">
      {data?.length && <MapFilter dataset={data} />}
    </div>
  );
}
