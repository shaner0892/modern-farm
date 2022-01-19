const plantsArray = []

export const addPlant = (seedObject) => {
    plantsArray.push(seedObject)
}
//need to check if corn is being passed through using isArray
export const usePlants = () => {
    return plantsArray
}