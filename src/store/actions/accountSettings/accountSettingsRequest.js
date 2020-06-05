import axios from "axios";

class AccountSettingsRequest {

    updateUserProfile = (id, newuserprofile) => {
        return axios.patch(
            `http://api.webunide.com/user/${id}`, newuserprofile,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZWJhYWE5OTllZjk0OTViNTJmYzkyZDMiLCJpYXQiOjE1OTA3NDA5NzgsImV4cCI6MTYyMjI3Njk3OCwiYXVkIjoiaHR0cHM6Ly93d3cuZWRuZWVkLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiOWM2MDE1N2MtZTIwMi00ZWFkLTk3ZmQtOTA2OTg4ZmU3MTYyIn0.SlYVZaF0YqLBUYwns9KEcO-6RqUPD-AVPRkboGfo2JM'
                }
            }
        )
    } 

    changePassword = (id, email, oldpassword, newpassword) => {
        return axios.post('http://api.webunide.com/authManagement', {
                "_id":id,
                "action":"password_change",
                "email":email,
                "oldPassword":oldpassword,
                "password":newpassword
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZWJhYWE5OTllZjk0OTViNTJmYzkyZDMiLCJpYXQiOjE1OTA3NDA5NzgsImV4cCI6MTYyMjI3Njk3OCwiYXVkIjoiaHR0cHM6Ly93d3cuZWRuZWVkLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiOWM2MDE1N2MtZTIwMi00ZWFkLTk3ZmQtOTA2OTg4ZmU3MTYyIn0.SlYVZaF0YqLBUYwns9KEcO-6RqUPD-AVPRkboGfo2JM'
                }
            }
        )
    } 

}

export default new AccountSettingsRequest();

