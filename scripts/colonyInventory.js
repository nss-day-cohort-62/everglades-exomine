/* (4)colonyInventory.js - define and export a colonyInventory function that loops through colonyInventory. 
If facilityMinerals.colonyId ===  selected governor.colonyId, loop through minerals 
if facilityMinerals.mineralId === mineral.Id, then display “${mineral.quantity} tons of ${mineral.type}” in an <ul> */

import { getColonies, getGovernors, getFacilities, getFacilityMinerals, getMinerals, setColony, setGovernors, setFacility, getColonyInventories, TransientState } from "./database.js";

const colonies = getColonies()
const governors = getGovernors()
const facilities = getFacilities()
const facilityMinerals = getFacilityMinerals()
const minerals = getMinerals()
const colonyInventories = getColonyInventories()



export const ColonyInventory = () => {
    let html = ""
    for (const governor of governors) {
        if (governor.id === TransientState().selectedGovernors) {
            for (const colonyInventory of colonyInventories) {
                if (colonyInventory.colonyId === governor.colonyId) {
                    for (const facility of facilities) {
                        if (facility.id === colonyInventory.facilityId) {
                            for (const mineral of minerals) {
                                if (mineral.id === colonyInventory.mineralId) {
                                    html += `${colonyInventory.quantity} tons of ${mineral.type} from ${facility.name}`
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return html
}