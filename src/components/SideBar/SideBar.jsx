export default function SideBar(props){

    return(

        <>
    <div>
        <ul>
            {props.buttons.map((button)=><li key={button}><button>{button}</button></li>)}
        </ul>
    </div>



        </>
    )
}