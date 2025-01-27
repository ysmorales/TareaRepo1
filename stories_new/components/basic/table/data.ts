import type { ITableColumnData } from "../../../../components/DesignSystem/components/basic/table/interface";

export const exampleColumns: ITableColumnData[] = [
  {
    key: "dessert",
    title: "Dessert",
    filter: { filterType: "text" }, // Esta columna tiene un filtro
  },
  {
    key: "run",
    title: "RUN",
    filter: { filterType: "run" }, // Esta columna tiene un filtro
  },
  {
    key: "fat",
    filter: {
      filterType: "select",
      config: {
        options: [
          { value: "Low", text: "low" },
          { value: "Medium", text: "medium" },
          {
            value: "High",
            text: "high",
          },
        ],
      },
    },
    title: "Fat",
  },
  {
    key: "carbs",
    title: "Carbs",
  },
  {
    key: "protein",
    title: "Protein",
  },
];
