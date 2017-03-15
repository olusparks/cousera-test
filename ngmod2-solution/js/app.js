(function(){
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('buyController', buyController)
    .controller('boughtController', boughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    buyController.$inject = ['ShoppingListCheckOffService'];
    function buyController(ShoppingListCheckOffService){
        var buyCtrl = this;

        buyCtrl.itemName = "";
        buyCtrl.itemQuantity = "";
        
        buyCtrl.addItem = function(){
            ShoppingListCheckOffService.addItem(buyCtrl.itemName,  buyCtrl.itemQuantity);
        }
        
        
        buyCtrl.Items = ShoppingListCheckOffService.getItems();

        //remove item
        buyCtrl.removeItem = function(itemIndex, buyItem){
            ShoppingListCheckOffService.removeItem(itemIndex, buyItem);
        }              
    }


    boughtController.$inject = ['ShoppingListCheckOffService'];
    function boughtController(ShoppingListCheckOffService){
        var boughtCtrl = this;

        boughtCtrl.itemName = "";
        boughtCtrl.itemQuantity = "";

        //Get bought items
        boughtCtrl.Items2 = ShoppingListCheckOffService.getItems2();
    }



//Service
function ShoppingListCheckOffService(){
    var service = this;

    var buyitems = [];
    var boughtItems = [];

    //add item to buy function
    service.addItem = function(itemName, itemQuantity){
        var item = {
            name: itemName,
            quantity: itemQuantity
        };
        buyitems.push(item);
    };

      
    //get all items
    service.getItems = function(){
        return buyitems;
    };

    //Remove items
    service.removeItem = function(itemIndex, buyItem){
        buyitems.splice(itemIndex, 1);

        var boughtObj = {
            name: buyItem.name,
            quantity: buyItem.quantity
        };
       // console.log(buyItem);
        boughtItems.push(boughtObj);
    };

    //Get bought Items
    service.getItems2 = function(){
        return boughtItems;
    };
}
})();