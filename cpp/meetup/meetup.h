#ifndef MEETUP_H
#define MEETUP_H
#include <boost/date_time/gregorian/gregorian.hpp>

namespace meetup
{
	class scheduler
	{
		public:
			scheduler(boost::gregorian::date::month_type m, boost::gregorian::date::year_type y): month_{m}, year_{y} 
			{}	


			boost::gregorian::date monteenth() const;
			boost::gregorian::date tuesteenth() const;
			boost::gregorian::date wednesteenth() const;
			boost::gregorian::date thursteenth() const;
			boost::gregorian::date friteenth() const;
			boost::gregorian::date saturteenth() const;
			boost::gregorian::date sunteenth() const;

			boost::gregorian::date first_monday() const;
			boost::gregorian::date first_tuesday() const;
			boost::gregorian::date first_wednesday() const;
			boost::gregorian::date first_thursday() const;
			boost::gregorian::date first_friday() const;
			boost::gregorian::date first_saturday() const;
			boost::gregorian::date first_sunday() const;

			boost::gregorian::date second_monday() const;
			boost::gregorian::date second_tuesday() const;
			boost::gregorian::date second_wednesday() const;
			boost::gregorian::date second_thursday() const;
			boost::gregorian::date second_friday() const;
			boost::gregorian::date second_saturday() const;
			boost::gregorian::date second_sunday() const;

			boost::gregorian::date third_monday() const;
			boost::gregorian::date third_tuesday() const;
			boost::gregorian::date third_wednesday() const;
			boost::gregorian::date third_thursday() const;
			boost::gregorian::date third_friday() const;
			boost::gregorian::date third_saturday() const;
			boost::gregorian::date third_sunday() const;

			boost::gregorian::date fourth_monday() const;
			boost::gregorian::date fourth_tuesday() const;
			boost::gregorian::date fourth_wednesday() const;
			boost::gregorian::date fourth_thursday() const;
			boost::gregorian::date fourth_friday() const;
			boost::gregorian::date fourth_saturday() const;
			boost::gregorian::date fourth_sunday() const;

			boost::gregorian::date last_monday() const;
			boost::gregorian::date last_tuesday() const;
			boost::gregorian::date last_wednesday() const;
			boost::gregorian::date last_thursday() const;
			boost::gregorian::date last_friday() const;
			boost::gregorian::date last_saturday() const;
			boost::gregorian::date last_sunday() const;

		private:
			boost::gregorian::date teenth_day(boost::date_time::weekdays const& )const;
			boost::gregorian::date first_day(boost::date_time::weekdays const& )const;
			boost::gregorian::date last_day(boost::date_time::weekdays const& )const;
			boost::gregorian::date::month_type month_;
			boost::gregorian::date::year_type year_;


	};
}

#endif
