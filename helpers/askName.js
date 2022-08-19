import inquirer from 'inquirer';

async function askName() {
  const answers = await inquirer.prompt({
    name: 'player_name',
    type: 'input',
    message: 'Qual é o seu nome?',
    default() {
      return 'Jogador';
    }
  })

  return answers.player_name;
}

export default askName;