// Your code goes here
document.addEventListener("DOMContentLoaded", function(){
    console.log("The DOM has loaded");
    //targeting the specific paragraph with the id "text"
    const paragraph = document.getElementById("text")
    //the paragraph with text id is now changed to the new content or a new paragragh
    paragraph.textContent = "This is really cool!"
    //prints it out on the console to check if the paragraph contnt has indeed changed
    console.log(paragraph);
});
//this console is important as it is consoled before the DOM has been loaded
console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");




