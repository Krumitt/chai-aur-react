export default async function GetExchangeRate(setTo, from, to, amt) {

    const response = await fetch(`https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`);
    const data = await response.json();
    const rate = Number(data['rates'][to]);
    setTo(rate * amt);
}