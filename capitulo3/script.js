function algoritmo83(){
    //ler um número e se for positivo, imprimir o seu inverso, caso contrário, imprimir o valor absoluto do número.

    var num = parseInt(prompt("Digite um número"));
    console.log(num);

    if(num > 0){
        var inverso = 1/num;
        console.log("Inverso: " + inverso);
    }else{
        var absoluto = num * (-1);
        console.log("Absoluto: " + absoluto);
    }
}

function algoritmo84(){
    //Ler um número e imprimir se ele é par ou ímpar

    var num = parseInt(prompt("Digite um número"));
    console.log(num);

    if (num % 2 == 0){
        console.log("O número " + num + " é par");
    }else{
        console.log("O número " + num + " é ímpar");
    }
}

function algoritmo85(){
    var a, b, c , max;

    a = parseInt(prompt("Digite o 1º número"));
    console.log(a);
    b = parseInt(prompt("Digite o 2º números"));
    console.log(b);
    c = parseInt(prompt("Digite o 3º número"));
    console.log(c);

    if(a > b){
        if(a > c){
            max = a;
        }else{
            max = c;
        }
    }else{
        if(b > c){
            max = b;
        }else{
            max = c;
        }
    }
    console.log(max);
}

function algoritmo86(){
    //ler um número e imprimir se ele é positivo, negativo ou nulo.

    var num = parseInt(prompt("Digite um número"));
    console.log(num);
    if(num < 0){
        console.log("O número digitado é negativo");
    }else if(num > 0){
        console.log("O número digitado é positivo");
    }else{
        console.log("O número digitado é nulo");
    }
}

function algoritmo87(){
    //Criar um algorítmo que permita ao aluno responder qual a capital do Brasil. Todas as possibilidades deverao ser pensadas

    var capital = prompt("Qual a capital do Brasil");
    console.log(capital);

    if(capital == "BRASÍLIA" || capital == "Brasília"){
        console.log("Parabens, você acertou");
    }else if(capital == "brasília" || capital == "brazília" || capital == "BRAZÍLIA" || capital == "Brasilia" || capital == "BRASILIA" || capital == "brasilia"){
        console.log("Certo, mais atenção para a grafia: Brasília ou BRASÍLIA");
    }else{
        console.log("ERRADO");
    }
}

function algoritmo88(){
    console.log("***************************");
    console.log("        CALCULADORA        ");
    console.log("***************************");
    console.log("      + para somar         ");
    console.log("      - para subtrair      ");
    console.log("      * para multiplicar   ");
    console.log("      / para dividir       ");
    var opcao = prompt("Digite uma das opções que aparece no console");
    console.log(opcao);

    if(opcao == "+"){
        var num1 = parseFloat(prompt("Digite o 1º número"));
        console.log(num1);
        var num2 = parseFloat(prompt("Digite o 2º número"));
        console.log(num2);
        console.log("A soma dos números é: " + (num1 + num2));
    }else if(opcao == "-"){
        var num1 = parseFloat(prompt("Digite o 1º número"));
        console.log(num1);
        var num2 = parseFloat(prompt("Digite o 2º número"));
        console.log(num2);
        console.log("A subtração dos números é: " + (num1 - num2));
    }else if(opcao == "*"){
        var num1 = parseFloat(prompt("Digite o 1º número"));
        console.log(num1);
        var num2 = parseFloat(prompt("Digite o 2º número"));
        console.log(num2);
        console.log("A multiplicação dos números é: " + (num1 * num2));
    }else if(opcao == "/"){
        var num1 = parseFloat(prompt("Digite o 1º número"));
        console.log(num1);
        var num2 = parseFloat(prompt("Digite o 2º número"));
        console.log(num2);
        console.log("A divisão dos números é: " + (num1 / num2))
    }else{
        console.log("Opção inválida");
    }

}



algoritmo88();
  