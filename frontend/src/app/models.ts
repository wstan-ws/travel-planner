export interface TravelDetail {
    destination: string
    travelStartDate: Date
    travelEndDate: Date
    travelEntity: string
    bookedFlightTickets: boolean
    arrivalAirport: string | null
    arrivalTime: Date | null
    departureAirport: string | null
    departureTime: Date | null
    tripPreference: string[]
    tripMinBudget: number
    tripMaxBudget: number
    modeOfTransport: string[]
}