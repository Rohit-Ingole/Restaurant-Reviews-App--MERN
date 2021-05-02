import axios from "../axios";

const getAll = (page = 0) => {
  return axios.get(`/restaurants?page=${page}`);
};

const get = (id) => {
  return axios.get(`/restaurants/id/${id}`);
};

const find = (query, by = "name", page = 0) => {
  return axios.get(`/restaurants?${by}=${query}&page=${page}`);
};

const createReview = (data) => {
  return axios.post("/restaurants/review", data);
};

const updateReview = (data) => {
  return axios.put("/restaurants/review", data);
};

const deleteReview = (id, userId) => {
  return axios.delete(`/restaurants/review?id=${id}`, {
    data: { user_id: userId },
  });
};

const getCuisines = (id) => {
  return axios.get(`/restaurants/cuisines`);
};

export {
  getAll,
  get,
  find,
  createReview,
  updateReview,
  deleteReview,
  getCuisines,
};
