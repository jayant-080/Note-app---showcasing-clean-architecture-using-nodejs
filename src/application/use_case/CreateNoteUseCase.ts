import { plainToClass } from "class-transformer";
import { Note, NoteStatus } from "../../domain/entity/Note";
import { INoteRepository } from "../../domain/repository/INoteRepsitory";
import { CreateNoteDTO } from "../dto/CreateNoteDTO";
import { validate } from "class-validator";


export class CreateNoteUseCase{

   constructor(private noterepository:INoteRepository){

   }


   async execute(data:any):Promise<Note>{
     
    try {

        const createNoteDto:CreateNoteDTO = plainToClass(CreateNoteDTO,data)

        const errors = await validate(createNoteDto)

        console.log(errors)

        if(errors.length>0){
            const errorMessages = errors.map(error => {
                return Object.values(error.constraints || {}).join(', ');
              }).join(', ');

              console.log("after mapping errors ",errorMessages)


            throw errorMessages
        }

        const note = new Note(
            createNoteDto.title,
            createNoteDto.description,
            createNoteDto.createdBy,
            new Date(),
            new Date(),
            false,
            NoteStatus.DRAFT
        )

        const result = await this.noterepository.create(note)

        console.log("use case",result)

        return result

        
    } catch (error) {
        throw error
    }


   }



}