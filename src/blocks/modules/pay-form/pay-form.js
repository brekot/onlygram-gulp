var cc = document.querySelector('.pay-form-card__input_card'),
    events  = ['input', 'change', 'blur', 'keyup'];

if (cc)
{
    for (var i in events)
    {
        cc.addEventListener(events[i], formatCardCode, false);
    }
}

function formatCardCode()
{
    var cardCode = this.value.replace(/[^\d]/g, '').substring(0,16);
    cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
    this.value = cardCode;
}

document.querySelectorAll('.pay-form-tabs__tab').forEach(function(e){

    e.addEventListener('click', function(){

        document.querySelector('.pay-form-tabs__tab_active').classList.remove('pay-form-tabs__tab_active');

        document.querySelector('.pay-form-tabs-block__item_active').classList.remove('pay-form-tabs-block__item_active');

        this.classList.add('pay-form-tabs__tab_active');

        document.getElementById(this.dataset.id).classList.add('pay-form-tabs-block__item_active');
    });
});