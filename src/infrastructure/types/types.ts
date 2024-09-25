
export const TYPES = {
   //repository
    NoteRepository:Symbol.for("NoteRepository"),

    //use cases
    ArchiveNoteUSeCase:Symbol.for("ArchiveNoteUseCase"),
    CreateNoteUseCase:Symbol.for("CreateNoteUseCase"),
    UpdateNoteUseCase:Symbol.for("UpdateNoteUseCase"),
    FindAllNoteUseCase:Symbol.for("FindAllNoteUseCase"),
    FindNoteByIdUseCase:Symbol.for("FindNoteByIdUseCase"),
    PublishNoteUseCase:Symbol.for("PublishNoteUseCase"),


    //controller
    NoteController:Symbol.for("NoteController")





}