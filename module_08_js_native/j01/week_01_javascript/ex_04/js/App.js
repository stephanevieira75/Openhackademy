// Select every links with tabs class
var tabs = document.querySelectorAll('.tabs a');

// Browse tabs elements
for (var i = 0; i < tabs.length; i++){
    // If user click on one tab element
    tabs[i].addEventListener('click', function (e){

        // li and div variable
        var li = this.parentNode
        var div = this.parentNode.parentNode.parentNode

        if(li.classList.contains('active')){
            return false
        }

        div.querySelector('.tabs .active').classList.remove('active');
        
        li.classList.add('active');

        div.querySelector('.tab-content.active').classList.remove('active');
    
        div.querySelector(this.getAttribute('href')).classList.add('active');
    })
}