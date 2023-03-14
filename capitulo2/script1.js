function algoritmo29() {
  var nome = prompt("Digite seu nome ");
  console.log("Olá " + nome);
}

function algoritmo30() {
  var produto = 28 * 43;
  console.log(produto);
}

function algoritmo31() {
  var mediaAritmetica = (8 + 9 + 7) / 3;
  console.log(mediaAritmetica);
}

function algoritmo32() {
  var numInt = parseInt(prompt("Digite um número inteiro. "));
  console.log("Número Digitado: " + numInt);
}

function algoritmo33() {
  var num1, num2;
  num1 = parseInt(prompt("Digite o 1º número: "));
  num2 = parseInt(prompt("Digite o 2º número: "));

  console.log("Número 1: " + num1);
  console.log("Número 2: " + num2);
}

function algoritmo34() {
  var num = parseInt(prompt("Digite um número inteiro: "));

  var antecessor = num - 1;
  var sucessor = num + 1;

  console.log("O antecessor de " + num + " é " + antecessor);
  console.log("O sucessor de " + num + " é " + sucessor);
}

function algoritmo35() {
  var nome, endereco, telefone;
  nome = prompt("Digite seu nome: ");
  endereco = prompt("Digite seu endereço: ");
  telefone = prompt("Digite seu telefone ");

  console.log("Nome: " + nome);
  console.log("Endereço: " + endereco);
  console.log("Telefone: " + telefone);
}

function algoritmo36() {
  var num1 = parseInt(prompt("Digite um número: "));
  var num2 = parseInt(prompt("Digite outro número: "));
  var soma = num1 + num2;
  alert("O resultado da soma é: " + soma);
}

function lgoritmo37() {
  var num1 = parseInt(prompt("Digite um número: "));
  var num2 = parseInt(prompt("Digite outro número: "));
  var prod = num1 * num2;
  alert("Produto: " + prod);
}

function algoritmo38() {
  var numReal = parseFloat(prompt("Digite um número real: "));
  var tercaParte = numReal / 3;
  alert("Terça parte é: " + tercaParte);
}

function algoritmo39() {
  var nota1 = parseInt(prompt("Digite a 1ª nota: "));
  console.log(nota1);
  var nota2 = parseInt(prompt("Digite 2ª nota: "));
  console.log(nota2);
  var media = (nota1 + nota2) / 2;
  console.log("Média: " + media);
}

function algoritmo40() {
  var dividendo = parseInt(prompt("Entre com o dividendo: "));
  console.log(dividendo);
  var divisor = parseInt(prompt("Entre com o divisor: "));
  console.log(divisor);
  var quoc = Math.floor(dividendo / divisor);
  var rest = dividendo % divisor;
  console.log("Dividendo: " + dividendo);
  console.log("Divisor: " + divisor);
  console.log("Quociente: " + quoc);
  console.log("Resto: " + rest);
}

function algoritmo41() {
  var valor1, valor2, valor3, valor4, mediaPonderada;
  valor1 = prompt("Entre com o 1º valor: ");
  console.log(valor1);
  valor2 = prompt("Entre com o 2º valor: ");
  console.log(valor2);
  valor3 = prompt("Entre com o 3º valor: ");
  console.log(valor3);
  valor4 = prompt("Entre com o 4º valor: ");
  console.log(valor4);

  mediaPonderada = (valor1 * 1 + valor2 * 2 + valor3 * 3 + valor4 * 4) / 10;
  console.log("Média Ponderada: " + mediaPonderada);
}

function algoritmo42() {
  var angulo, radiando;
  angulo = prompt("Indique um êngulo em graus: ");
  console.log(angulo);
  radiando = (angulo * Math.PI) / 180;

  console.log("Seno: " + Math.sin(radiando));
  console.log("Co-seno: " + Math.cos(radiando));
  console.log("Tangente: " + Math.tan(radiando));
  console.log("Co-secante: " + 1 / Math.sin(radiando));
  console.log("Secante: " + 1 / Math.cos(radiando));
  console.log("Cotangente: " + 1 / Math.tan(radiando));
}

