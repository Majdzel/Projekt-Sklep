let updateBtns = document.getElementsByClassName("update-cart")

for(let i =0 ; i<updateBtns.length; i++){
    updateBtns[i].addEventListener('click',function(){
        let itemsId = this.dataset.item
        let action = this.dataset.action
        console.log('itemsId:',itemsId,'action',action)

        console.log('USER',user)
        if(user === 'AnonymousUser'){
            console.log('Nie zalogowany')
        }else{
            console.log('Zalogowany i wysła dane')
        }
    })
}
function updateUserOrder(itemsId,action){
    console.log('Zalogowany i wysyla')

    let url = '/update_item/'

    fetch(url, {
        method:'POST',
        headers:{
            'Content-Type':'appgit lication/json'
        },
        body:JSON.stringify({"itemsId":itemsId,'action':action})
    })

    .then((response) => {
        console.log('Zwraca')
        return response.json()
    })

    .then((data) => {
        console.log('data',data)
        return response.json()
    })
}