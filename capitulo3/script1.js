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

function algoritmo89(){
    console.log("Planetas que podem ser analisados");
    console.log("1 mercurio");
    console.log("2 venus");
    console.log("3 marte");
    console.log("4 jupter");
    console.log("5 saturno");
    console.log("6 urano");
    var op = parseInt(prompt("Escolha o número referente ao planeta a ser analisado"));
    console.log(op);
    var pesoTerra = parseFloat(prompt("Diga o peso na terra"));
    console.log(pesoTerra);

    switch (op) {
        case 1:
            console.log("Seu peso no planeta terra é: " + (pesoTerra/10)*0.37);
            break;
        case 2:
            console.log("Seu peso no planeta terra é: " + (pesoTerra/10)*0.88);
            break;
        case 3:
            console.log("Seu peso no planeta terra é: " + (pesoTerra/10)*0.38);
            break;
        case 4:
            console.log("Seu peso no planeta terra é: " + (pesoTerra/10)*2.64);
            break;
        case 5:
            console.log("Seu peso no planeta terra é: " + (pesoTerra/10)*1.15);
            break;
        case 6:
            console.log("Seu peso no planeta terra é: " + (pesoTerra/10)*1.17);
            break;
        default:
            console.log("Esse planeta não pode ser analisado");
            break;
    }
}

function algoritmo90(){
    //entrar com um número e imprimi-lo caso seja menor que 20

    var num = parseInt(prompt("Digite um número inteiro"));
  

    if(num < 20){
        console.log(num);
    }
}

function algoritmo91(){
    //Contruir um algoritmo que leia dois valores numéricos inteiros e efetue a adição, caso o resultado seja maior que 10, apresenta-lo.

    var num1 = parseInt(prompt("Digite o 1º número inteiro"));
    console.log(num1);
    var num2 = parseInt(prompt("Digite o 2º número inteiro"));
    console.log(num2);

    var soma = num1 + num2;

    if(soma > 10){
        console.log(soma);
    }


}

function algoritmo92(){
    //Construir um algoritmo que leia dois números e efetue a adição. Caso o valor somado seja maior que 20, este deverá ser apresentado somando-se a ele mais 8, caso o valor somado seja menor ou igual a 20, este deverá ser apresentado subtraindo-se 5.

    var num1 = parseFloat(prompt("Digite o 1º número"));
    console.log(num1);
    var num2 = parseFloat(prompt("Digite o 2º número"));
    console.log(num2);

    var soma = num1 + num2;

    if(soma > 20){
        console.log(soma + 8);
    }else{
        console.log(soma - 5);
    }
}

function algoritmo93(){
    //entrar com um número e imprimir a raiz quadrada do número caso ele seja positivo e quadrado do número caso ele seja negativo.

    var num = parseFloat(prompt("Digite um número"));
    console.log(num);

    if(num > 0){
        console.log("Raiz: " + Math.sqrt(num));
    }else if(num < 0){
        console.log("Quadrado: " + num**2);
    }

}

function algoritmo94(){
    //Entrar com um número e imprimir uma das mensagens: é multiplo de 3 ou não é multiplo de 3.

    var num = parseInt(prompt("Digite um número"));
    console.log(num);

    if(num % 3 == 0){
        console.log("O número " + num + " é multiplo de 3");
    }else{
        console.log("O número " + num + " não é multiplo de 3");
    }

}

function algoritmo95(){
    //Entrar com um número e informar se ele é ou não divisível por 5.
    
    var num = parseInt(prompt("Digite um número"));
    console.log(num);

    if(num % 5 == 0){
        console.log("O número " + num + " é divisível por 5");
    }else{
        console.log("O número " + num + " não é divisível por 5");
    }

}

function algoritmo96(){
    //Entrar com um número e informar se ele é divisível por  3 e por 7

    var num = parseInt(prompt("Digite um número"));
    console.log(num);
    if(num % 3 == 0 && num % 7 == 0){
        console.log("O número "  + num + " é divisível por 3 e por 7");
    }else {
        console.log("O número não é divisível por 3 e por 7");
    }
}

