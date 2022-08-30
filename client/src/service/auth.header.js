export default function() {
    const user = JSON.parse(localStorage.getItem('userToken'));

    if(user) {
        return { 'x-auth-token': user.token}
    } else {
        return {};
    }
}