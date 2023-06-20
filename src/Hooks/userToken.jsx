const userToken = (userInfo) => {
  fetch("http://localhost:5000/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

export default userToken;
