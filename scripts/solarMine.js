import {  purchaseMineral } from "./database.js"
import { Governors } from "./governors.js";
import { Facilities } from "./facilities.js";
import { FacilityMinerals, SpaceCart } from "./facilityMinerals.js";
import { ColonyInventory } from "./colonyInventory.js";

document.addEventListener(
    "click",
    (event) => {
        const itemClicked = event.target
        if (itemClicked.id === "orderButton") {
            purchaseMineral();
        }
    }
)

export const solarMine = () => {
    return `
        <h1>Solar System Mining Marketplace</h1>

        <section class="resources"> 
            <article class="govs">    
            ${Governors()}
            </article>
            <article id="resourceList">
                ${ColonyInventory()}
            </article>
	    </section>
	
	    <section class="facilities">
            ${Facilities()}
	    </section>

	
	    <section class="mineralList">
            <article class="facilityMinerals">
            ${FacilityMinerals()}
            </article>

            <article class="spaceCart">
            <h2>Space Cart</h2>
            ${SpaceCart()}
                <button id="orderButton">Purchase Mineral</button>
            </article>
        </section>
        `
}