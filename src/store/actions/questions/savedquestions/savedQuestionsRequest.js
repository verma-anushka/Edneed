import axios from "axios";

class SavedQuestions {

    findSavedQuestions = (limit, id, skip = 0) => {
        return axios.get(`http://api.webunide.com/save?kind=post&$populate[]=ref&savestatus=true&$sort=-_id&$limit=${limit}&$skip=${skip}&user=${id}`);
    }
}

export default new SavedQuestions();
