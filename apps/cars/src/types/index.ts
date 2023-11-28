export interface Car {
  name: string;
  cost: number;
  id?: string;
}

export interface CarsState {
  data: Car[];
  searchTerm: string;
}

export interface FormState {
  name: string;
  cost: number;
}
export interface RootState {
  cars: CarsState;
  form: FormState;
}
