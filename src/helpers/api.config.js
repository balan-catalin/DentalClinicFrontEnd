
const apiDevBaseServerUrl = "https://localhost:44374/api";

const urlBase = apiDevBaseServerUrl;

export const apiUrl = {
    allergy: {
        create: `${urlBase}/allergies`,
        update: `${urlBase}/allergies/`,
        delete: `${urlBase}/allergies/`,
        get: `${urlBase}/allergies/`,
        getAll: `${urlBase}/allergies`,
    }
}