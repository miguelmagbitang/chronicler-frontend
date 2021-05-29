export class Post {

    id: number;
    title: string;
    subtitle: string;
    pictureUrl: string;
    content: string;

    constructor (id: number, title: string, subtitle: string, pictureUrl: string, content: string) {
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.pictureUrl = pictureUrl;
        this.content = content;
    }
}
