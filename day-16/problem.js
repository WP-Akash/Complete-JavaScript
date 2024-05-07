var text = prompt("Enter A letter : ");
var convart = text.toLowerCase();
if(convart == "a" || convart == "e" || convart == "i" || convart == "o" || convart == "u"){
    document.write("Vowel");
}else{
    document.write("Consonent");
}