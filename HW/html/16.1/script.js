
async function showError(){
    try {
        const res = await fetch ('https://jsonplaceholder.typicodeee.com/posts?userId=1') 

        // в ссылку изначально ошибку добавили :)


        if(!res.ok){
            throw new Error('err')
        }
        const data  = await res.json()

        console.log(data);
        
    }
    catch(e){
        console.error('Error in Url',e)
    }
}
showError()

async function calculate (a,b) {
    try {
        if (b===0 || a ===0){
        throw new Error()
       }
       const result =  a/b
       
 console.log(result);
       
        
    }

    catch(e){
        console.log( "на ноль не делим -_- ",e)
    }
}
calculate(18,0)