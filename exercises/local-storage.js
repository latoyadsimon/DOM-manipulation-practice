/**
 * LOCAL STORAGE AND DOM MANIPULATION
 * In this task you will write some functions to let the browser save
 * some of your actions results and retrieve them when the page is reloaded.
 * You will be working with the localStorage.
 * Make sure to read the following exercise-info file/files before you start
 * * 03 LocalStorage.md
 * * 04 EventDelegation.md
 * Local Storage might be shortened to "LS" in the comments beneath.
 * @requirement
 * Event delegation MUST be used
 */

/**
 * @task
 * Implement the 'click' event that solves several tasks by the item click:
 * * If the item is NOT in favorites LS and has white background color
 * * * Changes the color of the box to red
 * * * Add the item's id to the local storage
 * * Else if the box is in favorites LS and has white red color
 * * * Changes the color of the box to white
 * * * Add the item's id to the local storage
 * * Make all the items that are listed in the favorites LS save the red background color when the page is reloaded
 */

/**
 * @hint
 * Here is a plan of how you can structure your code. You can follow it or choose your own way to go
 * * Select the container that holds all the items
 * * Create a function that sets the background to be red for the item with an id listed in favorites LS
 * * Run this function
 * * Create a function that adds an id to favorites LS by id passed as an argument
 * * Create a function that deletes an id from favorites LS by id passed as an argument
 * * Create a callback function that updates the element background color and does the
 * * /~/ action with the item's id depending on if it is in LS or not. The function should
 * * /~/ do that to a specific item that has a specific class value
 * * add the event listener to the container, pass the callback.
 */

// Your code goes here...
const container = document.querySelector(".cardsContainer");
const allItems = container.querySelectorAll(".card");
console.log("allItems: ", allItems);
const favorites = "favorites";
const dataFav = "data-fav";
const root = document.documentElement;
const currentFavorites = localStorage.getItem(favorites);
console.log("currentFavorites: ", currentFavorites);

const initialStorage = {
    items: [],
};

//saving color after loads
if(currentFavorites) {
    for(let item of allItems) {
        if(currentFavorites.includes(item.id)){
            delete item.dataset.fav;
            item.dataset.fav = "true";
            item.classList.add("red");
        }
    }
}

// making it so the second reload doesn't clear everything
if(!localStorage.getItem(favorites)) {
    localStorage.setItem(favorites, "");
}

const addToLocalStorage = (id) => {
    let curValue = localStorage.getItem(favorites);

    if(!curValue.length) {
        curValue += `${id}`;
    }else {
        curValue += `, ${id}`;
    }
    localStorage.setItem(favorites, curValue);
}



//need a way to change box to and from favs
//if the [data-fav] = true, should be in favs
const callbackFn = (e) => {
    const item = e.target;
    console.log(item);
    console.log("item classList: ", item.classList)
    console.log("item classList: ", item.classList.value)
    console.log("does it include card? ", item.classList.value === "card"? true: false);

    if(item.dataset.fav === "false") {
        // added so it doesn't click the full container, just the cards
        if(item.classList.value === "card") {
            delete item.dataset.fav;
            item.dataset.fav = "true";
            item.classList.add("red");
            root.setAttribute(dataFav, "true");
            addToLocalStorage(item.id);
            console.log(item.dataset.fav);
        }
      
    }else{
        delete item.dataset.fav;
        item.dataset.fav = "false";
        item.classList.remove("red");
        root.setAttribute(dataFav, "false");
        console.log(item.dataset.fav);
        let newList = document.querySelectorAll("[data-fav]");
        console.log("this is newList: ", newList);
        let storageArr = "";
        for(let item of newList) {
            if(item.dataset.fav === "true") {
                // storageArr += item.id;
                if(!storageArr.length) {
                    storageArr += `${item.id}`;
                }else {
                    storageArr += `, ${item.id}`;
                }
            }
        }
        localStorage.setItem(favorites, storageArr);
    }
}

container.addEventListener("click", callbackFn);