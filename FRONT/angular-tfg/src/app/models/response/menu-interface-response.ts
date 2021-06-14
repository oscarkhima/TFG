import { DishInterface } from "../dish-interface";

export interface MenuInterfaceResponse{
    nombre: string;
    primeros: DishInterface[];
    segundos: DishInterface[];
    postres: DishInterface[];
    precio: number
    activated: boolean;
}