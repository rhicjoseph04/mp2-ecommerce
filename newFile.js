document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    // // Product Title (outside the loop)
    // const productsHeading = document.createElement('h2');
    // productsHeading.textContent = 'Products';
    // app.appendChild(productsHeading);
    // Render products
    const productContainer = document.createElement('div');
    productContainer.classList.add('products');


    const productsContainer = document.createElement('div');
    productsContainer.classList.add('container');


    // const productTitleContainer = document.createElement('div');
    // productTitleContainer.classList.add('product-title-container');
    // productTitleContainer.textContent = 'Products';
    // Display "All Products" category at the beginning
    const allProductsCategory = document.createElement('div');
    allProductsCategory.classList.add('box');
    allProductsCategory.setAttribute('data-category', 'All Products');

    productDetail.forEach(product => {
        const productBox = document.createElement('div');
        productBox.classList.add('box');
        productBox.setAttribute('data-category', product.Cat);

        const imgBox = document.createElement('div');
        imgBox.classList.add('img_box');

        const productImage = document.createElement('img');
        productImage.src = product.Img;
        productImage.alt = product.Title;


        imgBox.appendChild(productImage);

        const icon = document.createElement('div');
        icon.classList.add('icon');

        const cartIcon = document.createElement('li');
        cartIcon.innerHTML = '<i class="fas fa-shopping-cart"></i>';
        cartIcon.addEventListener('click', () => {
            console.log('Clicked cart icon for product:', product);
        });

        icon.appendChild(cartIcon);
        imgBox.appendChild(icon);
        productBox.appendChild(imgBox);

        const detail = document.createElement('div');
        detail.classList.add('detail');

        const category = document.createElement('p');
        category.textContent = product.Cat;

        const title = document.createElement('h3');
        title.textContent = product.Title;

        const price = document.createElement('h4');
        price.textContent = `$${product.Price}`;

        detail.appendChild(category);
        detail.appendChild(title);
        detail.appendChild(price);

        productBox.appendChild(detail);

        productBox.addEventListener('click', () => openProductDetail(product));

        productsContainer.appendChild(productBox);
    });

    productContainer.appendChild(productsContainer);
    app.appendChild(productContainer);

    // Call allProducts() initially to display all products
    allProducts();
});
