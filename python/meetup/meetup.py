import datetime
which_week ={ '1st': 0, '2nd' :1, '3rd' :2, '4th' : 3, '5th' :4}
day_of_week = { 'Monday' :0 , 'Tuesday' :1 ,'Wednesday' :2 , 'Thursday' :3, 'Friday' :4 , 'Saturday' :5 , 'Sunday' :6 }

def meetup_day(y,m,dow,w):
    if w in which_week:
        dt = datetime.date(y,m,1)
        jump = ( day_of_week[dow] -dt.weekday() ) %7
        dt += datetime.timedelta(days = jump)
        dt += datetime.timedelta(weeks = which_week[w])
        if dt.month == m:
            return dt
        else:
            raise AttributeError("Wrong week!")
    elif w == 'last':
        if m == 12:
            m =1
            y += 1
        else :
            m+=1
        dt = datetime.date(y,m,1)
        dt += datetime.timedelta(days =-1)
        jump = ( dt.weekday()-day_of_week[dow]  ) %7
        dt += datetime.timedelta(days = -jump)
        return dt

    elif w == 'teenth':
        dt = datetime.date(y,m,13)
        jump = ( day_of_week[dow] -dt.weekday() ) %7
        dt += datetime.timedelta(days = jump)
        return dt
    else:
        raise AttributeError("Wrong week!")