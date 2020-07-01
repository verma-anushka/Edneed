import axios from "axios";

class SearchUsersRequest {
    
    searchUsers = (searchkey, curruserid, limit, skip=0) => {

        return axios.get(
            `https://api.webunide.com/user?fullName[$search]=${searchkey}&_id[$ne]=${curruserid}&$limit=${limit}&$skip=${skip}&$sort=fullName`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZWJhYWE5OTllZjk0OTViNTJmYzkyZDMiLCJpYXQiOjE1OTA3NDA5NzgsImV4cCI6MTYyMjI3Njk3OCwiYXVkIjoiaHR0cHM6Ly93d3cuZWRuZWVkLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiOWM2MDE1N2MtZTIwMi00ZWFkLTk3ZmQtOTA2OTg4ZmU3MTYyIn0.SlYVZaF0YqLBUYwns9KEcO-6RqUPD-AVPRkboGfo2JM'
                }
            }
        )
    }

}

export default new SearchUsersRequest();

