'use strict';
const shouting = sentence => /^(?=.*[A-Z])[^a-z]+$/.test(sentence);
const question = sentence => /\?\s*$/.test(sentence);
const silence = sentence => /^\s*$/.test(sentence);


export const hey = sentence => {
	if(question(sentence) && shouting(sentence)) {return 'Calm down, I know what I\'m doing!';}
	if(shouting(sentence)) {return 'Whoa, chill out!';}
	if(question(sentence)) {return 'Sure.';}
	if(silence(sentence)) {return 'Fine. Be that way!';}
	return 'Whatever.';
};