function algoritmo97(){
    //entrar com um número e informar se ele é divisível por 10, por 5, por 2 ou se não é divisível por nenhum destes.

    var num = parseInt(prompt("Digite um número"));
    console.log(num);
    if(num % 10 == 0){
        console.log("O número " + num + " é divisível por 10");
    }else if(num % 5 == 0){
        console.log("O número " + num + " é divisível por 5");
    }else if(num % 2 == 0){
        console.log("O número " + num + " é divisível por 2");
    }else{
        console.log("O número " + num + " não é divisível por 2, nm por 5, nem por 10");
    }
}

function algoritmo98(){
    //A prefeitura do Rio de Janeiro abriu uma linha de crédito para os funcionários estatutários. O  valor máximo da prestação não poderá ultrapasssar 30% do salário bruto. Fazer um algoritmo que permita entrar com o salário bruto e o valor da prestação e informar se o emprestimo pode ou não ser concedido.


    var salarioBruto = parseFloat(prompt("Digite o salário bruto"));
    console.log(salarioBruto);
    var prestacao = parseFloat(prompt("Digite o valor da prestação"));

    if(prestacao < (salarioBruto * 0.3)){
        console.log("empréstimo aceiito");
    }else{
        console.log("empréstimo negado");
    }
}

function algoritmo99(){
    //ler um número inteiro de 3 casas decimais e imprimir se o algarismo da casa das centenas é par ou ímpar.
    
    var num = parseInt(prompt("Digite um número de 3 algarismo"));
    console.log(num);

    var centena = Math.floor(num /100);
    if(centena % 2 == 0){
        console.log("O algarismo da centena é par: " + centena);
    }else {
        console.log("O algarismo da centena é impar: " + centena);
    }

}

function algoritmo100(){
    //ler um número inteiro de 4 casas e imprimir se é ou não múltiplo de 4 o número formao pelos algarismos que estão nas casas das unidades de milhares e das centenas.

    var num = parseInt(prompt("Digite um número de 4 algarismos"));
    console.log(num);
    var centena = Math.floor(num/100);
    if(centena % 4 == 0){
        console.log("O número é multiplo de 4 " + centena);
    }else{
        console.log("O número não é multiplo de 4 " + centena);
    }
}

function algoritmo101(){
    //Construir um algoritmo que indique se o número digitado está compreendido entre 20 e 90 ou não.

    var num = parseInt(prompt("Digite um número inteiro"));
    console.log(num);
    if(num >= 20 && num <= 90){
        console.log("O número está entre 20 e 90");
    }else{
        console.log("O número não está entre 20 e 90");
    }

}

function algoritmo102(){
    //Entrar com um número e imprimir uma das mensagens: maior o que 20, igual a 20 ou menor que 20.

    var num = parseInt(prompt("Digite um número inteiro"));
    console.log(num);
    if(num > 20){
        console.log("O número é maior que 20");
    }else if(num < 20){
        console.log("O número é menor que 20");
    }else{
        console.log("O número é igual a 20");
    }
}

function algoritmo103(){
    //Entrar com o ano de nascimento de uma pessoa e o ano atual. Imprimir a idade da pessoa. Não esqueça de verificar se o ano de nascimento é válido ou não.

    var anoNascimento = parseInt(prompt("Digite seu ano de nascimento"));
    var anoAtual = parseInt(prompt("Digite o ano atual"));
    var idade = anoAtual - anoNascimento
    if(anoAtual < anoNascimento){
        console.log("Ano de nascimento inválido")
    }else{
       console.log("Sua idade é " + idade + " idade"); 
    }
    

}

function algoritmo104(){
    //Entrar com um nome, sexo e idade de uma pessoa. Se a pessoa for do sexo feminino e tiver menos de 25 anos, imprimir nome e a mensagem: Aceita. Caso contrário, imprimir nome e a mensagem: Não aceita.(considerar f ou F).

    var nome = prompt("Digite seu nome");
    var sexo = prompt("Digite seu sexo(F/M)");
    var idade = parseInt(prompt("Digite sua idade"));

    if((sexo == "f" || sexo == "F") && idade < 25){
        console.log(nome + " ACEITO(A)");
    }else{
        console.log(nome + " NÃO ACEITO(A)");
    }
}

