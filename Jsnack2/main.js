let names = ["MARCELINE", "Finn", "jake", "Bmo"]

let correctedNames = []

let lowerCaseName;

let correctedName;

let firstCapitalLetter;

for(let i = 0; i< names.length; i++){
    lowerCaseName = names[i].toLowerCase();

    firstCapitalLetter = lowerCaseName[0].toUpperCase()

    for(let i = 0; i < lowerCaseName.length; i++){
        if(i>0){
            correctedName += lowerCaseName[i]
        } else {
            correctedName = firstCapitalLetter
        }
    }

    correctedNames.push(correctedName)
}

console.log(correctedNames)