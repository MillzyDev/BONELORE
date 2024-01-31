import path from "path";

import { parseFromFile } from "./tomlParse.js";

const CATEGORISATION_FILENAME: string = path.join(process.cwd(), "content", "categorisation.toml");

export class SearchData {
    private static instance: SearchData;

    private games: string[]
    private tags: string[];

    private constructor() {
        const categorisationData = this.parseCategorisationData();
        this.games = categorisationData.games;
        this.tags = categorisationData.tags;
        console.log(categorisationData);
    }

    public static getInstance(): SearchData {
        if (SearchData.instance == null)
            SearchData.instance = new SearchData();

        return SearchData.instance;
    }

    private parseCategorisationData() {
        return parseFromFile(CATEGORISATION_FILENAME);
    }

    public getGames(): string[] {
        return this.games;
    }

    public getTags(): string[] {
        return this.tags;
    }
}