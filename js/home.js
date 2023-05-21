const banners = [];

function initializeBanner() {

    for (let i = 0; i < 7; i++) {
        const baseUrl = './images/banner/';

        banners.push({
            'capUrl': `${baseUrl}cap-brand-${i + 1}.svg`,
            // 'capUrl': `${baseUrl}cap-${i + 1}.png`,
            'imageOneUrl': `${baseUrl}brand-${i + 1}-image-one.png`,
            'imageTwoUrl': `${baseUrl}brand-${i + 1}-image-two.png`,
            'imageThreeUrl': `${baseUrl}brand-${i + 1}-image-two.png`
        })
    }

    banners.forEach((element, index) => {

        const capBtn = createElement(`${index}-cap-btn`, 'cap-nav', 'DIV', '', 'cap-btn');
        capBtn.setAttribute('style', `background-image:url(${element.capUrl})`);
        capBtn.addEventListener('click', () => {
            setDisplayImage(index);
            setActiveCap(index);
        });

    });

    setDisplayImage(0);
    setActiveCap(0);
}

function setActiveCap(index) {
    let elements = [];
    elements = document.getElementsByClassName('cap-btn');
    console.log(elements);

    Array.from(elements).forEach((el) => {
        // Do stuff here
        console.log(el.tagName);
        el.classList.remove('active');
    });
    // elements.forEach(elemet => {

    // })
    document.getElementById(`${index}-cap-btn`).classList.add('active');
}

function setDisplayImage(index) {
    let imageOne = document.getElementById('image-one');
    let imageTwo = document.getElementById('image-two');
    let imageThree = document.getElementById('image-three');

    (imageOne) ? imageOne.parentNode.removeChild(imageOne) : null;
    (imageTwo) ? imageTwo.parentNode.removeChild(imageTwo) : null;
    (imageThree) ? imageThree.parentNode.removeChild(imageThree) : null;

    imageTwo = createElement(`image-two`, 'product-display', 'DIV', '', 'image-two');

    imageTwo.setAttribute('style', `background-image:url(${banners[index].imageTwoUrl})`);
    imageTwo.classList.add('is-visible');

    imageOne = createElement(`image-one`, 'product-display', 'DIV', '', 'image-one');

    imageOne.setAttribute('style', `background-image:url(${banners[index].imageOneUrl})`);
    imageOne.classList.add('is-visible');

    imageThree = createElement(`image-three`, 'product-display', 'DIV', '', 'image-three');

    imageThree.setAttribute('style', `background-image:url(${banners[index].imageThreeUrl})`);
    imageThree.classList.add('is-visible');

}

function changeTestimonial(index) {
    const animation = document.getElementById('tansition-animation');

    const elements = document.querySelector(`#testimonial #navigation`);
    Array.from(elements.children).forEach((el) => {
        // Do stuff here
        el.classList.remove('active');
    });
    animation.classList.remove('is-visible');
    elements.children[index].classList.add('active');

    setTimeout(() => {
        document.querySelector('#testimonial #comment').innerHTML = testiNominals[index].comment;
        document.querySelector('#testimonial #name').innerHTML = testiNominals[index].name;
        document.querySelector('#testimonial #designation').innerHTML = testiNominals[index].designation;

        animation.classList.add('is-visible');
    }, 500);

}
let testinominalsIndex = 0;
function testiNominalsSlider() {
    testinominalsIndex++;
    if (testinominalsIndex >= 3) testinominalsIndex = 0;
    // testiNominals.forEach((elm, i) => {
    changeTestimonial(testinominalsIndex);

    // });
}
initializeBanner();

