function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const userIdDisplay = document.getElementById("id");
      if (userIdDisplay) {
        userIdDisplay.textContent = data.id;
      }
    })
    .catch((error) => {
      const errorDisplay = document.getElementById("error");
      if (errorDisplay) {
        errorDisplay.textContent = error.message;
      }
    });
}
