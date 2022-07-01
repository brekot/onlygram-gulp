document.querySelectorAll('.form-one__input').forEach(function(e){

    e.addEventListener('input', function(){

        if (this.value.length > 0) this.classList.add('form-one__input_set');
        else this.classList.remove('form-one__input_set');
    })
});

document.querySelectorAll('.form-one__icon_pass').forEach(e => {

    e.addEventListener('mousedown', function () {

        this.parentNode.querySelector('input').type = 'text';
    });

    e.addEventListener('mouseup', function () {

        this.parentNode.querySelector('input').type = 'password';
    });
});