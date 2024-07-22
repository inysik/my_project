export default function NameProgram(props) {
  return (
    <>
     

      <ul>{props.nameCource}
        {props.list.map((elem) => (
          <li key={elem}>{elem}</li>
        ))}
        
      </ul>
      <p>{props.price}</p>
    </>
  );
}
