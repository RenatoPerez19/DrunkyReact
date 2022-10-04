const data =[{
    id: 1,
    title: "zapatilla nike",
    price: 9800,
    detail: "zapatilla retro , insipirada en los años 90 , con detalles de nubuck",
    stock: 10,
    categoria: "zapatillas  ",
    img : "/assets/zapatillas/zapatillalacoste2.jpg",
},
{
    id: 2,
    title: "zapatilla adidas",
    price: 11800,
    detail: "zapatilla retro , insipirada en los años 90 , con detalles de nubuck",
    stock: 8,
    categoria: "zapatillas  ",
    img : "/assets/zapatillas/zapatillalacoste2.jpg",
},
{
    id: 3,
    title: "zapatilla adidas",
    price: 9800,
    detail: "zapatilla retro , insipirada en los años 90 , con detalles de nubuck",
    stock: 6,
    categoria: "zapatillas",
    img : "/assets/zapatillas/zapatillalacoste2.jpg",
},
{
    id: 4,
    title: "zapatilla adidas",
    price: 19800,
    detail: "zapatilla retro , insipirada en los años 90 , con detalles de nubuck",
    stock: 6,
    categoria: "zapatillas ",
    img : "/assets/zapatillas/zapatillalacoste2.jpg",
},
{
    id: 5,
    title: "zapatilla adidas",
    price: 18800,
    detail: "zapatilla retro , insipirada en los años 90 , con detalles de nubuck",
    stock: 6,
    categoria: "zapatillas",
    img : "/assets/zapatillas/zapatillalacoste2.jpg",
},
{
    id: 6,
    title: "buzo de la marca drew",
    price: 10000,
    detail: "Este buzo , esta diseñado por Justin Bieber ",
    stock: 6,
    categoria: "buzos  ",
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

export  function SingleGetItem(idItem){
    return new Promise((resolve,reject)=>{
        let itemFind = data.find((item)=>{
            return item.id === parseInt(idItem)
        });

        if(itemFind) resolve(itemFind);
        else reject(new Error("item no encontrado"));
    });
}


export function getItemByCategoria(cat){

    return new Promise((resolve,reject)=>{

        let itemFind = data.filter((item)=>{
            return item.categoria === cat;
        });
        setTimeout(()=>{
        if(itemFind) resolve(itemFind);

        else reject(new Error("item no encontrado"));
        },1000)
    });
    
}