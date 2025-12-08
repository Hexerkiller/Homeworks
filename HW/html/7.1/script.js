//1
const info = {
    name:"Vii",
    age:20
}
console.log(info.name,info.age);
//2
const book = [ 
    {title: 'star wars',author:'George Luckas'
},
{title:'dances with wolves', author:'Michael Blake'},
{title:'the Prince' ,author:'Niccolo Machiavelli'}
]
for (let i = 0; i < book.length; i++) {
    console.log(`Title:${book[i].title} ,
                 Author ${book[i].author}`);
    
    
}
//3
const rectangle = { a: 10, b: 35 }
rectangle.s = rectangle.a * rectangle.b;

rectangle.p = (rectangle.a + rectangle.b)*2;

console.log(rectangle);
//4
const fruits = [
    {name:"mago", color:"green" },
    {name:"apple", color:"red" },
    {name:"cranberies", color:"red" },
    {name:"orange", color:"orange"}
]
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].color === "red") {   console.log(fruits[i]);    
    }
    
}
//5
const playlist={
 songs  : [
        {title:"23" ,author:"Micky Chance"},
        {title:"10" ,author:"Miyagi & Эндшпиль"},
        {title:"Положение" ,author:"Skriptonite"}
    ]
}
for (let i = 0; i < playlist[`songs`].length; i++) {
    const song = playlist.songs[i];
   
     console.log(`title: ${song.title},author :${song.author}`);
}
