const game = {
    team1: 'Bayer Munich',
    team2: 'Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ]
    ],
    score: '4:0',
    scored: ['Lewandowski','Gnarby','Lewandowski','Muller'],
    date: '01/01/2024',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    }
};

// 1. Tạo mảng cầu thủ
const [players1,players2] = game.players;
console.log(players1,players2);

// 2. Danh sách cầu thủ
const [gks1,...fieldPlayers1] = players1;
console.log( gks1, fieldPlayers1 );
const [gks2,...fieldPlayers2] = players1;
console.log( gks2, fieldPlayers2 );

//3. Danh sách tất cả các cầu thủ
const allPlayers = [...players1,...players2];
console.log(allPlayers);

// 4. Hiển thi cầu thủ của Bayer
const players1Final = [ ...players1,"Thiago", "Coutinho", "Perisic" ]
console.log(players1Final);

// 5. Cấu trúc lại thuộc tính odds
const {odds:{team1 ,x:draw, team2}} = game ;
console.log(team1 ,draw ,team2);

// 6. Hiển thị tên cầu thủ ghi bàn
const printGoals = function (...players) {
    console.log(`${players.length} goals`)
}
printGoals(...game.scored);


team1 < team2 && console.log("Team Dormund Win !!!")
team1 > team2 && console.log("Team Bayer Win !!!")
console.log();

//lab1.2
// 1. Hiển thị cầu thủ ghi bàn
for (const [i, player] of game.scored.entries()) {
    console.log(`Bàn ${i+1}: ${player}`);
}

// 2. Tính tỉ lệ chấp trung bình
let sum = 0 ;
const odds = Object.values(game.odds);
console.log(odds);
for (const item of odds) {
    sum += item ;
}
console.log(`Tỉ lệ chấp trung bình: ${sum/odds.length}`);

// 3. Hiển thị lại tỉ lệ thắng
const odds1 = Object.entries(game.odds)
for (const [team ,odd] of odds1) {
    let str = (team == 'x' ? 'hoà của draw' : `thắng của ${game[team]}`)
    console.log(`Tỉ lệ ${str} : ${odd}`);
}

// 4. Hiển trị số bàn thắng mà cầu thủ ghi được
const scorers = {};
const scored = game.scored;
console.log(scored);
for (let i = 0 ; i < scored.length ; i++)  {
    count = 0;
    for ( let j = 0 ; j < scored.length ; j++ ) {
        if ( scored[i] == scored[j] ) {
            count++
        }
    }
    scorers[scored[i]] = count
}
console.log(scorers);