import { Time } from "@angular/common";

export class Schedule {
    schedule_id?:number;
    bus_id?:number;
    driver_id?:number;
    from_date?:Date;
    to_date?:Date;
    estimated_arrival_time?:Time;
    fare_amount?:number;
    time?:Time;
}
