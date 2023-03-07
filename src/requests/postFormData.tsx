
const postFormData = (url: any, formData: any, dispatch: any, type: any) => {
    fetch(url, {
        method: 'POST',
        body: formData
    })
        .then(res => {
            if (!res.ok) {
                throw Error('Could not post form data');
            }
            return res.json()
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

export default postFormData