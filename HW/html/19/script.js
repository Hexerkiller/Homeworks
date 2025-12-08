class CopyEntity {
    static copyObject(obj){
        return JSON.parse(JSON.stringify(obj));
    }
}

const locusr = {
    name: 'Vii',
    age: 20,
    hobby:"readinf of books"

}
const copy = CopyEntity.copyObject(locusr)


console.log("Original:", locusr);
console.log("Copy:", copy);
console.log("Same object?", copy === locusr);
