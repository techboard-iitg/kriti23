export default {
    name: 'visionary_cup',
    type: 'document',
    title: 'Visionary Cup',
    fields: [
      {
        name: 'club_name',
        type: 'string',
        title: 'Club Name'
      },
      {
        name: 'hostel_points',
        type: 'number',
        title: 'Hostel Points'
      },
      {
        title: 'PS Link',
        name: 'ps_link',
        type: 'array',
        of: [{type: 'string'}],
      },
      {
        title: 'PS Name',
        name: 'ps_name',
        type: 'array',
        of: [{type: 'string'}],
      },
      {
        title: 'PS Points',
        name: 'ps_points',
        type: 'array',
        of: [{type: 'string'}],
      },
      {
        title: 'PS Date',
        name: 'ps_date',
        type: 'array',
        of: [{type: 'string'}],
      },
      
    ]
  }