import { plainToClass } from "class-transformer";
import { Note, NoteStatus } from "../../domain/entity/Note";
import { INoteRepository } from "../../domain/repository/INoteRepsitory";
import { CreateNoteDTO } from "../dto/CreateNoteDTO";
import { validate } from "class-validator";
import { UpdateNoteDTO } from "../dto/UpdateNoteDTO";
import { PublishNoteDTO } from "../dto/PublishNoteDTO";


export class PublishNoteUseCase{

   constructor(private noterepository:INoteRepository){

   }


   async execute(data:any):Promise<Note|null>{
     
    try {

        const publishNoteDto:PublishNoteDTO = plainToClass(PublishNoteDTO,data)

        const errors = await validate(publishNoteDto)

    
        if(errors.length>0){
            const errorMessages = errors.map(error => {
                return Object.values(error.constraints || {}).join(', ');
              }).join(', ');

              console.log("after mapping errors ",errorMessages)


            throw errorMessages
        }

       

        

        const checkIfExist = await this.noterepository.findById(publishNoteDto.id)

        if(!checkIfExist){
            throw `note not found`

        }

        if(checkIfExist.status!==NoteStatus.DRAFT){
            throw "only draft note can be published"
        }




        const result = await this.noterepository.publish(publishNoteDto.id)

         return result

        
    } catch (error) {
        throw error
    }


   }



}