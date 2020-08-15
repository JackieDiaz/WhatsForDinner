document.addEventListener('DOMContentLoaded', () => {

    const searchParams = new URLSearchParams(document.location.search)
    const query = searchParams.get("id")
    const recipeURL = `http://localhost:4000/recipes/${query}`


    fetch(recipeURL)
    .then(response => response.json())
    .then(recipeObject => {
        console.table(recipeObject)
    })
})