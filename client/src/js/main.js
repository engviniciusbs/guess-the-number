var mainNumber;
var card = document.querySelector('.card-content');
var ledNumbers = document.querySelector('.card-led');
var gameResult = document.querySelector('.card-result span');
var submitButton = document.querySelector('.card-form button');
var restartGameButton = document.querySelector('.restart');
var inputGuess = document.getElementById('guessNumber');
var errorDisplay = false;

var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c');
var d = document.getElementById('d');
var e = document.getElementById('e');
var f = document.getElementById('f');
var g = document.getElementById('g');

var aSecond = document.getElementById('a2');
var bSecond = document.getElementById('b2');
var cSecond = document.getElementById('c2');
var dSecond = document.getElementById('d2');
var eSecond = document.getElementById('e2');
var fSecond = document.getElementById('f2');
var gSecond = document.getElementById('g2');

var aThird = document.getElementById('a3');
var bThird = document.getElementById('b3');
var cThird = document.getElementById('c3');
var dThird = document.getElementById('d3');
var eThird = document.getElementById('e3');
var fThird = document.getElementById('f3');
var gThird = document.getElementById('g3');

// Primeiro criei variáveis globais de todos os elementos que irei implementar alguma função.

function initLed () {
    a.classList.add('active');
    b.classList.add('active');
    c.classList.add('active');
    d.classList.add('active');
    e.classList.add('active');
    f.classList.add('active');
    g.classList.remove('active');
    ledNumbers.classList.remove('two');
    ledNumbers.classList.remove('three');
}

initLed ();

// Logo depois criei a função iniLed que irá inicar o LED de sete segmentos já no numero zero.

getNewNumber();

function resetFields(){
    gameResult.innerText = "";
    inputGuess.value = "";
}

// A função resetFields foi criada para resetar os campos e valores após pressionar o botão 'ENVIAR'.

function hitResult(){
    gameResult.innerText = "You won!!!!";
    inputGuess.classList.add('disable');
    submitButton.classList.add('disable');
}

function lessResult(){
    gameResult.innerText = "Less";
}

function biggerResult(){
    gameResult.innerText = "Bigger";
}

function errorResult(){
    gameResult.innerText = "ERROR";
    restartGameButton.classList.remove('is-hidden');
    inputGuess.classList.add('disable');
    submitButton.classList.add('disable');
    inputGuess.disabled = true;
}

// Depois criei outras 4 funções, irei chamá-las dependendo do resultado do palpite e ela aplicará um texto definido dependendo do palpite e também o estilo (caso acerte ou erre) utilizando os métodos innerText e classList.add/remove

function getNewNumber(){
    card.classList.remove('win');
    card.classList.remove('error');
    fetchNumber().then(number => {
        // console.log(number);
        restartGameButton.classList.add('is-hidden');
        mainNumber = number.value;
        errorDisplay = false;
        initLed ();
        resetFields();
    }).catch(error => {
        errorResult();
        card.classList.add('error');
        // console.log('Erro ao pegar o número', error);
        errorDisplay = true;
        handleClick();
    });
    inputGuess.classList.remove('disable');
    submitButton.classList.remove('disable');
    inputGuess.disabled = false;
}

// Utilizando a função fetchNumber, o programa irá dar um get retornará o valor da API. Caso dê certo, implementei as funções de sucesso e atribui um novo valor para a varíavel global mainNumber. No caso de erro, a função errorResult irá ser chamada e o valor da variável errorDisplay receberá 'true'.

