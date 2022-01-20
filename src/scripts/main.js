console.log("Welcome to the main module")
import { createPlan } from './plan.js'
const yearlyPlan = createPlan()
console.log(yearlyPlan)


import { createAsparagus } from "./seeds/asparagus.js"
const asparagusSeed = createAsparagus()
console.log(asparagusSeed)


import { createPotato } from "./seeds/potato.js"
const potatoSeed = createPotato()
console.log(potatoSeed)


import { createSoybean } from "./seeds/soybean.js"
const soybeanSeed = createSoybean()
console.log(soybeanSeed)


import { createSunflower } from "./seeds/sunflower.js"
const sunflowerSeed = createSunflower()
console.log(sunflowerSeed)


import { createWheat } from "./seeds/wheat.js"
const wheatSeed = createWheat()
console.log(wheatSeed)


import { createCorn } from "./seeds/corn.js"
const cornSeed = createCorn()
console.log(cornSeed)


import { addPlant } from "./field.js"
const addedPlants = addPlant(cornSeed)
console.log(addedPlants)


import { usePlants } from "./field.js"
const usedPlants = usePlants()
console.log(usedPlants)


import { plantSeeds } from './tractor.js'
const plantedSeeds = plantSeeds(plantsArray)
console.log(plantedSeeds)