/**
 * searchFilter.js
 * 
 * Functionality:
 *  As the user types into the search input, only photos that match the caption text appear.
 *  Case insensitivity has been added, searches will ignore letter case. 
 * 
 * Installation: 
 *  Add searchFilter.js into your js folder
 *  Add this line into your index.html <script src="js/searchFilter.js"></script>
 *   
 * Utilization:
 *  Ensure that your search input is setup like this in your index.html:
 *   <input type="search" name="search" id="search" placeholder="Search">
 *  Ensure that your image captions are added to your anchor elements via the data-caption attribute:
 *   <a href="photos/my-image.jpg" data-caption="A picture of me coding JavaScript on my computer">
 *  Add this into your app.js file:
 *   const search = new Filter('search', 'data-caption');
 */


/*
    I found this useful page: https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event
*/

const input = document.querySelector("input");
input.addEventListener("input", updateValue);
let caption = '';

function updateValue(e) {
    let query = e.target.value.toLowerCase();

    for (let i = 0; i <= 12; i++) {
        caption = document.links[i].getAttribute("data-caption").toLowerCase();
        let word = caption.match(query);


        console.log(word);
        console.log(caption);
        console.log(query);

        if (word == null) {
            document.links[i].style.display = "none";
        }
        else {
            document.links[i].style.display = "inherit";
        }
    }
}