import fs from "fs"
import toml from "toml"

export function parseFromFile(path: string): any {
    const content: string = fs.readFileSync(path).toString();
    return toml.parse(content);
}