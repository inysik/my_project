// import cls from "./FooterOther.module.css"

// export default function FooterOther(){


//     return(
//         <>
//           <hr/>
//         <section className={cls.footerOther}>
      
//     <div className={cls.container}>
//     <h1 className={cls.number}>1000</h1>
//     <h2 className={cls.text}>Учеников Преобразили</h2>
//     </div>
//     <div  className={cls.container}>
//     <h1 className={cls.number}>500</h1>
//     <h2 className={cls.text}>Отзывов О Великолепии</h2>
//     </div>
//     <div  className={cls.container}>
//     <h1 className={cls.number}>99%</h1>
//     <h2 className={cls.text}>Удовлетворенных Учеников</h2>
//     </div>

//         </section>

// <hr/>
//         </>
//     )
// }


import { useState, useEffect } from "react";
import cls from "./FooterOther.module.css";
import { useInView } from "./hooks/useInView"; // Импортируем хук

function useCountUp(endValue, duration, start) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let currentValue = 0;
    const increment = endValue / (duration / 10);
    const intervalId = setInterval(() => {
      currentValue += increment;
      if (currentValue >= endValue) {
        currentValue = endValue;
        clearInterval(intervalId);
      }
      setValue(Math.round(currentValue));
    }, 10);
    return () => clearInterval(intervalId);
  }, [endValue, duration, start]);

  return value;
}

export default function FooterOther() {
  const [setRef1, inView1] = useInView({ threshold: 1 });
  const [setRef2, inView2] = useInView({ threshold: 0.5 });
  const [setRef3, inView3] = useInView({ threshold: 0.5 });

  const count1 = useCountUp(967, 1000, inView1);
  const count2 = useCountUp(352, 1000, inView2);
  const count3 = useCountUp(99, 1000, inView3);

  return (
    <>
      <hr />
      <section className={cls.footerOther}>
        <div ref={setRef1} className={cls.container}>
          <h1 className={cls.number}>{count1}</h1>
          <h2 className={cls.text}>Учеников Преобразили</h2>
        </div>
        <div ref={setRef2} className={cls.container}>
          <h1 className={cls.number}>{count2}</h1>
          <h2 className={cls.text}>Отзывов О Великолепии</h2>
        </div>
        <div ref={setRef3} className={cls.container}>
          <h1 className={cls.number}>{count3}%</h1>
          <h2 className={cls.text}>Удовлетворенных Учеников</h2>
        </div>
      </section>
      <hr />
    </>
  );
}
