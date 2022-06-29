let account_short_more = document.querySelector('.account-short__more');

if (account_short_more)
{
    account_short_more.addEventListener('click', function(){

        document.querySelector('.account-short__items').classList.toggle('account-short__items_open');
    });
}