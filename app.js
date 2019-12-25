const http = new HttRequest();

// get the data
http.get("http://jsonplaceholder.typicode.com/users")
    .then(data => console.log(data))
    .then(err => console.log(err))

// demo post data
const Data = {
    name: "joyonto kumar roy",
    username: "joyonto",
    email: "engr.joyoyntr@gmail.com",
    phone: "018237424"
}
http.post("https://jsonplaceholder.typicode.com/users", Data)
    .then(data => console.log(data))
    .then(err => console.log(err))


// update data
http.put("https://jsonplaceholder.typicode.com/users/2", Data)
    .then(data => console.log(data))
    .then(err => console.log(err))

// delete data
http.delete("https://jsonplaceholder.typicode.com/users/2")
    .then(data => console.log(data))
    .then(err => console.log(err))

