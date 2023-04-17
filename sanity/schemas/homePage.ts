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
          type: "reference",
          to: [{ type: "testimonial" }],
        },
      ],
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.reo
    }),
  ],
});
