function algoritmo116(){
    //Entrar com tres números e imprimir o maior número(suponha números diferentes)

    var num1 = parseInt(prompt("Digite o primeiro número"));
    console.log(num1);
    var num2 = parseInt(prompt("Digite o segundo número"));
    console.log(num2);
    var num3 = parseInt(prompt("Digite o terceiro número"));
    console.log(num3);

    if(num1 > num2 && num1 > num3){
        console.log("Maior: " + num1);
    }else if(num2 > num1 && num2 > num3){
        console.log("Maior: " + num2)
    }else{
        console.log("Maior: " + num3);
    }

}

function algoritmo117(){
    //Entrar com três números e armazenar o maior número na variável de nome maior(suponha números diferentes)

    var num1 = parseInt(prompt("Digite o primeiro número"));
    console.log(num1);
    var num2 = parseInt(prompt("Digite o segundo número"));
    console.log(num2);
    var num3 = parseInt(prompt("Digite o terceiro número"));
    console.log(num3);
    var maior;
    if(num1 > num2){
        maior = num1;
    }else{
        maior = num2;
    }if(num3 > maior){
        maior = num3
    }
    console.log("Maior: " + maior);

}

function algoritmo118(){
    //Entrar com três números e imprimi-los em ordem crescente(suponha números diferentes)

    var num1 = parseInt(prompt("Digite o primeiro número"));
 
    var num2 = parseInt(prompt("Digite o segundo número"));
    
    var num3 = parseInt(prompt("Digite o terceiro número"));
    

    if(num1 < num2 && num1 < num3){
        console.log(num1);
    }else if(num2 < num1 && num2 < num3){
        console.log(num2);
    }else if(num3 < num1 && num3 < num2){
        console.log(num3);
    }
    
    if((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)){
        console.log(num1);
    }else if((num2 > num1 && num2 < num3) || (num2 < num1 && num1 > num3)){
        console.log(num2);
    }else if ((num3 > num1 && num3 < num2) || (num3 < num1 && num3 > num2)){
        console.log(num3);
    }

    if(num1 > num2 && num1 > num3){
        console.log(num1);
    }else if(num2 > num1 && num2 > num3){
        console.log(num2);
    }else if (num3 > num1 && num3 > num2){
        console.log(num3);
    }
}

function algoritmo119(){
    //Entrar com três números e imprimi-los em ordem decrescente(suponha números diferentes)

    var num1 = parseInt(prompt("Digite o primeiro número"));
 
    var num2 = parseInt(prompt("Digite o segundo número"));
    
    var num3 = parseInt(prompt("Digite o terceiro número"));

    if(num1 > num2 && num1 > num3){
        console.log(num1);
    }else if(num2 > num1 && num2 > num3){
        console.log(num2);
    }else if (num3 > num1 && num3 > num2){
        console.log(num3);
    }

    if((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)){
        console.log(num1);
    }else if((num2 > num1 && num2 < num3) || (num2 < num1 && num1 > num3)){
        console.log(num2);
    }else if ((num3 > num1 && num3 < num2) || (num3 < num1 && num3 > num2)){
        console.log(num3);
    }

    if(num1 < num2 && num1 < num3){
        console.log(num1);
    }else if(num2 < num1 && num2 < num3){
        console.log(num2);
    }else if(num3 < num1 && num3 < num2){
        console.log(num3);
    }

}

