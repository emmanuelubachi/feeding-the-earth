"use client";
import React from "react";

import * as echarts from "echarts/core";
import ReactECharts from "echarts-for-react";

type barchartProps = {
  data: { year: string; quantity: number }[];
};

export default function Simple({ data }: barchartProps) {
  echarts.registerTheme("barcolor", {
    color: ["#919e8b"], // "#cfaa23"  #6189a8
  });
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#283b56",
          formatter: "{value} Quantity(Tonnes)",
        },
      },
    },
    xAxis: {
      type: "category",
      data: data.map((item) => item.year.toString()),
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        name: "Import",
        data: data.map((item) => item.quantity),
        type: "bar",
        areaStyle: {
          opacity: 0.6,
        },
      },
    ],
  };
  return (
    <>
      <ReactECharts
        option={option}
        className="min-h-[30vh] sm:h-full"
        theme={"barcolor"}
        opts={{ renderer: "svg" }}
      />
    </>
  );
}
