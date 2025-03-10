export let cart =JSON.parse( localStorage.getItem('cart'));

if(!cart) {
    cart = 
    [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2
    }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1
    }];
}



function savetostorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addtocart(productId) {
    let matchingitem;
        
        cart.forEach((cartItem) => {
            if(productId === cartItem.productId) {
                matchingitem = cartItem;
            }
        });

        if(matchingitem) {
            matchingitem.quantity += 1;
        }else {
            cart.push({
                productId: productId,
                quantity: 1
            })
        }
        savetostorage();
 }

 export function removefromcart(productId) {
    const newcart = [];

    cart.forEach((cartItem) => {
        if(cartItem.productId !== productId) { //the item will be skipped
            newcart.push(cartItem);
        }
    });
    cart = newcart;

    savetostorage();
 }