import postRequest from "@/requests/postRequest";


export const login = (loginData: any) => {
    return (dispatch: any) => {
        postRequest('https://jsonplaceholder.typicode.com/users', loginData, dispatch, 'login');
    }
}

export const signup = (signupData: any) => {
    return (dispatch: any) => {
        postRequest('https://jsonplaceholder.typicode.com/users', signupData, dispatch, 'signup');
    }
}