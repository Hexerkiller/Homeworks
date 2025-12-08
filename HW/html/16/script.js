async function show() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!res.ok) {
      throw new Error("fetch err");
    }
    const data = await res.json()

    console.log(data);
    
  } catch (e) {
    console.error("error in url", e);
  }
}
show();

async function showPosts(){
    try {
        const res = await fetch ('https://jsonplaceholder.typicode.com/posts?_limit=10')
         if(!res.ok){
            throw new Error ('Fetch err')
         }
         const data = await res.json()
         console.log(data);
         
    }
    catch(e){
        console.error('Error in url ',e)
    }
}

showPosts()