function handleClick(){
    let userNumber = Number(document.getElementById('guessNumber').value);
    let ledArr = num => Number(num);
    var intArr = Array.from(String(userNumber), ledArr);

    if(errorDisplay === true) {
        userNumber = 502;
        intArr = Array.from(String(userNumber), ledArr);
        gameResult.innerText = "ERRO";
    }

    if (userNumber === mainNumber){
        hitResult();
        card.classList.add('win');
        restartGameButton.classList.remove('is-hidden');
        inputGuess.disabled = true;
    } else if (userNumber < mainNumber) {
        biggerResult();
    } else if (userNumber > mainNumber) {
        lessResult();
    }

    /*-----------------------------------------------------*/

    function resetLed () {
        a.classList.remove('active');
        b.classList.remove('active');
        c.classList.remove('active');
        d.classList.remove('active');
        e.classList.remove('active');
        f.classList.remove('active');
        g.classList.remove('active');
    }

    function resetSecondLed () {
        aSecond.classList.remove('active');
        bSecond.classList.remove('active');
        cSecond.classList.remove('active');
        dSecond.classList.remove('active');
        eSecond.classList.remove('active');
        fSecond.classList.remove('active');
        gSecond.classList.remove('active');
    }

    function resetThirdLed () {
        aThird.classList.remove('active');
        bThird.classList.remove('active');
        cThird.classList.remove('active');
        dThird.classList.remove('active');
        eThird.classList.remove('active');
        fThird.classList.remove('active');
        gThird.classList.remove('active');
    }

    if(userNumber === 502){

        ledNumbers.classList.add('two');
        ledNumbers.classList.add('three');
        
        errorResult();
        resetLed();
        resetSecondLed();
        resetThirdLed();

        aThird.classList.add('active');
        cThird.classList.add('active');
        dThird.classList.add('active');
        fThird.classList.add('active');
        gThird.classList.add('active');

        
        aSecond.classList.add('active');
        bSecond.classList.add('active');
        cSecond.classList.add('active');
        dSecond.classList.add('active');
        eSecond.classList.add('active');
        fSecond.classList.add('active');

        a.classList.add('active');
        b.classList.add('active');
        d.classList.add('active');
        e.classList.add('active');
        g.classList.add('active');

    }

    if(userNumber <= 9) {

        resetSecondLed();
        resetThirdLed();

        ledNumbers.classList.remove('two');
        ledNumbers.classList.remove('three');

        if(userNumber === 0){
            resetLed();
            a.classList.add('active');
            b.classList.add('active');
            c.classList.add('active');
            d.classList.add('active');
            e.classList.add('active');
            f.classList.add('active');
        }
        if(userNumber === 1){
            resetLed();
            b.classList.add('active');
            c.classList.add('active');
        }
        if(userNumber === 2){
            resetLed();
            a.classList.add('active');
            b.classList.add('active');
            d.classList.add('active');
            e.classList.add('active');
            g.classList.add('active');
        }
        if(userNumber === 3){
            resetLed();
            a.classList.add('active');
            b.classList.add('active');
            c.classList.add('active');
            d.classList.add('active');
            g.classList.add('active');
        }
        if(userNumber === 4){
            resetLed();
            b.classList.add('active');
            c.classList.add('active');
            f.classList.add('active');
            g.classList.add('active');
        }
        if(userNumber === 5){
            resetLed();
            a.classList.add('active');
            c.classList.add('active');
            d.classList.add('active');
            f.classList.add('active');
            g.classList.add('active');
        }
        if(userNumber === 6){
            resetLed();
            a.classList.add('active');
            c.classList.add('active');
            d.classList.add('active');
            e.classList.add('active');
            f.classList.add('active');
            g.classList.add('active');
        }
        if(userNumber === 7){
            resetLed();
            a.classList.add('active');
            b.classList.add('active');
            c.classList.add('active');
        }
        if(userNumber === 8){
            resetLed();
            a.classList.add('active');
            b.classList.add('active');
            c.classList.add('active');
            d.classList.add('active');
            e.classList.add('active');
            f.classList.add('active');
            g.classList.add('active');
        }
        if(userNumber === 9){
            resetLed();
            a.classList.add('active');
            b.classList.add('active');
            c.classList.add('active');
            d.classList.add('active');
            f.classList.add('active');
            g.classList.add('active');
        }

    }

    if(userNumber >= 10 & userNumber <= 99){

        ledNumbers.classList.add('two');
        ledNumbers.classList.remove('three');

        userNumber = intArr[0];
        
        if(userNumber === 1){
            resetSecondLed();
            resetThirdLed();
            bSecond.classList.add('active');
            cSecond.classList.add('active');
        }
        if(userNumber === 2){
            resetSecondLed();
            resetThirdLed();
            aSecond.classList.add('active');
            bSecond.classList.add('active');
            dSecond.classList.add('active');
            eSecond.classList.add('active');
            gSecond.classList.add('active');
        }
        if(userNumber === 3){
            resetSecondLed();
            resetThirdLed();
            aSecond.classList.add('active');
            bSecond.classList.add('active');
            cSecond.classList.add('active');
            dSecond.classList.add('active');
            gSecond.classList.add('active');
        }
        if(userNumber === 4){
            resetSecondLed();
            resetThirdLed();
            bSecond.classList.add('active');
            cSecond.classList.add('active');
            fSecond.classList.add('active');
            gSecond.classList.add('active');
        }
        if(userNumber === 5){
            resetSecondLed();
            resetThirdLed();
            aSecond.classList.add('active');
            cSecond.classList.add('active');
            dSecond.classList.add('active');
            fSecond.classList.add('active');
            gSecond.classList.add('active');
        }
        if(userNumber === 6){
            resetSecondLed();
            resetThirdLed();
            aSecond.classList.add('active');
            cSecond.classList.add('active');
            dSecond.classList.add('active');
            eSecond.classList.add('active');
            fSecond.classList.add('active');
            gSecond.classList.add('active');
        }
        if(userNumber === 7){
            resetSecondLed();
            resetThirdLed();
            aSecond.classList.add('active');
            bSecond.classList.add('active');
            cSecond.classList.add('active');
        }
        if(userNumber === 8){
            resetSecondLed();
            resetThirdLed();
            aSecond.classList.add('active');
            bSecond.classList.add('active');
            cSecond.classList.add('active');
            dSecond.classList.add('active');
            eSecond.classList.add('active');
            fSecond.classList.add('active');
            gSecond.classList.add('active');
        }
        if(userNumber === 9){
            resetSecondLed();
            resetThirdLed();
            aSecond.classList.add('active');
            bSecond.classList.add('active');
            cSecond.classList.add('active');
            dSecond.classList.add('active');
            fSecond.classList.add('active');
            gSecond.classList.add('active');
        }

        /*----------------------------*/

        userNumber = intArr[1];
        
        if(userNumber === 0){
            resetLed();
            a.classList.add('active');
            b.classList.add('active');
            c.classList.add('active');
            d.classList.add('active');
            e.classList.add('active');
            f.classList.add('active');
        }
        if(userNumber === 1){
            resetLed();
            b.classList.add('active');
            c.classList.add('active');
        }
        if(userNumber === 2){
            resetLed();
            a.classList.add('active');
            b.classList.add('active');
            d.classList.add('active');
            e.classList.add('active');
            g.classList.add('active');
        }
        if(userNumber === 3){
            resetLed();
            a.classList.add('active');
            b.classList.add('active');
            c.classList.add('active');
            d.classList.add('active');
            g.classList.add('active');
        }
        if(userNumber === 4){
            resetLed();
            b.classList.add('active');
            c.classList.add('active');
            f.classList.add('active');
            g.classList.add('active');
        }
        if(userNumber === 5){
            resetLed();
            a.classList.add('active');
            c.classList.add('active');
            d.classList.add('active');
            f.classList.add('active');
            g.classList.add('active');
        }
        if(userNumber === 6){
            resetLed();
            a.classList.add('active');
            c.classList.add('active');
            d.classList.add('active');
            e.classList.add('active');
            f.classList.add('active');
            g.classList.add('active');
        }
        if(userNumber === 7){
            resetLed();
            a.classList.add('active');
            b.classList.add('active');
            c.classList.add('active');
        }
        if(userNumber === 8){
            resetLed();
            a.classList.add('active');
            b.classList.add('active');
            c.classList.add('active');
            d.classList.add('active');
            e.classList.add('active');
            f.classList.add('active');
            g.classList.add('active');
        }
        if(userNumber === 9){
            resetLed();
            a.classList.add('active');
            b.classList.add('active');
            c.classList.add('active');
            d.classList.add('active');
            f.classList.add('active');
            g.classList.add('active');
        }
    }

    /*----------------------------*/

    if(userNumber >= 100 & userNumber <= 300){

        ledNumbers.classList.add('two');
        ledNumbers.classList.add('three');

        userNumber = intArr[0];
        
        if(userNumber === 1){
            resetThirdLed();
            bThird.classList.add('active');
            cThird.classList.add('active');
        }
        if(userNumber === 2){
            resetThirdLed();
            aThird.classList.add('active');
            bThird.classList.add('active');
            dThird.classList.add('active');
            eThird.classList.add('active');
            gThird.classList.add('active');
        }
        if(userNumber === 3){
            resetThirdLed();
            aThird.classList.add('active');
            bThird.classList.add('active');
            cThird.classList.add('active');
            dThird.classList.add('active');
            gThird.classList.add('active');
        }
        if(userNumber === 4){
            resetThirdLed();
            bThird.classList.add('active');
            cThird.classList.add('active');
            fThird.classList.add('active');
            gThird.classList.add('active');
        }
        if(userNumber === 5){
            resetThirdLed();
            aThird.classList.add('active');
            cThird.classList.add('active');
            dThird.classList.add('active');
            fThird.classList.add('active');
            gThird.classList.add('active');
        }
        if(userNumber === 6){
            resetThirdLed();
            aThird.classList.add('active');
            cThird.classList.add('active');
            dThird.classList.add('active');
            eThird.classList.add('active');
            fThird.classList.add('active');
            gThird.classList.add('active');
        }
        if(userNumber === 7){
            resetThirdLed();
            aThird.classList.add('active');
            bThird.classList.add('active');
            cThird.classList.add('active');
        }
        if(userNumber === 8){
            resetThirdLed();
            aThird.classList.add('active');
            bThird.classList.add('active');
            cThird.classList.add('active');
            dThird.classList.add('active');
            eThird.classList.add('active');
            fThird.classList.add('active');
            gThird.classList.add('active');
        }
        if(userNumber === 9){
            resetThirdLed();
            aThird.classList.add('active');
            bThird.classList.add('active');
            cThird.classList.add('active');
            dThird.classList.add('active');
            fThird.classList.add('active');
            gThird.classList.add('active');
        }

        /*----------------------------*/

        userNumber = intArr[1];
        if(userNumber === 0){
            resetLed();
            resetSecondLed();
            aSecond.classList.add('active');
            bSecond.classList.add('active');
            cSecond.classList.add('active');
            dSecond.classList.add('active');
            eSecond.classList.add('active');
            fSecond.classList.add('active');
        }
        if(userNumber === 1){
            resetLed();
            resetSecondLed();
            bSecond.classList.add('active');
            cSecond.classList.add('active');
        }
        if(userNumber === 2){
            resetLed();
            resetSecondLed();
            aSecond.classList.add('active');
            bSecond.classList.add('active');
            dSecond.classList.add('active');
            eSecond.classList.add('active');
            gSecond.classList.add('active');
        }
        if(userNumber === 3){
            resetLed();
            resetSecondLed();
            aSecond.classList.add('active');
            bSecond.classList.add('active');
            cSecond.classList.add('active');
            dSecond.classList.add('active');
            gSecond.classList.add('active');
        }
        if(userNumber === 4){
            resetLed();
            resetSecondLed();
            bSecond.classList.add('active');
            cSecond.classList.add('active');
            fSecond.classList.add('active');
            gSecond.classList.add('active');
        }
        if(userNumber === 5){
            resetLed();
            resetSecondLed();
            aSecond.classList.add('active');
            cSecond.classList.add('active');
            dSecond.classList.add('active');
            fSecond.classList.add('active');
            gSecond.classList.add('active');
        }
        if(userNumber === 6){
            resetLed();
            resetSecondLed();
            aSecond.classList.add('active');
            cSecond.classList.add('active');
            dSecond.classList.add('active');
            eSecond.classList.add('active');
            fSecond.classList.add('active');
            gSecond.classList.add('active');
        }
        if(userNumber === 7){
            resetLed();
            resetSecondLed();
            aSecond.classList.add('active');
            bSecond.classList.add('active');
            cSecond.classList.add('active');
        }
        if(userNumber === 8){
            resetLed();
            resetSecondLed();
            aSecond.classList.add('active');
            bSecond.classList.add('active');
            cSecond.classList.add('active');
            dSecond.classList.add('active');
            eSecond.classList.add('active');
            fSecond.classList.add('active');
            gSecond.classList.add('active');
        }
        if(userNumber === 9){
            resetLed();
            resetSecondLed();
            aSecond.classList.add('active');
            bSecond.classList.add('active');
            cSecond.classList.add('active');
            dSecond.classList.add('active');
            fSecond.classList.add('active');
            gSecond.classList.add('active');
        }

    /*----------------------------*/

    userNumber = intArr[2];
        
        if(userNumber === 0){
            resetLed();
            a.classList.add('active');
            b.classList.add('active');
            c.classList.add('active');
            d.classList.add('active');
            e.classList.add('active');
            f.classList.add('active');
        }
        if(userNumber === 1){
            resetLed();
            b.classList.add('active');
            c.classList.add('active');
        }
        if(userNumber === 2){
            resetLed();
            a.classList.add('active');
            b.classList.add('active');
            d.classList.add('active');
            e.classList.add('active');
            g.classList.add('active');
        }
        if(userNumber === 3){
            resetLed();
            a.classList.add('active');
            b.classList.add('active');
            c.classList.add('active');
            d.classList.add('active');
            g.classList.add('active');
        }
        if(userNumber === 4){
            resetLed();
            b.classList.add('active');
            c.classList.add('active');
            f.classList.add('active');
            g.classList.add('active');
        }
        if(userNumber === 5){
            resetLed();
            a.classList.add('active');
            c.classList.add('active');
            d.classList.add('active');
            f.classList.add('active');
            g.classList.add('active');
        }
        if(userNumber === 6){
            resetLed();
            a.classList.add('active');
            c.classList.add('active');
            d.classList.add('active');
            e.classList.add('active');
            f.classList.add('active');
            g.classList.add('active');
        }
        if(userNumber === 7){
            resetLed();
            a.classList.add('active');
            b.classList.add('active');
            c.classList.add('active');
        }
        if(userNumber === 8){
            resetLed();
            a.classList.add('active');
            b.classList.add('active');
            c.classList.add('active');
            d.classList.add('active');
            e.classList.add('active');
            f.classList.add('active');
            g.classList.add('active');
        }
        if(userNumber === 9){
            resetLed();
            a.classList.add('active');
            b.classList.add('active');
            c.classList.add('active');
            d.classList.add('active');
            f.classList.add('active');
            g.classList.add('active');
        }
    }
    /*-----------------------------------------------------*/


// A função handleClick será chamada sempre que o botão 'ENVIAR' for clicado, sendo assim, ela será responsável por receber o valor do palpite do usuário, transformá-lo em número e caso seja com mais de 2 algarismos, transformá-lo em um array dividido. Depois a lógica utilizada para implementar o valor recebido no display será adicionando e removendo a classe 'active', cada número terá as classes definidas quando forem ativados.

}

document.addEventListener('submit', (e) => {
    e.preventDefault();
    inputGuess.value = "";
});

// Por último usando o método addEventListener, após o evento submit do form, a página não será atualizada (como é o padrão do HTML).