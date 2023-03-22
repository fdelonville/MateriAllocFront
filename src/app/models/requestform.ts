import { Time } from "@angular/common"

export type RequestForm = {
    userLogin: string,
    justification: string,
    neededCapacity: number,
    date: Date,
    beginAt: Time,
    endAt: Time,
    materialIDs: number[],
    additionalNotes: string
}