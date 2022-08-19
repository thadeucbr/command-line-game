import chalk from 'chalk';
import inquirer from 'inquirer';
import handleAnswer from '../../helpers/handleAnswer.js';

async function question1(playerName) {
  const answers = await inquirer.prompt({
    name: 'question_1',
    type: 'list',
    message: 'Os status de 100 a 199 são status de\n',
    choices: [
      'Respostas de sucesso',
      'Redirecionamentos',
      'Respostas de informação',
      'Erros do servidor',
      'Erros do cliente'
    ]
  })
  return handleAnswer(answers.question_1 == 'Respostas de informação', playerName);
}

async function question2(playerName) {
  const answers = await inquirer.prompt({
    name: 'question_2',
    type: 'list',
    message: 'Os status de 200 a 299 são status de\n',
    choices: [
      'Respostas de sucesso',
      'Redirecionamentos',
      'Respostas de informação',
      'Erros do servidor',
      'Erros do cliente'
    ]
  })
  return handleAnswer(answers.question_2 == 'Respostas de sucesso', playerName);
}

async function question3(playerName) {
  const answers = await inquirer.prompt({
    name: 'question_3',
    type: 'list',
    message: 'Os status de 300 a 399 são status de\n',
    choices: [
      'Respostas de sucesso',
      'Redirecionamentos',
      'Respostas de informação',
      'Erros do servidor',
      'Erros do cliente'
    ]
  })
  return handleAnswer(answers.question_3 == 'Redirecionamentos', playerName);
}

async function question4(playerName) {
  const answers = await inquirer.prompt({
    name: 'question_4',
    type: 'list',
    message: 'Os status de 400 a 499 são status de\n',
    choices: [
      'Respostas de sucesso',
      'Redirecionamentos',
      'Respostas de informação',
      'Erros do servidor',
      'Erros do cliente'
    ]
  })
  return handleAnswer(answers.question_4 == 'Erros do cliente', playerName);
}

async function question5(playerName) {
  const answers = await inquirer.prompt({
    name: 'question_5',
    type: 'list',
    message: 'Os status de 500 a 599 são status de\n',
    choices: [
      'Respostas de sucesso',
      'Redirecionamentos',
      'Respostas de informação',
      'Erros do servidor',
      'Erros do cliente'
    ]
  })
  return handleAnswer(answers.question_5 == 'Erros do servidor', playerName);
}

async function httpStatusCode(playerName) {
  console.clear();
  await question1(playerName);
  await question2(playerName);
  await question3(playerName);
  await question4(playerName);
  await question5(playerName);
};

export default httpStatusCode;