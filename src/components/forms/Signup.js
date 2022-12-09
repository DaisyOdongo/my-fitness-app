import { url } from "../context/CartContext";
import axios from "axios";

const AddUser = async (post, setIsLoading, navigate) => {
  setIsLoading(true);
  try {
    axios
      .post(`${url}/user`, post)
      .then((data) => localStorage.setItem("user", JSON.stringify(data.data)))
      .then(() => navigate("/exercise"));
  } catch (error) {
    console.log(error);
  }
};

const logInUser = async (post, setIsLoading, navigate) => {
  setIsLoading(true);
  try {
    axios
      .post(`${url}/login`, post)
      .then((data) => localStorage.setItem("user", JSON.stringify(data.data)))
      .then(() => navigate("/exercise"));
  } catch (error) {
    console.log(error);
  }
};

export { AddUser, logInUser };
