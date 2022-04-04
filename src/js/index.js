//declarar uma variável para a nossa input;
//criar uma variável para cada um dos 3 descontos
//criar a função com o calculo do desconto usando o button
//fazer o resultado aparecer na tela com uma variável resultado que vai ser ligada ao nosso html


function calcularDesconto(){
    event.preventDefault()

    let insiraValor = document.getElementById('valorParaDesconto').value;

    let valorEmNumero = parseFloat(insiraValor);
    
    let escolhaDeDesconto = document.getElementById('escolhaDesconto').value;


    let desconto = 0;
    let resultado = document.getElementById('resultadoDoDesconto');;
    let mensagemDeResultado = "";

    if(escolhaDeDesconto == 1){
        desconto = valorEmNumero - (0.025 * valorEmNumero)
        mensagemDeResultado = `Com o desconto aplicado o valor da compra fica ${desconto.toFixed(2)}`
        resultado.innerHTML = mensagemDeResultado;

    }else if(escolhaDeDesconto == 2){
        desconto = valorEmNumero - (0.05 * valorEmNumero);
        mensagemDeResultado = `Com o desconto aplicado o valor da compra fica ${desconto.toFixed(2)}`;
        resultado.innerHTML = mensagemDeResultado;

    }else if(escolhaDeDesconto == 3){
        desconto = valorEmNumero - (0.07 * valorEmNumero);
        mensagemDeResultado = `Com o desconto aplicado o valor da compra fica ${desconto.toFixed(2)}`;
        resultado.innerHTML = mensagemDeResultado;
    }
    


   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    // let descontoDoisEMeio = valorEmNumero - ((2.5 / 100) * valorEmNumero) 
   
    // let descontoCinco = valorEmNumero - ((5 / 100) * valorEmNumero);

    // let descontoSete = valorEmNumero - ((7 / 100) * valorEmNumero)


    // let resultado = document.getElementById('resultadoDoDescontoDoisEMeio');
    // let resultado2 = document.getElementById ('resultadoDoDescontoCinco');
    // let resultado3 = document.getElementById('resultadoDoDescontoSete')

    // let mensagemDeResultadoDoisEMeio = `Com 2.5% de desconto fica ${descontoDoisEMeio.toFixed(2)}`
    // resultado.innerHTML = mensagemDeResultadoDoisEMeio; 
    
    // let mensagemDeResultadoCinco = `Com 5% de desconto fica ${descontoCinco.toFixed(2)} `
    // resultado2.innerHTML = mensagemDeResultadoCinco;

    // let mensagemDeResultadoSete = `Com 7% de desconto fica ${descontoSete.toFixed(2)}`
    // resultado3.innerHTML = mensagemDeResultadoSete;

}

document.getElementById('tipsForm').addEventListener('submit', calcularDesconto);


