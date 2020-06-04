import axios from "axios";

class ReportRequest {


    report = (kind, user_id, ref_id) => {
        return axios.post(
            `http://api.webunide.com/report`,
            {
                kind,
                user: user_id,
                ref: ref_id,
                reportstatus: true 
            },
            // {
            //     headers:this.getApiheader()
            // }
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZWJhYWE5OTllZjk0OTViNTJmYzkyZDMiLCJpYXQiOjE1OTA3NDA5NzgsImV4cCI6MTYyMjI3Njk3OCwiYXVkIjoiaHR0cHM6Ly93d3cuZWRuZWVkLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiOWM2MDE1N2MtZTIwMi00ZWFkLTk3ZmQtOTA2OTg4ZmU3MTYyIn0.SlYVZaF0YqLBUYwns9KEcO-6RqUPD-AVPRkboGfo2JM'
                }
            }
        )
    } 

    unreport = (id) => {
        return axios.delete(
            `http://api.webunide.com/report/${id}`, 
            // {
            //     headers:this.getApiheader()
            // }
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZWJhYWE5OTllZjk0OTViNTJmYzkyZDMiLCJpYXQiOjE1OTA3NDA5NzgsImV4cCI6MTYyMjI3Njk3OCwiYXVkIjoiaHR0cHM6Ly93d3cuZWRuZWVkLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiOWM2MDE1N2MtZTIwMi00ZWFkLTk3ZmQtOTA2OTg4ZmU3MTYyIn0.SlYVZaF0YqLBUYwns9KEcO-6RqUPD-AVPRkboGfo2JM'
                }
            }
        )
    } 

}

export default new ReportRequest();

