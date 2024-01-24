import { promises as fs } from "fs";

export default async function Page() {
  const file = await fs.readFile(process.cwd() + "/src/app/story.txt", "utf8");
  const pars: string[] = file.split("\n\n");

  return (
    <div>
      {pars.map((p) => (
        <p>{p}</p>
      ))}
    </div>
  );
}
