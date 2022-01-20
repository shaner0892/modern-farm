const plantsArray = []

export const addPlant = (seedObj) => {
    plantsArray.push(seedObj)
}
//need to check if corn is being passed through using isArray
export const usePlants = () => {
    return plantsArray.map(plant => ({...plant}))
}