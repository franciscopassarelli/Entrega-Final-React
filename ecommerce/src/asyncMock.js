const products = [
    {
        id:'1',
        name:'Head Extreme tour',
        price:95000,
        category:'raquetas',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREUNfXckZaR_yuLusq0kAzbpADDU9iLhvVtctLdHDaaYhuMsNFauLIzlYyaenhqmKhz7o&usqp=CAU',
        stock:12,
        description:'raquetas de tenis de alta gama'
    },
    {
        id:'2',
        name:'Asics Novak',
        price:14000,
        category:'indumentaria',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6zNkFiVC6J3FRPBwhito-l-YGU7-ST18iLA&usqp=CAU',
        stock:12,
        description:'zapatillas de tenis Asics Novak Djokovic'
    },
    {
        id:'3',
        name:'Solinco Confidential',
        price:60000,
        category:'accesorios',
        img:'https://www.holabirdsports.com/cdn/shop/products/012291_1_1000x.jpg?v=1580760821',
        stock:12,
        description:'rollo de cuerda solinco Confidential 220mts'
    }

];


export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products)
        },500)
        
    })

 }

    export const getProductById = (productId) =>{
        return new Promise((resolve) => {
            setTimeout(()=>{
                resolve(products.find(prod=> prod.id === productId))
            },500)
            
        })

}



export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = products.filter((prod) => prod.category === category);
        resolve(filteredProducts);
      }, 500);
    });
  };
  


