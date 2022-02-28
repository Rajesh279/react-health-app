import { Button, Typography } from "@mui/material";

export default function AppButton(props){
return(
    <Button
    variant="contained"
    size={btnSize}
    startIcon={props.icon}
    disabled={props.disabled}
    onClick={(event,newValue)=>{
        props.onClick(props.label,event);
    }}>
    <Typography>{props.label}</Typography>
    </Button>
)
}