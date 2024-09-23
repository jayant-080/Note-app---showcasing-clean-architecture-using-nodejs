import { Note } from "../entity/Note";


export interface INoteRepository{

   create(note:Note):Promise<Note>
   update(id:string,note:Partial<Note>):Promise<Note | null>
   publish(id:string):Promise<Note|null>
   archive(id:string):Promise<Note|null>
   findById(id:string):Promise<Note|null>
   findAll():Promise<Note[]>
   softDelete(id:string):Promise<void>
   hardDelete(id:string):Promise<void>

}