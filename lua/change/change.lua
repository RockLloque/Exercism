local function reverse_table(t)
	local return_table={}
	for i=1, #t do
		return_table[#t-i+1] = t[i]
	end
	return return_table
end

return function(amount, coins)
	local result ={}
	local reverse=false
	if (coins[1] > coins[#coins]) then 
		coins = reverse_table(coins)
		reverse = true
	end
	for i= #coins, 1, -1 do
		result[i] =0
		while amount >= coins[i] do
			result[i] = result[i] +1
			amount = amount - coins[i]
		end
	end
	if reverse then result = reverse_table(result) end
	return amount ==0 and result or nil
end

