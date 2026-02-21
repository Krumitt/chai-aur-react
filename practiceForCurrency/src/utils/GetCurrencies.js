export default async function GetCurrencies(setCurrencies) {

    const response = await fetch('https://api.frankfurter.dev/v1/currencies');
    const data = await response.json();
    setCurrencies(Object.keys(data));
}