function algoritmo120(){
    //Entrar com três números e armazena-los em três variáveis com os seguintes nomes: maior, intermediário e menor.(Suponha números diferentes)

    var num1 = parseInt(prompt("Digite o primeiro número"));
    var num2 = parseInt(prompt("Digite o segundo número"));
    var num3 = parseInt(prompt("Digite o terceiro número"));
    var maior, intermediario, menor;

    if(num1 < num2 && num1 < num3){
        menor = num1;
    }else if(num2 < num1 && num2 < num3){
        menor = num2;
    }else if(num3 < num1 && num3 < num2){
        menor = num3;
    }

    if(num1 > num2 && num1 < num3){
        intermediario = num1;
    }else if(num2 > num1 && num2 < num3){
        intermediario = num2;
    }else if(num3 > num1 && num3 < num2){
        intermediario = num3;
    }else if(num2 < num1 && num2 > num3){
        intermediario = num2;
    }

    if(num1 > num2 && num1 > num3){
        maior = num1; 
    }else if(num2 > num1 && num2 > num3){
        maior = num2;
    }else if(num3 > num1 && num3 > num2){
        maior = num3;
    }

    console.log("menor: " + menor);
    console.log("intermediário " + intermediario);
    console.log("maior " + maior);

}

function algoritmo121(){
    //Efetuar leitura de cinco números inteiros diferentes e identificar o maior e o menor valor.
    
    var num1 = parseInt(prompt("Digite o primeiro número"));
    var num2 = parseInt(prompt("Digite o segundo número"));
    var num3 = parseInt(prompt("Digite o terceiro número"));
    var num4 = parseInt(prompt("Digite o quarto número"));
    var num5 = parseInt(prompt("Digite o quinto número"));

    var maior, menor;

    if(num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5){
        maior = num1;
    }else if(num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5){
        maior = num2;
    }else if(num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5){
        maior = num3;
    }else if(num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5){
        maior = num4;
    }else if(num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4){
        maior = num5;
    }

    if(num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5){
        menor = num1;
    }else if(num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5){
        menor = num2;
    }else if(num3 < num1 && num3 < num2 && num3 < num4 && num3 < num5){
       menor = num3; 
    }else if(num4 < num1 && num4 < num2 && num4 < num3 && num4 < num5){
        menor = num4;
    }else if(num5 < num1 && num5 < num2 && num5 < num3 && num5 < num4){
        menor = num5;
    }

    console.log("Maior: " + maior);
    console.log("Menor: " + menor);
    
    

}

function algoritmo122(){
    //ler três números e imprimir se eles podem ou não ser lados de um triangulo

    var a = parseInt(prompt("Digite o primeiro lado"));
    var b = parseInt(prompt("Digite o segundo lado"));
    var c = parseInt(prompt("Digite o terceiro lado"));

    var condicao1 = a < b + c;
    var condicao2 = b < a + c;
    var condicao3 = c < a + b;

    if(condicao1 && condicao2 && condicao3){
        console.log("Podem ser lados de um triangulo");
    }else{
        console.log("Não podem ser lados de um triângulo");
    }
}

function algoritmo123(){
    //ler três números, os possiveis lados de um triângulo, e imprimir a classificação segundo os lados.

    var a = parseInt(prompt("Digite o primeiro lado"));
    var b = parseInt(prompt("Digite o segundo lado"));
    var c = parseInt(prompt("Digite o terceiro lado"));

    if((a < b) + c && (b < a) + c && (c < a) + b){
        if(a == b && a == c){
            console.log("Triangulo equilátero");
        }else if(a == b || a == c || b == c){
            console.log("Triangulo esosceles");
        }else{
            console.log("Triangulo escaleno");
        }
    }else{
        console.log("As medidas não formam um triangulo");
    }

}

function algoritmo124(){
    //Ler três números, os possíveis lados de um triângulo e imprimir a classificação segundo os ângulos.

    var a = parseInt(prompt("Digite o primeiro lado"));
    var b = parseInt(prompt("Digite o segundo lado"));
    var c = parseInt(prompt("Digite o terceiro lado"));
    

}

function algoritmo125(){
    //Entrar com a idade de uma pessoa e informar:
        //se é maior de idade
        //se é menor de idade
        //se é maior de 65 anos
    
    var idade = parseInt(prompt("Digite sua idade"));

    if(idade < 18){
        console.log("Menor de idade");
    }else if(idade >= 18 && idade <= 65){
        console.log("Maior de idade");
    }else{
        console.log("Maior de 65 anos");
    }
}

