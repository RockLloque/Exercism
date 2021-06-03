local function normalized_plaintext(s)
	return string.lower(string.gsub(s, '[^%w]', ''))
end

local function size(s)
	return math.ceil(math.sqrt(#normalized_plaintext(s)))
end

local function segments(s)
	s =normalized_plaintext(s)
	local result ={}
	for i =1, #s, size(s)  do
		table.insert(result, string.sub(s, i, i+size(s)-1))
	end
	return result
end

local function normalized_ciphertext(s)
	local seg = segments(s)
	local result =''
	for i=1, #seg[1] do
		for _,v in ipairs(seg) do
			result = result .. string.sub(v,i,i) 
		end
		result = result .. ' '
	end
	return string.sub(result, 1, #result -1)

end

local function ciphertext(s)
	return string.gsub(normalized_ciphertext(s), ' ', '')
end


return {
	normalized_plaintext = normalized_plaintext,
	size = size,
	segments = segments,
	ciphertext = ciphertext,
	normalized_ciphertext = normalized_ciphertext,
}
