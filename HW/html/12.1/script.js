const movies = [
  { title: "Inception", year: 2010 },
  { title: "The Dark Knight", year: 2008 },
  { title: "Interstellar", year: 2014 },
  { title: "The Matrix", year: 1999 },
];

const sortMovie = movies.sort((a,b)=>{ 
    return a.year - b.year

})
console.log(sortMovie);


const people = [

    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }

];

const showName = people.reduce((a,b,c,)=>{
    return a + (c===0 ?"":", ")+ b.name
},"")

console.log(showName);
