
import VerticalMenu from '../VerticalMenu/VerticalMenu';
import SideBar from '../SideBar/SideBar';
import TextArea from '../TextArea/TextArea';
import Markdown from 'react-markdown'


export default function CreateCourse() {
 return(
  <>
 
    <VerticalMenu nameCource = "Выбрать курс"  option={["lol","kek","lole","kekek"]}/>
    <VerticalMenu nameCource = "Выбрать раздел"  option={["lol","kek","lole","kekek"]}/>
    <VerticalMenu nameCource = "Выбрать страницу"  option={["lol","kek","lole","kekek"]}/>
<SideBar buttons={["save","redaction","open","delete","lole","kekekek"]}/>
<TextArea />
<div style={{border:" 1px solid green"}}>
    
<Markdown>{"**kekekke**"}</Markdown></div>
    </>
  );
}
