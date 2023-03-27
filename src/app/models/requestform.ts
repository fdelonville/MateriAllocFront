import { Time } from "@angular/common"

export type RequestForm = {
    userLogin: string,
    justification: string,
    neededCapacity: number,
    date: string,
    beginAt: string,
    endAt: string,
    materialIds: number[],
    additionalNotes: string
}