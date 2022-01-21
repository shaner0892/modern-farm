console.log("Welcome to the main module")
import { createPlan } from './plan.js'
const yearlyPlan = createPlan()
console.log(yearlyPlan)

// here you are importing functions from other modules, then invoking
import { createAsparagus } from "./seeds/asparagus.js"
const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)


import { createPotato } from "./seeds/potato.js"
const potatoSeed = createPotato()
// console.log(potatoSeed)


import { createSoybean } from "./seeds/soybean.js"
const soybeanSeed = createSoybean()
// console.log(soybeanSeed)


import { createSunflower } from "./seeds/sunflower.js"
const sunflowerSeed = createSunflower()
// console.log(sunflowerSeed)


import { createWheat } from "./seeds/wheat.js"
const wheatSeed = createWheat()
// console.log(wheatSeed)


import { createCorn } from "./seeds/corn.js"
const cornSeed = createCorn()
// console.log(cornSeed)


// import { plantsArray } from './field.js'


import { addPlant } from "./field.js"
const addedPlants = addPlant(sunflowerSeed)
console.log(addedPlants)


import { usePlants } from "./field.js"
const usedPlants = usePlants()
console.log(usedPlants)

//not sure what to enter as the parameter, plants array does not work
import { plantSeeds } from './tractor.js'
const plantedSeeds = plantSeeds(yearlyPlan)
console.log(plantedSeeds)