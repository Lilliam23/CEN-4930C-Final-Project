
export class Flight {
    airline: string;
    flightNumber: string;
    origin: string;
    departure: string;
    destination: string;
    arrival: string;
    gate: string;
    status: string;

    constructor(airline: string, flightNumber: string, origin: string, departure: string,
                destination: string, arrival: string ){
        this.airline = airline;
        this.flightNumber = flightNumber;
        this.origin = origin;
        this.departure = origin;
        this.destination = destination;
        this.arrival = destination;
        this.gate = "";
        this.status = "";

    }

    isCancelled(): boolean {
        return this.status.toLowerCase() === "cancelled";
    }

    isDelayed(): boolean {
        return this.status.toLowerCase() === "delayed";
    }

    isScheduled(): boolean {
        return this.status.toLowerCase() === "scheduled";
    }
    isLanded(): boolean {
        return this.status.toLowerCase() === "landed";
    }
    isActive(): boolean {
        return this.status.toLowerCase() === "active";
    }

    getImage(): string {
        let basePath = "/assets/images/";
        if (this.airline === "American Airlines") {
            return basePath + "aa-logo.png";
        } else if (this.airline === "Delta") {
            return basePath + "delta-logo.png";

        } else if (this.airline === "United Airlines") {
            return basePath + "united-logo.png";
        }
        else if (this.airline === "Spirit Airlines") {
            return basePath + "spirit-airlines.png";
        }
        else if (this.airline === "JetBlue Airways") {
            return basePath + "JetBlue_Airways_Logo.png";
        }
        else if (this.airline === "Southwest Airlines") {
            return basePath + "Southwest-Airlines-Logo.png";
        }
        else if (this.airline === "Frontier Airlines") {
            return basePath + "Frontier-Airlines-Logo.png";
        }
        return "";
    }

}
