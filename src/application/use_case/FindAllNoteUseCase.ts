import { plainToClass } from "class-transformer";
import { Note, NoteStatus } from "../../domain/entity/Note";
import { INoteRepository } from "../../domain/entity/repository/INoteRepsitory";
import { CreateNoteDTO } from "../dto/CreateNoteDTO";
import { validate } from "class-validator";
import { UpdateNoteDTO } from "../dto/UpdateNoteDTO";
import { PublishNoteDTO } from "../dto/PublishNoteDTO";
import { FindNoteByIdDTO } from "../dto/FindNoteByIdDTO";


export class FindAllNoteUseCase{

   constructor(private noterepository:INoteRepository){

   }


   async execute(data:any):Promise<Note[]>{
     
    try {

       
        const notes = await this.noterepository.findAll()

       
         return notes

        
    } catch (error) {
        throw error
    }


   }



}