// Code your solutions in this file
function writeCards(nameArr, giftType) {
    let cards = [];
    for (let i = 0; i < nameArr.length; i++) {
        cards.push(`Thank you, ${nameArr[i]}, for the wonderful ${giftType} gift!`);
    }
    return cards;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}