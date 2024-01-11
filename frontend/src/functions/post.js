import axios from "axios";

export async function createResource(values) {
  try {
    console.log(values);
    return await axios.post(`${process.env.REACT_APP_API}/api/create`, values);
  } catch (err) {
    console.log(err);
  }
}

export async function createSubscription(values, authToken) {
  try {
    return await axios.post(
      `${process.env.REACT_APP_API}/api/create/subscription`,
      values,
      {
        headers: { authToken },
      }
    );
  } catch (err) {
    console.log(err);
  }
}

export async function createUser(userName, email, password) {
  try {
    return await axios.post(`${process.env.REACT_APP_API}/api/create/user`, {
      userName,
      email,
      password,
    });
  } catch (error) {
    console.log(error);
  }
}
