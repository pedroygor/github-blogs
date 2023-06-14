import axios from "axios";

const apiGithubUser = axios.create({
    baseURL: "https://api.github.com/users",
});

export { apiGithubUser }