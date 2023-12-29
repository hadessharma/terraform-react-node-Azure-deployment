import axios from "axios";

export async function deleteSubscription(values) {
  try {
    console.log(values);
    //     await axios.delete(`${process.env.REACT_APP_API}/api/subscription`, values);
  } catch (err) {
    console.log(err);
  }
}
