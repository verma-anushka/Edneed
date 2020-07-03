import axios from "axios";

class ApproveRolesRequest {
    
    getRolesReq = (kind, pageid, limit, skip=0) => {
        return axios.get(
            `https://api.webunide.com/owneraccess?kind=${kind}&ref=${pageid}&$limit=${limit}&$skip=${skip}&approved=false&$populate[]=user&$populate[]=photo&$populate[]=role&$sort=-createdAt`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZWFiYTc5MmM1NjRmZDMyNGI0MmMwM2IiLCJpYXQiOjE1ODgzMTY4MzAsImV4cCI6MTYxOTg1MjgzMCwiYXVkIjoiaHR0cHM6Ly93d3cuZWRuZWVkLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiYzNmZDFhOGMtY2M0ZC00NzdhLWI3ZjQtNzUxODk2ZDMwMWJjIn0.vf09VNAjfapzlyXz699C_Z_zV8ztpprbH5P7EVGcwLM'
                }
            }
        )
    } 

    acceptRoleReq = id => {
        return axios.patch(
            `https://api.webunide.com/owneraccess/${id}`, 
            {
                approved: true
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZWFiYTc5MmM1NjRmZDMyNGI0MmMwM2IiLCJpYXQiOjE1ODgzMTY4MzAsImV4cCI6MTYxOTg1MjgzMCwiYXVkIjoiaHR0cHM6Ly93d3cuZWRuZWVkLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiYzNmZDFhOGMtY2M0ZC00NzdhLWI3ZjQtNzUxODk2ZDMwMWJjIn0.vf09VNAjfapzlyXz699C_Z_zV8ztpprbH5P7EVGcwLM'
                }
            }
        )
    }

    rejectRoleReq = id => {
        return axios.delete(
            `https://api.webunide.com/owneraccess/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZWFiYTc5MmM1NjRmZDMyNGI0MmMwM2IiLCJpYXQiOjE1ODgzMTY4MzAsImV4cCI6MTYxOTg1MjgzMCwiYXVkIjoiaHR0cHM6Ly93d3cuZWRuZWVkLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiYzNmZDFhOGMtY2M0ZC00NzdhLWI3ZjQtNzUxODk2ZDMwMWJjIn0.vf09VNAjfapzlyXz699C_Z_zV8ztpprbH5P7EVGcwLM'
                }
            }
        )
    }

}

export default new ApproveRolesRequest();

