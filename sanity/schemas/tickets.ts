export default {
  name: 'ticket',
  type: 'document',
  title: 'Tickets',
  fields: [
    {
      name: 'date',
      type: 'date',
      title: 'Date of Event',
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location of Event',
    },
    {
      name: 'place',
      type: 'string',
      title: 'Place of event',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
  ],
}
