import Button from "../Buttons/Button";
import Pagagraph from "../Paragraph/Paragraph";
import cls from "./FreeCase.module.css"

export default function FreeCase(){
return(
    <div className={cls.fone}>
<div className={cls.container}>
    <h2 className={cls.headerContainer}>Бесплатный старт</h2>
<Pagagraph className={cls.pagagraph} text='Исследуйте наш бесплатный базовый кейс-стади и погрузитесь в мир манипуляций!'/>
<Button className={cls.bTN} text='Попробуйте'/>

</div></div>
)

}