import axios from "axios";

class RatingRequest {

    getRating = (kind, ref_id, limit, skip=0) => {
        return axios.get(
            `https://api.webunide.com/rating?kind=${kind}&ref=${ref_id}&$limit=${limit}&$skip=${skip}&$populate[]=user&$sort=-_id`,
            // {
            //     headers:this.getApiheader()
            // }
        )   
    }
    
    setRating = (kind, rate, review, user_id, ref_id) => {
        return axios.post(
            `https://api.webunide.com/rating`,
            {
                kind,
                rate,
                review,
                user: user_id,
                ref : ref_id
            },
            // {
            //     headers:this.getApiheader()
            // }
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZWM3ZDE0MzcwZTFlZjM5NWQ2MzExMmEiLCJpYXQiOjE1OTIwNDI5MjksImV4cCI6MTYyMzU3ODkyOSwiYXVkIjoiaHR0cHM6Ly93d3cuZWRuZWVkLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiZDBiNzY1NjQtNDlkNy00N2I1LTg1ZWUtNzRiZTkwMjljZjFjIn0.EAUaaNi6qg7pnRIiplm8M0G9cnhswChasqhCWA3QOKA'
                }
            }
        )
    }

}

export default new RatingRequest();