function algoritmo105(){
    //Entrar com a sigla do estado de uma pessoa e imprimir uma das mensagens:
        //carioca
        //paulista
        //mineiro
        //outros estados
    
    var estado = prompt("Digite a sigla do seu estado");
    if(estado == "RJ" || estado == "rj"){
        console.log("Carioca")
    }else if(estado == "SP" || estado == "sp"){
        console.log("Paulista");
    }else if(estado == "MG" || estado == "mg"){
        console.log("Mineiro");
    }else{
        console.log("Outro estado");
    }
}

function algoritmo106(){
    //Entrar com um nome e imprimi-lo se o primeiro caractere for A(considerar letra minúscula ou maiuscula)
    //str.charAt(0)

    var nome = prompt("Digite um nome");
    if(nome.charAt(0) == "A" || nome.charAt(0) == "a"){
        console.log(nome);
    }

}

function algoritmo107(){
    //Entrar com o nome de uma pessoa e so imprimi-lo se o pré-nome for JOSÉ.

    var nome = prompt("Digite um nome");
   
    if(nome.substring(0, 4) == "JOSÉ" || nome == "JOSÉ"){
        console.log(nome);
    }

    
}

function algoritmo108(){
    //Idem ao anterior, porém, considerar JOSÉ, José ou josé


}

function algoritmo109(){
    //Criarr um algoritmo que entre com dois nomes e imprimi-los em ordem alfabética

    var nome1 = prompt("Digite o primeiro nome");
    console.log(nome1);
    var nome2 = prompt("Digite o segundo nome");
    console.log(nome2);

    if(nome1 < nome2){
        console.log(nome1 + " ," + nome2);
    }else{
        console.log(nome2 + " ," + nome1);
    }
}

function algoritmo110(){
    //Criar um algoritmo que leia dois números  imprimir uma messagem se são iguais ou diferentes.

    var num1 = parseInt(prompt("Digite o primeiro número"));
    console.log(num1);
    var num2 = parseInt(prompt("Digite o segundo número"));
    console.log(num2);

    if(num1 == num2){
        console.log("Iguais");
    }else{
        console.log("Diferente");
    }

}

function algoritmo111(){
    //Entrar com dois números e imprimir o maior número(suponha números diferentes)

    var num1 = parseInt(prompt("Digite o primeiro número"));
    console.log(num1);
    var num2 = parseInt(prompt("Digite o segundo número"));
    console.log(num2);

    if(num1 > num2){
        console.log("O número maior é: " + num1);
    }else{
        console.log("O número maior é: " + num2);
    }



}

function algoritmo112(){
    //Entrar com dois números e imprimir o menor número(suponha números diferentes)

    var num1 = parseInt(prompt("Digite o primeiro número"));
    console.log(num1);
    var num2 = parseInt(prompt("Digite o segundo número"));
    console.log(num2);

    if(num1 < num2){
        console.log("O número menor é: " + num1);
    }else{
        console.log("O número menor é: " + num2);
    }
}

function algoritmo113(){
    //Entrar com dois números e imprimi-los em ordem crescente(suponha números diferentes)

    var num1 = parseInt(prompt("Digite o primeiro número"));
    console.log(num1);
    var num2 = parseInt(prompt("Digite o segundo número"));
    console.log(num2);

    if(num1 < num2){
        console.log(num1 + ", " + num2);
    }else{
        console.log(num2 + ", " + num1);
    }
}

function algoritmo114(){
    //Entrar com dois números e imprimir-los em ordem decrescente(suponha números diferentes)
    
    var num1 = parseInt(prompt("Digite o primeiro número"));
    console.log(num1);
    var num2 = parseInt(prompt("Digite o segundo número"));
    console.log(num2);

    if(num1 > num2){
        console.log(num1 + ", " + num2);
    }else{
        console.log(num2 + ", " + num1);
    }

}

function algoritmo115(){
    //Criar o algoritmo que deixe entrar com dois números e imprimir o quadrado do menor número e a raiz quadrada do maior número, se for possivel.

    var num1 = parseInt(prompt("Digite o primeiro número"));
    console.log(num1);
    var num2 = parseInt(prompt("Digite o segundo número"));
    console.log(num2);

    if(num1 > num2){
        console.log("raiz: " + Math.sqrt(num1) + ", " + num2**2);
    }else if(num2 > num1){
        console.log("raiz: " + Math.sqrt(num2) + ", " + num1**2);
    }else{
        console.log("Números iguais");
    }
}

