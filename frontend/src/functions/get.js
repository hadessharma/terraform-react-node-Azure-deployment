import axios from "axios";

export const getSubscriptions = async () => {
  return await axios.get(`${process.env.REACT_APP_API}/api/get/subscriptions`);
};
