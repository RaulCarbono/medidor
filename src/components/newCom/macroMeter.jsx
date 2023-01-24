import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Tooltip from "@mui/material/Tooltip";

//COMPONENT
import DialogLogs from "./dialog";
import datas from "../../utils/prueba.json"

export default function MacroMeter() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Card sx={{ display: "flex", width: "350px" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Macrometer
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {datas.datos[1].name_pro}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              serial: {datas.datos[0].serial_Medidor}
            </Typography>
            
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <DialogLogs />
            {/* <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
            <Tooltip
              title="Show Logs"
              arrow
              onClick={() => console.log("miraa")}
            >
              <IconButton aria-label="play/pause">
                <VisibilityIcon sx={{ height: 38, width: 38 }} />
              </IconButton>
            </Tooltip>
            <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton> */}
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151, marginRight: "10px" }}
          image="https://res.cloudinary.com/rawwshak/image/upload/v1674590308/macrometer_w3br7f.webp"
          alt="Live from space album cover"
        />
      </Card>
      
    </React.Fragment>
  );
}
