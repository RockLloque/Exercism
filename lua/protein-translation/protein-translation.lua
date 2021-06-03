local translateProteins =
{
	AUG = 'Methionine',
	UUU = 'Phenylalanine',
	UUC = 'Phenylalanine',
	UUA = 'Leucine',
	UUG = 'Leucine',
	UCU = 'Serine',
	UCC = 'Serine',
	UCA = 'Serine',
	UCG = 'Serine',
	UAU = 'Tyrosine',
	UAC = 'Tyrosine',
	UGU = 'Cysteine',
	UGC = 'Cysteine',
	UGG = 'Tryptophan',
	UAA = 'STOP',
	UAG = 'STOP',
	UGA = 'STOP',
}

local function codon(prot)
	return translateProteins[prot] or error('Unknown codon')
end


local function rna_strand(prot_str)
	local prot ={}
	for c in string.gmatch(prot_str, '...') do
		if codon(c) == 'STOP' then break
		else table.insert(prot, codon(c))
		end
	end
	return prot
end

return {
	codon = codon,
	rna_strand = rna_strand
}
