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
  information: "Graduated major from Jönköping University.\nGraduated in Computer science with a focus on Software development and mobile platforms",
  framework: "",
};

const backend = {
  name: "backend",
  information: "All you see currently is being retrieved from the backend",
  framework: "Nodejs",
};

const frontend = {
  name: "frontend",
  information: "The frontend is what you are currently looking at. Like the backend card, this information is retrieved from the backend to make it easier to update the info",
  framework: "React with Typescript",
};

module.exports = {
  user,
  backend,
  frontend,
  gitRepos: gitRepos,
};