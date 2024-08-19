const product = [
    {
        id: 0,
        image: 
"https://media.geeksforgeeks.org/wp-content/uploads/20231114101916/1.png",
        title: "MERN stack course",
        price: 21999,
    },
    {
        id: 1,
        image: 
"https://media.geeksforgeeks.org/wp-content/uploads/20231114101950/2.png",
        title: "DSA self placed",
        price: 21999,
    },
    {
        id: 2,
        image: 
"https://media.geeksforgeeks.org/wp-content/uploads/20231114102324/3.png",
        title: "Gate 2024",
        price: 6999,
    },
    {
        id: 3,
        image: 
"https://media.geeksforgeeks.org/wp-content/uploads/20231114102017/4.png",
        title: "DevOps course",
        price: 11999,
    },
    {
        id: 4,
        image: 
"https://th.bing.com/th/id/R.7975ce40d7b306c6925824f31bd4bebd?rik=LR50yQkOuK8%2FOA&riu=http%3A%2F%2Finternovam.com%2Fblog%2Fwp-content%2Fuploads%2F2020%2F02%2FTIC.jpg&ehk=5MW0Li0xeczt%2F3Sh7xoaUFlGxaEFiJv5Jw%2Bxo0lBFH0%3D&risl=&pid=ImgRaw&r=0",
        title: "DevOps course",
        price: 11999,
    },
    {
        id: 5,
        image: 
"https://tec.com.pe/wp-content/uploads/2021/03/pourquoi_pas_AWS-scaled.jpg",
        title: "DevOps course",
        price: 11999,
    },
    {
        id: 6,
        image: 
"https://berlingske.bmcdn.dk/media/cache/resolve/image_x_large/image/52/528892/16201711-topbillede.jpg",
        title: "DevOps course",
        price: 11999,
    },
    {
        id: 7,
        image: 
"https://media.geeksforgeeks.org/wp-content/uploads/20231114101916/1.png",
        title: "MERN stack course",
        price: 21999,
    },
    {
        id: 8,
        image: 
"https://media.geeksforgeeks.org/wp-content/uploads/20231114101950/2.png",
        title: "DSA self placed",
        price: 21999,
    },
    {
        id: 9,
        image: 
"https://media.geeksforgeeks.org/wp-content/uploads/20231114102324/3.png",
        title: "Gate 2024",
        price: 6999,
    },
    {
        id: 10,
        image: 
"https://media.geeksforgeeks.org/wp-content/uploads/20231114102017/4.png",
        title: "DevOps course",
        price: 11999,
    },
    {
        id: 11,
        image: 
"https://th.bing.com/th/id/R.7975ce40d7b306c6925824f31bd4bebd?rik=LR50yQkOuK8%2FOA&riu=http%3A%2F%2Finternovam.com%2Fblog%2Fwp-content%2Fuploads%2F2020%2F02%2FTIC.jpg&ehk=5MW0Li0xeczt%2F3Sh7xoaUFlGxaEFiJv5Jw%2Bxo0lBFH0%3D&risl=&pid=ImgRaw&r=0",
        title: "DevOps course",
        price: 11999,
    },
    {
        id: 12,
        image: 
"https://tec.com.pe/wp-content/uploads/2021/03/pourquoi_pas_AWS-scaled.jpg",
        title: "DevOps course",
        price: 11999,
    },
    {
        id: 13,
        image: 
"https://berlingske.bmcdn.dk/media/cache/resolve/image_x_large/image/52/528892/16201711-topbillede.jpg",
        title: "DevOps course",
        price: 11999,
    },

];
const categories = [...new Set(product.map((item) => {return item;}))];
let i = 0;
document.getElementById("root").innerHTML = categories
    .map((item) => {
        var { image, title, price } = item;
        return (
            `<div class='box'>
            <div class='img-box'>
            <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
            <p>${title}</p>
            <h2>$ ${price}</h2>` +
            "<button onclick='addtocart(" +i++ +")'>Add to cart</button>"
            +`</div> </div>`
        );
    }).join("");

// var cart = [];

var cart = [];

function addtocart(a) {
    const selectedProduct = { ...categories[a] };
    const existingItem = cart.find(item => item.id === selectedProduct.id);

    if (existingItem) {
        
        // If the product already exists in the cart, increment its quantity
        existingItem.quantity = (existingItem.quantity || 1) + 1;
    } 
    else {
        
        // If the product is not in the cart, add it with quantity 1
        selectedProduct.quantity = 1;
        cart.push(selectedProduct);
    }

    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

let checkoutTotal = 0;

// Modify the displaycart function to update the checkout total
// Declare the total variable outside of the functions
let total = 0;

// Modify the displaycart function to update the global total
function displaycart() {
    let j = 0;
    total = 0;

    if (cart.length == 0) {
        document.getElementById("cartItem").innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ " + 0;
        // Hide the checkout card when the cart is empty
        document.getElementById("checkoutCard").style.display = "none";
    } 
    else {
        let totalquan = 0;
        document.getElementById("cartItem").innerHTML = cart
            .map((items, idx) => {
                var { image, title, price, quantity } = items;
                totalquan += quantity;
                document.getElementById("count").innerHTML = totalquan;
                total = total + price * quantity;
                document.getElementById("total").innerHTML = "$ " + total + "";
                return (
                    `<div class='cart-item'>
                    <div class='row-img'>
                    <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>$ ${price}</h2>
                    <h3>${quantity}</h3>` +
                    "<i class='fa-solid fa-trash' onclick='delElement(" +j++ +")'></i></div>"
                );
            }).join("");

        // Display the checkout button and total amount
        document.getElementById("checkout").innerHTML =
            `<button onclick="openCheckout()">Checkout</button>`;}}

// Checkout function
function openCheckout() {
    
    // Show the checkout card
    document.getElementById("checkoutCard").style.display = "block";
    
        // Set the checkout total
    document.getElementById("checkoutTotal").innerHTML = "$ " + total;
}
function closeCheckout() {
    
    // Hide the checkout card
    document.getElementById("checkoutCard").style.display = "none";
}