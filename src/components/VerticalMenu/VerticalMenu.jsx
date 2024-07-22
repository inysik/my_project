export default function VerticalMenu(props){

    return(
        <>
        <label>{props.nameCource}</label>

            <select>
        {props.option.map(
            (elem)=><option key={elem}>{elem}</option>
        )}

                
                 </select>
    </>)
}