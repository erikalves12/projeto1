var prompt = require('prompt-sync')();
const sim = `sim`;
let cont = 0;
console.log(`Em uma cidade do interior de Minas Gerais houve uma série de assassinatos misteriosos.
A polícia da cidade não conseguiu desvendar os mistérios por trás de cada crime, por esse motivo resolveram
fazer um teste para contratar um detetive que fosse capaz de solucionar os casos.
Eram 5 perguntas de resposta "sim ou não", mas nenhum dos candidatos conseguiu passar na seleção.
Será que você passaria neste teste? 
Gostaríamos de testar os seus conhecimentos, já que você assite o CSI frequentemente e desvenda a maioria dos casos.
Responda as 5 perguntas: `);
let perg1 = prompt(`Um assasino frio e calculista prefere matar mulheres do que matar homens?  `);
let perg2 = prompt(`Todo assassino não precisa de um motivo claro para cometer um crime?  `);
let perg3 = prompt(`O Maniaco do Parque matava só mulheres por que eram mais frágeis? `);
let perg4 = prompt(`A polícia prefere investigadores mulheres do que homens? `);
let perg5 = prompt(`Você teria coragem de investigar um crime mesmo sabendo que teria que lidar com pessoas mortas? `);
if ( perg1 == sim) { cont++ }
if ( perg2 == sim) { cont++ }
if ( perg3 == sim) { cont++ }
if ( perg4 == sim) { cont++ }
if ( perg5 == sim) { cont++ };
if (cont == 0){console.log(`Continue assistindo o CSI por que como investigador você é uma lástima.`)}
else if (cont == 1 || cont == 2  ){console.log(`O máximo que você conseguiria como investigador seria desvendar uma mimica no jogo imagem e ação.`)}
else if (cont == 3){console.log(`Agora sim, você já consegue descobrir quem quebrou a janela da Dona Maria com a bola.`)}
else if (cont == 4){console.log(`Você não será contratado agora, mas receberá uma bolsa para um curso especializado.`)}
else if (cont == 5){console.log(`Parabéns, você será o novo detetive da corporação.`)};
