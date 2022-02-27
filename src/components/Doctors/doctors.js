import { Container } from "../styles/Container.styled";
import AppDataGrid from "../../Framework/Components/Table/appDataGrid";
// import CategoryService from "../Services/categoryService";
import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress, Grid } from "@mui/material";
import AppConfirmationDialog from "../../Framework/Components/Dialog/appConfirmationDialog";
import AppLoader from "../../Framework/Components/Loader/appLoader";
import { useAppContext } from "../../Context/appContext";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

function Doctors() {
  const { selectedSpecializationTitle } = useAppContext();

  const [categories, setCategories] = useState([]);
  const [bookAppointment, setBookAppointment] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    getCategies();
  }, []);

  const getCategies = () => {
    setShowLoader(true);
    axios.get(API_BASE_URL + "/users").then((res) => {
      let data = res.data;
      setCategories(data);
      setShowLoader(false);
    });
  };

  const onClickView = (name, value, rowIndex) => {
    setBookAppointment(true);
  };
  const closeDialogHandler = () => {
    setBookAppointment(false);
  };
  const cancelBtnDialogHandler = () => {
    setBookAppointment(false);
  };
  const okBtnDialogHandler = () => {
    setBookAppointment(false);
  };
  
  const columnHeaderDetails = [
    {
      columnName: "Name",
      valueColumnKey: "name",
    },
    {
      columnName: "Specialty",
      valueColumnKey: "username",
    },
    {
      columnName: "Experience",
      valueColumnKey: "website",
    },
    {
      columnName: "Qualification",
      valueColumnKey: "phone",
    },
    {
      columnName: "Email",
      valueColumnKey: "email",
    },
    {
      columnName: "Action",
      valueColumnKey: "viewAction",
      label: "Book Appointment",
      componentToRender: "button",
      onChangeHandler: onClickView,
      disabled: false,
    },
  ];
  return (
    <Container>
      <AppLoader loading={showLoader} />
      <Grid>
        <h6 align="left"> Showing Results for : {selectedSpecializationTitle}</h6>
      </Grid>
      <Grid>
        {categories.length > 0 ? (
          <AppDataGrid
            headerDetails={columnHeaderDetails}
            rowData={categories}
          />
        ) : null}
      </Grid>
      <Grid>
        <AppConfirmationDialog
          open={bookAppointment}
          handleClose={closeDialogHandler}
          title="Book Appointment"
          cancelBtnTile="Cancel"
          okBtnTitle="Continue"
          cancelBtnClick={cancelBtnDialogHandler}
          okBtnClick={okBtnDialogHandler}
        />
      </Grid>
    </Container>
  );
}

export default Doctors;
