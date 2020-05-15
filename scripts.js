
let costsZero = ["0", "0", "0"];
let costsArray = localStorage.getItem("costs") ? JSON.parse(localStorage.getItem("costs")) : costsZero;



let costItemsList = [
    //costItem0 = {
    //    date: "2020.00.00. 00:00 -",
    //    cost: "0 Ft",
    //    category: "./pictures/food.png",
    //    friend: "Imi"},
    ];
let costItemsArray = localStorage.getItem("costItemsList") ? JSON.parse(localStorage.getItem("costItemsList")) : costItemsList;

console.log(costItemsArray);


var fullDate = new Date(); //current time and date
let dateNewCost = fullDate.getFullYear() + "." + (fullDate.getMonth()+1) + "." + fullDate.getDate() + " " + fullDate.getHours() + ":" + fullDate.getMinutes();
$("#dateNewCost").text(dateNewCost); //writing out under the titel of newCost.html

let urlNewCostCategory;
let friendNewCost;

let addNewCost = () => {
    let costItem = {
        date: dateNewCost + " -",
        cost: $("input").val() + " Ft",
        category: urlNewCostCategory,
        friend: friendNewCost
    };
    costItemsArray.push(costItem);
    console.log(costItemsList);


    window.localStorage.setItem("costItemsList", JSON.stringify(costItemsArray));


    if(friendNewCost === "Imi"){
        
        if(costsArray[0] === "0") { //if its zero, its a NaN value, it would return falsy value
            costsArray[0] = parseInt($("input").val());
        } else {
            costsArray[0] = parseInt(costsArray[0]) + parseInt($("input").val()); //adding cost to the person's summary
        }
    }
    if(friendNewCost === "Iván") {

        if(costsArray[1] === "0") { //if its zero, its a NaN value, it would return falsy value
            costsArray[1] = parseInt($("input").val());
        } else {
            costsArray[1] = parseInt(costsArray[1]) + parseInt($("input").val()); //adding cost to the person's summary
        }
        
    }
    if(friendNewCost === "Ákos") {

        if(costsArray[2] === "0") { //if its zero, its a NaN value, it would return falsy value
            costsArray[2] = parseInt($("input").val());
        } else {
            costsArray[2] = parseInt(costsArray[2]) + parseInt($("input").val()); //adding cost to the person's summary
        }
    }
    window.localStorage.setItem("costs", JSON.stringify(costsArray));

    dateNewCost = "#";
    urlNewCostCategory = "#";
    friendNewCost = "#";

    window.location = "./index.html";
    
};


let loadCostItems = () => {
    costItemsArray.forEach(element => {
        $("#costItemContainer").prepend(`<div class="costItem">${element.date} ${element.friend}  ${element.cost}</div>`);
        $("#costItemContainer .costItem:first-child").append(`<img src=${element.category} class="costItemCategoryImage">`)
    });
    console.log(costItemsArray);
};

let clearALL = () => {

    window.localStorage.clear();

    costItemsArray.forEach( element => {
        console.log(element);
        costItemsArray.pop();        
    });
    
    $("#costItemContainer .costItem").remove();

    clearCosts();
};

let loadCosts = () => {
    $("#friendCostImi").text(costsArray[0] + " Ft");
    $("#friendCostIvan").text(costsArray[1] + " Ft");
    $("#friendCostAkos").text(costsArray[2] + " Ft");
};

let clearCosts = () => {
    costsArray[0] = 0;
    costsArray[1] = 0;
    costsArray[2] = 0;
    loadCosts();
};

$("#categoryTravelling").click(() => {
    urlNewCostCategory = "./pictures/travelling.png";
    $("#categoryTravelling").css("background-color", "khaki");
    $("#categoryFood").css("background-color", "white");
    $("#categoryGift").css("background-color", "white");
    $("#categoryEntertainment").css("background-color", "white");
});

$("#categoryFood").click(() => {
    urlNewCostCategory = "./pictures/food.png";
    $("#categoryTravelling").css("background-color", "white");
    $("#categoryFood").css("background-color", "khaki");
    $("#categoryGift").css("background-color", "white");
    $("#categoryEntertainment").css("background-color", "white");
});

$("#categoryGift").click(() => {
    urlNewCostCategory = "./pictures/gift.png";
    $("#categoryTravelling").css("background-color", "white");
    $("#categoryFood").css("background-color", "white");
    $("#categoryGift").css("background-color", "khaki");
    $("#categoryEntertainment").css("background-color", "white");
});

$("#categoryEntertainment").click(() => {
    urlNewCostCategory = "./pictures/entertainment.png";
    $("#categoryTravelling").css("background-color", "white");
    $("#categoryFood").css("background-color", "white");
    $("#categoryGift").css("background-color", "white");
    $("#categoryEntertainment").css("background-color", "khaki");
});


$("#categoryItemIvan").click(() => {
    friendNewCost = "Iván";
    $("#categoryItemIvan").css("background-color", "khaki");
    addNewCost();
});

$("#categoryItemImi").click(() => {
    friendNewCost = "Imi";
    $("#categoryItemImi").css("background-color", "khaki");
    addNewCost();
});

$("#categoryItemAkos").click(() => {
    friendNewCost = "Ákos";
    $("#categoryItemAkos").css("background-color", "khaki");
    addNewCost();
});

// Credits: http://blog.vishalon.net/index.php/javascript-getting-and-setting-caret-position-in-textarea/
function setCaretPosition(ctrl, pos) {
    // Modern browsers
    if (ctrl.setSelectionRange) {
      ctrl.focus();
      ctrl.setSelectionRange(pos, pos);
    
    // IE8 and below
    } else if (ctrl.createTextRange) {
      var range = ctrl.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  }
  
// Set the cursor position of the "#test-input" element to the end when the page loads
var input = document.getElementById('costNewCost');
console.log("location: " + window.location);

if (window.location.toString().endsWith("newCost.html")){
    setCaretPosition(input, 0);
};


$("#menuOptions").click(() => {
    clearALL();
});

$("#menuPlus").click(() => {
    window.location = "./newCost.html";
    
});

loadCosts();
loadCostItems();
//loadFriendsCosts();



