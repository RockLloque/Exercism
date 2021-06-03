local value_table ={
	['A'] =1,
	['B'] =3,
	['C'] =3,
	['D'] =2,
	['E'] =1,
	['F'] =4,
	['G'] =2,
	['H'] =4,
	['I'] =1,
	['J'] =8,
	['K'] =5,
	['L'] =1,
	['M'] =3,
	['N'] =1,
	['O'] =1,
	['P'] =3,
	['Q'] =10,
	['R'] =1,
	['S'] =1,
	['T'] =1,
	['U'] =1,
	['V'] =4,
	['W'] =4,
	['X'] =8,
	['Y'] =4,
	['Z'] =10,
}

local  function score(n)
	if type(n) ~= 'string' then return 0 end
	local _score =0
	for i=1, #n do
		_score = _score + value_table[string.upper(string.sub(n,i,i))]
	end
	return _score
end


return{
	score = score,
}
