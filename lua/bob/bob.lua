local bob ={}




function bob.hey(say)
	if( say== nil or #say==0) then return 'Fine, be that way.' end
	if( say == say:upper()) then return 'Whoa, chill out!' end
	if( say:sub(-1) == '?') then return 'Sure' end

	return 'Whatever'
end

return bob