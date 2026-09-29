import { alt, size, contentType, renderOgImage } from "./_og-image";

export const runtime = "nodejs";
export { alt, size, contentType };

export default async function Image() {
  return renderOgImage();
}
