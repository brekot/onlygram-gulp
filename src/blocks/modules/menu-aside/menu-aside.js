/* // Выделение активного пункта
const links = document.querySelectorAll('.menu-aside__link');
const sections = document.querySelectorAll('.add-ad-form');

function changeLinkState()
{
	let index = sections.length;

	while (--index && window.scrollY < sections[index].offsetTop - 20) {}

	links.forEach((link) => link.classList.remove('menu-aside__link_active'));

	links[index].classList.add('menu-aside__link_active');
}

changeLinkState();

window.addEventListener('scroll', changeLinkState);

// ???
function index(el)
{
	if (!el) return -1;

	var i = 0;

	do {
		i++;
	}
	while (el = el.previousElementSibling);

	return i;
}

// Finds y value of given object
function findPos(obj)
{
    var curtop = 0;

    if (obj.offsetParent)
	{
        do {
            curtop += obj.offsetTop;
        }
		while (obj = obj.offsetParent);
    
		return [curtop];
    }
}

// Прокрутка к элменету
links.forEach(function(e){

	e.addEventListener('click', function(e){

		var elem = e.target;

		window.scrollTo({
			top: findPos(sections[index(elem) - 1]) - 20,
			left: 0,
			behavior: 'smooth'
		});
	});
}); */