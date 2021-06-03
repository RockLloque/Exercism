local Anagram={}
Anagram.__index = Anagram

function Anagram:new(init)
	local self= setmetatable({}, Anagram)
	self.word = string.lower(init)
	return self
end


local function sort_by_letter(word)
	local t={}
	for i=1, string.len(word) do
		t[i] = string.sub(word,i,i)
	end
	table.sort(t)
	
	return table.concat(t,'')
end

function Anagram:match(list)
	local result ={}

	for _,v in pairs(list) do
			if( string.lower(v) == self.word) then table.insert(result, v) 
			elseif ( sort_by_letter(string.lower(v)) == sort_by_letter(self.word)) then table.insert(result, v) end
	end

	return result
end



return Anagram