import { saveData } from "./dataSaver";
import { getInputFromConsole } from "./readLineAsync";

export interface IRentabilityOptions {
  initialValue?: number;
  selic?: number;
  rentability?: number;
  workingDays?: number;
  totalWeeks?: number;
}

enum Colors {
  Black = "\x1b[30m",
  Red = "\x1b[31m",
  Green = "\x1b[32m",
  Yellow = "\x1b[33m",
  Blue = "\x1b[34m",
  Magenta = "\x1b[35m",
  Cyan = "\x1b[36m",
  White = "\x1b[37m"
}

function textColor(text: string | number, color: Colors) {
  return `${color}${text}${Colors.White}`;
}

function monetizeText(value: string | number) {
  return (+value) > 0 ? textColor("$" + value, Colors.Green) : textColor("$" + value, Colors.Red);
}

export async function getRentability({initialValue = 100, selic = 0.0425, rentability = 1, workingDays = 252, totalWeeks = 36} : IRentabilityOptions) {

  if(initialValue < 0 || workingDays < 0 || totalWeeks < 0) throw Error('Problem with some negative arguments');

  let principal = parseFloat((initialValue*Math.pow(1+(selic*rentability), totalWeeks*7/workingDays)).toFixed(2));

  const operationResult = `In ${textColor(totalWeeks, Colors.Blue)} weeks starting with ${monetizeText(initialValue)} you ended with ${monetizeText(principal)}
Ending with a profit of: ${monetizeText((principal-initialValue).toFixed(2))}
Considering the selic rate at: ${textColor((selic*100) + "%aa", Colors.Blue)}\n`;

  console.log(operationResult);

  let answer = await getInputFromConsole('Do you want to save this operation?\nY/N: ', 6000);
  if (answer && answer.match(/y|yes|s|sim/)) {
    saveData(operationResult);
    console.log('Data succesfull saved at data/data.json');
  }

  return principal;
}