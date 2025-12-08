

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 15 },
];

const mew = people.map(function change(person) {
  return { ...person, status: person.age > 18 ? "взрослий" : "ребенок" };
});
console.log(mew);


const movies = [

    { title: "Inception", rating: 4.9 },

    { title: "The Dark Knight", rating: 5.0 },

    { title: "Interstellar", rating: 4.8 },

    { title: "The Matrix", rating: 4.5 }

];

const showMovie = movies.forEach(movie =>{
    if (movie.rating > 4){
        console.log(movie.title);
        
    }
} )