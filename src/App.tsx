import { useRef } from "react";
import { Feedback } from "./components/Feedback/index";
import { Header } from "./components/Header";
import { ItemCard } from "./components/ItemCard";
import { cardsData } from "./constants";

function App() {
  const feedbackFormRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <Header feedbackFormRef={feedbackFormRef} />
      <div className="mb-[50px]">
        {cardsData.map((card) => (
          <ItemCard card={card} key={card.title} />
        ))}
      </div>
      <Feedback ref={feedbackFormRef} />
    </div>
  );
}

export default App;