function algoritmo43() {
  var num, log;
  num = prompt("Digite um número: ");
  log = Math.log10(num);
  console.log("Logaritmo: " + log);
}

function algoritmo44() {
  var num, base, logaritmo;
  num = prompt("Digite um número: ");
  console.log(num);
  base = prompt("Digite a base: ");
  console.log(base);

  logaritmo = Math.log(num) / Math.log(base);
  console.log("O logaritmo, " + num + " na base " + base + " é: " + logaritmo);
}

function algoritmo45() {
  var num = prompt("Digite um número: ");
  var quardrado = Math.pow(num, 2);
  var raiz = Math.sqrt(num);

  console.log("Número: " + num);
  console.log("Quadrado: " + quardrado);
  console.log("Raiz quadrada: " + raiz);
}

function algoritmo46() {
  var saldo = prompt("Digite o saldo: ");
  console.log(saldo);
  var novoSaldo = saldo * 1.01;

  console.log(novoSaldo);
}

function algoritmo47() {
  var num, c, d, u, num1;
  num = parseInt(prompt("Digite um número com 3 dígitos"));
  console.log(num);

  c = Math.floor(num / 100);
  d = Math.floor((num % 100) / 10);
  u = num % 10;

  num1 = u * 100 + d * 10 + c;
  console.log("Número: " + num);
  console.log("Número invertido: " + num1);
}

function algoritmo48() {
  /*100 quilowatts de energia custa um sétimo do salário mínimo
    Fazer um algorítmo que receba o valor do salário mínimo e
    a quantidade de quilowatts gasta por uma residência
    -Imprima:
      o valor em reais de cada quilowatts
      o valor em reais a ser pago
      o novo valor a ser pago por essa residência com um desconto de 10%
  */

  var salarioMinimo = prompt("Digite o valor do salário mínimo");
  console.log(salarioMinimo);
  var qntQuilowatts = prompt("Qual a quantidade de quilowatts gasto?");
  console.log(qntQuilowatts);

  var precoQuilowatt = salarioMinimo / 7 / 100;
  var valorPagar = precoQuilowatt * qntQuilowatts;
  var valorDesconto = valorPagar - valorPagar / 10;
  console.log("Valor em reais de cada quilowatt: " + precoQuilowatt + " reais");
  console.log("Valor em reais a ser pago: " + valorPagar + " reais");
  console.log("Valor com desconto de 10%: " + valorDesconto + " reais");
}

// function algoritmo49(){
//   var nome = prompt("Digite um nome");
//   console.log("Todo o nome " + nome);
//   console.log("Primeiro caractere: " + nome.substring(0,1));
//   console.log("Ultimo caractere: " + nome.substring(-1,1));
//   console.log("Quarto caractere " + nome.substring(3));
//   console.log("Todos menos o  primeiro " + nome.substring(2));
//   console.log("Os dois últimos " + substring());

// }

function algoritmo50() {
  /*Entrar com a base e a altura de um retângulo e imprimir a seguinte saída:
    perimetro p=2(b+h)
    area a=b*h
    diagonal */

  var base = parseInt(prompt("Digite a base do retângulo"));
  console.log(base);
  var altura = parseInt(prompt("Digite a altura do retângulo"));
  console.log(altura);
  var perimetro = 2 * (base + altura);
  var area = base * altura;
  var diagonal = Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2));
  console.log("Perímetro: " + perimetro);
  console.log("Área: " + area);
  console.log("Diagonal: " + diagonal.toFixed(3));
}

function algoritmo51() {
  /*Entrar com o raio de um círculo e imprimir a seguinte saída:
    perímetro: p=2*pi*raio
    área: a=pi*raio elevado a 2
    */

  var raio = parseInt(prompt("Digite o raio do círculo"));
  console.log(raio);
  var perimetro = 2 * Math.PI * raio;
  var area = Math.PI * Math.pow(raio, 2);

  console.log("Perímetro: " + perimetro);
  console.log("Área: " + area);
}

