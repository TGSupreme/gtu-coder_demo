export default {
    name: 'blog',
    type: 'document',
      title: 'Blog',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      },
      {
        name: 'code',
        title: 'Code',
        type: 'array',
        of: [
          {
            type: 'block'
          },
          {
            type: 'image',
            fields: [
              {
                type: 'text',
                name: 'alt',
                title: 'Alternative text',
                description: `Some of your visitors cannot see images, 
                  be they blind, color-blind, low-sighted; 
                  alternative text is of great help for those 
                  people that can rely on it to have a good idea of 
                  what\'s on your page.`,
                options: {
                  isHighlighted: true
                }
              }
            ]
          }
        ]
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          {
            type: 'block'
          },
          {
            type: 'image',
            fields: [
              {
                type: 'text',
                name: 'alt',
                title: 'Alternative text',
                description: `Some of your visitors cannot see images, 
                  be they blind, color-blind, low-sighted; 
                  alternative text is of great help for those 
                  people that can rely on it to have a good idea of 
                  what\'s on your page.`,
                options: {
                  isHighlighted: true
                }
              }
            ]
          }
        ]
      },

      {
        name: 'metadesc',
        type: 'string',
        title: 'Meta Discription / Problem State'
      },

      // {
      //   name: 'metadesc',
      //   title: 'Meta Discription / Problem State',
      //   type: 'array',
      //   of: [
      //     {
      //       type: 'block'
      //     },
      //     {
      //       type: 'image',
      //       fields: [
      //         {
      //           type: 'text',
      //           name: 'alt',
      //           title: 'Alternative text',
      //           description: `Some of your visitors cannot see images, 
      //             be they blind, color-blind, low-sighted; 
      //             alternative text is of great help for those 
      //             people that can rely on it to have a good idea of 
      //             what\'s on your page.`,
      //           options: {
      //             isHighlighted: true
      //           }
      //         }
      //       ]
      //     }
      //   ]
      // },

      {
        name: 'opimage',
        type: 'image',
        title: 'Output Image'
      },

      {
        name: 'CreatedAt',
        title: 'createdAt',
        type: 'date',

      },
      {
        name: 'author',
        type: 'object',
        fields: [
          {
            title: 'Author',
            name: 'author',
            type: 'reference',
            to: [{type: 'author'}]
          }
        ]
      }
    ]
  }