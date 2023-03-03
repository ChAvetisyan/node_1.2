const http = require('http');

const hostname = 'localhost';
const port = 3000;

const USERS = [
    {
        id: 1,
        name: "Alen",
        surname: "David",
        email: "alen@gmail.com",
        password: "1234",
        age: 20
    },
    {
        id: 2,
        name: "Simon",
        surname: "Wings",
        email: "simon@gmail.com",
        password: "2345",
        age: 47
    },
    {
        id: 3,
        name: "Jane",
        surname: "Wale",
        email: "jane@gmail.com",
        password: "3456",
        age: 34
    },
    {
        id: 4,
        name: "Mira",
        surname: "James",
        email: "mira@gmail.com",
        password: "4567",
        age: 18
    },
    {
        id: 5,
        name: "Anna",
        surname: "Hosts",
        email: "anna@gmail.com",
        password: "5678",
        age: 44
    },
];

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

// const getUser = (email, password) => {
//     const user = USERS.find((user) => email === user.email  && password === user.password);
//     return user;
// }

// sign in functional
// const email = "alen@gmail.com";
// const password = "1234";
// const user = getUser(email,password);

// if (!user){
//     const data = {
//         success: false,
//         data: null,
//     }
//     console.log("data>>>", data);
// } else {
//     const data = {
//         success: true,
//         data: user,
//     }
//     console.log("data>>>", data);
// }

const getUser = (id) => {
    const user = USERS.find((user) => id === user.id);
    return user;
}

const id = 5;
const user = getUser(id);

if (!user) {
    const data = {
        success: false,
        data: null
    }
    console.log("data>>>", data)
} else {
    const data = {
        success: true,
        data: user,
    }
    console.log("data>>>", data)
}

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});