function algoritmo52() {
  /* Entrar com o lado de um quadrado e imprimir:
    perímetro p=l*4
    area a=l elevado a 2
    diagonal d=l*raiz(2)
  */

  var lado = parseInt(prompt("Digite valor do lado de quadrado"));
  console.log(lado);

  var perimetro = lado * 4;
  var area = Math.pow(lado, 2);
  var diagonal = lado * Math.sqrt(2);

  console.log("Perímetro: " + perimetro);
  console.log("Área: " + area);
  console.log("Diagonal: " + diagonal);
}

function algoritmo53() {
  /* Entrar com os lados a,b,c de um paralalepípedo. Calcular e imprimir a diagonal.*/

  var ladoA = parseInt(prompt("Digite o valor do lado A"));
  var ladoB = parseInt(prompt("Digite o valor do lado B"));
  var ladoC = parseInt(prompt("Digite o valor do lado C"));

  var diagonal = Math.sqrt(
    Math.pow(ladoA, 2) + Math.pow(ladoB, 2) + Math.pow(ladoC, 2)
  );
  console.log("Diagonal: " + diagonal);
}

function algoritmo54() {
  /*Criar um algoritmo que calcule e imprima a área de um tiangulo
    a=b*h/2
  */

  var base = parseInt(prompt("Digite a base do triangulo"));
  var altura = parseInt(prompt("Digite a altura do triangulo"));

  var areaTriangulo = (base * altura) / 2;
  console.log("Area: " + areaTriangulo);
}

function algoritmo55() {
  /* Criar um algoritmo que calcule e imprima a área de um losango.
    a=D*d/2
  */

  var diagonalMaior = parseInt(prompt("Digite o valor da diagonal maior"));
  var diagonalMenor = parseInt(prompt("Digite o valor da diagonal menor"));

  var area = (diagonalMaior * diagonalMenor) / 2;
  console.log("Area losango: " + area);
}

function algoritmo56() {
  /* Entrar com o nome e idade. Imprimir a seguinte saida:
    nome:
    idade:
  */

  var nome = prompt("Digite su nome");
  var idade = parseInt(prompt("Digite sua idade"));
  console.log("Nome: " + nome);
  console.log("Idade: " + idade);
}

function algoritmo57() {
  /*Entrar com duas notas e imprimir a média final*/

  var nota1 = parseFloat(prompt("Digite a primeira nota"));
  var nota2 = parseFloat(prompt("Digite a primeira nota"));
  var media = (nota1 + nota2) / 2;
  console.log("Média truncada: " + Math.trunc(media));
  console.log("Média arredondada: " + Math.round(media));
}

function algoritmo58() {
  /*Entrar com 3 números e imprimir o valor de x, sabendo que:
      x= num1 + num2/num3+num1 + 2(num1-num2) + log64 na base 2
  */
  var num1 = parseFloat(prompt("Digite o primeiro número"));
  var num2 = parseFloat(prompt("Digite o segundo número"));
  var num3 = parseFloat(prompt("Digite o terceiro número"));

  var valorX = num1 + num2/num3+num1 + 2*(num1-num2) + Math.log2(64);
  console.log("Valor de x é: " + valorX);
}

function algoritmo59(){
  /*Entrar com os valores dos catetos de  um triangulo retangulo e imprimir a hipotenusa*/

  var cateto1 = parseFloat(prompt("Digite o valor do cateto 1: "));
  var cateto2 = parseFloat(prompt("Digite o valor do cateto 2: "));
  var hipotenusa = Math.sqrt(cateto1**2 + cateto2**2);
  console.log("Hipotenusa: " + hipotenusa); 
}

function algoritmo60(){
  //Entrar com a razão de uma PA e o valor do primeiro termo. Calcular e imprimir o 10 termo da série.

  var razao = parseInt(prompt("Qual a razão de PA"));
  var termo = parseInt(prompt("Qual o valor do primeiro termo"));

  var termo10 = termo + 9*razao;
  console.log("O décimo termo é: " + termo10);
}

function algoritmo61(){
  //Entrar com a razão de uma PG e o valor o primeiro termo. Calcular e imprimir o 5 termo.

  var razao = parseInt(prompt("Qual a razão de PG"));
  var termo = parseInt(prompt("Qual o valor do primeiro termo"));

  var termo5 = termo * razao^4;
  console.log("O quinto termo é: " + termo5);

}

