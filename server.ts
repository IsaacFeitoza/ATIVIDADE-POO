import { getSystemErrorMap } from "util";
//PRIMEIRA QUESTÃO
const prompt = require("prompt-sync")();
let t = prompt('Digite a nota do TRABALHO: ')
let a = prompt('Digite a nota da AVALIAÇÃO: ')
let e = prompt('Digite a nota do EXAME: ')
let m = ((t*2) + (a*3) + (e*5))/10;
 console.log(`A SUA MÉDIA É:`, m);{
     
    if (m >= 8){
    console.log("Conceito: A")
    }else if (m >= 7){
     console.log('Conceito: B')
    }else if (m >= 6){
      console.log('Concentio: C')
    }else if (m >= 5)
    console.log('Conceito: D')
    else
    console.log('Conceito: E')
   }

 //SEGUNDA QUESTÃO
const prompt = require("prompt-sync")();
let numero = new Array(3)

for (var i = 0; i < numero.length; i++){
  numero[i] = prompt(`Informe o ${i+1} numero:`);
}
console.log(`${numero.sort()}`);

//TERCEIRA QUESTÃO
const prompt = require("prompt-sync")();
   let numero = new Array(4)

   for (var i = 0; i < numero.length; i++){
     numero[i] = prompt(`Informe o ${i+1} numero:`);
   }
   console.log(`${numero.sort()}`)
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