/* (4)colonyInventory.js - define and export a colonyInventory function that loops through colonyInventory. 
If facilityMinerals.colonyId ===  selected governor.colonyId, loop through minerals 
if facilityMinerals.mineralId === mineral.Id, then display “${mineral.quantity} tons of ${mineral.type}” in an <ul> */

import { getColonies, getGovernors, getFacilities, getFacilityMinerals, getMinerals, setColony, setGovernors, setFacility, getColonyInventories, TransientState, governorTransientState } from "./database.js";

const governors = getGovernors()
const colonies = getColonies()
const facilities = getFacilities()
const minerals = getMinerals()



export const ColonyInventory = () => {
    const colonyInventories = getColonyInventories()
    let html = ""
        for (const governor of governors) {
            if (governor.id === governorTransientState().selectedGovernors){
                for (const colony of colonies){
                    if (governor.colonyId === colony.id) 
                    html += `<h2> ${colony.name} </h2>`
                }
            }
        }
    for (const governor of governors) {
        if (governor.id === governorTransientState().selectedGovernors) {
            setColony(governor.colonyId)
            for (const colonyInventory of colonyInventories) {
                if (colonyInventory.selectedColony === governor.colonyId) {
                    for (const facility of facilities) {
                        if (facility.id === colonyInventory.selectedFacility) {
                            for (const mineral of minerals) {
                                if (mineral.id === colonyInventory.selectedMineral) {
                                    html += `${colonyInventory.quantity} tons of ${mineral.type}`
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