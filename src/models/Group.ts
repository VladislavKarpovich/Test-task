import { Product } from "./Product";

export interface Group {
  id: number;
  name: string;
  products: Product[];
}
