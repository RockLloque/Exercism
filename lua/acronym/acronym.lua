return function(input)
	local result =''
	-- capture all characters till the next space 
	for w in string.gmatch(input, '[%u]*[%l]*') do
		-- add first character of string to resukt as upper
		result = result .. string.upper(string.sub(w,1,1))
	end
	return result
end
