import { ForwardedRef, forwardRef } from "react";
import { useForm } from "react-hook-form";
import { postFeedback } from "../../api";

export type FormFields = {
  name: string;
  email: string;
  text: string;
};

export const Feedback = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>();

  const handlePostFeedback = async (formFields: FormFields) => {
    const response = await postFeedback(formFields);
    if (response.data.status === "ok") {
      alert("Сообщение отправлено, с вами скоро свяжутся");
    }
    reset();
  };

  return (
    <div className="mb-[100px]" ref={ref}>
      <p className="text-center mb-[33px] text-[30px] font-bold">Контакты</p>
      <div className="flex flex-wrap justify-center md: gap-[70px]">
        <ul className="list-disc text-[14px] font-[700] w-[290px] flex flex-col justify-center">
          <li>Телефон：18680660536</li>
          <li>
            Адрес：Room 701 ,Building 6A ，ZhongJia Industrial park ，LongHua
            District，Shenzhen, Guangdong, China
          </li>
          <li>Email：jason@fstsystem.cn</li>
        </ul>
        <div className="w-[290px]">
          <p className="text-black text-[18px] font-[600] text-center mb-[16px]">
            Обратная связь
          </p>
          <form
            className="flex flex-col gap-[17px]"
            onSubmit={handleSubmit(handlePostFeedback)}
          >
            <div>
              <input
                className="w-full outline-none border-black border-[2px] border-solid py-[11px] px-[14px] rounded-[4px] placeholder:text-black"
                placeholder="Имя"
                {...register("name", {
                  required: "Введите имя",
                })}
              />
              {errors.name && (
                <p className="text-[red]">{errors.name.message}</p>
              )}
            </div>
            <div>
              <input
                className="w-full outline-none border-black border-[2px] border-solid py-[11px] px-[14px] rounded-[4px] placeholder:text-black"
                placeholder="Email"
                {...register("email", {
                  required: "Введите email",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Введите корректный email",
                  },
                })}
              />
              {errors.email && (
                <p className="text-[red]">{errors.email.message}</p>
              )}
            </div>
            <div>
              <textarea
                className="w-full outline-none border-black border-[2px] border-solid py-[11px] px-[14px] h-[96px] rounded-[4px] resize-none placeholder:text-black"
                placeholder="Оставьте сообщение"
                {...register("text", {
                  required: "Введите сообщение",
                })}
              />
              {errors.text && (
                <p className="text-[red]">{errors.text.message}</p>
              )}
            </div>
            <button className="py-[6px] px-[12px] bg-black text-white rounded-[4px] mt-[12px]">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});
