import NameProgram from "../components/NameProgram/NameProgramm";

export default function plansProgram(){
let arr = [ {
    id:"1",
    nameCource:"Базовая программа",
    list:["1 Что такое манипулирование?","2 Причины манипулирования","3 Этика и манипулирование","4 Влияние манипуляции на общество","Признаки манипуляции","1 Распознавание манипуляций","Примеры манипуляций","Манипуляция и власть"],
    price:"3000rub"

  },{
    id:"2",
    nameCource:"Базовая программа",
    list:["lolo","kekke","eee","","",],
    price:"3000rub"
  },{
    id:"3",
    nameCource:"Базовая программа",
    list:["lolo","kekke","eee","","",],
    price:"3000rub"
  }]

    return(
        <>
           
        {arr.map((el)=><NameProgram key={el.id} {...el}/>)}
        </>
    )
}

