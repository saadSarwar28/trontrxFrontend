import data from '../../content/content.json'


export const getContent = () => {
    return (dispatch: any) => {
        dispatch({
            type: 'getHomeContent',
            payload: data
        })
    }
}