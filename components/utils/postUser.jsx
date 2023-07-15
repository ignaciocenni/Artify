import axios from "axios";

const postUser = async (form) => {
  try {
    await axios.post("/api/users", form);
  } catch (error) {
    return error;
  }
};

export default postUser;
