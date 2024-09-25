import { plainToClass } from "class-transformer";
import { Note, NoteStatus } from "../../domain/entity/Note";
import { INoteRepository } from "../../domain/repository/INoteRepsitory";
import { CreateNoteDTO } from "../dto/CreateNoteDTO";
import { validate } from "class-validator";
import { UpdateNoteDTO } from "../dto/UpdateNoteDTO";
import { inject, injectable } from "inversify";
import { TYPES } from "../../infrastructure/types/types";

@injectable()
export class UpdateNoteUseCase{

   constructor(@inject(TYPES.NoteRepository) private noterepository:INoteRepository){

   }


   async execute(data:any):Promise<Note|null>{
     
    try {

        const updateNoteDto:UpdateNoteDTO = plainToClass(UpdateNoteDTO,data)

        const errors = await validate(updateNoteDto)

    
        if(errors.length>0){
            const errorMessages = errors.map(error => {
                return Object.values(error.constraints || {}).join(', ');
              }).join(', ');

              console.log("after mapping errors ",errorMessages)


            throw errorMessages
        }

        const forbidden = ['status','createdAt','is_deleted'] 

        const hasForbiddenKeys = Object.keys(forbidden).some(key=>{
            forbidden.includes(key)
        })

        if(hasForbiddenKeys){
            throw `object contains some forbidden field ${hasForbiddenKeys}`
        }

        const checkIfExist = await this.noterepository.findById(updateNoteDto.id)

        if(!checkIfExist){
            throw `note not found`

        }


        const result = await this.noterepository.update(updateNoteDto.id,updateNoteDto)

         return result

        
    } catch (error) {
        throw error
    }


   }



}