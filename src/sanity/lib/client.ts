import { createClient } from "next-sanity";

import { apiVersion } from "../env";

// Ensure process.env is properly set in your environment
if (
  !process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  !process.env.NEXT_PUBLIC_SANITY_DATASET
) {
  throw new Error(
    "Sanity project ID or dataset is missing in environment variables"
  );
}

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
