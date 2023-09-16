const chatContent = document.getElementById('chatContent');
const messages = [
    'Milfhuner: Баяяйо-баяйяо? \n',
    'NagibatOOr3000: Я тебя курва, баяяйо!!! \n',
    'RealMan2009: Там что то про милф?! \n',
    'AllTrue6no: Здравствуйте, я из компании Олифрейм... \n'
];
let currentMessage = 0;
let currentLetter = 0;

function updateChat() {
    if (currentLetter < messages[currentMessage].length) {
        chatContent.innerHTML += messages[currentMessage][currentLetter];
        currentLetter++;
        setTimeout(updateChat, 100);
    } else {
        chatContent.innerHTML += '<br>';
        currentLetter = 0;
        currentMessage++;

        if (currentMessage < messages.length) {
            setTimeout(updateChat, 500); 
        } else {
            currentMessage = 0;
            chatContent.innerHTML = '';
            setTimeout(updateChat, 2000);
        }
    }
}

updateChat();
