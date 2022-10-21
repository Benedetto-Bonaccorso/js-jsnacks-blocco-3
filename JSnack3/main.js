let animals = [

    {Name: "leone",
    Family: "felide",
    Class: "mammifero"}, 

    {Name: "lupo",
    Family: "cnaidi",
    Class: "mammifero"}, 

    {Name: "iguana",
    Family: "lucertole",
    Class: "oviparo"}, 

    {Name: "lardo di mare",
    Family: "lardidi",
    Class: "mammifero"},

    {Name: "ornitorinco",
    Family: "robe strane",
    Class: "ovoviviparo"},
]

const mammiferi = animals.filter(checkMammifero);

function checkMammifero(animal) {
    return animal.Class == "mammifero";
}

console.log(mammiferi)