export default {
  name: 'tabs',
  type: 'document',
  title: 'Tabs',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Tabs',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of Tabs Cover',
    },
    {
      name: 'allTabs',
      type: 'array',
      of: [{type: 'string'}],
      title: 'All Tabs Included',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of Tab',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      options: {
        source: 'name',
      },
    },
  ],
}
