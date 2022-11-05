export default {
    name:'testimonials',
    title:'Testimonials',
    type: 'document',
    fields:[
        { 
            name:'name',
            title:'Name',
            type: 'string'
        },
        {
            name:'company',
            title:'Company',
            type:'string'
        },
        {
            name:'imgurl',
            title:'ImgUrl',
            type: 'image',
            options: {
              // means to focus on some area
              hotspot: true,
            },
        },  
        {
            name:'feedback',
            title:'Feedback',
            type:'string'
        }
    ]
}