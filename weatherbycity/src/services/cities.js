export async function getCities(params){
    const url = 'https://spott.p.rapidapi.com/places?type=CITY&skip=0&country='+params;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5acfe04a01msh07a910b91b97733p128a4fjsna8b2a0491106',
            'X-RapidAPI-Host': 'spott.p.rapidapi.com'
        }
    };

    const cities = await fetch(url, options).then(res => res.json());
    return cities;
}