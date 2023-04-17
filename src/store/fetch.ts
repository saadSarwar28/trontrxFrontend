import CONSTANTS from '@/utils/constants';

export const get = async (url: any): Promise<any> => {
    return new Promise((resolve, reject) => {
        fetch(CONSTANTS.api + url, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(data => {
            resolve(data)
        }).catch(error => {
            console.log(error);
            reject(error)
        })
    })
}
