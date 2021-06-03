local school ={}
school.__index =school


function school:new()
	local self = setmetatable({rost ={},}, school)
	return self
end

function school:add( name, grade)
	self.rost[grade] = self.rost[grade] or {}
	table.insert(self.rost[grade], name)
	table.sort(self.rost[grade])
	return self
end

function school:grade(g)
	return self.rost[g] or {}
end

function school:roster()
	return self.rost
end

return school
