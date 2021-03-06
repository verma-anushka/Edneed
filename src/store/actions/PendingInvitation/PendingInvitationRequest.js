import axios from "axios";

class PendingInvitationRequest {
    
    constructor() {
        this.pendingInvitationRequest = {
            endpoint: {
                receive:    'http://api.webunide.com/bubble?receiverid=::USERID::&$populate[]=owner&$sort=-createdAt&bubblestatus=2&$limit=::LIMIT::&$skip=::SKIP::',
                sent:       'http://api.webunide.com/bubble?owner=::USERID::&$populate[]=receiverid&$sort=-createdAt&bubblestatus=2&$limit=::LIMIT::&$skip=::SKIP::',
                operation:  'http://api.webunide.com/bubble/::BUBBLE_ID::'
            }
        }
    }

    findSentInvitation = (userId, limit, skip=0) => {
        return axios.get(
            this.pendingInvitationRequest.endpoint.sent.replace('::USERID::',userId).replace('::LIMIT::', limit).replace('::SKIP::', skip),
            // {
            //     headers:this.getApiheader()
            // }
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZWFiYTc5MmM1NjRmZDMyNGI0MmMwM2IiLCJpYXQiOjE1ODgzMTY4MzAsImV4cCI6MTYxOTg1MjgzMCwiYXVkIjoiaHR0cHM6Ly93d3cuZWRuZWVkLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiYzNmZDFhOGMtY2M0ZC00NzdhLWI3ZjQtNzUxODk2ZDMwMWJjIn0.vf09VNAjfapzlyXz699C_Z_zV8ztpprbH5P7EVGcwLM'
                }
            }
        )
    } 

    findReceiveInvitation = (userId, limit, skip=0) => {
        return axios.get(
            this.pendingInvitationRequest.endpoint.receive.replace('::USERID::',userId).replace('::LIMIT::', limit).replace('::SKIP::', skip),
            // {
            //     headers:this.getApiheader()
            // }
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZWFiYTc5MmM1NjRmZDMyNGI0MmMwM2IiLCJpYXQiOjE1ODgzMTY4MzAsImV4cCI6MTYxOTg1MjgzMCwiYXVkIjoiaHR0cHM6Ly93d3cuZWRuZWVkLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiYzNmZDFhOGMtY2M0ZC00NzdhLWI3ZjQtNzUxODk2ZDMwMWJjIn0.vf09VNAjfapzlyXz699C_Z_zV8ztpprbH5P7EVGcwLM'
                }
            }
        )
    }

    AcceptInvitation = id => {
        return axios.patch(
            this.pendingInvitationRequest.endpoint.operation.replace('::BUBBLE_ID::', id), {
                bubblestatus: 2
            }, 
            // {
            //     headers:this.getApiheader()
            // }
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZWFiYTc5MmM1NjRmZDMyNGI0MmMwM2IiLCJpYXQiOjE1ODgzMTY4MzAsImV4cCI6MTYxOTg1MjgzMCwiYXVkIjoiaHR0cHM6Ly93d3cuZWRuZWVkLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiYzNmZDFhOGMtY2M0ZC00NzdhLWI3ZjQtNzUxODk2ZDMwMWJjIn0.vf09VNAjfapzlyXz699C_Z_zV8ztpprbH5P7EVGcwLM'
                }
            }
        )
    }

    RejectInvitation = id => {
        return axios.delete(
            this.pendingInvitationRequest.endpoint.operation.replace('::BUBBLE_ID::', id),
            // {
            //     headers:this.getApiheader()
            // }
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZWFiYTc5MmM1NjRmZDMyNGI0MmMwM2IiLCJpYXQiOjE1ODgzMTY4MzAsImV4cCI6MTYxOTg1MjgzMCwiYXVkIjoiaHR0cHM6Ly93d3cuZWRuZWVkLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiYzNmZDFhOGMtY2M0ZC00NzdhLWI3ZjQtNzUxODk2ZDMwMWJjIn0.vf09VNAjfapzlyXz699C_Z_zV8ztpprbH5P7EVGcwLM'
                }
            }
        )
    }
}

export default new PendingInvitationRequest();

