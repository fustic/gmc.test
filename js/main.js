(function(window, document, undefined){
    var matches;

    (function(doc) {
        matches =
            doc.matchesSelector ||
                doc.webkitMatchesSelector ||
                doc.mozMatchesSelector ||
                doc.oMatchesSelector ||
                doc.msMatchesSelector;
    })(document.documentElement);
  document.addEventListener('click', function(e) {
        var element = e.target;
        if ( matches.call( element, 'ul li, ul li a') ) {
            while (element && element.tagName.toLowerCase() !== "ul"){
                element = element.parentNode;
            }
            if (element) {
                element.classList.toggle("hidden");
            }
        } else if (matches.call( element,'.iMenu') ){
            if (element && element.nextElementSibling) {
                element.nextElementSibling.classList.toggle("hidden");
            }
        } else {
            document.querySelector("nav ul").classList.add("hidden");
        }
    }, false);

})(window, document)
