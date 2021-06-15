var ProductName = document.getElementById('ProductName')
var ProductCategory = document.getElementById('ProductCategory')
var ProductPrice = document.getElementById('ProductPrice')
var ProductDescription = document.getElementById('ProductDescription')

var products = []

function getFormData() {
    var product = {
        name: ProductName.value,
        cate: ProductCategory.value,
        price: ProductPrice.value,
        desc: ProductDescription.value
    }
    products.push(product)
    dispaly()
    console.log(products);
}

function dispaly() {
    var copaya = ``

    for (var i = 0; i < products.length; i++) {
        copaya += `  <tr>
    <td>` + i + `</td>
    <td>` + products[i].name + `</td>
    <td>` + products[i].cate + `</td>
    <td>${products[i].price}</td>
    <td>${products[i].desc}</td>
    <td><a class="btn btn-danger" href="">Delete</a></td>
    <td><a class="btn btn-info" href="">Update</a></td>
</tr>`
    }


    document.getElementById('demo').innerHTML = copaya
}