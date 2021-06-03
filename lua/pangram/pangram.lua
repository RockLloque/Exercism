return function(text)

	local letters={}
	local count =0

	for char in text:lower():gmatch('%a') do
		if not letters[char] then
			count = count +1
			letters[char] = true
		end
	end
	return count == 26
end