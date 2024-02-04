import axios from "axios";

const instance = axios.create({
  headers: {
    projectId: "7l0yxfg0c4u1",
  },
});

// we created instance here now
// With each api axios request this instance attaches the headers present
// here projectId will get attached with every api requests
export default instance;
