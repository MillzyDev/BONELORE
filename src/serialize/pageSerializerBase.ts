export class PageSerializerBase {
    private tomlFilepath: string;
    private templateFilepath: string;

    public constructor(tomlFilepath: string, templateFilepath) {
        this.tomlFilepath = tomlFilepath;
        this.templateFilepath = templateFilepath;
    }

    public serializeToHtml(outputPath: string) {
    }
}