function algoritmo62(){
  //Faça um algorítmo que possa entrar com o valor de um produto e imprima o novo valor tendo em vista que o desconto foi de 9%.

  var valorProduto = parseFloat(prompt("Digite o valor do produto"));

  var desconto = valorProduto - (valorProduto * 0.09) ;
  console.log("O valor do produto com desconto de 9% ficou: " + desconto);

}

function algoritmo63(){
  //Criar um algoritmo que efetue o calculo do salário líquido de um professor. O dados fornecidos serão: valor da hora aula, número de aulas dadas no mês e percntual de desconto do inss.

  var horasTrabalhadas = parseInt(prompt("Horas trabalhadas"));
  console.log(horasTrabalhadas);
  var valorAula = parseFloat(prompt("Valor da hora aula"));
  console.log(valorAula);
  var desconto = parseFloat(prompt("Percentual de desconto INSS"));
  console.log(desconto);

  var salarioBruto = horasTrabalhadas * valorAula;
  var totalDesconto = (desconto/100) * salarioBruto;
  var salarioLiquio = (salarioBruto - totalDesconto).toFixed(2);
  console.log("O salario líquido é " + salarioLiquio);
}

function algoritmo64(){
  //ler uma temperatura em graus celsius ee apresenta-la convertida em graus fahrenheit.

  var temperaturaCelsius = parseFloat(prompt("Digite a temperatura em graus celsius"));
  var f = (temperaturaCelsius*1.8) + 32;
  console.log("A temperatura em fahrenheit é: " + f);
}

function algoritmo65(){
  //Calcular e apresentar o valor do volume de um lata de óleo utilizando a fórmula: volume = 3.14159 * R ao quadrado * altura

  var alturaLata = parseFloat(prompt("Digite a altura da lata"));
  console.log(alturaLata);
  var raioLata = parseFloat(prompt("Digite o raio da lata"));
  console.log(raioLata);
  var volumeLata = 3.14159 * raioLata**2 * alturaLata;
  console.log("O volume da lata é: " + volumeLata);
}

function algoritmo66(){
  //Efetuar o calculo da quantidade de litros de combustível gastos em uma viagem, sabendo-se que o carro faz 12km com um litro. Deverão ser fornecidos o tempo gasto na viageme a velocidade média. 
  //distancia = tempo * velocidade
  //litros usados = distancia/12
  //o algoritmo deverá apresentar os valores de velocidade média, tempo gasto na viagem, diatancia percorrida e a quantidade e litros utilizados na viagem.

  var tempo = parseInt(prompt("Qual o tempo da viagem"));
  var velocidade = parseInt(prompt("Qual a velocidade média"));
  var distancia = tempo*velocidade;
  var litrosUsados = (distancia/12).toFixed(2);

  console.log("Velocidade média da viagem: " + velocidade);
  console.log("Tempo da viagem: " + tempo);
  console.log("Distância percorrida: " + distancia);
  console.log("Litro utilizados: " + litrosUsados);
}

function algoritmo67(){
  //Efetuar o calculo  do valor de uma prestação em atraso, utilizanddo a fórmula:
  //prestação = valor + (valor*taxa/100)*tempo.

  var valor = parseFloat(prompt("Digite o valor da prestação"));
  console.log(valor);
  var taxa = parseFloat(prompt("Qual o valor da taxa"));
  console.log(taxa);
  var tempo = parseInt(prompt("Qual o tempo em meses"));
  console.log(tempo);

  var prestacaoAtasada = valor + (valor * taxa)/100 * tempo;
  console.log("O valor da prestação em atraso é: " + prestacaoAtasada);
}

function algoritmo68(){
  //Ler dois valores para as variáveis A e B, efetuar a troca dos valores de forma que a variável A passe a ter o valor da variável B e que a variável Bpasse a ter o valor da variável A. Apresentar os valores trocados.

  var a = parseInt(prompt("Digite um valor inteiro"));
  console.log(a);
  var b = parseInt(prompt("Digite outro valor inteiro"));
  console.log(b);
  var aux = a;
  a = b;
  b = aux;

  console.log("A: " + a + " " + "B: " + b);
}


