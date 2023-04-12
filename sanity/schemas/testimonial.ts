import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "comment",
      title: "Comment",
      type: "text",
      validation: (Rule) => [Rule.required(), Rule.min(10)],
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "relationship",
      title: "Relationship",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
