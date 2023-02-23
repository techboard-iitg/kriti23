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
            title: 'Hostel Points',
            name: 'points',
            type: 'array',
            of:[
                {
                    type: 'object',
                    name: 'ps_data',
                    fields: [
                        {
                            type: 'string',
                            name: 'hostel_name',
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
                                ],
                            }
                        },
                        {
                            type: 'number',
                            name: 'hostel_points'
                        }
                    ]
                }
            ]
        },
      
    ]
  }