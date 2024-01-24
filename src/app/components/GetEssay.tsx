import { promises as fs } from "fs";

export default async function GetEssay() {
  const file = await fs.readFile(process.cwd() + "/src/app/story.txt", "utf8");
  const pars: string[] = file.split("\n\n");

  return (
    <div>
      {pars.map((p) => (
        <p className="mb-3 text-gray-700">{p}</p>
      ))}
    </div>
  );
}
