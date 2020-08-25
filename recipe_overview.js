document.addEventListener('DOMContentLoaded', () => {
    const searchParams = new URLSearchParams(document.location.search)
    const query = searchParams.get("id")
    const baseURL = `http://localhost:4000/recipes/${query}`

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

        // const word = 'pneumonoultramicroscopicsilicovolcanoconiosis'

// function getObjFromStr(word){
// 	const wordObj = {};
// 	// take in each character from word and assign the key to be the char
// 	// value will be the number of times the char occured
// 	// break word into array then iterate through array
// 	// forEach 

// 	word.split('').forEach(char => {
		
// 	})
// }

// const buttonComponent = () => {
	
// 	increment = () => {
// 		const num = 0
// 		return num++
// 	}

// 	return(

// 	<div>
// 		<button onCLick>
			
// 		</button>

// 	</div>

// 	)
// }


// console.log(getObjFromStr(word))

// /*
// {
// 	p: 2,
// 	n: 4,
// 	e: 1,
// 	...
// }

// wordObj["p"] // 2
// */

// strong fundamentals
// explain code clearly
// 
