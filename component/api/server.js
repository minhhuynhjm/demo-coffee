const baseURL = 'https://minhhuynhnews.azurewebsites.net/';
const apiGetCategory = baseURL + 'api/categories';

async function getCategoryFromServer() {
    try {
        let response = await fetch(apiGetCategory);
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.log(error)
    }
}

export { getCategoryFromServer };