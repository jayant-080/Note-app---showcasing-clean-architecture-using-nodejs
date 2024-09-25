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
export class FindNoteByIdUseCase{

   constructor(@inject(TYPES.NoteRepository)private noterepository:INoteRepository){

   }


   async execute(data:any):Promise<Note|null>{
     
    try {

        const findNoteByIdDto:FindNoteByIdDTO = plainToClass(PublishNoteDTO,data)

        const errors = await validate(findNoteByIdDto)

    
        if(errors.length>0){
            const errorMessages = errors.map(error => {
                return Object.values(error.constraints || {}).join(', ');
              }).join(', ');

              console.log("after mapping errors ",errorMessages)


            throw errorMessages
        }

       

        

        const checkIfExist = await this.noterepository.findById(findNoteByIdDto.id)

        if(!checkIfExist){
            throw `note not found`

        }

        



       
         return checkIfExist

        
    } catch (error) {
        throw error
    }


   }



}