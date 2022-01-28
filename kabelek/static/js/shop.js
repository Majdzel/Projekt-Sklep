
const Shop = {

    init(){
        let updateBtns = document.getElementsByClassName('update-cart')

        for(let i = 0 ; i < updateBtns.length; i++){
            updateBtns[i].addEventListener('click',function(){
            Shop.updateUserOrder({
                    id : this.dataset.itemId,
                    image : this.dataset.itemImage,
                    name : this.dataset.itemName,
                    price : this.dataset.itemPrice,
                    quantity : this.dataset.itemQuantity,
                })
            })
        };
    },


    updateUserOrder(item){
    

       const items = JSON.parse(window.localStorage.getItem('items')) || [];
       console.log(items, item);
       if(items.length === 0){
            items.push(item);
       }else{
            let createItem = true; 
            items.forEach((savedItem, index) => {
                if(item.id === savedItem.id){
                    createItem = false;
                    items[index].quantity = parseInt(items[index].quantity) + 1;
                }
                
            })
            if(createItem){
                items.push(item);
            }
        }

       
        window.localStorage.setItem('items', JSON.stringify(items));

    },

}

window.addEventListener('load', Shop.init);

