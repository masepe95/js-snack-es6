const students = [
    {
        id: 213,
        name: "Marco della Rovere",
        grades: 78
    },
    {
        id: 110,
        name: "Paola Cortellessa",
        grades: 96
    },
    {
        id: 250,
        name: "Andrea Mantegna",
        grades: 48
    },
    {
        id: 145,
        name: "Gaia Borromini",
        grades: 74
    },
    {
        id: 196,
        name: "Luigi Grimaldello",
        grades: 68
    },
    {
        id: 102,
        name: "Piero della Francesca",
        grades: 50
    },
    {
        id: 120,
        name: "Francesca da Polenta",
        grades: 84
    }
]

console.log('----------------ESERCIZIO DUE------------------')
// Studenti con voto superiore a 70 
const goodStudents = students.filter(students => students.grades > 70)
console.log(goodStudents)

// Studenti con voto superiore a 70 e id superiore a 120 
const goodStudentsHighId = students.filter(students => students.grades > 70 && students.id > 120)
console.log(goodStudentsHighId)

// Maiuscolo
const studentsNames = students.map(student => student.name.toUpperCase());
console.log(studentsNames)