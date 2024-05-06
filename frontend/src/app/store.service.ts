import { Injectable } from "@angular/core";
import { TravelDetail } from "./models";

@Injectable()
export class StoreService {

    currentTravelDetail: TravelDetail = {
        destination: '',
        travelStartDate: new Date(),
        travelEndDate: new Date(),
        travelEntity: '',
        bookedFlightTickets: false,
        arrivalAirport: null,
        arrivalTime: null,
        departureAirport: null,
        departureTime: null,
        tripPreference: [],
        tripMinBudget: 0,
        tripMaxBudget: 0,
        modeOfTransport: []
    }

    addDestination(destination: string): void {
        this.currentTravelDetail.destination = destination
    }

    addtravelDates(startDate: Date, endDate: Date): void {
        this.currentTravelDetail.travelStartDate = startDate
        this.currentTravelDetail.travelEndDate = endDate
    }

    getTravelDetail(): TravelDetail {
        return this.currentTravelDetail
    }
}