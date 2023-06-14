const teams = [
    {
        name: "team1",
        score: 0,
        foulsReceived: 0,
    },
    {
        name: "team2",
        score: 0,
        foulsReceived: 0,
    },
    {
        name: "team3",
        score: 0,
        foulsReceived: 0,
    },
    {
        name: "team4",
        score: 0,
        foulsReceived: 0,
    },
    {
        name: "team5",
        score: 0,
        foulsReceived: 0,
    },
    {
        name: "team6",
        score: 0,
        foulsReceived: 0,
    }
]


// Generate random numbers from 1 to max 
const randomNumber = (max) => Math.floor(Math.random() * max) + 1;


console.log(teams)
// Push random goals and fouls to each team
for (let team of teams){
    team.score = randomNumber(90);
    team.foulsReceived = randomNumber(500)
}

const teamsChart = teams.map(({name, foulsReceived}) => (
    {
        name,
        foulsReceived
    }
));

console.log(teamsChart)