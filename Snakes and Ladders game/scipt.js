var active = 0;
var currentplayer, p1score, p2score, dice;
p1score = 0;
p2score = 0;

var firstPlayer = prompt('what is the name of Player one?');
document.querySelector('.p1').textContent = firstPlayer;

var secondPlayer = prompt('what is the name of Player two?');
document.querySelector('.p2').textContent = secondPlayer;

document.querySelector('.ng').addEventListener('click', function() {
window.location.reload(true);
});

document.querySelector('.roll').addEventListener('click', function() {

    dice = Math.floor(Math.random() * 6 + 1);
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').src= '/img/dice-' + dice + '.png';
    document.querySelector('.p1').classList.toggle('.activeplayer')
    document.querySelector('.p2').classList.toggle('.activeplayer')
    active === 0 ? p1score += dice : p2score += dice;
    
    active === 0 ? active = 1 : active = 0;
     
    if (p1score === 2){
        p1score = 23;
        alert('climb the ladder');
    };
    if (p1score === 6){
        p1score = 45;
        alert('climb the ladder');
    };
    if (p1score === 20){
        p1score = 59;
        alert('climb the ladder');
    };
    if (p1score === 43){
        p1score = 17;
        alert('bitten by a snake!');
    };
    if (p1score === 50){
        p1score = 5;
        alert('bitten by a snake!');
    };
    if (p1score === 52){
        p1score = 72;
        alert('climb the ladder');
    };
    if (p1score === 56){
        p1score = 8;
        alert('bitten by a snake!');
    };
    if (p1score === 57){
        p1score = 96;
        alert('climb the ladder');
    };
    if (p1score === 71){
        p1score = 92;
        alert('climb the ladder');
    };
    if (p1score === 73){
        p1score = 15;
        alert('bitten by a snake!');
    };
    if (p1score === 84){
        p1score = 58;
        alert('bitten by a snake!');
    };
    if (p1score === 87){
        p1score = 49;
        alert('bitten by a snake!');
    };
    if (p1score === 98){
        p1score = 40;
        alert('bitten by a snake!');
    };
    if (p1score >= 100) {
        document.querySelector('.p1').textContent = 'WINNER!';
        document.querySelector('.roll').style.display = 'none';

    };

    if (p2score === 2){
        p2score = 23;
        alert('climb the ladder');
    };
    if (p2score === 6){
        p2score = 45;
        alert('climb the ladder');
    };
    if (p2score === 20){
        p2score = 59;
        alert('climb the ladder');
    };
    if (p2score === 43){
        p2score = 17;
        alert('bitten by a snake!');
    };
    if (p2score === 50){
        p2score = 5;
        alert('bitten by a snake!');
    };
    if (p2score === 52){
        p2score = 72;
        alert('climb the ladder');
    };
    if (p2score === 56){
        p2score = 8;
        alert('bitten by a snake!');
    };
    if (p2score === 57){
        p2score = 96;
        alert('climb the ladder');
    };
    if (p2score === 71){
        p2score = 92;
        alert('climb the ladder');
    };
    if (p2score === 73){
        p2score = 15;
        alert('bitten by a snake!');
    };
    if (p2score === 84){
        p2score = 58;
        alert('bitten by a snake!');
    };
    if (p2score === 87){
        p2score = 49;
        alert('bitten by a snake!');
    };
    if (p2score === 98){
        p2score = 40;
        alert('bitten by a snake!');
    };
    if (p2score >= 100) {
        document.querySelector('.p2').textContent = 'WINNER!';
        document.querySelector('.roll').style.display = 'none';

    };
    
    document.querySelector('.score-0').textContent = p1score;
    document.querySelector('.score-1').textContent = p2score;
    return p1score, p2score;
    
});
  
