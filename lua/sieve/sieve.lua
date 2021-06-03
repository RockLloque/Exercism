return function(n)
	return coroutine.create(function()
		local no_prime_list={}
		for i=2, n do
			if not no_prime_list[i] then
				coroutine.yield(i)
			end
			for j =1, math.floor(n/i) do
				no_prime_list[j*i] = true
			end
		end
	end)
end
