import { type SchemaTypeDefinition } from "sanity";
import { MeType } from "./profileSchema";
import { aboutDataType } from "./about";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [MeType, aboutDataType],
};
