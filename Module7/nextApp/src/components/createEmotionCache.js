import createCache from "@emotion/cache";

// Create A Cache Instance for Material UI
export default function createEmotionCache() {
  return createCache({ key: "mui", prepend: true });
}
