import axios from "axios";

class ApplicationsRequest {

    constructor() {
        this.applicationsRequest = {
            endpoint: {
                user: 'http://api.webunide.com/apply?owner=::USERID::&kind=::KIND::&$populate[]=ref&$populate[]=pageid&$populate[]=attachment&$sort=-createdAt&$limit=::LIMIT::&$skip=::SKIP::',
                page: 'http://api.webunide.com/apply?pageid=::PAGEID::&kind=::KIND::&$populate[]=ref&$populate[]=owner&$populate[]=attachment&$sort=-createdAt&$limit=::LIMIT::&$skip=::SKIP::'
            }
        }
    }

    getPageApplications = (kind, pageId, limit, skip=0) => {

        return axios.get(
            this.applicationsRequest.endpoint.page
                .replace('::PAGEID::', pageId)
                .replace('::KIND::', kind)
                .replace('::LIMIT::', limit)
                .replace('::SKIP::', skip)
        )
    }     

    getUserApplications = (kind, userId, limit, skip=0) => {

        return axios.get(
            this.applicationsRequest.endpoint.user
                .replace('::USERID::', userId)
                .replace('::KIND::', kind)
                .replace('::LIMIT::', limit)
                .replace('::SKIP::', skip)
        )
    }        

}

export default new ApplicationsRequest();

