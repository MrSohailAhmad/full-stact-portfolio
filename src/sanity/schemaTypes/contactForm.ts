import { defineField, defineType } from "sanity";

export const contactDataType = defineType({
  name: "contactform",
  title: "contact",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "email",
      type: "string",
    }),
    defineField({
      name: "message",
      type: "string",
    }),
  ],
});
