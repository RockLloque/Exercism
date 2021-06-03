

function verse(num)
	if num ==0 then
		return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n'

	elseif num ==1 then
		return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n'
	elseif num ==2 then
		return '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n'
	else
		return tostring(num) .. ' bottles of beer on the wall, ' .. tostring(num) .. ' bottles of beer.\nTake one down and pass it around, ' .. tostring(num-1).. ' bottles of beer on the wall.\n'
	end
end



function sing(num, stop)
	stop = stop or 0
	local song =''
	for i = num, stop, -1 do 
		song = song .. verse(i) .. '\n'
	end
	song = string.sub(song, 1, -2)
	return song
end
return { verse = verse,
	sing = sing}
