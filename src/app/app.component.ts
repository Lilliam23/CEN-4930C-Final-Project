import { Component } from '@angular/core';
import { Flight } from './flight';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  

  constructor(){
    this.getFlights();

    }

    allArrivals: Flight[] = [];
    allDepartures: Flight [] = [];
    filteredArrivals: Flight []=[];
    filteredDepartures: Flight [] = [];

    arrivalText: string = "arrival";
    departureText: string = "departure";

    showArrivals: boolean = true;


    getFlights(): void {

      // fetch flight data from JSON file
      fetch("assets/data/flight.json").then((response) => {
       response.json().then((json) => {
          // for each flight in the JSON data, create a new Flight instance
          json.forEach((flight: any) => {
            let newFlight = new Flight(flight.airline, flight.flightNumber, flight.origin, flight.departure, flight.destination, flight.arrival);
              newFlight.gate = flight.gate;
              newFlight.status = flight.status;

              // check if the destination includes "MCO" and add to corresponding array
            if (newFlight.origin.includes("MCO")) {
              this.allArrivals.push(newFlight);
            } else {
              this.allDepartures.push(newFlight);
            }
          });

          // set the filtered arrays to the all arrays
          this.filteredArrivals = [...this.allArrivals];
          this.filteredDepartures = [...this.allDepartures];
        });

      });

    }

      filterFlights(keyword: string): void {
             keyword = keyword.toLowerCase();
             let matchingArrivals: Flight[] = [];
             for(let i=0; i < this.allArrivals.length; i++) {
                 let flight = this.allArrivals[i];
                 let flightInfo = (flight.airline + flight.flightNumber + flight.departure + flight.status + flight.arrival + flight.destination).toLowerCase();
                 if (flightInfo.indexOf(keyword) >= 0) {
                     matchingArrivals.push(flight);
                 }
             }
             this.filteredArrivals = [...matchingArrivals];
             let matchingDepartures: Flight[] = [];
             for(let i=0; i < this.allDepartures.length; i++) {
                 let flight = this.allDepartures[i];
                 let flightInfo = (flight.airline + flight.flightNumber + flight.departure + flight.status).toLowerCase();
                 if (flightInfo.indexOf(keyword) >= 0) {
                     matchingDepartures.push(flight);
                 }
             }
             this.filteredDepartures = [...matchingDepartures];
         }

         resetFlights(): void {
             this.filteredArrivals = [...this.allArrivals];
             this.filteredDepartures = [...this.allDepartures];
         }

    }
