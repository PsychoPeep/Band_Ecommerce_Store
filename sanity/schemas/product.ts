export default {
  name: 'product',
  type: 'document',
  title: 'Products',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of product',
    },
    {
      name: 'images',
      type: 'array',
      of: [{type: 'image'}],
      title: 'Product Images',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of product',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'category',
      type: 'reference',
      to: [{type: 'category'}],
      title: 'Product Category',
    },
  ],
}
