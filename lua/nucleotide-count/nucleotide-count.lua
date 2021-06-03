
local DNA ={}

function DNA:new(init)
	self.__index = self
	local nuc = { A =0, C =0, G =0, T =0}
	for c in string.gmatch(init, '[ACGT]') do
		nuc[c] = nuc[c] +1
	end
	return setmetatable({nucleotideCounts = nuc}, self)
end


function DNA:count( nuc)
	return assert(self.nucleotideCounts[nuc], 'Invalid Nucleotide')
end

return DNA
