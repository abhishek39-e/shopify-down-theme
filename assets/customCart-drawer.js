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

function attachCartForms() {
    document.querySelectorAll('form[action^="/cart/add"] input[type="submit"], form[action^="/cart/add"] buttn[type="submit"]').forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            console.log("200 (form submit intercepted)");

            const cartDrawer = document.querySelector('customcart-drawer');
            if (cartDrawer) {
                cartDrawer.classList.add('show');
            }
            await fetch('/cart/add', {
                method: 'post',
                body: new FormData(form)
            })

        });
    });
}

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

