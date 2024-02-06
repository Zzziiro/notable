export function NoteCard() {
  return (
    <button className="text-left rounded-md space-y-3 p-5 overflow-hidden outline-none bg-slate-800 relative hover:ring-2 ring-slate-600 focus-visible:ring-2 focus-visible:ring-violet-400">
      <span className="text-small font-medium text-slate-200">Há 6 dias</span>
      <p className="text-small leading-6 text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eos
        laborum aliquid vel! Beatae adipisci, quis quibusdam, similique maxime
        dicta numquam incidunt repudiandae cumque aut eveniet, sapiente
        asperiores consequuntur hic.
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2  bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  );
}

export function NewNoteCard() {
  return (
    <div className=" rounded-md space-y-3 p-5 overflow-hidden bg-slate-700">
      <span className="text-small font-medium text-slate-200">
        Adicionar nota
      </span>
      <p className="text-small leading-6 text-slate-400">
        Grave uma nota em áudio que será convertida para texto automaticamente.
      </p>
    </div>
  );
}
