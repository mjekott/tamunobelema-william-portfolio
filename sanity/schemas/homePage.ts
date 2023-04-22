import { defineField, defineType } from "sanity";

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "page",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "about",
      title: "About",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "process",
      title: "My Process",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              type: "text",
              title: "Description",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),

    defineField({
      name: "testimonials",
      title: "Testimonial",
      validation: (Rule) => Rule.required(),
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              type: "string",
              title: "Full Name",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "comment",
              type: "text",
              title: "Comment",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "image",
              type: "image",
              title: "Image",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "relationship",
              type: "string",
              title: "Client Type",
            },
          ],
        },
      ],
    }),

    defineField({
      name: "brand",
      title: "Brand",
      validation: (Rule) => Rule.required(),
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "image",
              type: "image",
              title: "Image",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),
  ],
});
