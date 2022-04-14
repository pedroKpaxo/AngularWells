import { Drill } from './drill.entity';

export interface Well extends Drill {
    operator_name: string;
    state: string;
    city: string;
    lat: number;
    long: number;
    total_depth: number;
    substance: string;
    water: boolean;

}
