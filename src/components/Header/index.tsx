import { RefObject, useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.svg";

export const Header = ({
  feedbackFormRef,
}: {
  feedbackFormRef: RefObject<HTMLDivElement>;
}) => {
  const prevHeightRef = useRef<number>(0);
  const [shouldShowHeader, setShouldShowHeader] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > prevHeightRef.current && window.scrollY > 100) {
        setShouldShowHeader(false);
      } else {
        setShouldShowHeader(true);
      }
      prevHeightRef.current = window.scrollY;
    });
  }, []);

  const handleSendMessageClick = () => {
    feedbackFormRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`h-[70px] py-[12px] px-[20px] flex justify-between bg-[#0CA5C6] sticky top-0 transition-all ${
        shouldShowHeader ? "" : "-translate-y-[100%]"
      }`}
    >
      <img src={logo} alt="FST" className="w-[67px]" />
      <button
        className="py-[7px] px-[4px] bg-white font-bold rounded-[10px]"
        onClick={handleSendMessageClick}
      >
        Отправить сообщение
      </button>
    </div>
  );
};
