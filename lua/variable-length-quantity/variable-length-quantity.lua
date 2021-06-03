local function decode(bytes)
	assert( (bytes[#bytes] & 0x80) ==0 , 'incomplete byte sequence')
	local values={}
	local sum =0

	for _,v in pairs(bytes) do
		sum = sum << 7
		sum = sum + ( v & 0x7f)
		if (v & 0x80) == 0 then
			table.insert(values, sum)
			sum =0
		end

	end
	return values
end

local function encodeSingle(a)
	local values={a & 0x7f}
	a = a >> 7
	while a >0 do
		local vlq = a & 0x7f
		vlq = vlq~0x80
		table.insert(values, 1, vlq)
		a = a >> 7
	end
	return values
end

local function encode(bytes)
	local values={}
	for _,v in pairs(bytes) do
		for _,w in pairs(encodeSingle(v)) do
			table.insert(values, w)
		end
	end
	return values
end

return {decode =decode, encode =encode}