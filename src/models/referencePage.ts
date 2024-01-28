import { IndexedPage } from "./indexedPage.js";

export class ReferencePage extends IndexedPage  {
    private description: string;
    private image: string;
    private transcription: string;

    public constructor(title: string, game: string, tags: string[], summary: string, description: string, image: string, transcription: string) {
        super(title, game, tags, summary);

        this.description = description;
        this.image = image;
        this.transcription = transcription;
    }

    public getDescripion(): string {
        return this.description;
    }

    public getImage(): string {
        return this.image;
    }

    public getTranscription(): string {
        return this.transcription;
    }
}