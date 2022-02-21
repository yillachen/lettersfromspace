import axios from "axios";
import { APOD_URL } from "../../secrets";

const getPOD = async () => {
  try {
    const { data } = await axios.get(APOD_URL);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export default getPOD;
