
let iceButtomTranslateValue = 0;
let iceTopTranslateValue = 0;
let bubbleTranslateValue = 0;
const testiNominals = [{
    'comment': `I will recommend you to my colleagues. Cola is awesome! I couldn't have asked for more than this.I am completely blown away.`,
    'name': 'Rabindra Karki',
    'designation': 'CEO, Mahindra Pvt. Ltd.'
},
{
    'comment': `Awesome Cola.`,
    'name': 'Rajesh Dai',
    'designation': 'Actor'
},
{
    'comment': `I couldn't have asked for more than this.I am completely blown away.`,
    'name': 'John Doe',
    'designation': 'Manager, World Bank Pvt. Ltd.'
}]

// Detect request animation frame
var scroll = window.requestAnimationFrame ||
    // IE Fallback
    function (callback) { window.setTimeout(callback, 1000 / 60) };
var elementsToShow = [];
var timelineView = [];
function loop() {

    Array.prototype.forEach.call(elementsToShow, (element) => {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            // element.classList.remove('is-visible');
            // iceTranslateValue = 0;
            // (element.id === 'ice-cube-top') ? iceTopTranslateValue = 0 : null;
        }
    });

    if (timelineView) {
        Array.prototype.forEach.call(timelineView, (element) => {
            if (isElementInViewport(element)) {

                element.classList.add('show');
            }
        })
    }

    scroll(loop);
}


elementsToShow = document.querySelectorAll('.show-on-scroll');
timelineView = document.querySelectorAll('.timeline-hide');


// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0
            && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}

function createElement(id, parentId, element, value = '', className = '') {
    var node = document.createElement(element);
    var parentElm = document.getElementById(parentId);

    node.setAttribute('id', id);
    node.setAttribute('class', className);

    if (value) {
        var textnode = document.createTextNode(value);
        node.appendChild(textnode);
    }
    if (parentElm) {
        parentElm.appendChild(node);
    }

    return node;
}


window.onscroll = function (e) {
    // print "false" if direction is down and "true" if up
    const header = document.querySelector('Header.sticky');
    const logoDiv = document.querySelector('header.sticky div:first-child img');
    logoDiv.style.margin = '10px 40px';
    logoDiv.style.height = '58px';

    const scrollDirection = this.oldScroll > this.scrollY;

    if (this.scrollY >= 610 && scrollDirection) {

        header.style.display = 'flex';

    } else if (this.scrollY < 610) {
        header.style.display = 'none';

    }
    else if (this.scrollY >= 610 && !scrollDirection) {

        header.style.display = 'flex';
        header.style.display = 'none';
    }
    // console.log(this.oldScroll > this.scrollY);

    const titleBarIceCube = document.querySelector("#title-container .ice-cube-top");

    const iceCube = document.querySelector("#ice-bg-animation .ice-cube-top.is-visible");
    const iceCubeBottom = document.querySelector("#ice-bg-animation .ice-cube-bottom.is-visible");
    const bubbleRight = document.querySelector("#bubble-bg-animation .bubble-right.is-visible");
    const bubbleLeft = document.querySelector("#bubble-bg-animation .bubble-left.is-visible");

    if (titleBarIceCube) {
        if (scrollDirection) {
            iceTopTranslateValue -= 1;
        } else {
            iceTopTranslateValue += 1;
        }

        titleBarIceCube.style.transform = `translate(${iceTopTranslateValue}px,${iceTopTranslateValue}px)`;
    }
    if (iceCube) {
        if (scrollDirection) {
            iceTopTranslateValue -= 1;
        } else {
            iceTopTranslateValue += 1;
        }

        iceCube.style.transform = `translate(${iceTopTranslateValue}px,${iceTopTranslateValue}px)`;
    }
    if (iceCubeBottom) {

        if (scrollDirection) {
            iceButtomTranslateValue += 1;
        }
        else {
            iceButtomTranslateValue -= 1;

        }
        iceCubeBottom.style.transform = `translate(${iceButtomTranslateValue}px,${iceButtomTranslateValue}px)`;
    }

    if (scrollDirection) {
        bubbleTranslateValue += 1;
    }
    else {
        bubbleTranslateValue -= 1;

    }

    if (bubbleRight) {
        bubbleRight.style.transform = `translate(0,${bubbleTranslateValue}px)`;
    }
    if (bubbleLeft) {
        bubbleLeft.style.transform = `translate(0,${bubbleTranslateValue}px)`;
    }
    this.oldScroll = this.scrollY;
}


