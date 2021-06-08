export class Post {

    id: number;
    title: string;
    date: string;
    mood: number;
    content: string;

    constructor (title: string, date: string, mood: number, content: string) {
        this.title = title;
        this.date = date;
        this.mood = mood;
        this.content = content;
    }
}

