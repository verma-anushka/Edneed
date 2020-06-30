import axios from "axios";

class PageAccessRequest {
    
    getUsers = (limit, skip=0) => {
        const userid = "5ec7d14370e1ef395d63112a";
        return axios.get(
            `https://api.webunide.com/user?_id[$ne]=${userid}&$limit=${limit}&$skip=${skip}&$sort=fullName`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZWNiOWVkNjcwZTFlZjM5NWQ2MzExM2EiLCJpYXQiOjE1OTM0OTYxODAsImV4cCI6MTYyNTAzMjE4MCwiYXVkIjoiaHR0cHM6Ly93d3cuZWRuZWVkLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiNzkzZmU2MTItNzkwMS00YzQyLWExMTMtYTlhY2ZmN2UxNTNiIn0.uvaRcw2QBAdhxfRYn6976yGgzYNlTcf3HyE8PG6Xl2A'
                }
            }
        )
    }  

    getRoles = (limit, skip=0) => {
        return axios.get(
            `https://api.webunide.com/role?kind=normal`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZWNiOWVkNjcwZTFlZjM5NWQ2MzExM2EiLCJpYXQiOjE1OTM0OTYxODAsImV4cCI6MTYyNTAzMjE4MCwiYXVkIjoiaHR0cHM6Ly93d3cuZWRuZWVkLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiNzkzZmU2MTItNzkwMS00YzQyLWExMTMtYTlhY2ZmN2UxNTNiIn0.uvaRcw2QBAdhxfRYn6976yGgzYNlTcf3HyE8PG6Xl2A'
                    // 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZWM3ZDE0MzcwZTFlZjM5NWQ2MzExMmEiLCJpYXQiOjE1OTM0OTUyNjksImV4cCI6MTYyNTAzMTI2OSwiYXVkIjoiaHR0cHM6Ly93d3cuZWRuZWVkLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiYWM0NjZkNDEtNDFjNy00OTZlLWI2NmEtNjNiYTg1MDk1ZGEyIn0.tC42U5dNNg1toGMApFUnOxCw9zYeTgAFbw5r8c3XkO4'
                }
            }
        )
    }

    grantAccess = (newaccessrequest) => {

        console.log(newaccessrequest);
        
        return axios.post(
            `https://api.webunide.com/owneraccess`,
                newaccessrequest,   
            // {
            //     kind: "normal",
            //     owner: "5ec7d14370e1ef395d63112a",
            //     role: "5ef61fb89201f166c800f74e"
            // },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZWNiOWVkNjcwZTFlZjM5NWQ2MzExM2EiLCJpYXQiOjE1OTM0OTYxODAsImV4cCI6MTYyNTAzMjE4MCwiYXVkIjoiaHR0cHM6Ly93d3cuZWRuZWVkLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiNzkzZmU2MTItNzkwMS00YzQyLWExMTMtYTlhY2ZmN2UxNTNiIn0.uvaRcw2QBAdhxfRYn6976yGgzYNlTcf3HyE8PG6Xl2A'
                    // 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZWM3ZDE0MzcwZTFlZjM5NWQ2MzExMmEiLCJpYXQiOjE1OTM0OTUyNjksImV4cCI6MTYyNTAzMTI2OSwiYXVkIjoiaHR0cHM6Ly93d3cuZWRuZWVkLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiYWM0NjZkNDEtNDFjNy00OTZlLWI2NmEtNjNiYTg1MDk1ZGEyIn0.tC42U5dNNg1toGMApFUnOxCw9zYeTgAFbw5r8c3XkO4'
                    // 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZWJhYWE5OTllZjk0OTViNTJmYzkyZDMiLCJpYXQiOjE1OTA3NDA5NzgsImV4cCI6MTYyMjI3Njk3OCwiYXVkIjoiaHR0cHM6Ly93d3cuZWRuZWVkLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiOWM2MDE1N2MtZTIwMi00ZWFkLTk3ZmQtOTA2OTg4ZmU3MTYyIn0.SlYVZaF0YqLBUYwns9KEcO-6RqUPD-AVPRkboGfo2JM'
                }
            }
        )
    }  
}

export default new PageAccessRequest();



            