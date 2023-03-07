
const fetchRequest = (url: any, dispatch: any, type: any) => {
    fetch(url, {
        method: 'GET'
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

export default fetchRequest