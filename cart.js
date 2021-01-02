let carts= document.querySelectorAll('.add-cart');

let products= [
    {
        name: 'White Tshirt',
        tag: 'whiteTshirt',
        price: 40,
        inCart: 0,
    },
    {
        name:'Black shirt',
        tag: 'blackshirt',
        price: 35,
        inCart: 0,
    },
    {name:'Printed shirt',
    tag:'printedshirt',
    price:'30',
    inCart: 0,
}
]


//from zero to two (loop)//
for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
        console.log("added to cart");

})
}

function onLoadcartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;

    }
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers= parseInt(productNumbers);

if(productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers + 1;
} else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
}
    
}



