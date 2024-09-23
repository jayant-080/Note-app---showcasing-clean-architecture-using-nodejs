import express from 'express'
import { NoteController } from '../controller/NoteController'
import { CreateNoteUseCase } from '../../application/use_case/CreateNoteUseCase'
import { NoteReposiotory } from '../repository/NoteRepository'
import { UpdateNoteUseCase } from '../../application/use_case/UpdateNoteUseCase'
import { PublishNoteUseCase } from '../../application/use_case/PublishNoteUseCase'
import { ArchiveNoteUseCase } from '../../application/use_case/ArchiveNoteUseCase'
import { FindNoteByIdUseCase } from '../../application/use_case/FindNoteByIdUseCase'
import { FindAllNoteUseCase } from '../../application/use_case/FindAllNoteUseCase'

const noteRoute = express.Router()


const noteRepository = new NoteReposiotory()
const createNoteUseCase = new CreateNoteUseCase(noteRepository)
const updateNoteUseCase = new UpdateNoteUseCase(noteRepository)
const publishNoteUseCase = new PublishNoteUseCase(noteRepository)
const archiveNoteUseCase = new ArchiveNoteUseCase(noteRepository)
const findByIdUseCase = new FindNoteByIdUseCase(noteRepository)
const findAllNoteUseCase = new FindAllNoteUseCase(noteRepository)


const noteController = new NoteController(
    createNoteUseCase,updateNoteUseCase,
    publishNoteUseCase,archiveNoteUseCase,findByIdUseCase,findAllNoteUseCase)


noteRoute.post('/create',noteController.createNote.bind(noteController))
noteRoute.post('/update',noteController.updateNote.bind(noteController))
noteRoute.post('/publish',noteController.publishNote.bind(noteController))
noteRoute.post('/archive',noteController.archiveNote.bind(noteController))
noteRoute.get('/note',noteController.findById.bind(noteController))
noteRoute.get('/notes',noteController.findAll.bind(noteController))


export default noteRoute