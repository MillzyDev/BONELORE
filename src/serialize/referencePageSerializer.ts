import path from "path";
import { PageSerializerBase } from "./pageSerializerBase.js";

export class ReferencePageSerializer extends PageSerializerBase {
    private static TEMPLATE_FILEPATH = path.join(process.cwd(), "views", "reference.ejs");

    public constructor(tomlFilepath: string) {
        super(tomlFilepath, ReferencePageSerializer.TEMPLATE_FILEPATH);
    }

    public override serializeToHtml(outputPath: string): void {
        
    }
}