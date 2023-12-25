import axios from "axios";

export async function createResource(values) {
  try {
    console.log(values);
    //     await axios.post("/api", values);
  } catch (err) {
    console.log(err);
  }
}
