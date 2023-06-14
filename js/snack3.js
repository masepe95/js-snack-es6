const bicycle = [
    {
        name: "bicycle1",
        weight: 3,
    },
    {
        name: "bicycle2",
        weight: 1,
    },
    {
        name: "bicycle3",
        weight: 5,
    },
    {
        name: "bicycle4",
        weight: 7,
    },
    {
        name: "bicycle5",
        weight: 2,
    },
    {
        name: "bicycle6",
        weight: 15,
    }
]
console.log(bicycle)

// Senza destrutturazione 
const lessWeightBicycle = bicycle.reduce((accumulator, element) => accumulator.weight < element.weight ? accumulator : element, 0);
console.log(lessWeightBicycle)

// Con la destrutturazione e template literal
const {name, weight} = bicycle.reduce((accumulator, element) => accumulator.weight < element.weight ? accumulator : element, 0);
console.log(`La ${name} è quella più leggera, il suo peso è di ${weight}kg`)