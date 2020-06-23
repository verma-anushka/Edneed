import axios from "axios";

class MentionsRequest {
    
    getUsers = (searchkey, limit, skip=0) => {
        const userid = "5ec7d14370e1ef395d63112a";
        return axios.get(
            `https://api.webunide.com/user?fullName[$search]=${searchkey}&_id[$ne]=${userid}&$limit=${limit}&$skip=${skip}&$sort=fullName&$populate=photo`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZWJhYWE5OTllZjk0OTViNTJmYzkyZDMiLCJpYXQiOjE1OTA3NDA5NzgsImV4cCI6MTYyMjI3Njk3OCwiYXVkIjoiaHR0cHM6Ly93d3cuZWRuZWVkLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiOWM2MDE1N2MtZTIwMi00ZWFkLTk3ZmQtOTA2OTg4ZmU3MTYyIn0.SlYVZaF0YqLBUYwns9KEcO-6RqUPD-AVPRkboGfo2JM'
                }
            }
        )
    }        

    saveAnswer = (post, text) => {
        return axios.post(
            "https://api.webunide.com/answer", 
            {
                post,
                text
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZWJhYWE5OTllZjk0OTViNTJmYzkyZDMiLCJpYXQiOjE1OTA3NDA5NzgsImV4cCI6MTYyMjI3Njk3OCwiYXVkIjoiaHR0cHM6Ly93d3cuZWRuZWVkLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiOWM2MDE1N2MtZTIwMi00ZWFkLTk3ZmQtOTA2OTg4ZmU3MTYyIn0.SlYVZaF0YqLBUYwns9KEcO-6RqUPD-AVPRkboGfo2JM'
                }
            }
        )
    }    

    getAnswers = (post_id, limit) => {
        return axios.get(
            `https://api.webunide.com/answer?post=${post_id}&$sort=-createdAt&$limit=${limit}`, 
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZWJhYWE5OTllZjk0OTViNTJmYzkyZDMiLCJpYXQiOjE1OTA3NDA5NzgsImV4cCI6MTYyMjI3Njk3OCwiYXVkIjoiaHR0cHM6Ly93d3cuZWRuZWVkLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiOWM2MDE1N2MtZTIwMi00ZWFkLTk3ZmQtOTA2OTg4ZmU3MTYyIn0.SlYVZaF0YqLBUYwns9KEcO-6RqUPD-AVPRkboGfo2JM'
                }
            }
        )
    }    
}

export default new MentionsRequest();

