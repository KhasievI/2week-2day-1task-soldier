let soldier = {
    soldiername: 'Арнольд',
    health: '10',
    gun: {
        gunName: 'MP5',
        cartridges: '30'
    },
    ammunition: '3',
    
    shoot: function(){
        if(this.gun.cartridges <= 0){
            console.log('обойма пуста. Перезаредитесь.');
        }else{
            this.gun.cartridges -= 1;
            console.log('бах-бах.');
        }
    },

    reload: function(){
        if(this.ammunition <= 0){
            console.log('не осталось припасов.');
        }else{
            this.gun.cartridges = 30;
            this.ammunition -= 1;
            console.log('перезарядка...');
        }
    },
    wound: function(){
        if(this.health <= 0){
            console.log('Ты проиграл');
        }else{
            this.health -= 1;
        }
    },
}