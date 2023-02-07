/* (4) facilityMinerals.js - defines and exports a facilityMinerals function that 
loops through facilityMinerals array from database.
If facilityId === the selected facilityId, loop through minerals array from 
database. If mineral.Id === facilityMineral.mineralId, then display mineral.type 
in html as radio button.  */

import { getFacilityMinerals, getMinerals, TransientState } from "./database.js";

const facilityMinerals = getFacilityMinerals()
const minerals = getMinerals()

export const FacilityMinerals = () => {
    for (const )
}

