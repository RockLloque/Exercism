local function expand(flattend, t)
	for _,v in pairs(t) do
		table.insert(flattend,v)
	end
end

local function flatten(original_list)
	local flattend_list={}
	for _,v in ipairs(original_list) do
		if(type(v) == 'table') then
			  expand(flattend_list, flatten(v))
		 else
			 table.insert(flattend_list,v)
		 end
	 end
	 return flattend_list
 end



return flatten