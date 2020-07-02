const axios = require("axios");
const url = "https://api.github.com/users/kloparn/repos";

const gitRepos = async () => {
  const res = await axios.get(url).catch((e) => {
    console.error(e);
    return {};
  });
  return res.data
    .filter((e) => !e.fork)
    .map((r) => {
      return {
        key: r.id,
        title: r.name,
        description: r.description,
        url: r.html_url,
        created: r.created_at,
        updated: r.updated_at,
        language: r.language,
      };
    });
};

const user = {
  name: "Adam",
  information:
    "Graduated from Jönköping University. Graduated in Computer science with a focus on Software development and mobile platforms.",
  framework: "",
};

const backend = {
  name: "backend",
  information:
    "The back-end is built with node.js. Doing middleware stuff between github to retrieve information on what i have done.",
  framework: "Nodejs",
};

const frontend = {
  name: "frontend",
  information:
    "The front-end is built in React.TS. A reponsive and flexable framework to develop in and make it easy to implement single-page or mobile applications.",
  framework: "React with Typescript",
};

module.exports = {
  user,
  backend,
  frontend,
  gitRepos: gitRepos,
};
