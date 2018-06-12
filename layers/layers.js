var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LimiteDepartamental_0 = new ol.format.GeoJSON();
var features_LimiteDepartamental_0 = format_LimiteDepartamental_0.readFeatures(json_LimiteDepartamental_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteDepartamental_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LimiteDepartamental_0.addFeatures(features_LimiteDepartamental_0);var lyr_LimiteDepartamental_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteDepartamental_0, 
                style: style_LimiteDepartamental_0,
                title: '<img src="styles/legend/LimiteDepartamental_0.png" /> Limite Departamental '
            });var format_DepartamentosProductoresdeCaaPanelera_1 = new ol.format.GeoJSON();
var features_DepartamentosProductoresdeCaaPanelera_1 = format_DepartamentosProductoresdeCaaPanelera_1.readFeatures(json_DepartamentosProductoresdeCaaPanelera_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DepartamentosProductoresdeCaaPanelera_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DepartamentosProductoresdeCaaPanelera_1.addFeatures(features_DepartamentosProductoresdeCaaPanelera_1);var lyr_DepartamentosProductoresdeCaaPanelera_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DepartamentosProductoresdeCaaPanelera_1, 
                style: style_DepartamentosProductoresdeCaaPanelera_1,
    title: 'Departamentos Productores de Caña Panelera<br />\
    <img src="styles/legend/DepartamentosProductoresdeCaaPanelera_1_0.png" />  2 - 4 <br />\
    <img src="styles/legend/DepartamentosProductoresdeCaaPanelera_1_1.png" />  4 - 5 <br />\
    <img src="styles/legend/DepartamentosProductoresdeCaaPanelera_1_2.png" />  5 - 7 <br />\
    <img src="styles/legend/DepartamentosProductoresdeCaaPanelera_1_3.png" />  7 - 9 <br />\
    <img src="styles/legend/DepartamentosProductoresdeCaaPanelera_1_4.png" />  9 - 11 <br />'
        });var format_RendimientodeCaaPaneleraToneladasHa2017_2 = new ol.format.GeoJSON();
var features_RendimientodeCaaPaneleraToneladasHa2017_2 = format_RendimientodeCaaPaneleraToneladasHa2017_2.readFeatures(json_RendimientodeCaaPaneleraToneladasHa2017_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RendimientodeCaaPaneleraToneladasHa2017_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RendimientodeCaaPaneleraToneladasHa2017_2.addFeatures(features_RendimientodeCaaPaneleraToneladasHa2017_2);var lyr_RendimientodeCaaPaneleraToneladasHa2017_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RendimientodeCaaPaneleraToneladasHa2017_2, 
                style: style_RendimientodeCaaPaneleraToneladasHa2017_2,
                title: '<img src="styles/legend/RendimientodeCaaPaneleraToneladasHa2017_2.png" /> Rendimiento de Caña Panelera (Toneladas/Ha)-2017'
            });

lyr_LimiteDepartamental_0.setVisible(true);lyr_DepartamentosProductoresdeCaaPanelera_1.setVisible(true);lyr_RendimientodeCaaPaneleraToneladasHa2017_2.setVisible(false);
var layersList = [baseLayer,lyr_LimiteDepartamental_0,lyr_DepartamentosProductoresdeCaaPanelera_1,lyr_RendimientodeCaaPaneleraToneladasHa2017_2];
lyr_LimiteDepartamental_0.set('fieldAliases', {'nombre_dep': 'nombre_dep', });
lyr_DepartamentosProductoresdeCaaPanelera_1.set('fieldAliases', {'DEPT': 'DEPT', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'R.(Ton/Ha)': 'R.(Ton/Ha)', 'No': 'No', });
lyr_RendimientodeCaaPaneleraToneladasHa2017_2.set('fieldAliases', {'Id': 'Id', 'DEPT': 'DEPT', 'DEPARTAMEN': 'DEPARTAMEN', 'CULTIVO': 'CULTIVO', 'AÃ‘O': 'AÃ‘O', 'Ãrea_Semb': 'Ãrea_Semb', 'Ãrea_Cose': 'Ãrea_Cose', 'ProducciÃ³': 'ProducciÃ³', 'Rendimient': 'Rendimient', });
lyr_LimiteDepartamental_0.set('fieldImages', {'nombre_dep': 'TextEdit', });
lyr_DepartamentosProductoresdeCaaPanelera_1.set('fieldImages', {'DEPT': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'R.(Ton/Ha)': 'TextEdit', 'No': 'TextEdit', });
lyr_RendimientodeCaaPaneleraToneladasHa2017_2.set('fieldImages', {'Id': 'TextEdit', 'DEPT': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'CULTIVO': 'TextEdit', 'AÃ‘O': 'TextEdit', 'Ãrea_Semb': 'TextEdit', 'Ãrea_Cose': 'TextEdit', 'ProducciÃ³': 'TextEdit', 'Rendimient': 'TextEdit', });
lyr_LimiteDepartamental_0.set('fieldLabels', {'nombre_dep': 'inline label', });
lyr_DepartamentosProductoresdeCaaPanelera_1.set('fieldLabels', {'DEPT': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'R.(Ton/Ha)': 'inline label', 'No': 'inline label', });
lyr_RendimientodeCaaPaneleraToneladasHa2017_2.set('fieldLabels', {'Id': 'no label', 'DEPT': 'no label', 'DEPARTAMEN': 'no label', 'CULTIVO': 'no label', 'AÃ‘O': 'no label', 'Ãrea_Semb': 'no label', 'Ãrea_Cose': 'no label', 'ProducciÃ³': 'no label', 'Rendimient': 'no label', });
lyr_RendimientodeCaaPaneleraToneladasHa2017_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});