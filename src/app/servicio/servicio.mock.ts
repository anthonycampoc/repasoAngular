export const servicioList :servicio[] = [
    {id: 1, name: 'desarrollo web', price: 250, description: 'dolorem dicta dolore itaque? Ullam consectetur non tenetur dolore porro vel inventore quos corporis corrupti.' },
    {id: 2, name: 'instalacion de camaras cctv', price:50, description: 'dolorem dicta dolore itaque? Ullam consectetur non tenetur dolore porro vel inventore quos corporis corrupti.'},
    {id: 3, name: 'mantenimiento preventico y correctivo de computadora', price: 30},
    {id: 4, name: 'capacitaciones', price:100, description: 'dolorem dicta dolore itaque? Ullam consectetur non tenetur dolore porro vel inventore quos corporis corrupti.'},
]


export interface servicio{
    id: number | string;
    name:string;
    price: number;
    description?: string;
}