local function position_exists(puzzle, pos)
	return puzzle[pos[2]] and ( pos[1] > 0 and pos[1] <= 11)
end

local function find_term(puzzle, input, pos, direction)
	for i=1, #input do
		if position_exists(puzzle, pos) and string.sub(puzzle[pos[2]], pos[1], pos[1]) == string.sub(input, i,i) then 
			pos[1] = pos[1] + direction[1]
			pos[2] = pos[2] + direction[2]
		else
			return nil
		end
	end
	pos[1] = pos[1] - direction[1]
	pos[2] = pos[2] - direction[2]
	return pos -- This is now the end position
end

local directions = {
	{1,0},
	{0,1},
	{-1,0},
	{0,-1},
	{1,1},
	{1,-1},
	{-1,1},
	{-1,-1},
}


return function(puzzle)
	return {
		find = function(input)
			for i=1, #puzzle do
				for j=1, #puzzle[i] do
					if string.sub(puzzle[i], j,j) == string.sub(input, 1,1) then
						for _,v in pairs(directions) do
							local last = find_term(puzzle, input, {j,i}, {v[1],v[2]})
							if last then 
								return {j,i}, last
							end
						end
					end
				end
			end
		end
	}
end


