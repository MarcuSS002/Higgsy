import axios from "axios";
import fs from "fs";

export async function createImage(
  prompt: string,
  outputPath: string
) {
  try {
    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(
      prompt
    )}?width=1024&height=1024&nologo=true`;

    const response = await axios.get(url, {
      responseType: "arraybuffer",
    });

    fs.writeFileSync(outputPath, response.data);
  } catch (err) {
    console.error(err);
    throw err;
  }
}