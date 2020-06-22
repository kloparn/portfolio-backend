const axios = require("axios");
const url = "https://api.github.com/users/kloparn/repos";

const gitRepos = async () => {
  const res = await axios.get(url).catch((e) => console.error(e));
  return res.data;
};

const user = {
  name: "Adam",
  information:
    "Graduated major from Jönköping University.\nGraduated in Computer science with a focus on Software development and mobile platforms",
  picture:
    "https://media-exp1.licdn.com/dms/image/C4D03AQEc_j9Pf0SB8Q/profile-displayphoto-shrink_200_200/0?e=1597881600&v=beta&t=yPyVBxkvMCO_rScfTr2ASn25J6W2-tfFZMppccopgGU",
  framework: "",
};

const backend = {
  name: "backend",
  information: "All you see currently is being retrieved from the backend",
  picture:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
  framework: "Nodejs",
};

const frontend = {
  name: "frontend",
  information:
    "The frontend is what you are currently looking at. Like the backend card, this information is retrieved from the backend to make it easier to update the info",
  picture: "https://i.ytimg.com/vi/DXgMrYI7O5w/maxresdefault.jpg",
  framework: "React with Typescript",
};

module.exports = {
  user,
  backend,
  frontend,
  gitRepos: gitRepos,
};
