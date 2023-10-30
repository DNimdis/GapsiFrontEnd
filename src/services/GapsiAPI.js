const BaseURL = `${process.env.REACT_APP_GAPSI_API_URL}`;

var headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
headers.append('Access-Control-Allow-Credentials', 'true');

const URL_API_PROVIDER=`${BaseURL}/provider`;

const getAllProvider = params => {
    const {page, pageSize }=params;
    const request = fetch(`${URL_API_PROVIDER}/all?page=${page}&pageSize=${pageSize}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }        
    })

    return request;
}
const getTotalPages = () => {

    const request = fetch(`${URL_API_PROVIDER}/getTotalPages`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }        
    })

    return request;
}
const getWelcome = () => {

    const request = fetch(`${URL_API_PROVIDER}/welcome`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }        
    })

    return request;
}

const createProvider = params => {

    const request = fetch(`${URL_API_PROVIDER}/create`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })

    return request;
}

const updateProvider = (id, params) => {

    const request = fetch(`${URL_API_PROVIDER}/${id}/update`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })

    return request;
}

const deleteProvider = (id) => {

    const request = fetch(`${URL_API_PROVIDER}/${id}/delete`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }        
    })

    return request;
}





export default {
   getAllProvider,
   createProvider,
   updateProvider,
   deleteProvider,
   getTotalPages,
   getWelcome
};