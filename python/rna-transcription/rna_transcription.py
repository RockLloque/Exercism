def to_rna(dna_strand):
    map_dna_rna = { 'C': 'G', 'G': 'C', 'T': 'A', 'A': 'U'}
    rna =[]
    for dna in dna_strand:
        if dna in map_dna_rna:
            rna.append(map_dna_rna[dna])
        else:
            raise ValueError('Value ' + dna + ' not in DNA')

    return ''.join(rna)