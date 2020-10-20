import { GoogleMapAPIKey } from "../lib/env";
import axios from "axios";

// declare var google: any;

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;
const script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=${GoogleMapAPIKey}`;
document.head.append(script);

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

function searchAddresHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GoogleMapAPIKey}`
    )
    .then((response) => {
      if (response.data.status !== "OK") {
        throw new Error("Could not fetch location");
      }
    
      const coords = response.data.results[0].geometry.location;
      const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          center: { lat: coords.lat, lng: coords.lng },
          zoom: 16,
        }
      );

      new google.maps.Marker({position: coords, map: map});
    })
    .catch((err) => {
      alert(err.message);
      console.log(err);
    });
}

form.addEventListener("submit", searchAddresHandler);
