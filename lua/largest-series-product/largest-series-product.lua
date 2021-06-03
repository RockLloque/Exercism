local function product(str)
	local mult =1
	for i=1, #str do
		assert(tonumber(string.sub(str,i,i)))
		mult = mult* tonumber(string.sub(str,i,i))
	end
	return mult
end

return function(t)
	assert( t.span <= #t.digits and t.span >= 0)
	local result =0
	for i=1, #t.digits -t.span+1 do
		local prod = product(string.sub(t.digits,i, i+t.span-1))
		if prod > result then result = prod end
	end
	return result
end
