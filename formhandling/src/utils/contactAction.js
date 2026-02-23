import { redirect } from 'react-router-dom';
export default async function contactAction({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    localStorage.setItem("userData", JSON.stringify(data));
    return redirect('/');
}