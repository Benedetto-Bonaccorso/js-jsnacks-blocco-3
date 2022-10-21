let names = ["MARCELINE", "Finn", "jake", "Bmo"]

let correctedNames = []

let correctedName;

for(let i = 0; i< names.length; i++){
    correctedName = names[i].toLowerCase();
    correctedNames.push(correctedName)
    
}

console.log(correctedNames)