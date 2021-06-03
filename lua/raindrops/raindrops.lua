return function(a)
	local noise =''
	if a%3==0 then noise =noise .. "Pling" end
	if a%5==0 then noise =noise .. "Plang" end
	if a%7==0 then noise =noise .. "Plong" end
	return noise ~='' and noise or tostring(a)
end