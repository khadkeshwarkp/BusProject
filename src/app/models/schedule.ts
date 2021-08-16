import { Time } from "@angular/common";

export class Schedule {
    schedule_id?:number;
    bus_id?:number;
    driver_id?:number;
    fromDate?:Date;
    toDate?:Date;
    estimated_arrival_time?:Time;
    fare_amount?:number;
    time?:Time;
}
