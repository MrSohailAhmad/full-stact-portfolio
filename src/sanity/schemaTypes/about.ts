import { defineField, defineType } from "sanity";

export const aboutDataType = defineType({
  name: "aboutData",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "para1",
      type: "string",
    }),
    defineField({
      name: "para2",
      type: "string",
    }),
    defineField({
      name: "para3",
      type: "string",
    }),
  ],
});
