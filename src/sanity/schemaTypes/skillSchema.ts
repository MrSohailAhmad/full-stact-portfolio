import { defineField, defineType } from "sanity";

export const skillDataType = defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({
      name: "skillIcon",
      type: "image",
    }),
    defineField({
      name: "skill",
      type: "string",
    }),
    defineField({
      name: "color",
      type: "string",
    }),
  ],
});
