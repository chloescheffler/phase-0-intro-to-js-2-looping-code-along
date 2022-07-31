function countDown() {
    let countDown = 11;
    while (countDown > 0) {
        countDown--;
        console.log(countDown);
    }
}

const message = [];
function writeCards(name, string) {
    for (let i = 0; i < name.length; i++) {
        message.push(`Thank you, ${name[i]}, for the wonderful ${string} gift!`);
        console.log(message);
    }
    return message;
}