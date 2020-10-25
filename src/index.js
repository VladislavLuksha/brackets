module.exports = function check(str, bracketsConfig) {
  let brackets = [];
  for (let i = 0; i < bracketsConfig.length; i++)
      brackets.push(bracketsConfig[i][0] + bracketsConfig[i][1]);

  for (let j = 0; j < brackets.length; j++) {
      if (str.includes(brackets[j])) {
          str = str.replace(brackets[j], '');
          j = -1;
      } 
  };
  return str === '';
}
