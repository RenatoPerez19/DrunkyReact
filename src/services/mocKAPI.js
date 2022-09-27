const data =[{
    id: 1,
    title: "zapatilla nike",
    price: 9800,
    detail: "zapatilla retro , insipirada en los años 90 , con detalles de nubuck",
    stock: 6,
    categoria: "zapatillas ",
    img : "/public/assets/zapatillas/zapatillalacoste2.jpg",
},
{
    id: 2,
    title: "zapatilla adidas",
    price: 9800,
    detail: "zapatilla retro , insipirada en los años 90 , con detalles de nubuck",
    stock: 6,
    categoria: "zapatillas ",
    img : "/public/assets/zapatillas/zapatillalacoste2.jpg",
},
{
    id: 2,
    title: "zapatilla adidas",
    price: 9800,
    detail: "zapatilla retro , insipirada en los años 90 , con detalles de nubuck",
    stock: 6,
    categoria: "zapatillas ",
    img : "/public/assets/zapatillas/zapatillalacoste2.jpg",
},
{
    id: 3,
    title: "zapatilla adidas",
    price: 9800,
    detail: "zapatilla retro , insipirada en los años 90 , con detalles de nubuck",
    stock: 6,
    categoria: "zapatillas ",
    img : "/public/assets/zapatillas/zapatillalacoste2.jpg",
},
{
    id: 4,
    title: "zapatilla adidas",
    price: 9800,
    detail: "zapatilla retro , insipirada en los años 90 , con detalles de nubuck",
    stock: 6,
    categoria: "zapatillas ",
    img : "/public/assets/zapatillas/zapatillalacoste2.jpg",
},
{
    id: 5,
    title: "zapatilla adidas",
    price: 9800,
    detail: "zapatilla retro , insipirada en los años 90 , con detalles de nubuck",
    stock: 6,
    categoria: "zapatillas ",
    img : "/assets/zapatillas/zapatillalacoste2.jpg",
},
]

export default function getItem(){

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(data)
        },1500);



    });

}