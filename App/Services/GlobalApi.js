import axios from "axios";

const BASE_URL = "http://192.168.1.210:1337/api";

const API_KEY =
  "16002860a0dfe4ea4510cebec2a6e0036112758112cc37f6109eee78d89b8201bc98e52e42e2925898054466fdc7c7751a8dc0a1bbb926ec0995727e85060f676cbef11e5270eeb634118391fbb77b9b23cba487dedfa0d3012e0473a00a625e442bf02348646e31f11e6f49035ab3740ec8b3c230b650c4f68524ed877c8c82";

const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: "Bearer " + API_KEY,
  },
});

const getSlider = () => AxiosInstance.get("/sliders?populate=*");
const getCategories = () => AxiosInstance.get("/categories?populate=*");
const getPremiumHospitals = () =>
  AxiosInstance.get("/hospitals?filters[Premium][$eq]=true&populate=*");
const getHospitalByCategory = (category) =>
  AxiosInstance.get(
    "/hospitals?filters[categories][Name][$in]=" + category + "&populate=*"
  );
const getDoctorByCategory = (category) =>
  AxiosInstance.get(
    "/doctors?filters[categories][Name][$in]=" + category + "&populate=*"
  );
const createAppointment = (data) => AxiosInstance.post("/appointments", data);
const getAppointments = () => AxiosInstance.get("/appointments?populate=*");

const getAllHospitals = () => AxiosInstance.get("/hospitals?populate=*");
const getAllDoctors = () => AxiosInstance.get("/doctors?populate=*");

export default {
  getSlider,
  getCategories,
  getPremiumHospitals,
  getHospitalByCategory,
  getDoctorByCategory,
  createAppointment,
  getAppointments,
  getAllDoctors,
  getAllHospitals,
};
