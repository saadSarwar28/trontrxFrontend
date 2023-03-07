

const postRequest = (url: any, postData: any, dispatch: any, type: any) => {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => {
            if (!res.ok) {
                throw Error('Could not fetch data');
            }
            return res.json();
        })
        .then(data => {
            dispatch({
                type: type,
                payload: data
            })
        })
        .catch(error => {
            console.log(error);
            dispatch({
                type: 'error',
                payload: error
            })
        })
}

export default postRequest