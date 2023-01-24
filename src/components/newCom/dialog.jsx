import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Tooltip from '@mui/material/Tooltip';

//COMPONENT
import datas from "../../utils/prueba.json";

export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
       <Tooltip title="Show Logs" arrow>
      <IconButton
        aria-label="play/pause"
         onClick={handleClickOpen(
          "paper"
        )} /* onClick={()=>console.log(datas.datos[3].fecha)} */
      >
        <VisibilityIcon sx={{ height: 38, width: 38 }} />
      </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          Logs Macrometer {datas.datos[1].name_pro}- serial:{" "}
          {datas.datos[0].serial_Medidor}
          <br /> fecha :{datas.datos[3].fecha}
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <p>
              "volts_L1": "122.352783203125",
              <br />
              "volts_L2": "122.387451171875",
              <br />
              "volts_L3": "120.89892578125",
              <br />
              "curren_L1": "0",
              <br />
              "curren_L2": "0",
              <br />
              "curren_L3": "0",
              <br />
              "PA_L1": "0",
              <br />
              "PA_L2": "0",
              <br />
              "PA_L3": "0",
              <br />
              "apparent_PL1": "0",
              <br />
              "apparent_PL2": "0",
              <br />
              "apparent_PL3": "0",
              <br />
              "PR_L1": "0",
              <br />
              "PR_L2": "0",
              <br />
              "PR_L3": "0",
              <br />
              "FP_L1": "0",
              <br />
              "FP_L2": "0",
              <br />
              "FP_L3": "0",
              <br />
              "avera_line_current": "0",
              <br />
              "sum_line_currents": "0",
              <br />
              "total_Sys_Power": "0",
              <br />
              "total_sys_VA": "0",
              <br />
              "total_sys_VAr": "0",
              <br />
              "total_FP": "0",
              <br />
              "FHz": "58.9794921875",
              <br />
              "total_kWh": "0",
              <br />
              "total_kVArh": "0",
              <br />
              "total_export_kWh": "0",
              <br />
              "Total_Import_kVArh": "0",
              <br />
              "total_VAh": "0",
              <br />
              "Ah": "0",
              <br />
              "Neutral_current": "0",
              <br />
              "Volts_L1_L2": "212.11639404296875",
              <br />
              "volts_L2_L3": "210.5465545654297",
              <br />
              "volts_L3_L1": "212.54395294189453",
              <br />
              "avera_volts_lVsl": "212.0689697265625",
              <br />
              "Phase_1_L_N_volts_THD": "2.774999976158142",
              <br />
              "Phase_2_L_N_volts_THD": "2.6799999475479126",
              <br />
              "Phase_3_L_N_volts_THD": "4.005000114440918",
              <br />
              "Phase_1_Current_THD": "0",
              <br />
              "Phase2_Current_THD": "0",
              <br />
              "Phase_3_Current_THD": "0",
              <br />
              "Average_line_to_neutral_volts_THD": "0",
              <br />
              "Average_line_current_THD": "2.528333306312561"
              <br />
            </p>
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
