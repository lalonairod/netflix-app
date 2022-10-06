export class MovieData {
    constructor( 
        public id : number,
        public overview : string,
        public poster_path : string,
        public title : string,
        public vote_average : number,
        public release_date : string,
        public backdrop_path : string
    ){}
}