export default async function GetGitData(username) {
    if (username.trim() !== '') {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            return { "message": "not found" };
        }
        const data = await response.json();
        return data;
    }
    return null;
}