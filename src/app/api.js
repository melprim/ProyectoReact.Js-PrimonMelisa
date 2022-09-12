import roller1 from '../assets/1rollerScreen.png';
    
const getCortinaDetail = () => new Promise ((res, err) =>{
    setTimeout(()=>{
        res({
        id: 0, 
        tipoCortina: "Roller", 
        tipoTela: "Screen", 
        precio: 12000,
        descripcion: "aca va a ir la descripcion de la cortina",  
        stock: "5", 
        imagen: roller1
        })
    },2000)
})


export default getCortinaDetail