function algoritmo126(){
    //Ler um número e imprimir se ele é igual a 5, a 200, a 400,se está no intervalo entre 500 e 1000, inclusive, ou se ele está fora dos escopos anteriores.

    var num = parseInt(prompt("Digitar um número"));

    if(num == 5){
        console.log("O número digitado é igual a 5");
    }else if(num == 200){
        console.log("O número digitado é igual a 200");
    }else if(num == 400){
        console.log("O número digitado é igual a 400");
    }else if(num >= 500 && num <= 1000){
        console.log("O número digitado está entre 500 e 1000");
    }else{
        console.log("Número inválido");
    }
}

function algoritmo127(){
    //Entrar com nome, nota da PR1 e nota da PR2 de um aluno. Imprimir nome, nota da PR1, nota da PR2, média e uma das mensagens: Aprovado, Reprovado ou em Prova Final (a média é 7 para aprovação, menor que 3 para reprovação e as demais em prova final).
    

    var nome = prompt("Digite o nome do aluno");
    var nota1 = parseFloat(prompt("Digita a primeira nota"));
    var nota2 = parseFloat(prompt("Digite a segunda nota"));
    var media = (nota1 + nota2)/2;

    if(media >= 7){
        console.log("Nome: " + nome);
        console.log("Nota primeira prova: " + nota1);
        console.log("Nota segunda prova: " + nota2);
        console.log("Média " + media);
        console.log("Aluno APROVADO");
    }else if(media < 3){
        console.log("Nome: " + nome);
        console.log("Nota primeira prova: " + nota1);
        console.log("Nota segunda prova: " + nota2);
        console.log("Média " + media);
        console.log("Aluno REPROVADO");
    }else {
        console.log("Nome: " + nome);
        console.log("Nota primeira prova: " + nota1);
        console.log("Nota segunda prova: " + nota2);
        console.log("Média " + media);
        console.log("Aluno irá fazer prova final");
    }
}

function algoritmo128(){
    //Entrar com um verbo no infinitivo e imprimir uma das mensagens:
        //verbo não está no infinitivo
        //verbo da 1a conjugação
        //verbo da 2a conjugação
        //verbo da 32 conjugação

    var verbo = prompt("Digite um verbo");
    console.log(verbo);
    var ultimaLatra = verbo.slice(-1);
    

    if(ultimaLatra == "r" || ultimaLatra == "R"){
        var tamanho = verbo.length - 2;
        var letra = verbo.charAt(tamanho);
        
        if(letra == "A" || letra == "a"){
            console.log("O verbo " + verbo + " está na 1ª conjugação");
        }else if(letra == "E" || letra ==  "e"){
            console.log("O verbo " + verbo + " está na 2ª conjugação");
        }else if(letra == "I" || letra == "i"){
            console.log("O verbo " + verbo + " está na 3ª conjugação");
        }
    }else{
           console.log("O verbo não está no infinitivo"); 
        }
}

function algoritmo129(){
    //Entrar com o salário de uma pessoa e imprimir o desconto do INSS segundo a tabela a seguir:
    //menor ou igual a R$ 600,00 --- isento
    //maior que R$ 600,00 e menor ou igual a R$ 1200,00  --- 20%
    //maior que R$ 1200,00 e menor ou igual a R$2000,00 --- 25%
    //maior que R$ 2000,00 --- 30%

    
    var salario = parseFloat(prompt("Digite o valor do salário"));
    var desconto20 = salario * 0.2;
    var desconto25 = salario * 0.25;
    var desconto30 = salario * 0.30;
    if(salario <= 600){
        console.log("Isento");
    }else if(salario > 600 && salario <= 1200){
        console.log("O desconto será de " + desconto20);
    }else if(salario > 1200 && salario <= 2000){
        console.log("O desconto será de " + desconto25);
    }else if(salario > 2000){
        console.log("O desconto será de " + desconto30);
    }

}

