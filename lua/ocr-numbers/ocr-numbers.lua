local function convert_number(...)
	-- convert the string-input to a number-char
	local number = table.pack(...)
	if number[1] == ' _ 'then
		if number[2] == ' _|' and number[3] == '|_ ' then
			return '2'
		elseif number[2] == ' _|' and number[3] == ' _|' then
			return '3'
		elseif number[2] == '|_ ' and number[3] == ' _|' then
			return '5'
		elseif number[2] == '|_ ' and number[3] == '|_|' then
			return '6'
		elseif number[2] == '  |' and number[3] == '  |' then
			return '7'
		elseif number[2] == '|_|' and number[3] == '|_|' then
			return '8'
		elseif number[2] == '|_|' and number[3] == ' _|' then
			return '9'
		elseif number[2] == '| |' and number[3] == '|_|' then
			return '0'
		end
	elseif number[1] == '   'then
		if number[2] == '|_|' and number[3] == '  |' then
			return '4'
		elseif number[2] == '  |' and number[3] == '  |' then
			return '1'
		end
	end
	return '?'
end

local function return_number(a,b,c)
	--always look at 3 characters at a time
	local nr_str =''
	assert( #a == #b and #a == #c)
	for i=1, #a, 3 do
		nr_str = nr_str .. convert_number(string.sub(a, i, i+2), string.sub(b,i, i+2), string.sub(c, i, i+2))
	end
	return nr_str
end


local function convert(text)
	local number={}
	-- split the string into lines
	local number_string =''
	for s in string.gmatch(text, '[^\n]+') do
		table.insert(number, s)
	end
	--remove the seperating empty lines
	for i= #number, 1, -1  do
		if (i %4 ==0)  then
			table.remove(number, i)
		end
	end

	for i=1, #number, 3 do
		number_string = number_string .. return_number(number[i], number[i+1], number[i+2]) .. ','
	end
	--remove last ','
	return string.sub(number_string, 1, #number_string-1)
end


return {
	convert = convert,
}
