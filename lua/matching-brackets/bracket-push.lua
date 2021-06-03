local opening_brackets ={
	['('] = true,
	['['] = true,
	['{'] = true,
}

local closing_brackets ={
	[')'] = '(',
	[']'] = '[',
	['}'] = '{',
}

return {

	valid = function(text)
		local brackets_list={}
		for char in string.gmatch(text, '.') do
			if(opening_brackets[char]) then
				table.insert(brackets_list, char)
			end
			if(closing_brackets[char]) then
				if closing_brackets[char] ~= brackets_list[#brackets_list] then return false end
				table.remove(brackets_list, #brackets_list)

			end
		end

		return ( #brackets_list == 0)
	end
}