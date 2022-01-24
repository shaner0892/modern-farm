//function will return a plant based on how many each plant harvests/outputs, accepts plant array as its one parameter
export const harvestPlants = (plantArrayInput) => {
    const harvestedArray = []
    for (const plant of plantArrayInput) {
        if (plant.type === "Corn") {
            for (let i = 0; i < plant.output / 2; i++) 
                harvestedArray.push(plant)
        }
        else {
            for (let i = 0; i < plant.output; i++) {
                harvestedArray.push(plant)
            }
        }
    }
    return harvestedArray
}