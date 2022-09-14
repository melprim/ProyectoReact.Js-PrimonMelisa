import cortinas from '../data/data';
import {useParams} from 'react-router-dom';


const getCortinaDetail = () => new Promise ((res, err) =>{
    const {id} = useParams ()
    setTimeout(()=>res(cortinas.find(cortinas=>cortinas.id === Number(id))),1500)
    })


    
export default getCortinaDetail


