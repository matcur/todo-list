import { Nullable } from "./Nullable";

export type NullableExcept<T, K extends keyof T> = Nullable<T> & {
  [P in K]: T[P]
}