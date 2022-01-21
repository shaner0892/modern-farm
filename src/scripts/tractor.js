import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"


//declaring a function that iterates through two arrays (one is nested)
//it checks the plant type & uses the addPlant function to add it to the plantsArray
export const plantSeeds = (plantingPlan) => {
    for (const row of plantingPlan) {
        for (const plant of row) {
            if (plant === "asparagus") {
                const asparagusSeed = createAsparagus()
                addPlant(asparagusSeed)
            } 
            else if (plant === "corn") {
                const cornSeed = createCorn()
                addPlant(cornSeed[0])
                addPlant(cornSeed[1])
            } 
            else if (plant === "potato") {
                const potatoSeed = createPotato()
                addPlant(potatoSeed)
            } 
            else if (plant === "soybean") {
                const soybeanSeed = createSoybean()
                addPlant(soybeanSeed)
            } 
            else if (plant === "sunflower") {
                const sunflowerSeed = createSunflower()
                addPlant(sunflowerSeed)
            } 
            else if (plant === "wheat") {
                const wheatSeed = createWheat()
                addPlant(wheatSeed)
            }
        }
    }
    return plantingPlan
}