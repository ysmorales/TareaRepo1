export interface User {
  image: string;
  name: string;
  note: string | null;
}

export interface RowLog {
  id: number;
  user?: User;
  date?: string | Date;
  status?: string;
  info?: string;
  extraInfo?: { label: string; value: string }[] | null;
}
