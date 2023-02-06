import {  purchaseMineral } from "./database.js"

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

        <section class=”resources”> 
            
            <article id=”resourceList”>

            </article>
	    </section>
	
	    <section class=”facilities”>
            
	    </section>

	
	    <section class=”mineralList”>

	    </section>

	    <aside class=”spaceCart”>
		    <p></p>
	        <article>
                <button id="orderButton">Purchase Mineral</button>
            </article>
	    </aside>
    `
}