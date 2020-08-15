document.addEventListener('DOMContentLoaded', () => {
    const searchParams = new URLSearchParams(document.location.search)
    const query = searchParams.get("id")
    const baseURL = `http://localhost:4000/whats_for_dinner_bots/${query}`

    fetch(baseURL)
    .then(response => response.json())
    .then(handleRecipeOverviewData)
    
    function handleRecipeOverviewData(recipeOverview){
        recipeOverview.recipes.map(recipe => {
            renderRecipeCard(recipe)
            splitIngredientData(recipe)
            
        })
    }
    
    function splitIngredientData(recipe){
        const splitIngredients = recipe.ingredients.split(";")
        splitIngredients.map(ingredient => {
            renderIngredients(ingredient)
        })
    }
    
    function renderRecipeCard(recipe){
        const recipeCardContainer = document.querySelector(".recipe-cards-container")
        const recipeCard = document.createElement("main")
        recipeCard.innerHTML = `
        <div class="card">
        <br><h1>Title: ${recipe.name}</h1><br>
        <p>Cook time: ${recipe.cook_time} hours/minutes</p>
        <img src=${recipe.image}>
        <br><p>Instructions ${recipe.instructions}</p><br>
        </div>
        `
        recipeCardContainer.appendChild(recipeCard)   
    }
    
    function renderIngredients(ingredient){
        const ingredientsContainer = document.querySelector(".ingredients-container")
        const ingredientElement = document.createElement("li")
        ingredientElement.textContent = ingredient
        console.log(ingredientElement)
        ingredientsContainer.appendChild(ingredientElement)
        createAddIngredientBtn(ingredientElement, ingredient)
    
    }
    
    
    function createAddIngredientBtn(ingredientElement){
        const addIngredientBtn = document.createElement("button")
        addIngredientBtn.textContent = "add to grocery list"
        ingredientElement.append(addIngredientBtn)
        addIngredientBtn.addEventListener("click", () => addIngredientToGroceryList(ingredientElement))
    }
    
    function addIngredientToGroceryList(ingredientElement){
        const groceryItem = document.createElement("li")
        const groceryList = document.querySelector("#grocery-list")
        groceryItem.innerHTML = ingredientElement.innerHTML
        groceryItem.children[0].remove()
        event.preventDefault()
        groceryList.appendChild(groceryItem)
    }
            
        })