import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = () => {
    axiosWithAuth()
    .get('/colors')
    .then(res => {   
        console.log(res.data);   
        localStorage.setItem('colors', JSON.stringify(res.data));
    })
    .catch(err => {
        console.log(err)
    });
}


export default fetchColorService;