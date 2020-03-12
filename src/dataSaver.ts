import fs from 'fs';

interface IReport {
  report: string;
  timestamp: number;
}

export function getData(): IReport[] {
  let results: IReport[] = [];

  try {
    results = JSON.parse(fs.readFileSync('./data/data.json', { encoding: 'utf8' }));
  } catch { };

  return results;
}

export function saveData(data: string) {

  let results = getData();

  results.push({ report: data, timestamp: new Date().getTime() });
  fs.writeFileSync('./data/data.json', JSON.stringify(results));
}

export function getReport(): string {
  let operationData = getData();
  if (operationData.length == 0) return 'No data to show!';
  let report = 1;
  let reportString = operationData.reduce((result, currentOperation) => {
    return result + `Report #${report++}, ${new Date(currentOperation.timestamp).toLocaleString()}\n${currentOperation.report}\n\n`;
  }, "");
  return reportString.substring(0, reportString.length-2);
}