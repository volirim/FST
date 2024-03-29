import fstThreeHundred from "../assets/FSTThreeHundred.png";
import fstL from "../assets/FSTL.png";
import smart from "../assets/smart.png";

export interface SingleCardData {
  image: string;
  title: string;
  description: string;
  characteristics: JSX.Element | null;
  className: string;
}

export const cardsData: SingleCardData[] = [
  {
    className: "",
    image: fstThreeHundred,
    title: "Инвертор общего назначения FST300",
    description:
      "Серия FST300 представляет собой высокопроизводительные приводы переменного тока общего назначения, оснащенные самой современной системой векторного управления с открытым и замкнутым контуром с PG (более 15 кВт). подходит для асинхронных асинхронных двигателей переменного тока с отличными характеристиками управления. Кроме того, он спроектирован так, чтобы быть прочным и иметь большую мощность для тяжелых условий эксплуатации и сложных задач по приводу двигателей.",
    characteristics: (
      <>
        Преобразователи частоты общего назначения для тяжелых условий
        эксплуатации с питанием 1x230В и 3x400В. Диапазон мощностей:
        <br />
        -вход 1x230V, выход 3x0...230V:0.4 ...2.2kW
        <br />
        -вход 3x400V, выход 3x0...400V:0.75...630kW
        <br />
        •Выходная чатота: 0...500Гц
        <br />
        •Методы управления:
        <br />
        -Безсенсорное векторное управление (SVC)
        <br />
        -Векторное управление с обратной связью (FVC)
        <br />
        -Управление напряжением/частотой (V/F)
        <br />
        •Пусковой крутящий момент 0Гц/180%(FVC) 0.25 Гц/150% (SVC)
        <br />
        •Перегрузка:150% номинального тока в течение 60 секунд 180% номинального
        тока в течение 3 секунд
        <br />
        •Основные функции управления: ПИД-регулятор процесса, простой ПЛК,
        компенсация крутящего момента, ограничение и управление крутящим
        моментом, AVR... ...
        <br />
        •Более 30 функций защиты от неисправностей.
      </>
    ),
  },
  {
    className: "flex-row-reverse",
    image: fstL,
    title: "FST300L Инвертор лифта с разомкнутым контуром",
    description:
      "Специальный преобразователь частоты для лифтов серии FST300L, подходящий для управления асинхронным двигателем, подходит для сценариев управления лифтами с разомкнутым контуром. Разработанный с высокой производительностью, высоким качеством и высокой удельной мощностью, он имеет значительные стандарты защиты окружающей среды, пространства для установки и дизайна, которые могут еще больше оптимизировать работу пользователя.",
    characteristics: (
      <>
        Специализированные преобразователи частоты для управления лифтами без
        обратной связи
        <br />
        •Питание: 3x380-480 В, 50/60 Гц
        <br />
        •Диапазон мощностей: 3,7...30 кВт
        <br />
        •Поддерживаемые двигатели: Асинхронный двигатель без обратной связи по
        скорости.
        <br />
        •Перегрузочная способность: 150% 60 с и 180% 3 с
        <br />
        Режим управления:
        <br />
        -SVC контроль
        <br />
        -V/F контроль
        <br />
        •Автонастройка, S-образная кривая ускорения/замедления, автоматическое
        выравнивание
        <br />
        •Более 30 функций защиты от неисправностей
        <br />
        •Поддержка спасательной операции UPS/ARD
      </>
    ),
  },
  {
    className: "",
    image: smart,
    title: "SMART MANAGER HMI",
    description:
      "Продукты FST HMI оснащены различными портами связи для быстрой связи и удобного управления широким спектром машин, систем и объектов. HMI имеет узкую рамку и широкий экран. Он оснащен более чем одним COM-портом и портом Ethernet. Благодаря функции многоязычного ввода он обеспечивает удобство работы для клиентов со всего мира с английскими, русскими и испанскими версиями на разных языках.",
    characteristics: null,
  },
];
