import axios from "axios";

export async function createResource(values) {
  try {
    console.log(values);
    await axios.post("http://localhost:8080/api/create", values);
  } catch (err) {
    console.log(err);
  }
}
