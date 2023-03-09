import data from '../../data/home.json'


export const getData = () => {
    return (dispatch: any) => {
        dispatch({
            type: 'getHomeData',
            payload: data
        })
    }
}