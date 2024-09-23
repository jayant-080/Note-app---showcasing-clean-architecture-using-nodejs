import mongoose, { Schema, model } from "mongoose";
import { Note, NoteStatus } from "../../../domain/entity/Note";


const NoteSchema = new Schema<Note>({

    title:{
        type:String,
        requored:true
    },
    description:{
        type:String,
        required:true
    },
    createdBy:{
        type:String,
        required:true
    },
    is_deleted:{
        type:Boolean,
        default:false
    },
    status:{
        type:String,
        enum:NoteStatus,
        default:NoteStatus.DRAFT
    }

},{
    timestamps:true
})


export const NoteModel = model<Note>("note",NoteSchema)