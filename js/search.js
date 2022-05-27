var search_form = document.getElementById('search_form');

search_form.addEventListener('submit',function(event){
    event.preventDefault();
    var search_item = document.getElementById('search_item').value;
    
    if((search_item == 'Process')||(search_item == 'Techniques')) {
        location.href="/service.html";
    }else if(search_item == 'Our team') {
        location.href="/about.html";
    }else if (search_item == 'Contact') {
        location.href="/contact.html";
    }else {
        alert("Please enter a valid word, you can use the following words:   Process, Techniques, Our team or Contact");
    }
})