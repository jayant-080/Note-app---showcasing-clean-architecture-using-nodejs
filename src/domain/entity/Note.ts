

export enum NoteStatus{
    DRAFT = "DRAFT",
    PUBLISHED = "PUBLISHED",
    ARCHIVE = "ARCHIVE"
}

export class Note{

    constructor(
        public title:string,
        public description:string,
        public createdBy?:string,
        public createdAt?:Date,
        public updatedAt?:Date,
        public is_deleted?:boolean,
        public status?:NoteStatus

    ){

    }
}