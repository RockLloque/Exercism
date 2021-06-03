local function word_count(text)
	local liste = {}

	for word in string.gmatch(string.lower(text), '%w+') do
		liste[word] = (liste[word] or 0) +1
	end
	return liste
end


return {word_count = word_count}