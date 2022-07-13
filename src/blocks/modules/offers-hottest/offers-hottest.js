import { Carousel } from "@fancyapps/ui";

if (document.querySelector(".offers-hottest__carousel"))
{
    new Carousel(document.querySelector(".offers-hottest__carousel"), {
        Dots: false,
        Navigation: false,
        slidesPerPage : 'auto',
        center : false
    });
}