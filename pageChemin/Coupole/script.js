/* Carte Affichage */
L_NO_TOUCH = false;
L_DISABLE_3D = false;
async function inistialisation_map(map){
    var tile_layer = L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {"attribution": "Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://www.openstreetmap.org/copyright\"\u003eODbL\u003c/a\u003e.",
        "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false})
        .addTo(map);
    return map;
}
function point_1(map){
    new Promise(()=>{
        var marker_1 = L.marker(
            [48.65768, 2.558699],
            {}).addTo(map);
                    
        var popup_1 = L.popup({"maxWidth": "100%"})
        var html_1 = $(`<div id="html_1" style="width: 100.0%; height: 100.0%;">Lycée Galilée</div>`)[0];
        popup_1.setContent(html_1);
        marker_1.bindPopup(popup_1)
    });
    return map;

}
function point_2(map){
    new Promise(()=>{
        var marker_2 = L.marker(
            [48.659331, 2.56505],
            {}).addTo(map);
    
        var popup_2 = L.popup({"maxWidth": "100%"});
        var html_2 = $(`<div id="html_2" style="width: 100.0%; height: 100.0%;">Coupole</div>`)[0];
        popup_2.setContent(html_2);
        marker_2.bindPopup(popup_2);
    });
    return map;
}
async function assemblage_map(){
    var map = L.map(
        "map",
        {
            center: [48.65768, 2.558699],
            crs: L.CRS.EPSG3857,
            zoom: 16,
            zoomControl: true,
            preferCanvas: false,
        });
    map = await inistialisation_map(map);
    map = point_1(map);
    map = point_2(map);

    var poly_line = 
        L.polyline([[48.65768, 2.558699], [48.657898, 2.558827], [48.658974, 2.559648], [48.658267, 2.561944], [48.65864, 2.562243], [48.65857, 2.563366], [48.65939, 2.563706], [48.659567, 2.56384], [48.659531, 2.564758]],
        {"bubblingMouseEvents": true, "color": "blue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "blue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.8, "smoothFactor": 1.0, "stroke": true, "weight": 2.5})
        .addTo(map);
}
assemblage_map();