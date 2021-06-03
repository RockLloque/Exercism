
local function is_triplet(...)
	local triplet = table.pack(...)
	table.sort(triplet)
	return triplet[1]^2 + triplet[2]^2 == triplet[3]^2
end

local function triplets_with(range)
	local max = range.max_factor
	local min = range.min_factor or 0
	local result ={}
	for i = min, max do
		for j = i+1, max do
			for k = j+1, max do
				if i^2 + j^2 == k^2 then
					table.insert(result, {i,j,k})
				end
			end
		end
	end
	if range.sum then
		for i= #result, 1, -1 do
			if result[i][1] + result[i][2] + result[i][3] ~= range.sum then 
				table.remove(result, i)
			end
		end
	end
	table.sort( result, function(a,b) return a[1] < b[1] end)
	return result
end

return {
	is_triplet = is_triplet,
	triplets_with =triplets_with
}
