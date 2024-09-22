let text = "a-b-c-d";
function newText(){
    let a = text.split("-").join("_").toUpperCase();
    return a;
}
console.log(newText());