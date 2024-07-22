import Image from "../Image/Image"
import Pagagraph from "../Paragraph/Paragraph"
import cls from "./Other.module.css"

export default function FormOther(props){



    return (
        <div className={cls.otherCard}>
            <Image className = {cls.image} src={props.url}/>
            <h4 className={cls.header}>{props.userName}</h4>
            <Pagagraph className={cls.pagagraph} text={props.text}/>
            <h6 className={cls.date}>{props.data}</h6>
            
        </div>
    )
}