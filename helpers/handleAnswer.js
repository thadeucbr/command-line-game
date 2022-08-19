import { createSpinner } from 'nanospinner';
import sleep from './sleep.js';

async function handleAnswer(isCorrect, playerName) {
  const spinner = createSpinner('Verificando a resposta...').start();
  await sleep(1000);

  if(isCorrect) {
    spinner.success({ text: `A resposta está correta!`})
    await sleep(1000);
    console.clear();
  } else {
    spinner.error({ text: `💀 💀 💀 Fim de jogo, você me matou ${playerName}!`});
    process.exit(1);
  }
}

export default handleAnswer;