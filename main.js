document.addEventListener("DOMContentLoaded", function () {
    const avatarElement = document.querySelector("#avatar");
    const nameElement = document.querySelector("#name");
    const userNameElement = document.querySelector("#username");
    const reposElement = document.querySelector("#repos");
    const followersElement = document.querySelector("#followers");
    const followingElement = document.querySelector("#following");
    const linkElement = document.querySelector("#link");
  
    fetch(`https://api.github.com/users/RicardoRosendo98`)
      .then(function (resposta) {
        return resposta.json();
      })
      .then(function (json) {
        avatarElement.src = json.avatar_url;
        nameElement.innerText = json.name;
        userNameElement.innerText = json.login;
        reposElement.innerText = json.public_repos;
        followersElement.innerText = json.followers;
        followingElement.innerHTML = json.following;
        linkElement.href = json.html_url;
      })
      .catch(function (erro) {
        alert("Ocorreu um erro");
      });
  });