console.log("Welcome to the main module")

//below you are importing functions from other modules and then invoking

//this function creates the yearly plan which is 3 arrays of 6
import { createPlan } from './plan.js'
const yearlyPlan = createPlan()
console.log(yearlyPlan)


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


//this function iterates through two arrays, takes the planting plan as its one parameter
//it checks the plant type & uses the addPlant function to add it to the plantsArray
import { plantSeeds } from './tractor.js'
const plantedSeeds = plantSeeds(yearlyPlan)
console.log(plantedSeeds)


//adds seeds to the field/plantsArray, takes one parameter
import { addPlant } from "./field.js"
const addedPlants = addPlant(plantedSeeds)
console.log(addedPlants)

//creates a map/copy of the plantsArray, no parameters
import { usePlants } from "./field.js"
const usedPlants = usePlants()
console.log(usedPlants)

//returns the output of each planted plant, accepts plantsArray copy as parameter
import { harvestPlants } from './harvester.js'
const harvestedPlants = harvestPlants(usedPlants)
console.log(harvestedPlants)

//this function iterates the food array and displays the harvested foods in a grid layout, takes the harvestedArray as parameter
import { catalog } from './catalog.js'
const seedCatalog = catalog(harvestedPlants)
console.log(seedCatalog)