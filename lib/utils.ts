// import { mapDataProps } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// chart functions ---------------
export function formatNumberWithCommas(num: number) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatNumber(value: number) {
  // Check if the value is NaN
  if (isNaN(value)) {
    return "No Trade";
  }

  // Check if the value is a valid number
  if (typeof value === "number") {
    return value.toLocaleString() + " (Tonnes)";
  }

  // If it's neither NaN nor a number, return an error message
  return "Invalid input";
}

// export function findHighestAndLowest(data: mapDataProps) {

//   if (!data || data.length === 0) {
//     return {
//       highest = 0;
//       lowest = 0,};
//   }

//   let highest = data[0];
//   let lowest = data[0];

//   for (let i = 1; i < data.length; i++) {
//     if (data[i].value > highest.value) {
//       highest = data[i];
//     }
//     if (data[i].value < lowest.value) {
//       lowest = data[i];
//     }
//   }

//   return {
//     highest,
//     lowest,
//   };
// }

export async function getData(url: string) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  return res.json();
}

export async function getDataNoCache(url: string) {
  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data with no cache");
  }

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  return res.json();
}
