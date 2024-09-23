import { Note, NoteStatus } from "../../domain/entity/Note";
import { INoteRepository } from "../../domain/repository/INoteRepsitory";
import { DatabaseError } from "../../utils/Errors/DatabaseError";
import { NoteModel } from "../database/model/Note";


export class NoteReposiotory implements INoteRepository {
    async create(note: Note): Promise<Note> {

        try {
            const new_note = new NoteModel(note)
            const result = await new_note.save()

           

            return result



        } catch (error) {
            throw new DatabaseError(error as string)
        }
    }
    async update(id: string, note: Partial<Note>): Promise<Note | null> {
        try {

            const result = await NoteModel.findByIdAndUpdate(
                id,
                { $set: note },
                { new: true }
            ).exec()


            return result



        } catch (error) {
            throw new DatabaseError(error as string)
        }
    }
    async publish(id: string): Promise<Note | null> {
        try {

            const result = await NoteModel.findByIdAndUpdate(
                id,
                { $set: { status: NoteStatus.PUBLISHED } },
                { new: true }
            ).exec()


            return result



        } catch (error) {
            throw new DatabaseError(error as string)
        }
    }
    async archive(id: string): Promise<Note | null> {
        try {

            const result = await NoteModel.findByIdAndUpdate(
                id,
                { $set: { status: NoteStatus.ARCHIVE } },
                { new: true }
            ).exec()


            return result



        } catch (error) {
            throw new DatabaseError(error as string)
        }
    }


    async findById(id: string): Promise<Note | null> {
        try {

            const result = await NoteModel.findById(id)
            return result



        } catch (error) {
            throw new DatabaseError(error as string)
        }
    }

    async findAll(): Promise<Note[]> {
        try {

            const result = await NoteModel.find().sort('-createdAt')
            return result



        } catch (error) {
            throw new DatabaseError(error as string)
        }
    }
    async softDelete(id: string): Promise<void> {
        try {

            const result = await NoteModel.findByIdAndUpdate(
                id,
                { $set: { is_deleted: true } },
                { new: true }
            ).exec()

        } catch (error) {
            throw new DatabaseError(error as string)
        }
    }

    async hardDelete(id: string): Promise<void> {
         try {

            const result = await NoteModel.findByIdAndDelete(id)

        } catch (error) {
            throw new DatabaseError(error as string)
        }
    }




}