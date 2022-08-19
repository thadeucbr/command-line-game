import httpStatusCode from '../gerais/httpStatusCode.js';

async function nodejsJunior(playerName) {
  await httpStatusCode(playerName);
};

export default nodejsJunior;