import bugImage from "../../assets/bug.svg";

interface WidgetCardProps {
  type: string;
  comment: string;
  screenshot?: string;
}
export function WidgetCard() {
  return (
    <div
      className="
      flex
      flex-col
      gap-2
      border-2
      rounded-lg
      p-3
      w-72
      h-80
      m-2
      border-zinc-600
      bg-transparent
    "
    >
      <header>
        <span className="text-xl leading-6 flex items-center justify-center gap-2">
          <img src={bugImage} alt="" className="h-6 w-6" /> Problema
        </span>
      </header>
      <span className="">Comentário:</span>
      <main className="w-[258px] h-auto rounded-md  text-zinc-100  bg-transparent scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin">
        <p className="p-2">
          Ta tudo uma BOSTA Ta tudo uma BOSTA Ta tudo uma BOSTA Ta tudo uma
          BOSTA Ta tudo uma BOSTA Ta tudo uma BOSTA Ta tudo uma BOSTA Ta tudo
          uma BOSTA Ta tudo uma BOSTA Ta tudo uma BOSTA Ta tudo uma BOSTA Ta
          tudo uma BOSTA Ta tudo uma BOSTA
        </p>

        <img className="mt-2" src={bugImage} alt="ScreenShoot" />
      </main>
    </div>
  );
}
