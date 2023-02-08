const database = {
    governors: [{
        id: 1,
        name: "Mario Mario",
        colonyId: 1,
        status: true,

    },
    {
        id: 2,
        name: "Luigi Mario",
        colonyId: 2,
        status: true,

    }],
    facilities: [{
        id: 1,
        status: true,
        name: "Titan",

    },
    {
        id: 2,
        status: true,
        name: "Io",

    }],
    minerals: [{
        id: 1,
        type: "Iron",
    },
    {
        id: 2,
        type: "Copper",
    },
    {
        id: 3,
        type: "Tungsten",
    },
    {
        id: 4,
        type: "Graphite",
    }],
    colonies: [{
        id: 1,
        name: "Earth"
    },
    {
        id: 2,
        name: "Mars"
    }],
    facilityMinerals: [
    {
        id: 1,
        mineralId: 2,
        facilityId: 1,
        quantity: 3
    },
    {
        id: 2,
        mineralId: 1,
        facilityId: 1,
        quantity: 6
    },
    {
        id: 3,
        mineralId: 4,
        facilityId: 2,
        quantity: 9
    },
    {
        id: 4,
        mineralId: 3,
        facilityId: 2,
        quantity: 5    
    }],
    colonyInventory: [{
        id: 1,
        selectedColony: 1,
        selectedMineral: 3,
        selectedFacility: 1,
        quantity: 2

    }],
    transientState: {}, 
    governorTransientState: {},
}

export const getGovernors = () => {
    return database.governors.map(governor => ({...governor}))
}

export const getMinerals = () => {
    return database.minerals.map(mineral => ({...mineral}))
}

export const getColonies = () => {
    return database.colonies.map(colony => ({...colony}))
}

export const getFacilities = () => {
    return database.facilities.map(facility => ({...facility}))
}

export const getColonyInventories = () => {
    return database.colonyInventory.map(inventory => ({...inventory}))
}

export const getFacilityMinerals = () => {
    return database.facilityMinerals.map(facilityMineral => ({...facilityMineral}))
}

export const TransientState = () => {
    return database.transientState
}

export const governorTransientState = () => {
    return database.governorTransientState
}

export const setGovernors = (governorsId) => {
    database.governorTransientState.selectedGovernors = governorsId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const setColony = (colonyId) => {
    database.transientState.selectedColony = colonyId
}

export const setMineral = (mineralId) => {
    database.transientState.selectedMineral = mineralId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const purchaseMineral = () => {
    const newOrder = {...database.transientState}

    const colonyInventory = getColonyInventories()

    const lastIndex = database.colonyInventory.length - 1
    newOrder.id = database.colonyInventory[lastIndex].id + 1

    for (const colonyInv of colonyInventory){
        if (colonyInv.selectedMineral === newOrder.selectedMineral){
            colonyInv.quantity ++
        } 
        else {
            newOrder.quantity = 1
            database.colonyInventory.push(newOrder)
        }
    }
 

    database.transientState = {}
    
        document.dispatchEvent( new CustomEvent("stateChanged") )
    }

