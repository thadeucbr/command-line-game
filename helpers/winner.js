import gradient from 'gradient-string';
import figlet from 'figlet';

function winner(playerName) {
  console.clear();
  const msg = `Parabéns , ${playerName} !\n Você está preparado`;

  figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data));
  })
}

export default winner;