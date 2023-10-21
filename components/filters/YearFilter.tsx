"use client";

import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

import { chartSlide } from "../shared/sidebar/anim";

import Treemap from "@/components/charts/Treemap";
import { ComboboxDemo } from "@/components/ui/Combobox";
// import Loading from "../body/Loading";
import { YearFilterProps, DataProps } from "@/types";

const YearFilter = ({ dataset, filter }: YearFilterProps) => {
  const Year = filter;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(Year[0].value);
  const [selectedData, setSelectedData] = useState<DataProps>([]); // Initialize selectedData as an object

  useEffect(() => {
    // Use the data passed as props to filter and select the object with the chosen year.
    const selectedYear = value;
    const selectedObject = dataset.find((item) => item.Year === selectedYear);

    // setSelectedData(selectedObject.Data);

    if (selectedObject) {
      setSelectedData(selectedObject.Data);
    } else {
      setSelectedData([]); // Set an empty Data array if no object is found
    }
  }, [value, dataset]);

  const handleSelectValue = (currentValue: number) => {
    setValue(currentValue);
    setOpen(false);
  };

  return (
    <motion.div
      variants={chartSlide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className="m-auto max-w-screen-2xl pt-4">
        <div
          className="mx-auto items-center
              justify-center
              gap-4 
              md:grid md:grid-cols-1
              xl:gap-16"
        >
          <div>
            <div className="flex justify-end gap-2">
              <ComboboxDemo
                options={Year}
                defaultLabel={Year[0].label}
                handleSelectValue={handleSelectValue}
                setOpen={setOpen}
                value={value}
                open={open}
              />
            </div>
            {/* Display the selectedData in Treemap */}
            {selectedData.length === 0 ? (
              "" // <Loading />
            ) : (
              <Treemap treeData={selectedData} />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default YearFilter;
