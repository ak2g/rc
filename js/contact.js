function creatMap() {

    if (document.getElementById("map")) {
        // Intialize our map
        const center = new google.maps.LatLng(41.7656874, -72.680087);
        const mapOptions = {
            zoom: 8,
            center: center
        };

        let map = new google.maps.Map(document.getElementById("map"), mapOptions);

        // return map;
    }
}

creatMap();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb250YWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0TWFwKCkge1xyXG5cclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKSkge1xyXG4gICAgICAgIC8vIEludGlhbGl6ZSBvdXIgbWFwXHJcbiAgICAgICAgY29uc3QgY2VudGVyID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg0MS43NjU2ODc0LCAtNzIuNjgwMDg3KTtcclxuICAgICAgICBjb25zdCBtYXBPcHRpb25zID0ge1xyXG4gICAgICAgICAgICB6b29tOiA4LFxyXG4gICAgICAgICAgICBjZW50ZXI6IGNlbnRlclxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpLCBtYXBPcHRpb25zKTtcclxuXHJcbiAgICAgICAgLy8gcmV0dXJuIG1hcDtcclxuICAgIH1cclxufVxyXG5cclxuY3JlYXRNYXAoKTsiXSwiZmlsZSI6ImNvbnRhY3QuanMifQ==