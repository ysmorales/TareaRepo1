export interface IGalleryData {
  id: number;
  alt: string;
  url: string;
  description: string;
}

export type IFixedSquare =
  | "xxSmall"
  | "xSmall"
  | "small"
  | "medium"
  | "large"
  | "xLarge"
  | "default";
