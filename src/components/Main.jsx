const Main = ({data}) => {

  return (
    <div>
      {data.input_reg_R?.map((i) =>(<>
        <p>Ah : {i.Ah}</p>
        <p>Average_line_current_THD: {i.Average_line_current_THD}</p>
        <p>Average_line_to_neutral_volts_THD : {i.Average_line_to_neutral_volts_THD}</p>
        </>
      )
      )}
      
      </div>
  )
}
export default Main