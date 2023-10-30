export type navbar = {
  id: number;
  name: string;
  link: string;
}[];

// Charts props -----
export type ChartParamProps = {
  name: string;
  value: number;
};

export type DataProps = {
  name: string;
  value: number;
  ISO_3?: string;
}[];

export type DatasetProps = {
  Importer: string;
  ImporterISO: string;
  Year: number;
  Data: DataProps;
}[];

// Filter props ----
export type YearProps = {
  label: string;
  value: number;
}[];

export type YearFilterProps = {
  dataset?: DatasetProps;
  filter: YearProps;
  defaultChart: "Treemap" | "Bar" | "Line" | "Map";
};

export type ComboboxProp = {
  options: {
    value: number | string;
    label: number | string;
  }[];
  defaultLabel: string;
  handleSelectValue: any;
  setOpen: any;
  value: any;
  open: boolean;
};
