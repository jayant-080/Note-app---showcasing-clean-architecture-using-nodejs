import { IsNotEmpty, IsOptional, IsString } from "class-validator";


export class PublishNoteDTO{


  
   @IsString({message:"id must be a string"}) 
   @IsNotEmpty({message:"id should not be empty"})
   id!:string

 
 


}