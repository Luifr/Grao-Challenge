import { createInterface } from 'readline';

export async function getInputFromConsole(question = '', timeout: number): Promise < string > {
  const readLine = createInterface({ input: process.stdin, output: process.stdout });
  return new Promise<string>(res => {
    let timeoutId: NodeJS.Timeout;
    if(timeout) {
      timeoutId = setTimeout(() => {
        readLine.close();
        res(undefined);
      }, timeout);
    }
    readLine.question(question, (inputFromConsole: string) => {
      res(inputFromConsole);
      if(timeout)
        clearTimeout(timeoutId);
      readLine.close();
    });
  });
}
