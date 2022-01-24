//declaring an empty array that will store all the plants in the field
const plantsArray = []

//declaring a function to add seeds to the field/plantsArray, takes one parameter
export const addPlant = (seedObj) => {
    plantsArray.push(seedObj)
    return plantsArray
}

//declaring a function and creating a map/copy of the plantsArray
export const usePlants = () => {
    return plantsArray.map(plant => ({...plant}))
}