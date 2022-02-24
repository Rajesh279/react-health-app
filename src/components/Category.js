import { Container } from "./styles/Container.styled";
import BasicTable from "./Shared/mTable";
import CategoryService from "../Services/categoryService";
import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = "https://fortnite-api.theapinetwork.com/";

function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategies();
  }, []);

  const getCategies = () => {
    // CategoryService.getCategies().then((res) => {
    //   console.log(res);
    // });
    axios.get(API_BASE_URL + "store/get").then((res) => {
      let data = res.data.data;
      console.log(data);
      setCategories(data);
    });
  };

  return (
    <Container>
      {categories ? <BasicTable rowData={categories} /> : null}
    </Container>
  );
}

export default Category;
