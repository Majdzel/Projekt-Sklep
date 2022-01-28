
const Cart = {

        parseItems: function (){
                items = JSON.parse(window.localStorage.getItem('items'));
                items.forEach((item, index) => {
                        items[index].quantity = parseInt(item.quantity);
                        items[index].price = parseInt(item.price);
                })
                return items;
        },

        sum : 0,
        total_price : 0,

        computeSum : function (){
                console.log(document.querySelector('#sum'), Cart.sum, Cart.total_price);
                document.querySelector('#sum').textContent = Cart.sum;   
                document.querySelector('#total_price').textContent = Cart.total_price;  
        },

    createRows() {
        Cart.sum = 0;   
        Cart.total_price = 0;
        document.querySelector('.cartItems').innerHTML = '';

                const items = Cart.parseItems();

                let rows = '';

                items.forEach(item => {
                        Cart.sum += item.quantity;
                        Cart.total_price += item.price * item.quantity;
                        rows += Cart.createCol(item);
                });

                document.querySelector('.cartItems').innerHTML += rows;
                Cart.addDeleteEvent();
                Cart.computeSum();

    },

        createCol(item) {
                return `
                <div class="row_cart">
                        <div style="flex:2">
                                <img src="${item.image}">
                        </div>
                        <div style="flex:2">
                                ${item.name}
                        </div>
                        <div style="flex:1">
                                ${item.price}.00 PLN
                        </div>
                        <div style="flex:1">
                                ${item.quantity}
                        </div>
                        <div style="flex:1">
                                ${item.quantity * item.price}.00 PLN
                                <button type="button" class="btn-danger delete" data-item-id="${item.id}">usun</button>
                        </div>
                        
                </div>

                `
        },
        deleteItem(id) {
                console.log(id);
                let items = Cart.parseItems();
                items.forEach((item, index) => {
                        if(item.id === id){
                                items[index].quantity = item.quantity - 1;
                        }
                })
                
                items = items.filter((item) => {
                        return item.quantity != 0;
                })

                window.localStorage.setItem('items', JSON.stringify(items));
                Cart.createRows();
        },

        addDeleteEvent(){
                let updateBtns = document.getElementsByClassName('delete');
        
                for(let i = 0 ; i < updateBtns.length; i++){
                    updateBtns[i].addEventListener('click',function(){
                    Cart.deleteItem(this.dataset.itemId)
                    })
                };
        },
}

window.addEventListener('load', Cart.createRows);

