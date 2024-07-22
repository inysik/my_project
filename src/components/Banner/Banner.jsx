import Pagagraph from "../Paragraph/Paragraph";
import Button from "../Buttons/Button";
import Title from "../Title/Title";
import cls from "./Banner.module.css"
import imgBanner from "./a30eb940-5645-425f-9880-bba5c390db60.webp"

export default function Banner(){

    return(
        <div className={cls.bannerTop}>
         <Title className={cls.title} text="Манипуляция теряет силу перед осознаностью..."/>
         <img src={imgBanner }
            className={cls.imgBanner}
         />
        <div className={cls.container}>
           
            <Pagagraph className={cls.paragraph} text="Овладейте искусством манипуляции и научитесь защищаться от нее вместе с нами! Манипуляция — это скрытое воздействие на человека с целью изменения его поведения или принятия решений в пользу манипулятора. Часто такие воздействия могут быть незаметными, но их последствия могут серьезно повлиять на жизнь жертвы. Основные техники манипуляции включают лесть, создание чувства вины, искусственное создание срочности и газлайтинг. Чтобы защититься от манипуляции, важно осознавать её признаки, устанавливать личные границы, развивать уверенность в себе и обращаться за поддержкой к близким или профессионалам. Понимание и противодействие манипуляции помогают сохранять психологическое здоровье и принимать независимые решения."/>
            <Button  className={cls.btn} text="Учавствуй"/>
            </div>
        </div>
    )
}