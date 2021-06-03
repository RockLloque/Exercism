local function kind(...)
	local side_length = table.pack(...)
	table.sort(side_length)
	if (side_length[1] <=0) or (side_length[1] + side_length[2] < side_length[3]) then return error('Input Error') end
	if side_length[1] == side_length[2] and side_length[1] == side_length[3] then
		return 'equilateral'
	elseif side_length[1] == side_length[2] or side_length[2] == side_length[3] then 
		return 'isosceles'
	else
		return 'scalene'
	end
end

return {
	kind = kind,
}
