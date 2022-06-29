document.querySelectorAll('.news-wall-item__open').forEach(function(e){

    e.addEventListener('click', function(){

        this.closest('.news-wall-item').classList.toggle('news-wall-item_close');
    });
});