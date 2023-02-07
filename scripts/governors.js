import { getGovernors, setGovernors } from "./database.js";

const governors = getGovernors()

export const Governors = () => {

    let html = `<h3 class="Govna">Choose a governor</h3>
    
        <select id=”governor”> 
            <option value="0">Select a Governor</option>`
        for (const governor of governors) {
        html += `<option value=${governor.id}> ${governor.name} </option> `
        
    }
    html += "</select>"
    return html
}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "governor") {
            setGovernors(parseInt(event.target.value))
        }
    }
)