local function luhn_sum(n)
	local sum =0
	for i=1, #n do
		local c = tonumber(string.sub(n,i,i))
		if i%2 == ((#n+1) %2) then 
			c = ( c> 4 and 2*c-9) or 2*c
		end
		sum = sum + c
	end
	return sum
end
local function valid(n)
	if #n <2 then return false end
	n = string.gsub(n, ' ', '')
	if string.find(n, '%D') then return false end

	return luhn_sum(n) % 10 ==0
end



return {
	valid = valid
}
