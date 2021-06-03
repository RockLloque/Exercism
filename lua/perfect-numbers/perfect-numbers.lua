local function aliquot_sum(num)
	local sum = 0
	for i =1, num /2 do
		if num % i ==0 then
			sum = sum + i
		end
	end
	return sum
end

local function classify(num)
	if aliquot_sum(num) < num then
		return 'deficient'
	elseif aliquot_sum(num) > num then
		return 'abundant'
	else
		return 'perfect'
	end
end

return {
	aliquot_sum = aliquot_sum,
	classify = classify
}