changeTestimonial(0);
setInterval(testiNominalsSlider, 3000);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJhbm5lcnMgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVCYW5uZXIoKSB7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgICAgICBjb25zdCBiYXNlVXJsID0gJy4vaW1hZ2VzL2Jhbm5lci8nO1xyXG5cclxuICAgICAgICBiYW5uZXJzLnB1c2goe1xyXG4gICAgICAgICAgICAnY2FwVXJsJzogYCR7YmFzZVVybH1jYXAtYnJhbmQtJHtpICsgMX0uc3ZnYCxcclxuICAgICAgICAgICAgLy8gJ2NhcFVybCc6IGAke2Jhc2VVcmx9Y2FwLSR7aSArIDF9LnBuZ2AsXHJcbiAgICAgICAgICAgICdpbWFnZU9uZVVybCc6IGAke2Jhc2VVcmx9YnJhbmQtJHtpICsgMX0taW1hZ2Utb25lLnBuZ2AsXHJcbiAgICAgICAgICAgICdpbWFnZVR3b1VybCc6IGAke2Jhc2VVcmx9YnJhbmQtJHtpICsgMX0taW1hZ2UtdHdvLnBuZ2AsXHJcbiAgICAgICAgICAgICdpbWFnZVRocmVlVXJsJzogYCR7YmFzZVVybH1icmFuZC0ke2kgKyAxfS1pbWFnZS10d28ucG5nYFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYmFubmVycy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBjYXBCdG4gPSBjcmVhdGVFbGVtZW50KGAke2luZGV4fS1jYXAtYnRuYCwgJ2NhcC1uYXYnLCAnRElWJywgJycsICdjYXAtYnRuJyk7XHJcbiAgICAgICAgY2FwQnRuLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgYmFja2dyb3VuZC1pbWFnZTp1cmwoJHtlbGVtZW50LmNhcFVybH0pYCk7XHJcbiAgICAgICAgY2FwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXREaXNwbGF5SW1hZ2UoaW5kZXgpO1xyXG4gICAgICAgICAgICBzZXRBY3RpdmVDYXAoaW5kZXgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIHNldERpc3BsYXlJbWFnZSgwKTtcclxuICAgIHNldEFjdGl2ZUNhcCgwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0QWN0aXZlQ2FwKGluZGV4KSB7XHJcbiAgICBsZXQgZWxlbWVudHMgPSBbXTtcclxuICAgIGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FwLWJ0bicpO1xyXG4gICAgY29uc29sZS5sb2coZWxlbWVudHMpO1xyXG5cclxuICAgIEFycmF5LmZyb20oZWxlbWVudHMpLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgLy8gRG8gc3R1ZmYgaGVyZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVsLnRhZ05hbWUpO1xyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBlbGVtZW50cy5mb3JFYWNoKGVsZW1ldCA9PiB7XHJcblxyXG4gICAgLy8gfSlcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2luZGV4fS1jYXAtYnRuYCkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldERpc3BsYXlJbWFnZShpbmRleCkge1xyXG4gICAgbGV0IGltYWdlT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlLW9uZScpO1xyXG4gICAgbGV0IGltYWdlVHdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlLXR3bycpO1xyXG4gICAgbGV0IGltYWdlVGhyZWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2UtdGhyZWUnKTtcclxuXHJcbiAgICAoaW1hZ2VPbmUpID8gaW1hZ2VPbmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpbWFnZU9uZSkgOiBudWxsO1xyXG4gICAgKGltYWdlVHdvKSA/IGltYWdlVHdvLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaW1hZ2VUd28pIDogbnVsbDtcclxuICAgIChpbWFnZVRocmVlKSA/IGltYWdlVGhyZWUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpbWFnZVRocmVlKSA6IG51bGw7XHJcblxyXG4gICAgaW1hZ2VUd28gPSBjcmVhdGVFbGVtZW50KGBpbWFnZS10d29gLCAncHJvZHVjdC1kaXNwbGF5JywgJ0RJVicsICcnLCAnaW1hZ2UtdHdvJyk7XHJcblxyXG4gICAgaW1hZ2VUd28uc2V0QXR0cmlidXRlKCdzdHlsZScsIGBiYWNrZ3JvdW5kLWltYWdlOnVybCgke2Jhbm5lcnNbaW5kZXhdLmltYWdlVHdvVXJsfSlgKTtcclxuICAgIGltYWdlVHdvLmNsYXNzTGlzdC5hZGQoJ2lzLXZpc2libGUnKTtcclxuXHJcbiAgICBpbWFnZU9uZSA9IGNyZWF0ZUVsZW1lbnQoYGltYWdlLW9uZWAsICdwcm9kdWN0LWRpc3BsYXknLCAnRElWJywgJycsICdpbWFnZS1vbmUnKTtcclxuXHJcbiAgICBpbWFnZU9uZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGJhY2tncm91bmQtaW1hZ2U6dXJsKCR7YmFubmVyc1tpbmRleF0uaW1hZ2VPbmVVcmx9KWApO1xyXG4gICAgaW1hZ2VPbmUuY2xhc3NMaXN0LmFkZCgnaXMtdmlzaWJsZScpO1xyXG5cclxuICAgIGltYWdlVGhyZWUgPSBjcmVhdGVFbGVtZW50KGBpbWFnZS10aHJlZWAsICdwcm9kdWN0LWRpc3BsYXknLCAnRElWJywgJycsICdpbWFnZS10aHJlZScpO1xyXG5cclxuICAgIGltYWdlVGhyZWUuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBiYWNrZ3JvdW5kLWltYWdlOnVybCgke2Jhbm5lcnNbaW5kZXhdLmltYWdlVGhyZWVVcmx9KWApO1xyXG4gICAgaW1hZ2VUaHJlZS5jbGFzc0xpc3QuYWRkKCdpcy12aXNpYmxlJyk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VUZXN0aW1vbmlhbChpbmRleCkge1xyXG4gICAgY29uc3QgYW5pbWF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhbnNpdGlvbi1hbmltYXRpb24nKTtcclxuXHJcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0ZXN0aW1vbmlhbCAjbmF2aWdhdGlvbmApO1xyXG4gICAgQXJyYXkuZnJvbShlbGVtZW50cy5jaGlsZHJlbikuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAvLyBEbyBzdHVmZiBoZXJlXHJcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICAgIGFuaW1hdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy12aXNpYmxlJyk7XHJcbiAgICBlbGVtZW50cy5jaGlsZHJlbltpbmRleF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rlc3RpbW9uaWFsICNjb21tZW50JykuaW5uZXJIVE1MID0gdGVzdGlOb21pbmFsc1tpbmRleF0uY29tbWVudDtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVzdGltb25pYWwgI25hbWUnKS5pbm5lckhUTUwgPSB0ZXN0aU5vbWluYWxzW2luZGV4XS5uYW1lO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXN0aW1vbmlhbCAjZGVzaWduYXRpb24nKS5pbm5lckhUTUwgPSB0ZXN0aU5vbWluYWxzW2luZGV4XS5kZXNpZ25hdGlvbjtcclxuXHJcbiAgICAgICAgYW5pbWF0aW9uLmNsYXNzTGlzdC5hZGQoJ2lzLXZpc2libGUnKTtcclxuICAgIH0sIDUwMCk7XHJcblxyXG59XHJcbmxldCB0ZXN0aW5vbWluYWxzSW5kZXggPSAwO1xyXG5mdW5jdGlvbiB0ZXN0aU5vbWluYWxzU2xpZGVyKCkge1xyXG4gICAgdGVzdGlub21pbmFsc0luZGV4Kys7XHJcbiAgICBpZiAodGVzdGlub21pbmFsc0luZGV4ID49IDMpIHRlc3Rpbm9taW5hbHNJbmRleCA9IDA7XHJcbiAgICAvLyB0ZXN0aU5vbWluYWxzLmZvckVhY2goKGVsbSwgaSkgPT4ge1xyXG4gICAgY2hhbmdlVGVzdGltb25pYWwodGVzdGlub21pbmFsc0luZGV4KTtcclxuXHJcbiAgICAvLyB9KTtcclxufVxyXG5pbml0aWFsaXplQmFubmVyKCk7XHJcblxyXG5jaGFuZ2VUZXN0aW1vbmlhbCgwKTtcclxuc2V0SW50ZXJ2YWwodGVzdGlOb21pbmFsc1NsaWRlciwgMzAwMCk7Il0sImZpbGUiOiJob21lLmpzIn0=