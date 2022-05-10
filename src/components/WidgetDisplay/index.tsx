import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import { FeedbackType } from "../WidgetForm";
import { WidgetCard } from "./WidgetCard";

interface FeedbacksTypes {
  id: string;
  type: FeedbackType;
  comment: string;
  screenshot?: string;
}

export function WidgetDisplay() {
  const [feedbacks, setFeedbacks] = useState<FeedbacksTypes[]>([]);

  useEffect(() => {
    api.get("/feedbacks").then((response) => setFeedbacks(response.data));
  }, []);

  return (
    <div
      className="
      w-[calc(100vw-1rem)] 
      flex
      flex-wrap
      items-center
      "
    >
      {feedbacks.map((feedback) => {
        return (
          <WidgetCard
            key={feedback.id}
            type={feedback.type}
            comment={feedback.comment}
            screenshot={feedback.screenshot}
          />
        );
      })}
    </div>
  );
}
