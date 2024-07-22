export default function ListProgramm(props){


    return(
        <ul>
            <li>{props.arr.map((el)=><h5 key={el}>{el}</h5>)}</li>
        </ul>
    )
}