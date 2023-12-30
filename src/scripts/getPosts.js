import { fileURLToPath } from "url";
import { dirname, join, resolve } from "path";
import { readdirSync, readFileSync, writeFileSync } from "fs";
import grayMatter from "gray-matter";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const postsDirectory = resolve(__dirname, "../../public/posts");
const filenames = readdirSync(postsDirectory);

const posts = filenames.map((filename) => {
  const filePath = join(postsDirectory, filename);
  const fileContents = readFileSync(filePath, "utf8");
  const { data, content } = grayMatter(fileContents);
  return { ...data, content };
});

writeFileSync("./src/scripts/posts.json", JSON.stringify(posts));
