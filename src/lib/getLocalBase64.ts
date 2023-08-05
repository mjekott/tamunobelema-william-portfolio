import { getPlaiceholder } from "plaiceholder";

export default async function getBase64(imageUrl: string) {
  try {
    const res = await fetch(imageUrl);
    console.log(res);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (e) {
    console.log("e", e);
    if (e instanceof Error) console.log(e.stack);
  }
}
