export class Project {
    public name: string;
    public description: string;
    public url: string;
    public details: string[];

    constructor(name: string, desc: string, url: string, details: string[]) {
        this.name = name;
        this.description = desc;
        this.url = url;
        this.details = details;
    }
}