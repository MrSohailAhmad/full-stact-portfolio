import { type SchemaTypeDefinition } from "sanity";
import { MeType } from "./profileSchema";
import { aboutDataType } from "./about";
import { contactDataType } from "./contactForm";
import { skillDataType } from "./skillSchema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [MeType, aboutDataType, contactDataType, skillDataType],
};
