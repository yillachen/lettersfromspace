import axios from "axios";
import { APOD_URL } from "../../secrets";

let last9Days = new Date();
last9Days.setDate(last9Days.getDate() - 9);
let dd = String(last9Days.getDate()).padStart(2, "0");
let mm = String(last9Days.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = last9Days.getFullYear();
last9Days = `${yyyy}-${mm}-${dd}`;

export const getlast9Days = async () => {
  try {
    const { data } = await axios.get(
      APOD_URL + "&start_date=" + `${last9Days}`
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
