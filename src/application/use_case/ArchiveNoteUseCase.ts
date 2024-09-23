import { plainToClass } from "class-transformer";
import { Note, NoteStatus } from "../../domain/entity/Note";
import { INoteRepository } from "../../domain/repository/INoteRepsitory";
import { CreateNoteDTO } from "../dto/CreateNoteDTO";
import { validate } from "class-validator";
import { UpdateNoteDTO } from "../dto/UpdateNoteDTO";
import { PublishNoteDTO } from "../dto/PublishNoteDTO";
import { ArchiveNoteDTO } from "../dto/ArchiveNoteDTO";


export class ArchiveNoteUseCase{

   constructor(private noterepository:INoteRepository){

   }


   async execute(data:any):Promise<Note|null>{
     
    try {

        const archiveNoteDto:ArchiveNoteDTO = plainToClass(PublishNoteDTO,data)

        const errors = await validate(archiveNoteDto)

    
        if(errors.length>0){
            const errorMessages = errors.map(error => {
                return Object.values(error.constraints || {}).join(', ');
              }).join(', ');

              console.log("after mapping errors ",errorMessages)


            throw errorMessages
        }

       

        

        const checkIfExist = await this.noterepository.findById(archiveNoteDto.id)

        if(!checkIfExist){
            throw `note not found`

        }

        if(checkIfExist.status!==NoteStatus.PUBLISHED){
            throw "only published note can be archived"
        }

        const result = await this.noterepository.archive(archiveNoteDto.id)

         return result

        
    } catch (error) {
        throw error
    }


   }



}