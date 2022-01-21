//declaring an empty array that you will use...in the plantedSeeds function?
const plantsArray = []

//declaring a function to add seeds to the plantsArray, takes one parameter
export const addPlant = (seedObj) => {
    plantsArray.push(seedObj)
    return plantsArray
}
//need to check if corn is being passed through using isArray

//declaring a function and creating a map/copy of the plantsArray
export const usePlants = () => {
    return plantsArray.map(plant => ({...plant}))
}