import FormOther from "./FormOther"
import cls from "./Other.module.css"

const arrUsersOthers = [
    {
        id:15,
        img:"",
        userName:"Иван",
        text:"Курс изменил мою жизнь! Спасибо, Максим!",
        data:"28 марта"


    },
    {
        id:14,
        img:"",
        userName:"Мария",
        text:"Самый лучший курс, который я когда-либо проходи",
        data:"3 апреля"
    },
    {
        id:13,
        img:"",
        userName:"Александр",
        text:"Я научился критически оценивать рекламу и маркетинговые сообщения. Теперь я чувствую себя более защищенным потребителем.",
        data:"23 апреля"
    },
    {
        id:12,
        img:"",
        userName:"Ольга",
        text:"Благодаря курсу я стала более уверенной и научилась устанавливать здоровые границы на работе. Это значительно улучшило мои рабочие отношения.",
        data:"6 мая"
    },
    {
        id:11,
        img:"",
        userName:"Елена",
        text:"Этот курс открыл мне глаза на многие манипулятивные техники, используемые в бизнесе. Теперь я чувствую себя более уверенной на работе.",
        data:"26 мая"
    },
   
]

export default function Other(){


    return(
        <div className={cls.boxOther}>

           {arrUsersOthers.map((elems)=><FormOther key={elems.id} {...elems} />)}
        </div>

    )
}