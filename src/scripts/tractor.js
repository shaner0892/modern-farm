import { addPlant } from "./field"
import { createAsparagus } from "./seeds/asparagus"
import { createCorn } from "./seeds/corn"
import { createPotato } from "./seeds/potato"
import { createSoybean } from "./seeds/soybean"
import { createSunflower } from "./seeds/sunflower"
import { createWheat } from "./seeds/wheat"

export const plantSeeds = (plantingPlan) => {
    for (const row of plantingPlan) {
        for (const plant of row) {
            if (plant === "asparagus") {
                addPlant(createAsparagus())
            } else if (plant === "corn") {
                addPlant(createCorn())
            } else if (plant === "potato") {
                addPlant(createPotato())
            } else if (plant === "soybean") {
                addPlant(createSoybean())
            } else if (plant === "sunflower") {
                addPlant(createSunflower())
            } else if (plant === "wheat") {
                addPlant(createWheat())
            }
        }
    }
}