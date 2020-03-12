import { createInterface } from 'readline';

export async function getInputFromConsole(question = ''): Promise < string > {
  const readLine = createInterface({ input: process.stdin, output: process.stdout });
  return new Promise<string>(res => {
    readLine.question(question, (inputFromConsole: string) => {
      res(inputFromConsole);
      readLine.close();
    });
  });
}
