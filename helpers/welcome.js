import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';

import sleep from './sleep.js';

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    'Quem Quer Ser Um Desenvolvedor JavaScript? \n'
  );

  await sleep();
  rainbowTitle.stop();

  console.log(
    `
      ${chalk.bgBlue('COMO JOGAR')}
      Eu sou um processo em seu computador.
      Se você responder alguma pergunta errada eu vou ser ${chalk.bgRed('Morto')}
      Então responda todas as perguntas corretamente...
    `
  )
}

export default welcome;