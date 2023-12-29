import axios from "axios";

export async function createResource(values) {
  try {
    console.log(values);
    await axios.post(`${process.env.REACT_APP_API}/api/create`, values);
  } catch (err) {
    console.log(err);
  }
}

export async function createSubscription(values) {
  try {
    console.log(values);
    // await axios.post(`${process.env.REACT_APP_API}/api/subscription`, values);
  } catch (err) {
    console.log(err);
  }
}
