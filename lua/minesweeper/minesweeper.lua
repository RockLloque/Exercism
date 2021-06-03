local function count_mines(input, r,c)
	-- Every blank or number around the mine at (r(ow),c(olumn)) is raised by 1
	for i=r-1, r+1 do
		-- Takes every number in the substring and adds 1
		input[i] = string.sub(input[i], 0, c-2) .. string.gsub(string.sub(input[i], c-1, c+1), '%d', function(n) return tostring(tonumber(n)+1) end) .. string.sub(input[i], c+2)
		-- replaces every blank line in the substring with '1'
		input[i] = string.sub(input[i], 0, c-2) .. string.gsub(string.sub(input[i], c-1, c+1), ' ', function(n) return '1' end) .. string.sub(input[i], c+2)
	end
	return input
end

local function transform(input)
	for i=2, #input-1 do
		assert(#input[i] == #input[1])
		for j =2,  #input[i]-1 do
			-- if char is neither number nor blank nor '*' an error is raised
			assert(string.match(string.sub(input[i],j,j), '[ *%d]'), 'Invalid Input')
			-- if a mine ('*') is found, the location is reported to the function count_mines
			if (string.sub(input[i],j,j)) == '*' then
				input = count_mines(input, i,j)
			end
		end
	end
	return input
end

return {
	transform = transform,
}
