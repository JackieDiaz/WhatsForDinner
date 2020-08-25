document.addEventListener('DOMContentLoaded', () => {
    const baseURL = "http://localhost:4000/recipes"
    fetch(baseURL)
    .then(response => response.json())
    .then(handleDinnerObjectData)
    function handleDinnerObjectData(dinnerObject){
        console.table(dinnerObject)
        dinnerObject.forEach(recipeOverview => {
            renderRecipeOverviewCard(recipeOverview)
            
        })
    }
    const recipeCardContainer = document.querySelector(".recipe-cards-container")
    const newUserRecipe = document.getElementById("#add-new-recipe")
    newUserRecipe.addEventListener("submit", ()=> {
        event.preventDefault()
        const formData = new FormData(newUserRecipe)
        const name = formData.get("name")
        const ingredients = formData.get("ingredients")
        const instructions = formData.get("instructions")
        const cook_time = formData.get("cook-time")
        fetch("http://localhost:4000/recipes", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                recipe: {
                    name: name,
                    ingredients: ingredients,
                    instructions: instructions,
                    cook_time: cook_time
                }
            })
        })
    })
    function renderRecipeOverviewCard(recipeOverview){
        const recipeCard = document.createElement("h3")
        recipeCard.innerHTML = 
            `
                <div class="card">
                    <br><a class="card-title" href='recipeOverview.html?id=${recipeOverview.id}'>${recipeOverview.name}</a><br>
                    <br><p>time to cook: hours/minutes ${recipeOverview.cook_time}</p><br> 
                    <br><img ${recipeOverview.image}/><br> 
                </div>
            `
        recipeCardContainer.appendChild(recipeCard)
    }
})
