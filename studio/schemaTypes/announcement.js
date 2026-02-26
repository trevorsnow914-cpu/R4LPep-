import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'announcement',
  title: 'Announcement Bar',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Announcement Text',
      type: 'string',
      description: 'Displayed in the top bar across the site.',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Only one announcement should be active at a time.',
      initialValue: true,
    }),
  ],
  preview: {
    select: {title: 'text', subtitle: 'active'},
    prepare({title, subtitle}) {
      return {title, subtitle: subtitle ? '✅ Active' : '⏸ Inactive'}
    },
  },
})
