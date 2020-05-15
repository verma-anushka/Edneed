import axios from "axios";

class PricingRequest {

    findPricing = (kind) => {
        return axios.get(`http://api.webunide.com/pricing?$sort=createdAt&kind=${kind}`);
    }

}

export default new PricingRequest();

