import { getFacilities, setFacility } from "./database.js";

const facilities = getFacilities()

export const Facilities = () => {

    let html = `<h3 class="facilityChoice">Choose a facility</h3>
    
        <select id=”facility”> 
            <option value="0">Select a Facility</option>`
        for (const facility of facilities) {
        html += `<option value=${facility.id}> ${facility.name} </option> `
        
    }
    html += "</select>"
    return html
}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "facility") {
            setFacility(parseInt(event.target.value))
        }
    }
)