import axios from "axios";

class findFollowQuestions {

    findFollowQuestions = (limit, id, skip=0) => {
        return axios.get(`http://api.webunide.com/follow?kind=post&$populate[]=ref&followstatus=true&$sort=-_id&$limit=${limit}&$skip=${skip}&user=${id}`);
    }

}

export default new findFollowQuestions();

