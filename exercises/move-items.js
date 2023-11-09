/**
 * SORTING NODES WITHIN A CONTAINER
 * Please, make sure to read the following files in the exercises-info folder before you start
 * * 01 SelectNodes.md
*/

/**
 * @task
 * Select all elements that have class of "item" as a NodeList.
 * Store them in the allItems variable
 * Example: const allItems = <Your code>;
 */

// Your code goes here...
const allItems = document.querySelectorAll(".item");
console.log("this is all items: ", allItems);


/**
 * @task
 * Select the main container by the id of "main"
 * Store it in the main constant
 * Example: const main = <Your code>
 * */

// Your code goes here

const main = document.getElementById("main");
console.log("this is main: ", main);

/**
 * @task
 * Select the favorites container by id of "favs"
 * Store it in the favs constant
 * Example: const favs = <Your code>;
 */

// Your code goes here
const favs = document.getElementById("favs");
console.log("this is favs: ", favs);


/**
 * @task
 * Create the updateCollections(id, direction) function that follows the list of requirements:
 * Takes an argument of the item id (number)
 * Take an argument of direction as a string value of 'toMain' or 'toFavs'
 * Moves the element from the current parent to the new parent (from main to favs or vice versa)
 * Changes the icon of the element: fa-heart-circle-plus for main, fa-heart-crack for favs items.
 */

// Your code goes here


const heartCircle = "fa-heart-circle-plus";
const heartCrack = "fa-heart-crack";


const updateCollections = (id, direction) => {

console.log("this is the id we got: ", id);
console.log("this is direction up here, ", direction);
let elm = document.getElementById(id);
console.log("this is the full element based on id: ", id, elm);

    if(direction === "toFavs") {
        //toFavs
        favs.appendChild(elm);
        parentElm = elm.parentElement;
       
       let iconToChange = elm.querySelector(".fa-solid.fa-heart-circle-plus");
        // let iconToChange = document.querySelector(".fa-solid.fa-heart-circle-plus");
        console.log("iconToChange: ", iconToChange);
        iconToChange.classList.remove(heartCircle);
        iconToChange.classList.add(heartCrack);
        
        console.log("parentElm id switched: ", parentElm.id)
    }else if(direction === "toMain"){
        //toMain
        main.appendChild(elm);
        parentElm = elm.parentElement;
        // childElm = elm.children;
        let iconToChange = elm.querySelector(".fa-solid.fa-heart-crack");
        console.log("iconToChange: ", iconToChange)
        iconToChange.classList.remove(heartCrack);
        iconToChange.classList.add(heartCircle);
        
        console.log("parentElm id switched: ", parentElm.id)
      
    }
    
}


/**
 * @task
 * Iterate through the every item in allItems NodeList and apply the
 * addEventListener click event to each item.
 * The item click must execute/call the following:
 * * Get the current item's parent id ('main' or 'favs')
 * * Get the current item id (a number value)
 * * Set the direction constant to be equal to 'toFavs' or 'toMain', based off the current location
 * * The direction means the collection to move the item into, when the item is clicked
 * * If the correct item's location is the parent of id 'main' -> the direction is 'toFavs'
 * * If the correct item's location is the parent of id 'favs' -> the direction is 'toMain'
 * * Make the updateCollections function call, assign the item Id and the direction defined above
 */

// Your code goes here...


for(let elm of allItems) {
    elm.addEventListener("click", function () {
        let parentElmID = elm.parentElement.id;
        console.log(parentElmID);
        let elmID = elm.id;
        console.log(elmID);
        let direction = "";
        if(parentElmID === "main") {
            direction = "toFavs";
            console.log(direction);
            // return direction;
        }else{
            direction = "toMain";
            console.log(direction);
            // return direction;
        }
        updateCollections(elm.id, direction);
    })

}