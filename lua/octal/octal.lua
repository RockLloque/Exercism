local function to_decimal(oct_num)
	local dec_sum =0
	for i=1, #oct_num do
		local num = tonumber(string.sub(oct_num,i,i) )
		if type(num)~= 'number' or  num >= 8 then return 0 end
		dec_sum = dec_sum + (8^(#oct_num-i)*num)
	end

	return dec_sum
end



return function(num)
	return {
		to_decimal = function() return to_decimal(num) end
	}
end