const App = {

    init() {
        let updateBtns = document.getElementsByClassName("update-cart")

        for(let i =0 ; i<updateBtns.length; i++){
            updateBtns[i].addEventListener('click',function() {
//                let item = JSON.parse(this.dataset.item);
//                let action = this.dataset.action
                console.log(this.dataset.item);
                App.updateUserOrder(item);


//                console.log('USER',user)
//                if(user === 'AnonymousUser'){
//                    console.log('Nie zalogowany')
//                }else{
//                    console.log('Zalogowany i wysła dane')
//                }
            });

        }
    },

    updateUserOrder(item){
        let items = window.localStorage.getItem('shoppingCart') || [];
        items = JSON.parse(items);
        items.push(item);
        window.localStorage.setItem('shoppingCart', JSON.stringify(items));
    },

//    <div class="row_cart">
//                <div style="flex:2"></div>
//                <div style="flex:2"><b>Przedmiot:</b></div>
//                <div style="flex:1"><b>Cena:</b></div>
//                <div style="flex:1"><b>Ilość:</b></div>
//                <div style="flex:1"><b>Całkowity koszt:</b></div>
//            </div>

    createRow() {
           const row = document.createElement('div');
           row.classList.add('row_cart');


    },

    createCol(index) {
        const flexGrow = 1 < index ? 1 : 2;
        return `
          <div style="flex:${flexGrow};">
          </div>
        `;
    }

}

window.addEventListener('load', () => {
App.init();
});

