const number = (arr) => {

  // declare a variable called n and set it to 0
  // declare a variable called numberedArray and set it to map arr wherein each element is assigned to (n+=1) + ': ' + element
  // return arr

  let n = 0

  // let numberedArray = arr.map( e => (n+= 1) + ': ' + e);
  let numberedArray = arr.map( e => `${n+= 1}: ${e}`);

  return numberedArray

}

console.log(textEditor(['hello', 'general', 'kenobi']))


// parameter: array     // array of strings
// return: an array where sequential numbers and and colons prepend each string
// e.g. textEditor(['hello', 'general', 'kenobi'])
// results in ['1: hello', '2: general', '3: kenobi']

