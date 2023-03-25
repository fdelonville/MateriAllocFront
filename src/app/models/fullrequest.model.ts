import { Time } from "@angular/common";
import { Material } from "./material.model";
import { Person } from "./person.model";
import { Room } from "./room.model";
import { Status } from "./status.model";

export type FullRequest = {
    id: number;
    beginAt: Time;
    endAt: Time;
    neededCapacity: number;
    justification: string;
    additionalNotes: string;
    statusHistory: Status[];
    currentStatus: string;
    madeBy: Person;
    neededMaterials: Material[];
    room: Room;
}