import { IsNotEmpty, IsOptional, IsString } from "class-validator";


export class UpdateNoteDTO{


  
   @IsString({message:"id must be a string"}) 
   @IsNotEmpty({message:"id should not be empty"})
   id!:string

   @IsOptional()
   @IsString({message:"title must be a string"}) 
   @IsNotEmpty({message:"title should not be empty"})
   title!:string

   @IsOptional()
   @IsString({message:"description must be a string"}) 
   @IsNotEmpty({message:"description should not be empty"})
   description!:string

   @IsOptional()
   @IsString({message:"createdBy must be a string"}) 
   @IsNotEmpty({message:"createdBy should not be empty"})
   createdBy!:string



}