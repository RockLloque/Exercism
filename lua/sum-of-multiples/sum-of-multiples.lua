

return function (numbers)
	return {
		to = function(limit)
			local sum =0
			for i = 2 , limit -1 do
				for _,v in pairs(numbers) do
					if i % v ==0 then 
						sum = sum + i
						break
					end
				end
			end
			return sum
		end
	}
end

