document.addEventListener('DOMContentLoaded', () => {

    const baseURL = "http://localhost:4000/whats_for_dinner_bots"
    
    fetch(baseURL)
    .then(response => response.json())
    .then(handleDinnerObjectData)
    
    
    function handleDinnerObjectData(dinnerObject){
        console.table(dinnerObject)
        dinnerObject.forEach(recipeOverview => {
            renderRecipeOverviewCard(recipeOverview)
            recipeOverview.recipes.forEach(recipe => {
                console.log("RECIPE:", recipe)
            //    renderRecipeDetails(recipe)
               
            })
        })
    }

    const recipeCardContainer = document.querySelector(".recipe-cards-container")
    const newUserRecipe = document.getElementById("#add-new-recipe")

    
    //need to add a way to upload images to user created recipes
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
        // const recipeOverviewCard = document.createElement("div")
        const recipeCard = document.createElement("h3")
        // const timeToCook = document.createElement("p")
        // const difficulty = document.createElement("p")
        
        // recipeCardTitle.textContent = recipeOverview.name 
        recipeCard.innerHTML = `
        <div class="card">
            <br><a class="card-title"href='recipe_overview.html?id=${recipeOverview.id}'>${recipeOverview.name}</a><br>
            <br><p>time to cook: hours/minutes ${recipeOverview.total_cook_time}</p><br> 
            <br><p>difficulty level: ${recipeOverview.difficulty}</p><br>   
        </div>
        `
        // timeToCook.textContent = "time to cook: hours/minutes " + recipeOverview.total_cook_time
        // difficulty.textContent = "difficulty level: " + recipeOverview.difficulty

        
        recipeCardContainer.appendChild(recipeCard)
    }


    
    // function renderRecipeDetails(recipe){
    //     console.log("recipe:",recipe)
        
    //     const recipeImage = document.createElement("img")
    //     const recipeLink = document.createElement("a")

    //     recipeImage.src = recipe.image
    //     recipeLink.href = recipe.link
    // }
   

})
