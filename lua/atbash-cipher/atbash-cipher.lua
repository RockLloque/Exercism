local function encode(n)
	n = string.gsub(n, '[^%w]', '')
	n= string.gsub(n, '(%a)', function(w)
		return string.char( 219 - string.byte(string.lower(w )))
		end)
	n= string.gsub( n, '(%w%w%w%w%w)', '%1 ')
	return  ( string.sub(n,#n ) == ' ' and string.sub(n, 1, #n-1)) or n
end

return {
	encode = encode,
}