window.onload = () => {
    console.log('page loaded ');
    this.iceTopTranslateValue = 0;
    this.iceButtomTranslateValue = 0;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmxldCBpY2VCdXR0b21UcmFuc2xhdGVWYWx1ZSA9IDA7XHJcbmxldCBpY2VUb3BUcmFuc2xhdGVWYWx1ZSA9IDA7XHJcbmxldCBidWJibGVUcmFuc2xhdGVWYWx1ZSA9IDA7XHJcbmNvbnN0IHRlc3RpTm9taW5hbHMgPSBbe1xyXG4gICAgJ2NvbW1lbnQnOiBgSSB3aWxsIHJlY29tbWVuZCB5b3UgdG8gbXkgY29sbGVhZ3Vlcy4gQ29sYSBpcyBhd2Vzb21lISBJIGNvdWxkbid0IGhhdmUgYXNrZWQgZm9yIG1vcmUgdGhhbiB0aGlzLkkgYW0gY29tcGxldGVseSBibG93biBhd2F5LmAsXHJcbiAgICAnbmFtZSc6ICdSYWJpbmRyYSBLYXJraScsXHJcbiAgICAnZGVzaWduYXRpb24nOiAnQ0VPLCBNYWhpbmRyYSBQdnQuIEx0ZC4nXHJcbn0sXHJcbntcclxuICAgICdjb21tZW50JzogYEF3ZXNvbWUgQ29sYS5gLFxyXG4gICAgJ25hbWUnOiAnUmFqZXNoIERhaScsXHJcbiAgICAnZGVzaWduYXRpb24nOiAnQWN0b3InXHJcbn0sXHJcbntcclxuICAgICdjb21tZW50JzogYEkgY291bGRuJ3QgaGF2ZSBhc2tlZCBmb3IgbW9yZSB0aGFuIHRoaXMuSSBhbSBjb21wbGV0ZWx5IGJsb3duIGF3YXkuYCxcclxuICAgICduYW1lJzogJ0pvaG4gRG9lJyxcclxuICAgICdkZXNpZ25hdGlvbic6ICdNYW5hZ2VyLCBXb3JsZCBCYW5rIFB2dC4gTHRkLidcclxufV1cclxuXHJcbi8vIERldGVjdCByZXF1ZXN0IGFuaW1hdGlvbiBmcmFtZVxyXG52YXIgc2Nyb2xsID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgLy8gSUUgRmFsbGJhY2tcclxuICAgIGZ1bmN0aW9uIChjYWxsYmFjaykgeyB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKSB9O1xyXG52YXIgZWxlbWVudHNUb1Nob3cgPSBbXTtcclxudmFyIHRpbWVsaW5lVmlldyA9IFtdO1xyXG5mdW5jdGlvbiBsb29wKCkge1xyXG5cclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZWxlbWVudHNUb1Nob3csIChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGlzRWxlbWVudEluVmlld3BvcnQoZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy12aXNpYmxlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy12aXNpYmxlJyk7XHJcbiAgICAgICAgICAgIC8vIGljZVRyYW5zbGF0ZVZhbHVlID0gMDtcclxuICAgICAgICAgICAgLy8gKGVsZW1lbnQuaWQgPT09ICdpY2UtY3ViZS10b3AnKSA/IGljZVRvcFRyYW5zbGF0ZVZhbHVlID0gMCA6IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRpbWVsaW5lVmlldykge1xyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodGltZWxpbmVWaWV3LCAoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNFbGVtZW50SW5WaWV3cG9ydChlbGVtZW50KSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGwobG9vcCk7XHJcbn1cclxuXHJcblxyXG5lbGVtZW50c1RvU2hvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaG93LW9uLXNjcm9sbCcpO1xyXG50aW1lbGluZVZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGltZWxpbmUtaGlkZScpO1xyXG5cclxuXHJcbi8vIENhbGwgdGhlIGxvb3AgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbmxvb3AoKTtcclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiBmcm9tOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTU3NDMzLzI3NDgyNlxyXG5mdW5jdGlvbiBpc0VsZW1lbnRJblZpZXdwb3J0KGVsKSB7XHJcbiAgICAvLyBzcGVjaWFsIGJvbnVzIGZvciB0aG9zZSB1c2luZyBqUXVlcnlcclxuICAgIGlmICh0eXBlb2YgalF1ZXJ5ID09PSBcImZ1bmN0aW9uXCIgJiYgZWwgaW5zdGFuY2VvZiBqUXVlcnkpIHtcclxuICAgICAgICBlbCA9IGVsWzBdO1xyXG4gICAgfVxyXG4gICAgdmFyIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgKHJlY3QudG9wIDw9IDBcclxuICAgICAgICAgICAgJiYgcmVjdC5ib3R0b20gPj0gMClcclxuICAgICAgICB8fFxyXG4gICAgICAgIChyZWN0LmJvdHRvbSA+PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmXHJcbiAgICAgICAgICAgIHJlY3QudG9wIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkpXHJcbiAgICAgICAgfHxcclxuICAgICAgICAocmVjdC50b3AgPj0gMCAmJlxyXG4gICAgICAgICAgICByZWN0LmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpKVxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChpZCwgcGFyZW50SWQsIGVsZW1lbnQsIHZhbHVlID0gJycsIGNsYXNzTmFtZSA9ICcnKSB7XHJcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICB2YXIgcGFyZW50RWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50SWQpO1xyXG5cclxuICAgIG5vZGUuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcclxuICAgIG5vZGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNsYXNzTmFtZSk7XHJcblxyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHRleHRub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpO1xyXG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQodGV4dG5vZGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhcmVudEVsbSkge1xyXG4gICAgICAgIHBhcmVudEVsbS5hcHBlbmRDaGlsZChub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbm9kZTtcclxufVxyXG5cclxuXHJcbndpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvLyBwcmludCBcImZhbHNlXCIgaWYgZGlyZWN0aW9uIGlzIGRvd24gYW5kIFwidHJ1ZVwiIGlmIHVwXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdIZWFkZXIuc3RpY2t5Jyk7XHJcbiAgICBjb25zdCBsb2dvRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyLnN0aWNreSBkaXY6Zmlyc3QtY2hpbGQgaW1nJyk7XHJcbiAgICBsb2dvRGl2LnN0eWxlLm1hcmdpbiA9ICcxMHB4IDQwcHgnO1xyXG4gICAgbG9nb0Rpdi5zdHlsZS5oZWlnaHQgPSAnNThweCc7XHJcblxyXG4gICAgY29uc3Qgc2Nyb2xsRGlyZWN0aW9uID0gdGhpcy5vbGRTY3JvbGwgPiB0aGlzLnNjcm9sbFk7XHJcblxyXG4gICAgaWYgKHRoaXMuc2Nyb2xsWSA+PSA2MTAgJiYgc2Nyb2xsRGlyZWN0aW9uKSB7XHJcblxyXG4gICAgICAgIGhlYWRlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG5cclxuICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGxZIDwgNjEwKSB7XHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5zY3JvbGxZID49IDYxMCAmJiAhc2Nyb2xsRGlyZWN0aW9uKSB7XHJcblxyXG4gICAgICAgIGhlYWRlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIGhlYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5vbGRTY3JvbGwgPiB0aGlzLnNjcm9sbFkpO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlQmFySWNlQ3ViZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGUtY29udGFpbmVyIC5pY2UtY3ViZS10b3BcIik7XHJcblxyXG4gICAgY29uc3QgaWNlQ3ViZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaWNlLWJnLWFuaW1hdGlvbiAuaWNlLWN1YmUtdG9wLmlzLXZpc2libGVcIik7XHJcbiAgICBjb25zdCBpY2VDdWJlQm90dG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpY2UtYmctYW5pbWF0aW9uIC5pY2UtY3ViZS1ib3R0b20uaXMtdmlzaWJsZVwiKTtcclxuICAgIGNvbnN0IGJ1YmJsZVJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidWJibGUtYmctYW5pbWF0aW9uIC5idWJibGUtcmlnaHQuaXMtdmlzaWJsZVwiKTtcclxuICAgIGNvbnN0IGJ1YmJsZUxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1YmJsZS1iZy1hbmltYXRpb24gLmJ1YmJsZS1sZWZ0LmlzLXZpc2libGVcIik7XHJcblxyXG4gICAgaWYgKHRpdGxlQmFySWNlQ3ViZSkge1xyXG4gICAgICAgIGlmIChzY3JvbGxEaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgaWNlVG9wVHJhbnNsYXRlVmFsdWUgLT0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpY2VUb3BUcmFuc2xhdGVWYWx1ZSArPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGl0bGVCYXJJY2VDdWJlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtpY2VUb3BUcmFuc2xhdGVWYWx1ZX1weCwke2ljZVRvcFRyYW5zbGF0ZVZhbHVlfXB4KWA7XHJcbiAgICB9XHJcbiAgICBpZiAoaWNlQ3ViZSkge1xyXG4gICAgICAgIGlmIChzY3JvbGxEaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgaWNlVG9wVHJhbnNsYXRlVmFsdWUgLT0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpY2VUb3BUcmFuc2xhdGVWYWx1ZSArPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWNlQ3ViZS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7aWNlVG9wVHJhbnNsYXRlVmFsdWV9cHgsJHtpY2VUb3BUcmFuc2xhdGVWYWx1ZX1weClgO1xyXG4gICAgfVxyXG4gICAgaWYgKGljZUN1YmVCb3R0b20pIHtcclxuXHJcbiAgICAgICAgaWYgKHNjcm9sbERpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBpY2VCdXR0b21UcmFuc2xhdGVWYWx1ZSArPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWNlQnV0dG9tVHJhbnNsYXRlVmFsdWUgLT0gMTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGljZUN1YmVCb3R0b20uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke2ljZUJ1dHRvbVRyYW5zbGF0ZVZhbHVlfXB4LCR7aWNlQnV0dG9tVHJhbnNsYXRlVmFsdWV9cHgpYDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2Nyb2xsRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgYnViYmxlVHJhbnNsYXRlVmFsdWUgKz0gMTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGJ1YmJsZVRyYW5zbGF0ZVZhbHVlIC09IDE7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChidWJibGVSaWdodCkge1xyXG4gICAgICAgIGJ1YmJsZVJpZ2h0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoMCwke2J1YmJsZVRyYW5zbGF0ZVZhbHVlfXB4KWA7XHJcbiAgICB9XHJcbiAgICBpZiAoYnViYmxlTGVmdCkge1xyXG4gICAgICAgIGJ1YmJsZUxlZnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgwLCR7YnViYmxlVHJhbnNsYXRlVmFsdWV9cHgpYDtcclxuICAgIH1cclxuICAgIHRoaXMub2xkU2Nyb2xsID0gdGhpcy5zY3JvbGxZO1xyXG59XHJcblxyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdwYWdlIGxvYWRlZCAnKTtcclxuICAgIHRoaXMuaWNlVG9wVHJhbnNsYXRlVmFsdWUgPSAwO1xyXG4gICAgdGhpcy5pY2VCdXR0b21UcmFuc2xhdGVWYWx1ZSA9IDA7XHJcbn0iXSwiZmlsZSI6ImFwcC5qcyJ9