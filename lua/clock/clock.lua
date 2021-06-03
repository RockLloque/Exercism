local clock ={}

clock.__index = clock


function clock.at(h, m)
	return  setmetatable({min = h*60 + (m or 0)}, clock)
end

function clock:plus(m)
	test.min = test.min + m
	return test
end

function clock:minus(m)
	test.min = test.min - m
	return test
end

function clock:equals(c)
	return tostring(test)  == tostring(c)
end

function clock:__tostring()
	return string.format("%02d:%02d", (math.floor(test.min / 60)% 24 or 0),string.format("%02d", (test.min % 60)))
end

return clock
