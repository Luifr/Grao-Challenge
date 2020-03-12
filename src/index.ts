import { readFileSync } from 'fs';
import { getReport } from './dataSaver';
import { getRentability, IRentabilityOptions } from './rentability';

async function execute() {
  let options: IRentabilityOptions = {};
  if (process.argv[2] == '-r') {
    return console.log(getReport());
  }
  else if (process.argv[2] == '-i') {
      try{
        options = JSON.parse(readFileSync('./config/config.json', { encoding: 'utf8' }));
      }
      catch {
        console.log("Please create the configuration file in config folder");
        console.log("There is a template file, duplicate it and rename it (just remove the '.template')!");
        return;
      }
  }

  getRentability(options);
}

execute();