function algoritmo69(){
  //Criar um algoritmo que leia o numerador e o denominador de uma fração e transforma-lo em um número decimal.

  var numerador = parseFloat(prompt("Digite o numerador"));
  console.log(numerador);
  var denominador = parseFloat(prompt("Digite o denominador"));
  console.log(denominador);
  var numDecimal = numerador/denominador;
  console.log("Decimal: " + numDecimal);
}

function algoritmo70(){
  //Todo restaurante,embora por lei não possa obrigar o cliente a pagar, cobra 10% para o garçom. Fazer um algorítmo que leia o valor gasto com despesas realizadas em um restaurante e imprima o valor total com gorjeta.

  var conta = parseFloat(prompt("Qual o valor a conta no restaurante"));
  console.log(conta);

  var valorComGorjeta = (conta + (0.1 * conta)).toFixed(2);
  console.log("Valor com a gorjeta será: " + valorComGorjeta);

}

function algoritmo71(){
  //Criar um algorítmo que leia um valor de hora e informe quantos min se passaram desde o início do dia.

  var hora = parseInt(prompt("Qual a hora atual"));
  var minutos = parseInt(prompt("Qual os minutos"));
  var minutoTotal = hora *  60 + minutos;
  console.log("Até agora se passaram: " + minutoTotal + " minutos");
}

function algoritmo72(){
  //Criar um algorítmo que leia o valor de um depósito e o valor da taxa de juros. Calcular e imprimir o valor de renndimento e o valor total depois do rendimento.

  var valorDeposito = parseFloat(prompt("Qual o valor do depósito?"));
  console.log(valorDeposito);
  var taxaJuros = parseFloat(prompt("Qual o valor a taxa de juros?"));
  console.log(taxaJuros);

  var valorRendimento = valorDeposito * taxaJuros/100;
  var valorTotal = valorDeposito + valorRendimento;
  console.log("Rendimentos: " + valorRendimento + " Total: " + valorTotal);
}

function algoritmo73(){
  //Criar um algorítmo que receba um número real, calcular e imprimir:
  //a parte inteira do número
  //a parte fracionário do número
  //o número arredondado

  // var num = parseFloat(prompt("Digite um número decimal"));
  // console.log(num);
  //  var parteInteira;
}

function algoritmo74(){
  //Fazer um algorítmo que leia o valor do salário mínimo e o valor do salário de uma pessoa. Calcular e imprimir quantos salários mínimos ela ganha.

  var salarioMinimo = parseFloat(prompt("Qual o valor do salário mínimo"));
  var salarioPessoa = parseFloat(prompt("Qual o valor do salário da pessoa"));

  var salarios = salarioPessoa/salarioMinimo;
  console.log("A pessoa ganha " + salarios + " salarários mínimos");
}

function algoritmo75(){
  //Criar um algorítmo que leia o peso de uma pessoa, só a parte inteira, calcular e imprimir:
  //o peso da pessoa em gramas
  //novo peso, em gramas, se a pessoa engordar 12%

  var peso = parseInt(prompt("Digite a parte inteira do seu peso"));
  console.log(peso);
  var pesoGramas = peso * 1000;
  var novoPeso = pesoGramas * 1.12;
  console.log("Novo peso: " + novoPeso);
}

function algoritmo76(){
  //Criar um algorítmo que leia um número entre 0 e 60 e imprimir o seu sucessor, sabendo que o sucessor de 60 é 0. Não pode ser utilizado nenhum comando de seleção e nem d repetição.

  var num = parseInt(prompt("Digite um número de 0 a 60"));
  console.log("Sucessor: " + (num + 1)%61);
}

function algoritmo77(){
  //leia dois números reais e imprimir o quadrado da diferença do primeiro valor pelo segundo e a diferença dos quadrados.

  var num1 = parseFloat(prompt("Digite um número"));
  console.log(num1);
  var num2 = parseFloat(prompt("Digite um outro número"));
  console.log(num2);

  var diferenca = (num1 - num2)**2;
  var quadrados = num1**2 - num2**2;
  console.log("O quadrado da diferença: " + diferenca + ", " + "diferença dos quadrados " + quadrados); 
}

