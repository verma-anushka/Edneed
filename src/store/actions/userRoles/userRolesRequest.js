import axios from "axios";

class UserRolesRequest {
    
    getUserRoles = userid => {
        return axios.get(
            `https://api.webunide.com/owneraccess?user=${userid}&$limit=20&$populate[]=role&$sort=-createdAt`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZWFiYTc5MmM1NjRmZDMyNGI0MmMwM2IiLCJpYXQiOjE1ODgzMTY4MzAsImV4cCI6MTYxOTg1MjgzMCwiYXVkIjoiaHR0cHM6Ly93d3cuZWRuZWVkLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiYzNmZDFhOGMtY2M0ZC00NzdhLWI3ZjQtNzUxODk2ZDMwMWJjIn0.vf09VNAjfapzlyXz699C_Z_zV8ztpprbH5P7EVGcwLM'
                }
            }
        )
    }

}

export default new UserRolesRequest();

