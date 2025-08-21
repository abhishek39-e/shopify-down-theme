document.addEventListener('DOMContentLoaded', function () {
    const openCart = document.querySelector('#cart-icon-bubble');
    const cartDrawer = document.querySelector('customcart-drawer');

    openCart.addEventListener('click', function (e) {
        e.preventDefault();
        cartDrawer.classList.add('show')
        console.log('200');
    });

    let remove = document.querySelector('.cut-btn')
    remove.addEventListener('click', function (e) {
        e.preventDefault();
        cartDrawer.classList.remove('show')
        console.log('200');
    });


});

document.addEventListener("DOMContentLoaded", () => {
    attachCartForms();
});


document.addEventListener("DOMContentLoaded", () => {
    attachCartForms();
});

function attachCartForms() {
    // ✅ Select the form itself
    document.querySelectorAll('form[action="/cart/add"]').forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            e.stopPropagation();

            console.log("200");

            const cartDrawer = document.querySelector("customcart-drawer");
            if (cartDrawer) {
                cartDrawer.classList.add("show");
            }

            // ✅ Pass the form element correctly
            fetch("/cart/add.js", {
                method: "POST",
                body: new FormData(form)
            })
                .then(res => res.json())
                .then(data => {
                    console.log("Added to cart:", data);
                    // Update your cart drawer here if needed
                })
                .catch(err => console.error("Error adding to cart:", err));
        });
    });
}


// function attachCartForms() {
//     document.querySelectorAll('form[action="/cart/add"] input[type="submit"], form[action="/cart/add"] button[type="submit"]').forEach(form => {
//         form.addEventListener('click', (e) => {
//             e.preventDefault();
//             e.stopPropagation()

//             console.log("200 ");

//             const cartDrawer = document.querySelector('customcart-drawer');
//             if (cartDrawer) {
//                 cartDrawer.classList.add('show');
//             }
//             fetch("/cart/add.js", {
//                 method: "POST",
//                 body: new FormData(form),
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log("Added to cart:", data);
//                     // here you could update cart drawer content
//                 })
//                 .catch(err => console.error("Error adding to cart:", err));
//             console.log(x)

//         });
//     });
// }

// class CustomCart extends HTMLElement {
//     constructor() {
//         super();
//     }
//     connectedCallback() {
//         this.close = this.querySelector('[close-cart]')
//         this.close.addEventListener('click', this.handleClose.bind(this))
//     }
//     disconnectedCallback() {
//         if (this.closeBtn) {
//             this.closeBtn.addEventListener('click', this.handleClose.bind(this));
//         }
//     }


//     handleClick() {
//         this.toggleAttribute('open');
//         console.log('run');
//     }
//     handleClose() {
//         this.removeAttribute('open'); // Always close
//         console.log("Cart drawer closed");
//     }
// }
// customElements.define('customcart-drawer', CustomCart);

