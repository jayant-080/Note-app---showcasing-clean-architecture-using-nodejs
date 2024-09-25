import { Container } from "inversify";
import { NoteReposiotory } from "../repository/NoteRepository";
import { TYPES } from "../types/types";
import { ArchiveNoteUseCase } from "../../application/use_case/ArchiveNoteUseCase";
import { CreateNoteUseCase } from "../../application/use_case/CreateNoteUseCase";
import { UpdateNoteUseCase } from "../../application/use_case/UpdateNoteUseCase";
import { FindAllNoteUseCase } from "../../application/use_case/FindAllNoteUseCase";
import { FindNoteByIdUseCase } from "../../application/use_case/FindNoteByIdUseCase";
import { PublishNoteUseCase } from "../../application/use_case/PublishNoteUseCase";
import { NoteController } from "../controller/NoteController";





const container = new Container()



//bind repository

container.bind<NoteReposiotory>(TYPES.NoteRepository).to(NoteReposiotory)

//bind use case

container.bind<ArchiveNoteUseCase>(TYPES.ArchiveNoteUSeCase).to(ArchiveNoteUseCase)
container.bind<CreateNoteUseCase>(TYPES.CreateNoteUseCase).to(CreateNoteUseCase)
container.bind<UpdateNoteUseCase>(TYPES.UpdateNoteUseCase).to(UpdateNoteUseCase)
container.bind<FindAllNoteUseCase>(TYPES.FindAllNoteUseCase).to(FindAllNoteUseCase)
container.bind<FindNoteByIdUseCase>(TYPES.FindNoteByIdUseCase).to(FindNoteByIdUseCase)
container.bind<PublishNoteUseCase>(TYPES.PublishNoteUseCase).to(PublishNoteUseCase)


//bind controller

container.bind<NoteController>(TYPES.NoteController).to(NoteController)


export {container}



