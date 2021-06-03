#include "bracket_push.h"
#include <stack>
using std::stack;


namespace
{
}



bool bracket_push::check(string const& text)
{
	stack<char> brackets;

	for( const auto ele : text) switch(ele)
	{
		case '(': case '{' : case '[':
		{
			brackets.push(ele);
		}
		break;

		case ')':  case '}': case ']':
		{
			if( brackets.empty()) return false;
			const auto top_braket = brackets.top();

			if( top_braket == '(' and ele != ')') return false;
			if( top_braket == '{' and ele != '}') return false;
			if( top_braket == '[' and ele != ']') return false;
			brackets.pop();
		}
		break;

	}
	return brackets.empty();
}