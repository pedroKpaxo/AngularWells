import { HasId } from '../base/has-id';

export interface Drill extends HasId {
  operator_name: string;
  state: string;
  city: string;
  lat: number;
  long: number;
  total_depth:number;
}
