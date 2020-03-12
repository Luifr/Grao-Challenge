export interface IRentabilityOptions {
  initialValue?: number;
  selic?: number;
  rentability?: number;
  workingDays?: number;
  totalWeeks?: number;
}

export function getRentability({initialValue = 100, selic = 0.0425, rentability = 1, workingDays = 252, totalWeeks = 36} : IRentabilityOptions) {
  let principal = initialValue*Math.pow(1+(selic*rentability), totalWeeks*7/workingDays);
  console.log(`In ${totalWeeks} weeks starting with $${initialValue} you ended with $${principal.toFixed(2)}
Ending with a profit of: $${(principal-initialValue).toFixed(2)}
Considering the selic rate at: ${selic*100}%aa`);
}