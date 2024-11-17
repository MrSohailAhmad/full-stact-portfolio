import { defineField, defineType } from "sanity";

export const MeType = defineType({
  name: "myData",
  title: "My Data",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "position",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "email",
      type: "string",
    }),
    defineField({
      name: "phone",
      type: "string",
    }),

    defineField({
      name: "location",
      type: "string",
    }),
    defineField({
      name: "dob",
      type: "string",
    }),
    defineField({
      name: "pdfFile",
      title: "PDF File",
      type: "file", // This field type allows you to upload files like PDFs
      options: {
        accept: ".pdf", // Restricts the file picker to only show PDF files
      },
    }),
  ],
});
