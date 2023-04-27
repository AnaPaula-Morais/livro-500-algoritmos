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

    var idadeNadador = parseInt(prompt("Qual a idade do nadador"));
    if(idadeNadador >= 5 && idadeNadador <= 7){
        console.log("Categoria infantil A");
    }else if(idadeNadador >= 8 && idadeNadador <= 10){
        console.log("Categoria infantil B");
    }else if(idadeNadador >= 11 && idadeNadador <= 13){
        console.log("Categoria juvenil A");
    }else if(idadeNadador >= 14 && idadeNadador <= 17){
        console.log("Categoria juvenil B");
    }else if(idadeNadador >= 18){
        console.log("Categoria senior");
    }else{
        console.log("Não existe categoria para essa idade");
    }
}

function algoritmo135(){
    //Criar um algoritmo que leia a idade de uma pessoa e informara sua classe eleitoral:
        //não-eleitor (abaixo de 16 anos)
        //eleitor obrigatório (entre 18 e 65 anos)
        //eleitor facultativo (entre 16 e 18 anos e maior de 65 anos)

    var idade = parseInt(prompt("Qual a idade"));
    if(idade <= 16){
        console.log("Não é eleitor");
    }else if(idade >= 18 && idade <= 65){
        console.log("Eleitor obrigatório");
    }else{
        console.log("Eleitor facultativo");
    }
}

function algoritmo136(){
    //Depois da liberação do governo para as mensalidades dos planos de saúde, as pessoas começaram a fazer pesquisas para descobrir um bom plano, não muito caro. Um vendedor de um plano de saúde apresentou a tabela a seguir. Criar um algoritmo que entre com o nome e a idade de uma pessoa e imprimir o nome e o valor que ela deverá pagar.
        //ate l0 anos -R$ 30 00
        //acima de 10 até 29 anos - R$ 60,00
        //acima de 29 até 45 anos - R$ 120,00
        //acima de 45 até 59 anos - R$ 150,00
        //acima de 59 até 65 anos - R$ 250,00
        //maior que 65 anos - R$ 400,00

    var nome = prompt("Nome da pessoa");
    var idade = parseInt(prompt("Idade da pessoa"));

    if(idade <= 10){
        console.log(nome + " pagará 30 reais");
    }else if(idade <= 29){
        console.log(nome + " pagará 60 reais");
    }else if(idade <= 45){
        console.log(nome + " pagará 120 reais");
    }else if(idade <= 45){
        console.log(nome + " pagará 150 reais");
    }else if(idade <= 59){
        console.log(nome + " pagará 150 reais");
    }else if(idade <= 65){
        console.log(nome + " pagará 250 reais");
    }else{
        console.log(nome + " pagará 400 reais");
    }
}

function algoritmo137(){
    //Ler três valores inteiros (variáveis a, b e c) e efetuar o cálculo da equação de segundo grau, apresentando: as duas raízes, separa os valores informados for possível fazer o cálculo (delta positivo ou zero); a mensagem "Não há raízes reais", se não for possível fazer o cálculo (delta negativo); e a mensagem "Não é equação do segundo grau", se o valor de a for igual a zero.

    var a = parseInt(prompt("Valor de A"));
    var b = parseInt(prompt("Valor de B"));
    var c = parseInt(prompt("Valor de C"));

    

}

function algoritmo138(){
    //Ler um número inteiro entre 1 e 12 e escrever o mês correspondente. Caso o usuário digite um número fora desse intervalo, deverá aparecer uma mensagem informando que não existe mês com este número.

    var mes = parseInt(prompt("Digite um número entre 1 e 12"));

    switch (mes) {
        case 1:
            console.log("Janeiro");
            break;
        case 2:
            console.log("Fevereiro");
            break;
        case 3:
            console.log("Março");
            break;
        case 4:
            console.log("Abril");
            break;
        case 5:
            console.log("Maio");
            break;
        case 6:
            console.log("Junho");
            break;
        case 7:
            console.log("Julho");
            break;
        case 8:
            console.log("Agosto");
            break;
        case 9:
            console.log("Setembro");
            break;
        case 10:
            console.log("Outubro");
            break;
        case 3:
            console.log("Novembro");
            break;
        case 4:
            console.log("Dezembro");
            break;
        default:
            console.log("Não existe mês correspondente")
            break;
    }
}

function algoritmo139(){
    //Sabendo que somente os municípios que possuem mais de 20.000 eleitores aptos têm segundo turno nas eleições para prefeito caso o primeiro colocado não tenha mais do que 50% dos votos, fazer um algoritmo que leia o nome do município, a quantidade de eleitores aptos, o número de votos do candidato mais votado e informar se ele terá ou não segundo turno em sua eleição municipal.

    var nomeMunicipio = prompt("Digite o nome do município");
    var qntEleitores = parseInt(prompt("Quantidade de eleitores aptos para votar"));
    var votos = parseFloat(prompt("Quantidade de votos do candidato mais votado"));

    if(qntEleitores > 20.000 && votos <= Math.floor(qntEleitores/2)){
        console.log(nomeMunicipio + " terá segundo turno");
    }else{
        console.log(nomeMunicipio + " não terá segundo turno");
    }
}

