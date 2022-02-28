import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function AppConfirmationDialog(props) {
  const {
    open,
    handleClose,
    title,
    cancelBtnTile,
    okBtnTitle,
    cancelBtnClick,
    okBtnClick,
    description
  } = props;
  //   const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickClose = () => {
    handleClose();
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClickClose}
        aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus color="error" onClick={handleClickClose}>
            {cancelBtnTile}
          </Button>
          <Button autoFocus color="primary" onClick={handleClickClose}>
            {okBtnTitle}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