function algoritmo130(){
    //Um comerciante comprou um produto e quer vendê-lo com um lucro de 45% se o valor da compra for menor que R$ 20,00; caso contrário, o lucro será de 30%. Entrar com o valor do produto e imprimir o valor da venda.

    var produto = parseFloat(prompt("Valor produto"));
    if(produto < 20){
        console.log("Valor de venda: " + produto * 1.45);
    }else{
        console.log("Valor de venda: " + produto * 1.3);
    }
}

function algoritmo131(){
    //A turma de Programação 1, por ter muitos alunos, será dividida em dias de provas. Após um estudo feito pelo coordenador, decidiu-se dividi-la em três grupos. Fazer um algoritmo que leia o nome do aluno e indicar a sala em que ele deverá fazer as provas, tendo em vista a tabela a seguir e sabendo-se que todas as salas se encontram no bloco F:
        //A - K:sala 101
        //L-N:sala 102
        //O - Z:sala 103

    var nomeAluno = prompt("Nome do aluno");
    if((nomeAluno.substring(0,1) >= "A" && nomeAluno.substring(0,1) <= "K") || (nomeAluno.substring(0,1) >= "a" && nomeAluno.substring(0,1) <= "k")){
        console.log("Bloco F, sala 101");
    }else if((nomeAluno.substring(0,1) >= "L" && nomeAluno.substring(0,1) <= "N") || (nomeAluno.substring(0,1) >= "l" &&nomeAluno.substring(0,1) <= "n")){
        console.log("Bloco F, sala 102");
    }else if((nomeAluno.substring(0,1) >= "O" && nomeAluno.substring(0,1) <= "Z") || (nomeAluno.substring(0,1) >= "o" && nomeAluno.substring(0,1) <= "z")){
        console.log("BLoco F, sala 103");
    }
    
}

function algoritmo132(){
   //Fazer um algoritmo que possa converter uma determinada quantia dada em reais para uma das seguintes moedas:
        //f- franco suíço
        //l- libra esterlina
        //d - dólar
        //m - marco alemão
        
    var valorReal = parseFloat(prompt("Digite o valor em real a ser convertido"));
    var conversao = prompt("F-franco suiço | L-libra | D-dólar |M-marco alemão");

    if(conversao == "F" || conversao =="f"){
        console.log("Valor convertido para francos suiços " + (valorReal * 0.17).toFixed(2));
    }else if(conversao == "L" || conversao == "l"){
        console.log("Valor convertido para libra esterlina " + (valorReal * 0.16).toFixed(2));
    }else if(conversao == "D" || conversao == "d"){
        console.log("Valor convertido para dolar " + (valorReal * 0.20).toFixed(2));
    }else if(conversao == "M" || conversao == "m"){
        console.log("Valor convertido para marco alemão " + (valorReal * 0.35).toFixed(2))
    }
}

function algoritmo133(){
    //Segundo uma tabela medica o peso ideal esta relacionado com a altura e o sexo. Fazer um algoritmo que receba a altura e o sexo de uma pessoa, calcular e imprimir o seu peso ideal utilizando as seguintes formulas
        //para homens: (72.7 * H) -58
        //para mulheres (62.1 * H) -44.7

    var altura = parseFloat(prompt("Altura"));
    var sexo = prompt("sexo: F/M");

    if(sexo == "M" || sexo == "m"){
        var pesoIdealHomem = (72.7 * altura) - 58;
        console.log("Peso ideal: " + pesoIdealHomem);
    }else if(sexo == "F" || sexo == "f"){
        var pesoIdealMulher = (61.1 * altura) - 44.7;
        console.log("Peso ideal: " + pesoIdealMulher);
    }
    
}

function algoritmo134(){
    /*A confederação brasileira de natação irá promover eliminatórias para o próximo mundial.Fazer um algoritmo que receba a idade de um nadador e imprimir a sua categoria segundo a tabela a seguir:
        Categoria     Idade
        infantil A    5-7anos
        infantil B    8-10anos
        juvenil A     11-13anos
        juvenil B     14-17anos
        sênior        maiores de 18 anos
    */

    
}
algoritmo133();
 
