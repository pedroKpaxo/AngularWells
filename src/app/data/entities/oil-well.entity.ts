import { Well } from './well.entity';

export interface OilWell extends Well {
    operator_name: string;
    state: string;
    city: string;
    lat: number;
    long: number;
    total_depth: number;
    substance: string;
    water: boolean;
    basin: string;

}
