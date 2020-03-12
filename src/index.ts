import { readFileSync } from 'fs';
import { getRentability, IRentabilityOptions } from './rentability';

async function execute() {
  let options: IRentabilityOptions = {};
  if (process.argv[2] == '-i') {
    options = JSON.parse(readFileSync('./config/config.json', { encoding: 'utf8' }));
  }
  getRentability(options);

}

execute();