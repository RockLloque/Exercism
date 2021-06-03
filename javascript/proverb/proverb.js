
export const proverb = (...items) => {
  //The last item in the array only exists to be lost, not for want and needs to be excluded from the list by slice()
  //The trinary operator checks if a qualifier exists and adjust slice accordingly
  return items.slice(0,qualifierExists(items)? -2 :-1)
  //reduce() collects all items to a a string,
    .reduce((proVerb, want, i) => 
      //Insert the required want and required lost into string
      `${proVerb}\nFor want of a ${want} the ${items[i+1]} was lost.`, '')
      //First '\n' needs to go.
      .trimLeft('\n') 
      //Last sentence of proverb is added. The trinary operator adds a qualifier, it it exists.
      + `\nAnd all for the want of a ${ qualifierExists(items) ? items[items.length-1].qualifier + ' ' : ''}${items[0]}.`;
};

const qualifierExists = items => typeof items[items.length-1] === 'object' && items[items.length-1].qualifier !== 'undefined';
