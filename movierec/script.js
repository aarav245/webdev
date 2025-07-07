class movie{
    constructor(Title,Director,Year){
        this.Title=Title
        this.Director=Director
        this.Year=Year
    }
}
//array for default movie(s)
const defaultmovies=[
    {
        Title: "Iron Man",
        Director: "Jon Favreau",
        Year: "2008"
    },
    {
        Title: "Harry Potter and the Sorcerer's Stone",
        Director: "Chris Columbus",
        Year: "2001"
    },
    {
        Title: "Up",
        Director: "Pete Docter",
        Year:"2009"
    }
]
class ui{
    //static method to add a movie
    static addmovie = (movie) => {
        const list = document.getElementById("movie-list")
        const row = document.createElement("tr")
        //setting rows innerHTML with movie data
        row.innerHTML = `
        <td>${movie.Title}</td>
        <td>${movie.Director}</td>
        <td>${movie.Year}</td>
        `
        list.appendChild(row)
    }
    static displaymovie = () => {
        defaultmovies.forEach(movie=>ui.addmovie(movie))
    }
}
ui.displaymovie()
//event listener for when button is pressed
document.querySelector("#movie-form").addEventListener("submit", addtolist)
function addtolist(e){
    
}
