import { FeedbackType, feedbackTypes } from "../WidgetForm";

interface WidgetCardProps {
  type: FeedbackType;
  comment: string;
  screenshot?: string;
}

export function WidgetCard({ type, comment, screenshot }: WidgetCardProps) {
  const feedbackTypeInfo = feedbackTypes[type];

  return (
    <div
      className="
      flex
      flex-col
      gap-2
      border-2
      rounded-lg
      p-3
      h-80
      m-2
      border-zinc-600
      bg-transparent
      w-[100%]
      lg:w-[calc(100%/4-1rem)]
      "
    >
      <header>
        <span className="text-xl leading-6 flex items-center justify-center gap-2">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="h-6 w-6"
          />{" "}
          {feedbackTypeInfo.title}
        </span>
      </header>
      <span>Comentário:</span>
      <main className="lg:w-[100%] h-auto rounded-md  text-zinc-100  bg-transparent scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin">
        <p className="p-2">{comment}</p>
        {screenshot && (
          <img className="w-[100%]" src={screenshot} alt="ScreenShoot" />
        )}
      </main>
    </div>
  );
}
