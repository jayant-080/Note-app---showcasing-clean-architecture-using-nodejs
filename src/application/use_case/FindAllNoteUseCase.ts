import { plainToClass } from "class-transformer";
import { Note, NoteStatus } from "../../domain/entity/Note";
import { INoteRepository } from "../../domain/repository/INoteRepsitory";
import { CreateNoteDTO } from "../dto/CreateNoteDTO";
import { validate } from "class-validator";
import { UpdateNoteDTO } from "../dto/UpdateNoteDTO";
import { PublishNoteDTO } from "../dto/PublishNoteDTO";
import { FindNoteByIdDTO } from "../dto/FindNoteByIdDTO";
import { inject, injectable } from "inversify";
import { TYPES } from "../../infrastructure/types/types";


@injectable()
export class FindAllNoteUseCase{

   constructor(@inject(TYPES.NoteRepository)private noterepository:INoteRepository){

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