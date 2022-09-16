import roller1 from "../assets/1rollerScreen.png"
import bandas2 from "../assets/2bandasVerticales.png"
import duo3 from "../assets/3duoNegra.png"
import roller4 from "../assets/4rollerB.O..png"
import bandas5 from "../assets/5bandasVerticales.png"

const cortinas = [
    {id: 0, tipoCortina: "Roller", tipoTela: "Screen", color: "Beige", ancho: 120, alto: 120, precio: 12000, descripcion:"Ofrecen múltiples beneficios que la convierten en un modelo de diseño siempre actual. la funcionalidad y sencillez de su instalación, así como su estética, mecanismos y componentes mucho más poderosos y robustos, son sólo algunos de los atributos que la distinguen.", stock: "5", imagen: roller1},
    {id: 1, tipoCortina: "Bandas Verticales", tipoTela: "Screen", color: "Beige", ancho: 200, alto: 210, precio: 38500, descripcion:"Las cortinas Verticales tienen un formato de bandas delgadas deslizables que generan un ambiente de eficiencia, planitud y neutralidad. Son ideales para cubrir grandes superficies y para crear gran cantidad de escenarios de luz y privacidad según la orientación de sus bandas.", stock: "10", imagen: bandas2},
    {id: 2, tipoCortina: "Duo", tipoTela: "Screen-BlackOut", color: "Negra", ancho: 150, alto: 110, precio: 25000, descripcion:"Intercala bandas de tela opaca y translúcida, creando variantes de visuales y sutiles efectos de luz. según su posición, estas cortinas permiten filtrar la luz del día sin perder las visuales con el exterior. De este modo, la cortina permite un óptimo control de la luz y a la vez ofrece intimidad en cada ambiente.", stock: "15", imagen: duo3},
    {id: 3, tipoCortina: "Roller", tipoTela: "BlackOut", color: "Blanca", ancho: 140, alto: 200, precio: 30000, descripcion:"Ofrecen múltiples beneficios que la convierten en un modelo de diseño siempre actual. la funcionalidad y sencillez de su instalación, así como su estética, mecanismos y componentes mucho más poderosos y robustos, son sólo algunos de los atributos que la distinguen.", stock: "7", imagen: roller4},
    {id: 4, tipoCortina: "Bandas Verticales", tipoTela: "BlackOut", color: "Negra", ancho: 150, alto: 200, precio: 37000, descripcion:"Las cortinas Verticales tienen un formato de bandas delgadas deslizables que generan un ambiente de eficiencia, planitud y neutralidad. Son ideales para cubrir grandes superficies y para crear gran cantidad de escenarios de luz y privacidad según la orientación de sus bandas.", stock: "12", imagen: bandas5},                
]

export default cortinas

