import axios from "axios";

class PageAccessRequest {

    getRoles = (limit, skip=0) => {
        return axios.get(
            `https://api.webunide.com/role?kind=normal`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZWNiOWVkNjcwZTFlZjM5NWQ2MzExM2EiLCJpYXQiOjE1OTM0OTYxODAsImV4cCI6MTYyNTAzMjE4MCwiYXVkIjoiaHR0cHM6Ly93d3cuZWRuZWVkLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiNzkzZmU2MTItNzkwMS00YzQyLWExMTMtYTlhY2ZmN2UxNTNiIn0.uvaRcw2QBAdhxfRYn6976yGgzYNlTcf3HyE8PG6Xl2A'
                }
            }
        )
    }

    grantAccess = (newaccessrequest) => {
        return axios.post(
            `https://api.webunide.com/owneraccess`,
            newaccessrequest,   
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZWNiOWVkNjcwZTFlZjM5NWQ2MzExM2EiLCJpYXQiOjE1OTM0OTYxODAsImV4cCI6MTYyNTAzMjE4MCwiYXVkIjoiaHR0cHM6Ly93d3cuZWRuZWVkLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiNzkzZmU2MTItNzkwMS00YzQyLWExMTMtYTlhY2ZmN2UxNTNiIn0.uvaRcw2QBAdhxfRYn6976yGgzYNlTcf3HyE8PG6Xl2A'
                }
            }
        )
    }  
}

export default new PageAccessRequest();

