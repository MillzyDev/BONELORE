export class PageSerializer {
    private static instance: PageSerializer;

    private constructor() {
        //
    }

    public static getInstance(): PageSerializer {
        if (!PageSerializer.instance)
            PageSerializer.instance = new PageSerializer();
        return PageSerializer.instance;
    }
}