var nav = document.querySelector('.mynav2'); // Identify target

window.addEventListener('scroll', function() { 
    if (window.scrollY > 1) { 
        nav.style.backgroundColor = 'rgb(67, 23, 129)'; 
    	document.querySelector('.singleBTN').classList.remove('singlePageLink2');
    } else {
        nav.style.backgroundColor = 'transparent';
		document.querySelector('.singleBTN').classList.add('singlePageLink2');
    }
});
window.onbeforeunload = function () {
 window.scrollTo(0, 0);
}