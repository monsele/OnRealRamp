import axios from "axios";

export const createCompany = async (payload: any) => {
  try {
    const response = await axios.post("http://localhost:3000/api/auth", payload);
    console.log(response?.data);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const createListing = async (payload: any) => {
  try {
    const response = await axios.post("http://localhost:3000/api/properties", payload);
    console.log(response?.data);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
