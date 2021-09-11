let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: "Tennis",
        set: "two",
        price: 10000,
        inCart:0,
    },
    {
        name: "Volleyball",
        set: "one",
        price: 2400,
        inCart:0,
    },
    {
        name: "Table-Tennis",
        set: "two",
        price: 4500,
        inCart:0,
    },
]

for(let i=0; i<carts.length; i++){
    carts[i].addEventListener('click', ()=>{
        cartNumbers();
    });
}   

function onLoadcartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if( productNumbers ){
        localStorage.setItem('cartNumbers', productNumbers+1);
        document.querySelector('.cart span').textContent = productNumbers+1;
    }else {
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent =1;
    }
}

onLoadcartNumbers(); 