function algoritmo140(){
    //Um restaurante faz uma promoção semanal de descontos para clientes de acordo com as iniciais do nome da pessoa. Criar um algoritmo que leia o primeiro nome do cliente, o valor de sua conta e se o nome iniciar com as letras A, D, M ou S, dar um desconto de 30%. Para o cliente cujo nome não se inicia por nenhuma dessas letras, exibir a mensagem "Que pena. Nesta semana o desconto não é para seu nome; mas continue nos prestigiando que sua vez chegara".

    var primeiroNome = prompt("Digite o primeiro nome");
    var valorConta = parseFloat(prompt("Qual o valor da conta"));
    var primeiraLetra = primeiroNome.substring(0,1);
    var desconto = valorConta - (valorConta * 0.30);
    if(primeiraLetra == "A" || primeiraLetra == "a" || primeiraLetra == "D" || primeiraLetra == "d" || primeiraLetra == "M" || primeiraLetra == "m" || primeiraLetra == "S" || primeiraLetra == "s"){
        console.log(primeiroNome + " o valor da conta com desconto de 30% é " + desconto);
    }else{
       console.log("Que pena. Nesta semana o desconto não é para seu nome; mas continue nos prestigiando que sua vez chegará"); 
    }

}

function algoritmo141(){
    //Criar um algoritmo que leia o nome e o total de pontos de três finalistas de um campeonato de pingue-pongue e exibir a colocação da seguinte forma:
        //vencedor: ___________ xxx pontos
        //segundo colocado: ________ xxx pontos
        //terceiro colocado: _________ xxx pontos
    
    var nome1 = prompt("Digite o primeiro nome");
    var pontos1 = parseInt(prompt("Quantidade de pontos"));
    var nome2 = prompt("Digite o segundo nome");
    var pontos2 = parseInt(prompt("Quantidade de pontos"));
    var nome3 = prompt("Digite o terceiro nome");
    var pontos3 = parseInt(prompt("Quantidade de pontos"));

    var aux;
    var auxNome;

    if(pontos1 < pontos2){
        aux = pontos1;
        pontos1 = pontos2;
        pontos2 = aux;
        auxNome = nome1;
        nome1 = nome2;
        nome2 = auxNome;
    }else if(pontos1 < pontos3){
        aux = pontos1;
        pontos1 = pontos3;
        pontos3 = aux;
        auxNome = nome1;
        nome1 = nome3;
        nome3 = auxNome;
    }else if(pontos2 < pontos3){
        aux = pontos2;
        pontos2 = pontos3;
        pontos3 = aux;
        auxNome = nome2;
        nome2 = nome3;
        nome3 = auxNome;
    }

    console.log("Vencedor: " + nome1 + " " + pontos1 + " pontos");
    console.log("Segundo lugar: " + nome2 + " " + pontos2 + " pontos");
    console.log("Terceiro lugar: " + nome3 + " " + pontos3 + " pontos");

}

function algoritmo142(){
    //Em um campeonato nacional de arco-e-flecha, tem-se equipes de três jogadores para cada estado. Sabendo-se que os arqueiros de uma equipe não obtiveram o mesmo número de pontos, criar um algoritmo que informe se uma equipe foi classificada, de acordo com a seguinte especificação:
        //ler os pontos obtidos por cada jogador da equipe;
        //mostrar esses valores em ordem decrescente;
        //se a soma dos pontos for maior do que 100, imprimir a média aritmética entre eles; senão, imprimir a mensagem "Equipe desclassificada""
    
    var jogador1 = parseFloat(prompt("Digite os pontos do primeiro jogador"));
    var jogador2 = parseFloat(prompt("Digite os pontos do segundo jogador"));
    var jogador3 = parseFloat(prompt("Digite os pontos do terceiro jogador"));
    var aux;

    if(jogador1 > jogador2){
        aux = jogador1;
        jogador1 = jogador2;
        jogador2 = aux;
    }else if(jogador1 > jogador3){
        aux = jogador1;
        jogador1 = jogador3;
        jogador3 = aux;
    }else if(jogador2 > jogador3){
        aux = jogador2;
        jogador2 = jogador3;
        jogador3 = aux;
    }
    console.log("Jogador 1: " + jogador1 + " pontos");
    console.log("Jogador 2: " + jogador2 + " pontos"); 
    console.log("Jogador 3: " + jogador3 + " pontos");

    var somaPontos = jogador1 + jogador2 + jogador3;
    if(somaPontos > 100){
        console.log("Média: " + (somaPontos/3).toFixed(2));
    }else{
        console.log("Equipe desclassificada");
    }


}

function algoritmo143(){
    //Criar um algoritmo que verifique a(s) letra(s) central(is) de uma palavra. Se o numero de caracteres for ímpar, ele verifica se a letra central é uma vogal; caso contrario verifica se e um dos digrafos rr ou ss (só precisa, testar letras minusculas)

    

}
algoritmo142();
 
