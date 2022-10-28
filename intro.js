let intro = document.querySelector('.Intro');
let logo = document.querySelector('.LogoIntro');
let logoSpan = document.querySelectorAll('.IntroPartes');
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
       logoSpan.forEach((span, index) => {
            setTimeout(() => {
               span.classList.add('active');
            }, (index + 1) * 100);
       });

       setTimeout(() => {
          logoSpan.forEach((span, index) => {
            setTimeout(() => {
               span.classList.remove('active');
               span.classList.add('fade'); 
            }, (span + 1) * 80);
          });
       }, 3300);

       setTimeout(() => {
          intro.style.top  = '-100vh';
       }, 2801); //1

    });

});
(function() {
   var supportsPassive = eventListenerOptionsSupported();  
 
   if (supportsPassive) {
     var addEvent = EventTarget.prototype.addEventListener;
     overwriteAddEvent(addEvent);
   }
 
   function overwriteAddEvent(superMethod) {
     var defaultOptions = {
       passive: true,
       capture: false
     };
 
     EventTarget.prototype.addEventListener = function(type, listener, options) {
       var usesListenerOptions = typeof options === 'object';
       var useCapture = usesListenerOptions ? options.capture : options;
 
       options = usesListenerOptions ? options : {};
       options.passive = options.passive !== undefined ? options.passive : defaultOptions.passive;
       options.capture = useCapture !== undefined ? useCapture : defaultOptions.capture;
 
       superMethod.call(this, type, listener, options);
     };
   }
 
   function eventListenerOptionsSupported() {
     var supported = false;
     try {
       var opts = Object.defineProperty({}, 'passive', {
         get: function() {
           supported = true;
         }
       });
       window.addEventListener("test", null, opts);
     } catch (e) {}
 
     return supported;
   }
 })();