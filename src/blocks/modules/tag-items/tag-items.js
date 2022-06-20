let tag_item_all = document.querySelector('.tag-item_all');

if (tag_item_all)
{
    tag_item_all.addEventListener('click', function(){

        document.querySelector('.tag-items').classList.toggle('tag-items_close');
    });
}