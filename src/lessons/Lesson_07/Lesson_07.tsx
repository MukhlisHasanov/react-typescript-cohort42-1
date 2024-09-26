import { useState } from "react";

import Button from "components/Button/Button";
import "./styles.css";
import Counter from "components/Counter/Counter";


// Создайте функцию, которая бы принимала бы следующие параметры:
// код погоды и функция decode, которая дает расшифровку погоды по коду.
// Функция должна возвращать строку, описывающую погоду. Таблица соответствия
// код-описание: SQ – шквал PO – пыльный вихрь FC - торнадо BR – дымка
// (видимость от 1 до 9 км) HZ – мгла (видимость менее 10 км) FU – дым
// (видимость менее 10 км) DS - пыльная буря (видимость менее 10 км) SS -
// песчаная буря (видимость менее 10 км) Подсказка: удобно использовать в
// одном из методов switch-case:
function Lesson_07() {

    // минимизация ошибок
    // при изменении кода достаточно изменить enum
    // 
  enum WEATHER_CODES {
    SQ = "SQ",
    PO = "PO",
    FC = "FC",
    BR = "BR",
    HZ = "HZ",
    FU = "FU",
    DS = "DS",
    SS = "SS",
  }

  const decode = (code: WEATHER_CODES): string => {
    switch (code) {
      case WEATHER_CODES.SQ: {
        return "шквал";
      }
      case WEATHER_CODES.PO: {
        return "пыльный вихрь";
      }
      case WEATHER_CODES.FC: {
        return "торнадо";
      }
      case WEATHER_CODES.BR: {
        return "дымка (видимость от 1 до 9 км)";
      }
      case WEATHER_CODES.HZ: {
        return "мгла (видимость от 1 до 9 км)";
      }
      case WEATHER_CODES.FU: {
        return "дым (видимость менее 10 км)";
      }
      case WEATHER_CODES.DS: {
        return "пыльная буря (видимость менее 10 км)";
      }
      case WEATHER_CODES.SS: {
        return "песчаная буря (видимость менее 10 км)";
      }
      default: {
        return "Weather code doesn't found";
      }
    }
  };

  const weatherDecode = (
    code: WEATHER_CODES,
    decode: (code: WEATHER_CODES) => string
  ) => {
    return decode(code);
  };

  console.log(weatherDecode(WEATHER_CODES.FC, decode));

  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  // КОНТРОЛЬ СОСТОЯНИЕМ CHILD С ПОМОЩЬЮ PARENT COMPONENT

  const [count, setCount] = useState<number>(0);
    const onPlus = () => {
    setCount((prevValue: number) => {
      return prevValue + 1;
    });
  };

  const onMinus = () => {
    setCount((prevValue) => {
      return prevValue - 1;
    });
  };

  return <div className="lesson07-wrapper">
    <Counter count={count} onMinus={onMinus} onPlus={onPlus}/>
    <Button name="Send" onClick={() => {}} />

  </div>;
}

export default Lesson_07;
