const length = document.getElementsByClassName('year').length;

Array.prototype.forEach.call(document.getElementsByClassName('year'), (item, index) => {

    item.addEventListener('click', (event) => {
        // console.log(event);
        showDetailsOfTheParticularYear(event.target.parentElement.id)
        scrollNavigation(index);
    })
})
// document.getElementById('1900')
//     .addEventListener('click', function (event) {
//         // do something
//         showDetailsOfTheParticularYear(1900);
//     });


function showDetailsOfTheParticularYear(year) {
    var id = `${year}-detail`;

    Array.prototype.forEach.call(document.getElementsByClassName('year'), (item) => {
        item.classList.remove('active');
    });

    document.getElementById(year).classList.add('active');

    Array.prototype.forEach.call(document.getElementsByClassName('details'), (item) => {
        item.style.display = 'none';
    })

    document.getElementById(`${id}`).style.display = 'flex';
}

function scrollNavigation(index) {
    // console.log(index);
    index += 1;

    var navigation = document.querySelector('.about__container .nav-items');
    if (index <= 3)
        navigation.scrollLeft = 0;
    else if (index >= length - 3)
        navigation.scrollLeft = 480;
    else
        navigation.scrollLeft = 240;
}

showDetailsOfTheParticularYear('2020');
scrollNavigation(length)
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhYm91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsZW5ndGggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd5ZWFyJykubGVuZ3RoO1xyXG5cclxuQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd5ZWFyJyksIChpdGVtLCBpbmRleCkgPT4ge1xyXG5cclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgc2hvd0RldGFpbHNPZlRoZVBhcnRpY3VsYXJZZWFyKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmlkKVxyXG4gICAgICAgIHNjcm9sbE5hdmlnYXRpb24oaW5kZXgpO1xyXG4gICAgfSlcclxufSlcclxuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJzE5MDAnKVxyXG4vLyAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbi8vICAgICAgICAgLy8gZG8gc29tZXRoaW5nXHJcbi8vICAgICAgICAgc2hvd0RldGFpbHNPZlRoZVBhcnRpY3VsYXJZZWFyKDE5MDApO1xyXG4vLyAgICAgfSk7XHJcblxyXG5cclxuZnVuY3Rpb24gc2hvd0RldGFpbHNPZlRoZVBhcnRpY3VsYXJZZWFyKHllYXIpIHtcclxuICAgIHZhciBpZCA9IGAke3llYXJ9LWRldGFpbGA7XHJcblxyXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd5ZWFyJyksIChpdGVtKSA9PiB7XHJcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHllYXIpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGV0YWlscycpLCAoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pXHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWR9YCkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxufVxyXG5cclxuZnVuY3Rpb24gc2Nyb2xsTmF2aWdhdGlvbihpbmRleCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coaW5kZXgpO1xyXG4gICAgaW5kZXggKz0gMTtcclxuXHJcbiAgICB2YXIgbmF2aWdhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dF9fY29udGFpbmVyIC5uYXYtaXRlbXMnKTtcclxuICAgIGlmIChpbmRleCA8PSAzKVxyXG4gICAgICAgIG5hdmlnYXRpb24uc2Nyb2xsTGVmdCA9IDA7XHJcbiAgICBlbHNlIGlmIChpbmRleCA+PSBsZW5ndGggLSAzKVxyXG4gICAgICAgIG5hdmlnYXRpb24uc2Nyb2xsTGVmdCA9IDQ4MDtcclxuICAgIGVsc2VcclxuICAgICAgICBuYXZpZ2F0aW9uLnNjcm9sbExlZnQgPSAyNDA7XHJcbn1cclxuXHJcbnNob3dEZXRhaWxzT2ZUaGVQYXJ0aWN1bGFyWWVhcignMjAyMCcpO1xyXG5zY3JvbGxOYXZpZ2F0aW9uKGxlbmd0aClcclxuIl0sImZpbGUiOiJhYm91dC5qcyJ9
