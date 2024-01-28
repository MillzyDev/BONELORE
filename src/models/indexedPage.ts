export class IndexedPage {
    private title: string;
    private game: string;
    private tags: string[];
    private summary: string;

    public constructor(title: string, game: string, tags: string[], summary: string) {
        this.title = title;
        this.game = game;
        this.tags = tags;
        this.summary = summary;
    }

    public getTitle(): string {
        return this.title;
    }

    public getGame(): string {
        return this.game;
    }

    public getTags(): string[] {
        return this.tags;
    }

    public getSummary(): string {
        return this.summary;
    }
}