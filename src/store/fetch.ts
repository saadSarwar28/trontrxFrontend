import {CONSTANTS} from '@/utils/constants';

export const get = async (url: any): Promise<any> => {
    return new Promise((resolve, reject) => {
        fetch(CONSTANTS.api + url, {
            method: 'GET',
            headers: {
                'TRON-PRO-API-KEY': CONSTANTS.api_key,
                'Content-Type': 'application/json'
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

export const post = async (url: any, body: any): Promise<any> => {
    return new Promise((resolve, reject) => {
        fetch(CONSTANTS.api + url, {
            method: 'POST',
            headers: {
                'TRON-PRO-API-KEY': CONSTANTS.api_key,
                'Content-Type': 'application/json'
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
