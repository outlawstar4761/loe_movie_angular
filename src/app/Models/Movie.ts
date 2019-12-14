export class Movie {
  UID:number;
  title:string;
  relyear:number;
  genre:string;
  genre2:string;
  genre3:string;
  director:string;
  run_time:number;
  description:string;
  cover_path:string;
  file_path:string;
  rating:string;

  constructor(obj?: any){
    this.UID = obj && obj.UID || null;
    this.title = obj && obj.title || null;
    this.relyear = obj && obj.relyear || null;
    this.genre = obj && obj.genre || null;
    this.genre2 = obj && obj.genre2 || null;
    this.genre3 = obj && obj.genre3 || null;
    this.director = obj && obj.director || null;
    this.cover_path = obj && obj.cover_path || null;
    this.file_path = obj && obj.file_path || null;
    this.rating = obj && obj.rating || null;
  }
}
