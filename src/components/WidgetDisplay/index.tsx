import { WidgetCard } from "./WidgetCard";

export function WidgetDisplay() {
  return (
    <div
      className="
      w-[calc(100vw-1rem)] 
      flex 
      flex-wrap
      
      "
    >
      <WidgetCard />
    </div>
  );
}
