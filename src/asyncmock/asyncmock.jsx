const misProductos = [
    { id: 1, nombre: "Sandalias", precio: 40000, img: "/sandalias.jpg" },
    { id: 2, nombre: "Zapatillas estrella", precio: 28000, img: "/zapatillas.jpg" },
    { id: 3, nombre: "Botas altas", precio: 50000, img: "/botasaltas.webp" },
    { id: 4, nombre: "Botas bajas", precio: 30000, img: "/botascortas.webp" }
];



export const getProductos = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(misProductos)
        },2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
      setTimeout(() => {
        const producto = misProductos.find(item => item.id === parseInt(id))
        resolve(producto)
      }, 100)
    })
  }
  

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout(()=>{
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria)
            resolve(productosCategoria)
        },100)
    })
}