export default async function getRandomImageUrl(id) {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();

    return data['products'][id - 1]['images'][0];
}