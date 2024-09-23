import { IsNotEmpty, IsString } from "class-validator";


export class CreateNoteDTO{

   @IsString({message:"title must be a string"}) 
   @IsNotEmpty({message:"title should not be empty"})
   title!:string

   @IsString({message:"description must be a string"}) 
   @IsNotEmpty({message:"description should not be empty"})
   description!:string

   @IsString({message:"createdBy must be a string"}) 
   @IsNotEmpty({message:"createdBy should not be empty"})
   createdBy!:string



}