#!/usr/bin/env node

import welcome from './helpers/welcome.js';
import askName from './helpers/askName.js';
import winner from './helpers/winner.js';
import nodejs from './perguntas/junior/nodejs.js';

await welcome();
const playerName = await askName();
await nodejs(playerName);
winner(playerName);