function algoritmo78(){
  //Dado um polígono convexo de n lados, podemos calcular o número de diagonais diferentes(nd) desse poligogo pela formula: nd=n(n-3)/2. Fazer um algorítmo que leia quantos lados tem o polígono, calcule e escreva o número de diagonais diferentes (nd) do mesmo.

  var lados = parseInt(prompt("Quantos lados tem o polìgono"));
  var diagonais = lados*(lados-3)/2;
  caonsole.log("Número de diagonais: " + diagonais);

}

function algoritmo79(){
  //Uma pessoa resolveu fazer uma aplicação em uma poupança programada. Para calcular seu rendimento, ela deverá fornecer o valor constante da aplicação mensal, a taxa e o número de meses. Sabendo-se que a fórmula usada para este cálculo é: 
  //p*(1+i)elevado a n - 1 / i
  //i=taxa
  //p=aplicação mensal
  //n=número de meses

  var valorAplicacao = parseFloat(prompt("Qual o valor da aplicação"));
  console.log(valorAplicacao);
  var taxa = parseFloat(prompt("Qual a taxa"));
  console.log(taxa);
  var meses = parseInt(prompt("Número de meses"));
  console.log(meses);

  var formula = valorAplicacao * (((1+taxa)**meses - 1))/taxa;
  console.log("O valor acumulado: " + formula);
}

function algoritmo80(){
  //Criar um algoritmo que leia a quantidade de fitas que uma locadora de video possui e o valor que ele cobra por cada aluguel, mostrando as informações pedidas a seguir:
  //Sabendo que um terço das fitas são alugadas por mês, exiba o faturamento anual da locadora.
  // quando o cliente atrasa antrega, é cobrada uma multa de 10% sobre o valor do aluguel. Sabendo que um décimo das fitas alugadas no mês são devolvidascom atraso, calcule o valor ganho com multas no mes.
  //Sabendo ainda que 2% de fitas estragam ao longo do ano e um décimo do total é comprado para reposição, exiba a quantidade de fitas que a locadora terá no final no ano.
  
  var quantFitas = parseInt(prompt("Quantidade de fitas que a locaddora possui"));
  console.log(quantFitas);
  var valor = parseFloat(prompt("Qual o valor do aluguel de cada  fita"));
  consolee.log(valor);
  var faturamento =  quantFitas/3 * valor * 12;
  console.log("Faturamento anual: " + faturamento);
  var multas = valor * 0.1 * (quantFitas/3)/10;
  console.log("Multas mensais: " + multas);
  var quantFinal = quantFitas - quantFitas * 0.02 + quantFitas/10;
  console.log("Quantidade de fitas ao final do ano: " + quantFinal);
}

function algoritmo81(){
  //Criar um algorítmo que, dado um número de conta corrente com tres dígitos, retorne o seu dígito verificador, o qual é calculado da seguinte maneira:
  //exemplo: número da conta: 235
  //somar o número da conta com o seu inverso: 235 + 532 = 767
  //multiplicar cada dígito pela sua ordem posicional e somar estes resultados: 7 6 7 
  // o ultimo dígito desse resultado é o digito verificador da conta.

  var conta = parseInt(prompt("Digite a conta de três dígitos"));
  console.log(conta);
  var d1 = Math.floor(conta/100);
  var d2 = Math.floor((conta%100)/10);
  var d3 = conta % 100 % 10;
  console.log(d1 + " " + d2 + " " + d3);

  var inverso = d3*100 + d2*10 + d1;
  var soma = conta + inverso;
  console.log(inverso);
  console.log(soma);

  d1 = Math.floor(soma/100)*1;
  d2 = Math.floor((soma%100/10)*2);
  d3 = Math.floor((soma%100/10)*3);
  var digito = (d1 + d2 + d3)%10;
  console.log("Digito verificador: " + digito); 
}
algoritmo81();
