"use client";
import React from "react";

import * as echarts from "echarts/core";
import ReactEcharts from "echarts-for-react";

import VintageTheme from "@/public/vintage.project.json";
import { DataProps } from "@/types";
import { formatNumberWithCommas } from "@/lib/utils";

type treeDataProps = {
  treeData: DataProps;
};

type paramsProp = {
  name: string;
  value: number;
};

export default function Treemap({ treeData }: treeDataProps) {
  echarts.registerTheme("vintage", VintageTheme.theme);

  const option = {
    toolbox: {
      show: true,
      left: "left",
      top: "top",
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {},
      },
    },
    tooltip: {
      show: true,
    },
    series: [
      {
        type: "treemap",
        data: treeData,
        width: "100%",
        height: "90%",
        roam: false,
        label: {
          position: "center",
          formatter: function (params: paramsProp) {
            return (
              `{name|` +
              params.name +
              `}` +
              "\n" +
              formatNumberWithCommas(params.value) +
              " (Tonnes)"
            );
          },
          rich: {
            name: {
              fontSize: 16,
              lineHeight: 24,
              color: "#fff",
            },
          },
        },
      },
    ],
  };
  return (
    <ReactEcharts
      option={option}
      className="min-h-[70vh] sm:h-full"
      theme={"vintage"}
      opts={{ renderer: "svg" }}
    />
  );
}
