export type YearProps = {
  label: string;
  value: number;
}[];

export type DataProps = {
  name: string;
  value: number;
}[];

export type DatasetProps = {
  Importer: string;
  ImporterISO: string;
  Year: number;
  Data: DataProps;
}[];

export type YearFilterProps = {
  dataset: DatasetProps;
  filter: YearProps;
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

export type navbar = {
  id: number;
  name: string;
  link: string;
}[];
