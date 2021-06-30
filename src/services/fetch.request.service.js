import { authHeader } from '../helpers';

export const requestService = {
    POST(url, data) {
        const requestOptions = {
            method: 'POST',
            headers: { ...authHeader(), 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
    
        return fetch(url, requestOptions).then(this.handleResponse);
    },
    GET(url) {
        const requestOptions = {
            method: 'GET',
            headers: authHeader()
        };
        
        return fetch(url, requestOptions).then(this.handleResponse);
    },
    PUT(url, param, data){
        const requestOptions = {
            method: 'PUT',
            headers: { ...authHeader(), 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
    
        return fetch(`${url}/${param}`, requestOptions).then(this.handleResponse);
    },
    DELETE(url, param){
        const requestOptions = {
            method: 'DELETE',
            headers: authHeader()
        };
    
        return fetch(`${url}/${param}`, requestOptions).then(this.handleResponse);
    },
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
    },
    handleResponse(response) {
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                if (response.status === 401) {
                    // auto logout if 401 response returned from api
                    this.logout();
                    location.reload(true);
                }
    
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
    
            return data;
        });
    }
}
