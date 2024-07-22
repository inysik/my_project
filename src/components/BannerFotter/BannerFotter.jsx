import Paragraph from "../Paragraph/Paragraph";
import cls from "./BannerFotter.module.css";


export default function BannerFooter() {
  return (
    <>
      <div className={cls.bannerTop}>
        <h2 className={cls.header}>
          Изучайте манипуляции и защиту от них вместе с нами!
        </h2>

        <div className={cls.boxParagraph}>
          <Paragraph
            text="Присоединяйтесь к нашему курсу и раскройте все секреты манипуляций и защиты от них."
            className={cls.paragraph}
          />
          <Paragraph
            text="Наши эксперты поделятся с вами уникальными методиками и стратегиями."
            className={cls.paragraph}
          />
          <Paragraph
            text="Станьте мастером манипуляций и защиты от них уже сегодня!"
            className={cls.paragraph}
          />
        </div>
      </div>
    </>
  );
}
