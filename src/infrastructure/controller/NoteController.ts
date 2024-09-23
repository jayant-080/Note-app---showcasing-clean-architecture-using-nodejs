import { Request, Response } from "express";
import { CreateNoteUseCase } from "../../application/use_case/CreateNoteUseCase";
import { UpdateNoteUseCase } from "../../application/use_case/UpdateNoteUseCase";
import { PublishNoteUseCase } from "../../application/use_case/PublishNoteUseCase";
import { ArchiveNoteUseCase } from "../../application/use_case/ArchiveNoteUseCase";
import { FindNoteByIdUseCase } from "../../application/use_case/FindNoteByIdUseCase";
import { FindAllNoteUseCase } from "../../application/use_case/FindAllNoteUseCase";


export class NoteController{
 
    constructor(
        private createNoteUseCase:CreateNoteUseCase,
        private updateNoteUseCase:UpdateNoteUseCase,
        private publishNoteUseCase:PublishNoteUseCase,
        private archiveNoteUseCase:ArchiveNoteUseCase,
        private findByIdUseCase:FindNoteByIdUseCase,
        private findAllNoteUseCase:FindAllNoteUseCase


    ){}


    async createNote(req:Request,res:Response){

        try {

            const note = req.body
            const data = await this.createNoteUseCase.execute(note)

            return res.status(201).json({
                status:true,
                data:data
            })
            
        } catch (error) {
            return res.status(400).json({
                status:false,
                error:error
            })
        }
    }


    async updateNote(req:Request,res:Response){

        try {

            const note = req.body
            const data = await this.updateNoteUseCase.execute(note)

            return res.status(201).json({
                status:true,
                data:data
            })
            
        } catch (error) {
            return res.status(400).json({
                status:false,
                error:error
            })
        }
    }
    async publishNote(req:Request,res:Response){

        try {

            const note = req.body
            const data = await this.publishNoteUseCase.execute(note)

            return res.status(201).json({
                status:true,
                data:data
            })
            
        } catch (error) {
            return res.status(400).json({
                status:false,
                error:error
            })
        }
    }

    async archiveNote(req:Request,res:Response){

        try {

            const note = req.body
            const data = await this.archiveNoteUseCase.execute(note)

            return res.status(201).json({
                status:true,
                data:data
            })
            
        } catch (error) {
            return res.status(400).json({
                status:false,
                error:error
            })
        }
    }

    async findById(req:Request,res:Response){

        try {

            const note = req.query
            const data = await this.findByIdUseCase.execute(note)

            return res.status(201).json({
                status:true,
                data:data
            })
            
        } catch (error) {
            return res.status(400).json({
                status:false,
                error:error
            })
        }
    }

    async findAll(req:Request,res:Response){

        try {

            const note = req.body
            const data = await this.findAllNoteUseCase.execute(note)

            return res.status(201).json({
                status:true,
                data:data
            })
            
        } catch (error) {
            return res.status(400).json({
                status:false,
                error:error
            })
        }
    }

}