import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  // Singleton — only one doc of this type should ever exist
  fields: [
    defineField({
      name: 'venmoHandle',
      title: 'Venmo Handle',
      type: 'string',
      description: 'Shown on the order confirmation modal (e.g. @R4LPep).',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      description: 'Main contact/support email shown across the site.',
      validation: Rule => Rule.required().email(),
    }),
    defineField({
      name: 'freeShippingThreshold',
      title: 'Free Shipping Threshold (USD)',
      type: 'number',
      description: 'Orders above this amount get free shipping. Set to 0 to always charge shipping.',
      initialValue: 100,
      validation: Rule => Rule.required().min(0),
    }),
    defineField({
      name: 'shippingCost',
      title: 'Shipping Cost (% of order)',
      type: 'number',
      description: 'Percentage of the order total charged for shipping when below the free shipping threshold. Enter a whole number, e.g. 10 for 10%.',
      initialValue: 10,
      validation: Rule => Rule.required().min(0).max(100),
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      description: 'Main headline in the hero section.',
      initialValue: 'HIGHEST QUALITY PEPTIDES',
    }),
    defineField({
      name: 'heroSubtext',
      title: 'Hero Subtext',
      type: 'text',
      rows: 2,
      description: 'Short paragraph below the hero headline.',
    }),
  ],
  preview: {
    select: {title: 'venmoHandle'},
    prepare({title}) {
      return {title: 'Site Settings', subtitle: title}
    },
  },
})
