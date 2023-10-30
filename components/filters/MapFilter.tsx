"use client";

import React, { useEffect, useState } from "react";
import Choropleth from "../charts/map/Choropleth";
import { DataProps, DatasetProps } from "@/types";
import { Spinner } from "@nextui-org/react";

export default function MapFilter({ dataset }: { dataset: DatasetProps }) {
  const [countries, setCountries] = useState<DataProps>([]);

  useEffect(() => {
    setCountries(dataset[2].Data);
  }, [dataset, countries]);

  return (
    <div>
      <div className="m-auto max-w-screen-xl overflow-hidden pt-4">
        <div className="mx-auto items-center justify-center">
          <div>
            {countries.length === 0 ? (
              <Spinner className="flex min-h-[70vh] items-center justify-center sm:h-full" />
            ) : (
              <Choropleth mapData={countries} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
