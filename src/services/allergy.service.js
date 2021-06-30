import {apiUrl} from '../helpers/api.config';
import {requestService} from './fetch.request.service';

export const allergyService = {
    create(allery) {
        return requestService.POST(apiUrl.allergy.create, allery);
    },
    getAll() {
        return requestService.GET(apiUrl.allergy.getAll);
    }, 
    get(id) {
       return requestService.GET(apiUrl.allergy.get + id)
    },
    update(allergy) {
        return requestService.PUT(apiUrl.allergy.update, allergy.id, allergy);
    },    
    _delete(id) {
        return requestService.DELETE(apiUrl.allergy.delete, id);
    }
};
