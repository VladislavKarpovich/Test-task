import { Group } from "./Group";

export interface ProductsState {
  isLoading: boolean;
  isLoaded: boolean;
  groups: Group[];
}