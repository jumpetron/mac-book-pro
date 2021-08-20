
function productCost(product, price, isIncreasing){
    const productPriceText = document.getElementById(product + '-cost');
    let productPrice = parseFloat(productPriceText.innerText);
    
    productPriceText.innerText = price;

    if(isIncreasing){
        productPriceText.innerText = price;
    }

    else{
        productPriceText.innerText = 0;
    }

    calculateTotal()
}


function getTotalPrice(product){
    const productPriceText = document.getElementById(product + '-cost').innerText;
    const productPrice = parseFloat(productPriceText);

    return productPrice;
}

function calculateTotal(){
    const defaultCost = getTotalPrice('default')
    const memoryCost = getTotalPrice('memory')
    const storageCost = getTotalPrice('storage')
    const deliveryCost = getTotalPrice('delivery')

    const toalCost = defaultCost + memoryCost + storageCost + deliveryCost;

    document.getElementById('total-cost').innerText = toalCost;
}



// memory price
document.getElementById('default-memory').addEventListener('click', function () {

    productCost('memory', false)

})

document.getElementById('memory-upgrade').addEventListener('click', function () {

    productCost('memory', 180, true)
    
})



// storage price
document.getElementById('default-storage').addEventListener('click', function () {

    productCost('storage', false)

})


document.getElementById('storage-upgrade-512').addEventListener('click', function () {

    productCost('storage', 100, true)

})

document.getElementById('storage-upgrade-1tb').addEventListener('click', function () {

    productCost('storage', 180, true)

})


// delivery cost

document.getElementById('default-delivery').addEventListener('click', function () {

    productCost('delivery', false)

})

document.getElementById('special-delivery').addEventListener('click', function () {

    productCost('delivery', 20, true)
})


