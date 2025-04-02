// FAQ Accordion
 document.addEventListener('DOMContentLoaded',() =>{
const faqContainer =document.querySelector('.faq-content');

faqContainer.addEventsListener('click' ,(e) =>{
    const groupHeader=e.target.closest('.faq-group-header');
    if(!groupHeader) return;


    const group =groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-group-body');
    const icon = groupHeader.querySelector('i');

    //Toggle icon
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');

    //Toggle visibility of body
    groupBody.classList.toggle 
});
 });
