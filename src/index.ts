

function getRentability({initialValue = 100, selic = 0.0425, rentability = 1, workingDays = 252, totalWeeks = 36} = {}) {
  console.log(initialValue*Math.pow(1+(selic*rentability), totalWeeks*7/workingDays));
}

getRentability({});