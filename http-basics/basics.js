// updateDocument
function updateDocument(mode){
    if( mode == null ) { 
        var mode = false;
    }
    // get inputs from document
    var inputs = document.getElementsByTagName('input');
    // iterate through elements of inputs array
    for( x=0; x < inputs.length; x++ ) {
        // get element from current position in inputs array
        var element = inputs[x];
        // get parent element (in this case, <li>)
        var parent = element.parentNode;
        // save or load depending on mode
        if( mode == "load" ) {
            if( window.localStorage[element.name] == "true" )    {
                element.checked = window.localStorage[element.name];
            }
        }
        else {
            window.localStorage[element.name] = element.checked;
        }
        // if checked, mark it as complete with className
        if( element.checked ) {
            parent.className = "complete";
        }
        // if not, mark it as incomplete
        else {
            parent.className = "incomplete";
        }
    }
    return inputs;
}


// shuffle terms
function shuffleTerms() {
    // get children (li) of terms
    var terms = document.getElementById('terms').children;
    // define new terms array
    var new_array = [];
    // get length of terms (for decrementing while loop)
    var count = terms.length;  
    // add old term to new array at a random position
    function addItem(x) {
        // get random position within terms length
        var new_pos = Math.floor(Math.random()*terms.length);
        // if there is an empty space at the random position fill it
        if(!(new_array[new_pos])) {
            count -=1;
            new_array[new_pos] = terms[x];
        }
        // otherwise try again
        else {
            addItem(x);
        }
    }
    // run loop
    while(count >= 0) { addItem(count); }
    // create new ul element
    var new_terms = document.createElement('ul');
    // add elements from new_array to new_terms
    for(x=0;x<new_array.length;x++) {
        var element = document.createElement('li');
        element.innerHTML = new_array[x].innerHTML;
        new_terms.appendChild(element);
    }
    // Replace terms with newly shuffled version
    document.getElementById('terms').innerHTML = new_terms.innerHTML;
}