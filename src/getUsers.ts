function fetchData() {
  console.log('In fetch')
    return fetch('https://gorest.co.in/public/v2/users')
        .then((res) => {
          console.log("Then")
        return res.json();
    })
    .catch((err) => {
       console.log("Error",err);
    });
}

function abc() {
    console.log("Hello")
    return fetchData()
}

export {fetchData,abc}
