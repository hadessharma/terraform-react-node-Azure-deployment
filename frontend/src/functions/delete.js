import axios from "axios";

export async function deleteSubscription(id) {
  try {
    return await axios.delete(
      `${process.env.REACT_APP_API}/api/delete/subscription/${id}`
    );
  } catch (err) {
    console.log(err);
  }
}
