/* (4) facilityMinerals.js - defines and exports a facilityMinerals function that 
loops through facilityMinerals array from database.
If facilityId === the selected facilityId, loop through minerals array from 
database. If mineral.Id === facilityMineral.mineralId, then display mineral.type 
in html as radio button.  */

import { getFacilityMinerals, getMinerals, TransientState, getFacilities, setMineral } from "./database.js";

const minerals = getMinerals()
const facilities = getFacilities()

export const FacilityMinerals = () => {
    const facilityMinerals = getFacilityMinerals()
    let html = `<h2>Facility Minerals`
    for (const facility of facilities) {
        if (facility.id === TransientState().selectedFacility) {
            html += ` for ${facility.name}</h2>`

        }
 
    }
    for (const facilityMineral of facilityMinerals) {
        if (facilityMineral.facilityId === TransientState().selectedFacility) {
            
            for (const mineral of minerals) {
                if (mineral.id === facilityMineral.mineralId) {
                    html += `<li>
                    <input type="radio" name="mineral" value="${mineral.id}" /> ${facilityMineral.quantity} tons of ${mineral.type}
                    </li>
                    `

            }       
            }
            
        }
    }    
    return html
}

export const SpaceCart = () => {
    let html = ""
    for (const mineral of minerals) {
        if (mineral.id === TransientState().selectedMineral) {
            for (const facility of facilities) {
                if (facility.id === TransientState().selectedFacility) {
                    html += `1 ton of ${mineral.type} from ${facility.name}`
                }
            }

        }
    }
    return html
}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "mineral") {
            setMineral(parseInt(event.target.value))
        }
    }
)

 