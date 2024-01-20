import { useState } from "react";
import { SingleCardData } from "../../constants";

type ItemCardProps = {
  card: SingleCardData;
};

export const ItemCard = ({ card }: ItemCardProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleActive = () => {
    setIsActive((isActiveOld) => !isActiveOld);
  };

  return (
    <div className="mt-[60px]">
      <div
        className={`flex flex-wrap justify-around lg:gap-[100px] lg:justify-center ${card.className}`}
      >
        <div className="w-[420px] flex justify-center items-center">
          <img src={card.image} />
        </div>
        <div className="flex flex-col justify-between">
          <div className="px-[15px] mb-[15px] max-w-[320px]">
            <p className="font-bold text-[25px]">{card.title}</p>
            <p className="text-[12px] font-bold">{card.description}</p>
          </div>
          <div className="flex h-[47px] gap-[19px] justify-center">
            <button className="py-[6px] px-[12px] bg-[#0CA5C6] rounded-[10px] h-[36px]">
              Запрос цены
            </button>
            <div className="h-full">
              <button
                className={`py-[6px] px-[12px] bg-black text-white ${
                  isActive && card.characteristics
                    ? "h-full"
                    : "h-[36px] rounded-[10px]"
                }`}
                onClick={toggleActive}
              >
                Характеристики
              </button>
            </div>
          </div>
        </div>
      </div>
      {isActive && card.characteristics && (
        <div className="bg-black">
          <div className="text-[16px] font-bold leading-normal text-white max-w-[760px] py-[60px] px-[10px] md:px-[40px]">
            {card.characteristics}
          </div>
        </div>
      )}
    </div>
  );
};
