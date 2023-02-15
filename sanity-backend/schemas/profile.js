export default {
    name: 'profile',
    type: 'document',
    title: 'Profile',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
        {
            name: 'fblink',
            type: 'url',
            title: 'FBLink'
        },
        {
            name: 'instalink',
            type: 'url',
            title: 'InstaLink'
        },
        {
            name: 'twitterlink',
            type: 'url',
            title: 'TwitterLink'
        },
        {
            name: 'linkedinlink',
            type: 'url',
            title: 'LinkedinLink'
        },
        {
            name: 'gitlink',
            type: 'url',
            title: 'GitLink'
        },
    ]
}