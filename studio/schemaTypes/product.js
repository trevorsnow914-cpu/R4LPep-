import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name', maxLength: 96},
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Recovery',         value: 'recovery'},
          {title: 'Growth Hormone',   value: 'gh'},
          {title: 'Weight Loss',      value: 'weight'},
          {title: 'Cognitive',        value: 'cognitive'},
          {title: 'Anti-Aging',       value: 'antiaging'},
          {title: 'Sexual Health',    value: 'sexual'},
          {title: 'Reconstitution',   value: 'reconstitution'},
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price (USD)',
      type: 'number',
      validation: Rule => Rule.required().positive(),
    }),
    defineField({
      name: 'weight',
      title: 'Weight / Dosage (e.g. 5mg, 10mg)',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'badge',
      title: 'Badge (optional)',
      type: 'string',
      options: {
        list: [
          {title: 'Popular', value: 'POPULAR'},
          {title: 'New',     value: 'NEW'},
          {title: 'Sale',    value: 'SALE'},
        ],
      },
    }),
    defineField({
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{type: 'string'}],
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Lower numbers appear first in the grid.',
      initialValue: 99,
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'category'},
  },
})
