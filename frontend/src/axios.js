import axios from "axios";

export default axios.create({
  baseURL: "https://restaurant-backend-rvi.herokuapp.com/api/v1",
  headers: {
    "Content-type": "application/json",
  },
});
