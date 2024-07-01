import axios from "axios";

export const createCompany = async (payload: any) => {
  try {
    const response = await axios.post("https://packets.vercel.app/api/auth", payload);
    console.log(response?.data);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
