// Add your code here
function submitData(name, email) {
    const userData = {
      name: name,
      email: email
    };
  
    const configuration = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userData)
    };
  
    return fetch("http://localhost:3000/users", configuration)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        document.body.innerHTML = data.id;
      })
      .catch(function(error) {
        document.body.innerHTML = error.message;
      });
  }
  