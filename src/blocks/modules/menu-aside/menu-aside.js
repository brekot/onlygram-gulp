// Выделение активного пункта
const links = document.querySelectorAll('.menu-aside__link');
const sections = document.querySelectorAll('.add-ad-form');

if (links && sections)
{
    function changeLinkState()
    {
        let index = sections.length;

        while (--index && window.scrollY < sections[index].offsetTop - 20) {}

        if (window.scrollY + window.innerHeight > document.body.scrollHeight - 20) index = sections.length - 1;

        links.forEach((link) => link.classList.remove('menu-aside__link_active'));

        links[index].classList.add('menu-aside__link_active');
    }

    changeLinkState();

    window.addEventListener('scroll', changeLinkState);

    // Прокрутка к элменету
    links.forEach(function(e){

        e.addEventListener('click', function(e){

            window.scrollTo({
                top: sections[[...links].indexOf(e.target)].offsetTop - 20,
                left: 0,
                behavior: 'smooth'
            });
        });
    });
}