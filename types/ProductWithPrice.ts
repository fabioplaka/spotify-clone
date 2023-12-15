import { Price } from "./PriceTypes";
import { Product } from "./ProductTypes";

export interface ProductWithPrice extends Product {
  prices?: Price[];
}
