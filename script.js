// Get the tab links and tab contents elements
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

// Function to handle tab switching
function opentab_about(tabname) {
    // Hide all tab contents
    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }

    // Deactivate all tab links
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }

    // Activate the selected tab link
    event.currentTarget.classList.add("active-link");

    // Show the corresponding tab content
    document.getElementById(tabname).classList.add("active-tab");
}

// Attach click event handlers to the tab links
for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].addEventListener("click", function() {
        var tabname = this.dataset.tab;
        opentab_about(tabname);
    });
}


