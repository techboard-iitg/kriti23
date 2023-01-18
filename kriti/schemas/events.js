export default {
  name: 'events',
  type: 'document',
  title: 'Events',
  fields: [
    {
      name: 'event_name',
      type: 'string',
      title: 'Event Name'
    },
    {
      name: 'event_date',
      type: 'date',
      title:'Event Date',
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'event_cup',
      type: 'string',
      title: 'Event Cup'
    },
    {
      name: 'event_points',
      type: 'number',
      title: 'Event Points'
    },
    
  ]
}