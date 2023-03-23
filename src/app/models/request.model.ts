import { Time } from "@angular/common"

export type RoomRequest = {
    id: number,
    date: Date,
    beginTime: Time,
    endTime: Time,
    neededCapacity: number,
    currentStatus: string,
    madeBy: string,
    roomNumber: number,
    materials: []
}