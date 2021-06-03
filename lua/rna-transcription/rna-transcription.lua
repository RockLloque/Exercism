local transcript = { A = 'U', C = 'G', G = 'C', T = 'A'}

return function (input)
	return string.gsub(input, '(%a)', function(c) return transcript[c] end)
end
