import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const configClient = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-10-05",
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(configClient);

export default configClient;
export const urlFor = (source) => builder.image(source);
