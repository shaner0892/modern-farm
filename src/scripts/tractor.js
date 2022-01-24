import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { usePlants } from "./field.js"


//declaring a function that iterates through two arrays (one is nested), takes the planting plan as its one parameter
//it checks the plant type & uses the addPlant function to add it to the plantsArray
export const plantSeeds = (plantingPlan) => {
    for (const row of plantingPlan) {
        for (const plant of row) {
            if (plant === "Asparagus") {
                const asparagusSeed = createAsparagus()
                addPlant(asparagusSeed)
            } 
            else if (plant === "Corn") {
                const cornSeed = createCorn()
                addPlant(cornSeed[0])
                addPlant(cornSeed[1])
            } 
            else if (plant === "Potato") {
                const potatoSeed = createPotato()
                addPlant(potatoSeed)
            } 
            else if (plant === "Soybean") {
                const soybeanSeed = createSoybean()
                addPlant(soybeanSeed)
            } 
            else if (plant === "Sunflower") {
                const sunflowerSeed = createSunflower()
                addPlant(sunflowerSeed)
            } 
            else if (plant === "Wheat") {
                const wheatSeed = createWheat()
                addPlant(wheatSeed)
            }
        }
    }
    return usePlants()
}