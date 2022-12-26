import { baseService } from "./baseService";



class ManagePictureService extends baseService {

    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }

    search = (value, more) => {
        return this.get(`search?api_key=CUtxZTqp4TEtU4JQC9kr0oMqnvrzEANQ&q=${value}&limit=${more}&offset=0&rating=g&lang=en`)
    }

    getOne = (id) => {
        return this.get(`${id}?api_key=CUtxZTqp4TEtU4JQC9kr0oMqnvrzEANQ`)
    }

    getDisable = (id) => {
        return this.get(`${id}?api_key=CUtxZTqp4TEtU4JQC9kr0oMqnvrzEANQ`)
    }
}

export const managePictureService = new ManagePictureService();