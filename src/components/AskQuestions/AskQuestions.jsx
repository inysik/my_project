import Title from "../Title/Title";
import { useState } from 'react';
import cls from "./AskQuestion.module.css"

const arrAsk = [
    {
        id: 1,
        ask: "Бесплатный курс доступен?",
        description: "Да, некоторые вводные лекции и материалы доступны бесплатно."
    },
    {
        id: 2,
        ask: "Как долго доступ к курсу?",
        description: "Доступ к курсу предоставляется на 6 месяцев после регистрации."
    },
    {
        id: 3,
        ask: "Как связаться с поддержкой?",
        description: "Вы можете связаться с поддержкой через электронную почту support@ourcourse.com или через форму обратной связи на сайте."
    },
    {
        id: 4,
        ask: "Какие способы оплаты принимаются?",
        description: "Мы принимаем дебетовые, кредитные карты, банковские переводы."
    },
    {
        id: 5,
        ask: "Можно ли изменить адрес электронной почты, связанный с аккаунтом?",
        description: "Да, вы можете изменить адрес электронной почты в настройках вашего аккаунта."
    },
    {
        id: 6,
        ask: "Есть ли возврат средств, если курс не подошел?",
        description: "Возврат средств возможен в течение 14 дней с момента покупки курса, если вы не прошли более 10% материалов."
    },
    {
        id: 7,
        ask: "Можно ли скачать материалы курса?",
        description: "Нет, материалы курса доступны только для онлайн-просмотра."
    }
];

export default function AskQuestions() {
    const [showMore, setShowMore] = useState(Array(arrAsk.length).fill(false));

    function handleMoreClick(index) {
        setShowMore((prevShowMore) => {
            const newShowMore = [...prevShowMore];
            newShowMore[index] = !newShowMore[index];
            return newShowMore;
        });
    }

    return (
        <div className={cls.fone}>
            <Title className={cls.title} text="Часто задаваемые вопросы" />
            {arrAsk.map((item, index) => (
                <div className={cls.container}  key={item.id}>
                    <h2 className={cls.ask}>
                        <i>{item.ask}</i>
                    </h2>
                    <button onClick={() => handleMoreClick(index)}>
                        {showMore[index] ? '-' : '+'}
                    </button>
                    {showMore[index] && <p className={cls.paragraph}>{item.description}</p>}
                </div>
            ))}
        </div>
    );
}
