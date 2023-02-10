
// Add event listeners to capture form data 
// Fetch data based on what the user types into that form
// Display that data on the page


const init = () => {

    const form = document.querySelector('form');
    const inputField = document.querySelector('#searchByID');
    // const inputField = e.target.children[1].value; //<-- this also works!
    // const inputField = e.target.id.value
    console.log(inputField.value);
    // console.log(inputField);
    // This logs the VALUE of what's in the inputField

    form.addEventListener('submit', (e) => {
        e.preventDefault();    

        fetch(`http://localhost:3000/movies/${inputField.value}`)
        .then((response) => response.json())
        .then((moviesArray) => {
        console.log(moviesArray);
        // We are getting back an array of movies from our fetch
        // By interpolating the inputField.value, we get the movie object searched by the user

         // Need to replace the Title and Summary sections
         
         const title = document.querySelector('#movieDetails h4');
         const summary = document.querySelector('#movieDetails p');

         title.textContent = moviesArray.title;
         console.log(moviesArray.title);
         summary.textContent = moviesArray.summary;
         console.log(moviesArray.summary);
    })
    })
}

document.addEventListener('DOMContentLoaded', init);
