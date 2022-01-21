//function will return a plant based on how many each plant outputs
export const harvestPlants = (plantArrayInput) => {
    const seedsArray = []
    for (const plant of plantArrayInput) {
       //need to figure out isArray method to check for corn array
        if (plant.type === "corn") {
            for (let i = 0; i < plant.output / 2; i++) 
                seedsArray.push(plant)
        }
        else {
            for (let i = 0; i < plant.output / 2; i++) {
            seedsArray.push(plant)
            }
    }
    return seedsArray
}
}