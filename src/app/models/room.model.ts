import { Material } from "./material.model"

export type Room = {
    id: number,
    number: number,
    capacity: number,
    studentAccess: boolean,
    materials: Material[]
} 