import permisions from "../utils/prueba.json";
import Main from "./Main";

const Cards = () => {
  return (
    <div className="container bg-white w-80 h-64 justify-center ml-12 mt-2 left-5">
      <h4 className="text-center justify-center m-2">
        Serial: {permisions.datos.map((i) => i.serial_Medidor)}
      </h4>
      <p>
        Fecha :{" "}
        {permisions.datos.map((i) => (
          <span>{i.fecha}</span>
        ))}
      </p>

       {permisions.datos.map((i) => 
      <Main data ={i}/>)} 
    </div>
  );
};
export default Cards;
