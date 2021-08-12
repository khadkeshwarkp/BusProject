import { Time } from "@angular/common";

export class Schedule {
    scheduleId?:number;
        busId?:number;
        driverId?:number;
        fromDate?:Date;
        toDate?: Date;
        estimatedArrivalTime?:Time            
}
