
export async function getCountries(){
    const countries = await fetch('https://restcountries.com/v3.1/all').then(response => response.json());
    return countries;
};