export class Game {
    _id?: number;
    platform: string;
    title: string;
    description: string;
    genre: string;
    meta_score:number;
    user_score:number;
    release_date:string;
    filename?:string;

    constructor(platform: string,title:string,description:string,genre:string,meta_score:number,user_score:number,release_date:string,filename:string) {
        this.platform = platform;
        this.title=title;
        this.description=description;
        this.genre=genre;
        this.meta_score=meta_score;
        this.user_score=user_score;
        this.release_date=release_date;
        this.filename=filename;
     }
}

