var cartItems = [];
var isTotalHidden = true;


var iphone = {
    name: "Iphone12",

    price: 800
}

var macbook = {
    name: "Macbook",

    price:1600
}

function addToCart(item) {
    cartItems.push(item);
    document.getElementById("itemCounter").innerHTML = cartItems.length;
    showTotal();
}

function clickCart() {
    isTotalHidden = !isTotalHidden;
    showTotal();
}

function showTotal() {
    var orderTotal = document.getElementById("orderTotal");
    orderTotal.innerHTML = "";

    if (isTotalHidden === false) {
        var total = 0;
        for (var i = 0; i < cartItems.length; i++)
    {
        total = total + cartItems[i].price;
    }
    orderTotal.innerHTML += "Total: $" + total;
}

}