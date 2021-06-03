return function (n)
	assert(n>=1, 'Only positive numbers are allowed')
	local counter =0
	while n >1 do
		if n%2 == 0 then n = n/2
		else n = 3*n+1
		end
		counter = counter+1
	end
	return counter
end
