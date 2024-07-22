import Pagagraph from "../Paragraph/Paragraph";
import Image from "../Image/Image";
import cls from "./PaidCase.module.css";
import Button from "../Buttons/Button";

export default function FormCase(props) {
  console.log(props);
  return (
    <div className={cls.card}>
      <Image className={cls.caseImg} src={props.imageSrc} />
      <h3 className={cls.title}>{props.name}</h3>
      <Pagagraph className={cls.pagagraph} text={props.text} />
      <Button className={cls.btn} text='Приобрести курc'/>
    </div>
  );
}
