export const joinToChat = async ({login}) => {

    return await new Promise((resolve, reject) => {
        setTimeout(() => resolve({login, token: 123}), 2000);
    });
};

export const getProfile = async (token) => {
    return await new Promise((resolve, reject) => {
        setTimeout(() => resolve({login: 'Kate', token}), 2000);
    });
}