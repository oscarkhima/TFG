import { DishInterface } from "../dish-interface";

export interface CardInterfaceResponse{
    nombre: string;
    platos: DishInterface[];
    menu: boolean;
    precio: number;
}