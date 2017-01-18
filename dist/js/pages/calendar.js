// events declaration using momentjs
var today = moment().format('YYYY-MM-DD'),
	in2days = moment(today).add(2, 'days').format('YYYY-MM-DD'),
	in7days = moment(today).add(7, 'days').format('YYYY-MM-DD'),
	thereis3days = moment(today).subtract(3, 'days').format('YYYY-MM-DD'),
	thereis6days = moment(today).subtract(6, 'days').format('YYYY-MM-DD');

var teslameeting = moment(today + 'T08:00:00'),
	peugeotmeeting = moment(today + 'T17:00:00'),
	toyotameeting = moment(in2days + 'T14:00:00'),
	fiatmeeting = moment(in7days + 'T16:00:00'),
	brunch = moment(thereis6days + 'T10:30:00'),
	lunch = moment(thereis6days + 'T19:30:00');
	party = moment(thereis6days + 'T21:00:00');
	other = moment(thereis6days + 'T23:00:00');

$('#calendar').fullCalendar({
	header: {
		left: 'prev,next,today',
		center: 'title',
		right: 'listDay,listWeek,month'
	},

	// customize the button names,
	// otherwise they'd all just say "list"
	views: {
		listDay: { buttonText: 'list day' },
		listWeek: { buttonText: 'list week' }
	},

	defaultView: 'month',
	defaultDate: today,
	navLinks: true, // can click day/week names to navigate views
	editable: true,
	eventLimit: true, // allow "more" link when too many events
	events: [
		{
			title: 'Happy birthday !',
			start: thereis6days,
			color: '#ff3860'
		},
		{
			title: 'Brunch',
			start:  brunch,
			color: '#3273dc'
		},
		{
			title: 'Lunch',
			start:  lunch,
			color: '#3273dc'
		},	
		{
			title: 'Party',
			start:  party,
			color: '#ff470f'
		},
		{
			title: 'And an other event !',
			start:  party,
			color: '#3273dc'
		},
		{
			title: 'Conference',
			start: thereis3days,
			color: '#3273dc'
		},
		{
			title: 'Meeting with Mr JB Straubel - Tesla Motors',
			start: teslameeting,
			color: '#3273dc'
		},
		{
			title: 'Meeting with Mr Carlos Tavares - Peugeot',
			start: peugeotmeeting,
			color: '#3273dc'
		},
		{
			title: 'Meeting with Mr Akio Toyoda - Toyota Motor Corporation',
			start: toyotameeting,
			color: '#3273dc'
		},
		{
			title: 'Meeting with Mr Harald Krüger - BMW',
			start: fiatmeeting,
			color: '#3273dc'
		}
	]
});