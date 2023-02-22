export default {
    name: 'ps_points_table',
    type: 'document',
    title: 'PS Points Table',
    fields: [
        {
            title: 'PS Name',
            name: 'ps_name',
            type: 'string'
        },
        {
            title: 'Hostel Names',
            name: 'hostel_names',
            type: 'array',
            of: [{
                type: 'string',
                initialValue: 'MSH',
                options: {
                    list: [
                        { title: 'Brahmaputra', value: 'Brahmaputra' },
                        { title: 'Barak', value: 'Barak' },
                        { title: 'Lohit',  value: 'Lohit' },
                        { title: 'Manas',  value: 'Manas' },
                        { title: 'Siang',  value: 'Siang' },
                        { title: 'Kameng',   value: 'Kameng' },
                        { title: 'Kapili',   value: 'Kapili' },
                        { title: 'Umiam',   value: 'Umiam' },
                        { title: 'Dihing',   value: 'Dihing' },
                        { title: 'Disang Girls',   value: 'Disang Girls' },
                        { title: 'Disang Boys',   value: 'Disang Boys' },
                        { title: 'Subansiri',   value: 'Subansiri' },
                        { title: 'Dhansiri',   value: 'Dhansiri' },
                        { title: 'MSH',   value: 'MSH' },
                    ], // <-- predefined values
                    //layout: 'radio' // <-- defaults to 'dropdown'
                }
            }],
            
        },
        {
            title: 'Hostel Points',
            name: 'hostel_points',
            type: 'array',
            of: [{type: 'number'}],
        },
      
    ]
  }