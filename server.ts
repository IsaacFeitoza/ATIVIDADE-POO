//PRIMEIRA QUESTÃO
const prompt = require("prompt-sync")();
let t = prompt('Digite a nota do TRABALHO: ')
let a = prompt('Digite a nota da AVALIAÇÃO: ')
let e = prompt('Digite a nota do EXAME: ')
let m = ((t*2) + (a*3) + (e*5))/10;
 console.log(`A SUA MÉDIA É:`, m);{
     
    if (m >= 8){
    console.log("CONCEITO: A")
    }else if (m >= 7){
     console.log('CONCEITO: B')
    }else if (m >= 6){
      console.log('CONCEITO: C')
    }else if (m >= 5)
    console.log('CONCEITO: D')
    else
    console.log('CONCEITO: E')
   }

 
 
   //SEGUNDA QUESTÃO
const prompt = require("prompt-sync")();
let numero = new Array(3)

for (var i = 0; i < numero.length; i++){
  numero[i] = prompt(`Informe o ${i+1} numero:`);
}
console.log(`${numero.sort((a,b)=> (a-b))}`);



//TERCEIRA QUESTÃO
const prompt = require("prompt-sync")();
   let numero = new Array(4)

   for (var i = 0; i < numero.length; i++){
     numero[i] = prompt(`Informe o ${i+1} numero: `);
   }
   console.log(`${numero.sort((a,b) => (a-b))}`)
   console.log(`${numero.reverse()}`)



   //QUARTA QUESTÃO
const prompt = require("prompt-sync")();

let cod = prompt(`Informe o código: `);
let sl = prompt(`Informe o salãrio: `); {
    switch (Number(cod))  {
       case 1:
          console.log("CARGO: Escriturário")
           console.log("PERCENTUAL DE AUMENTO: 50%")
            console.log("Salário atual: ", sl * 1.5 )
            break;
    
          case 2:
             console.log("CARGO: Secretário") 
              console.log("PERCENTUAL DE AUMENTO: 35%")
              console.log("Salário atual: ", sl * 1.35)
              break;
            
              case 3:
                 console.log("CARGO: Caixa") 
                console.log("PERCENTUAL DE AUMENTO: 20%")
                 console.log("Salário atual: ", sl * 1.2 )
                  break;

                  case 4:
                     console.log("CARGO: Gerente") 
                     console.log("PERCENTUAL DE AUMENTO: 10%")
                      console.log("Salário atual: ", sl * 1.1)
                      break;

                      case 5:
                          console.log("CARGO: Diretor") 
                          console.log("PERCENTUAL DE AUMENTO: Não tem aumento")
                          break;

                          default:
                             console.log("CÓDIGO DESCONHECIDO!")
                              break;
    }
}



//QUINTA QUESTÃO
const prompt = require("prompt-sync")();


let qtdNum = 1

let somaNum = 0

let maior = 0

let menor = 0

let somaPar = 0

let qtdPar = 0

let qtdImpar = 0

let num =  Number(prompt('DIGITE UM NÚMERO:  '))

function quinta (){
  
maior = num

menor = num

while(num != 30000){
   qtdNum += 1
   somaNum += num
   num = Number(prompt('DIGITE UM NÚMERO: '))
   if (num > maior){
    maior = num
  }else if (num < menor){
    menor = num
  }
  if (num % 2 == 0){
    qtdPar += 1
    somaPar += num
  }else{
  qtdImpar += 1
  }
}

console.log(`QUANTIDADE DE NÚMEROS: ${qtdNum}`);

console.log(`MÉDIA DOS NÚMEROS: ${((somaNum+30000) / qtdNum).toFixed(1)}`);

console.log(`MAIOR NÚMERO: ${maior}`);

console.log(`MENOR NÚMERO: ${menor}`);

console.log(`MÉDIA DOS PARES: ${somaPar / qtdPar}`);

console.log(`PORCENTAGEM DOS ÍMPARES: ${(qtdImpar / qtdNum * 100).toFixed(1)}%`);
}
quinta()