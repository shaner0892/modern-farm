//this function iterates the food array and displays the harvested foods in a grid layout
export const catalog = (harvestedFoodArray) => {
    let htmlString = ""
    for (const plant of harvestedFoodArray) {
            htmlString += `<section class="plant">${plant.type}</section>`
        }
//    console.log(htmlString)
    document.querySelector(".container").innerHTML += htmlString
} 