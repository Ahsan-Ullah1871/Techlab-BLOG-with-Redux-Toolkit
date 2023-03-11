import axios from "axios";

const axiosIns = axios.create({
	baseURL: "http://localhost:9000",
});

export default axiosIns;
