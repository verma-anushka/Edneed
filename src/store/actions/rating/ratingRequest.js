import axios from "axios";

class RatingRequest {

    getRating = (kind, ref_id, limit=2, skip=0) => {
        return axios.get(
            `http://api.webunide.com/rating?kind=${kind}&ref=${ref_id}&$limit=${limit}&$skip=${skip}&$populate[]=user`
            // ,
            // {
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZWNiOWVkNjcwZTFlZjM5NWQ2MzExM2EiLCJpYXQiOjE1OTE2NDIzOTYsImV4cCI6MTYyMzE3ODM5NiwiYXVkIjoiaHR0cHM6Ly93d3cuZWRuZWVkLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiNjJhZmUzZGItNGVkZi00NWEyLWE0ZTgtMjY2ZDIwOTUyZGI5In0.sU-73sW4aLl8owrFgDL2dTKsO3ta9rTJgxcXa0XJlfk'
            //     }
            // }
        )
            
    }
    
    setRating = (kind, rate, user_id, ref_id) => {
        return axios.post(
            `http://api.webunide.com/rating`,
            {
                kind,
                rate,
                user: user_id,
                ref : ref_id
            },
            // {
            //     headers:this.getApiheader()
            // }
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZWNiOWVkNjcwZTFlZjM5NWQ2MzExM2EiLCJpYXQiOjE1OTE2NDIzOTYsImV4cCI6MTYyMzE3ODM5NiwiYXVkIjoiaHR0cHM6Ly93d3cuZWRuZWVkLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiNjJhZmUzZGItNGVkZi00NWEyLWE0ZTgtMjY2ZDIwOTUyZGI5In0.sU-73sW4aLl8owrFgDL2dTKsO3ta9rTJgxcXa0XJlfk'
                }
            }
        )
    }

}

export default new RatingRequest();

