document.querySelectorAll(a[href^="#"]).forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttributr('href')).scrollIntoView({
            behavior: 'smooth'
        });
    }
);


});