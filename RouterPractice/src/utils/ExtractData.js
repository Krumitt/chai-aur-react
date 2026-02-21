export default function ExtractData(data) {
    if (!data) return {};
    if (!Object.hasOwn(data, 'message'))
        return { 'followers': Number(data['followers']), 'avatar_url': data['avatar_url'] };
    return {};
}