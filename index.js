const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    let newArray = cats.slice();
    newArray.push(name);
    return newArray;
}
function prependCat(name){
    let copyOfCats = [name, ...cats];
    return copyOfCats
}
function removeLastCat() {
   return cats.slice(0, -1);
}
function removeFirstCat(){
    let cofe = [...cats];
    cofe.shift();
    return cofe
}