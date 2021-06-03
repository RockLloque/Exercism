
const result = ['nail', 'shoe', 'horse', 'rider',
  'message', 'battle', 'kingdom',
  { qualifier: 'horseshoe' }
];

const qualifierExists = items => typeof items[items.length-1] === 'object' && items[items.length-1].qualifier !== 'undefined';

console.log(qualifierExists(result));
