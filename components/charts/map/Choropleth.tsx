"use client";
import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts/core";
import { formatNumber, formatNumberWithCommas } from "@/lib/utils";
import { ChartParamProps, DataProps } from "@/types";
import { Spinner } from "@nextui-org/react";

export type MapDataProps = { mapData: DataProps };

export default function Choropleth(mapData: MapDataProps) {
  // const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api-fte.vizstats.com/data/countries.json", {
      cache: "no-cache",
    })
      .then((res) => res.json())
      .then((resData) => {
        echarts.registerMap("world", resData);
        // setData(resData);
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <Spinner className="flex min-h-[70vh] items-center justify-center sm:h-full" />
    );
  // if (!data) return <p>No profile data</p>;

  // const result = findHighestAndLowest(Data);

  const option = {
    title: {
      text: "Quantity of Food Imported (2018)",
      subtext: "Map of Trading Partners",
      left: "right",
    },
    tooltip: {
      trigger: "item",
      showDelay: 0,
      transitionDuration: 0.2,
      formatter: function (param: ChartParamProps) {
        return "<bold>" + param.name + ": </bold>" + formatNumber(param.value);
      },
    },
    visualMap: {
      left: "center",
      bottom: 20,
      orient: "horizontal",
      // min: result.lowest.value,
      // max: result.highest.value,
      inRange: {
        color: [
          "#c8d9c1",
          "#acc6a1",
          "#90b281",
          "#749f62",
          "#5d7f4e",
          "#46603a",
          "#2f4027",
        ],
      },
      // type: "piecewise",
      text: ["High", "Low"],
      calculable: true,
      formatter: function (value: number) {
        return formatNumberWithCommas(value);
      },
    },
    toolbox: {
      show: true,
      orient: "vertical",
      left: "left",
      top: "top",
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {},
      },
    },
    series: [
      {
        name: "value",
        type: "map",
        roam: true,
        map: "world",
        zoom: 1.3,
        scaleLimit: {
          min: 1,
        },
        itemStyle: {
          color: "rgb(255,255,255)",
          areaColor: "rgba(211,211,211,1)",
          borderColor: "#fff",
          borderWidth: 2,
        },
        emphasis: {
          label: {
            show: false,
          },
          itemStyle: {
            areaColor: "rgb(162, 167, 163)",
          },
        },
        data: mapData.mapData,
        select: { disabled: true },
      },
    ],
  };
  return (
    <>
      <ReactEcharts
        option={option}
        // onEvents={onEvents}
        style={{ height: "70vh", width: "100%" }}
      />
      {JSON.stringify(mapData)}
    </>
  );
}
