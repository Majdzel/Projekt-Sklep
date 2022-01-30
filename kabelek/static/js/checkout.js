const oredring = {
        parseItems: function (){
                items = JSON.parse(window.localStorage.getItem('items')) || [];
                items.forEach((item, index) => {
                        items[index].quantity = parseInt(item.quantity);
                        items[index].price = parseInt(item.price);
                        oredring.sum += item.quantity;
                        oredring.total_price += item.price * item.quantity;
                        
                })
                return items;
        },

        sum : 0,
        total_price : 0,

        computeSum : function (){
                oredring.parseItems();
                document.querySelector('#sum').textContent = oredring.sum;
                document.querySelector('#total_price').textContent = oredring.total_price;

    },
    onSubmite(){
        window.localStorage.clear();

    }, 
    addItemsToForm(){
        const items = oredring.parseItems()
        console.log(items)
        if (items.length !== 0){
                //addItemsToForm 

        }else{
                document.getElementById("butt").setAttribute("disabled","disabled");
        }
    }

}

window.addEventListener('load', ()=>{
        oredring.computeSum();
        oredring.addItemsToForm();
        document.getElementById("butt").addEventListener("click", oredring.onSubmite);
});