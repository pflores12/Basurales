var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_CoberturaVHRCONAE_2 = new ol.format.GeoJSON();
var features_CoberturaVHRCONAE_2 = format_CoberturaVHRCONAE_2.readFeatures(json_CoberturaVHRCONAE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoberturaVHRCONAE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoberturaVHRCONAE_2.addFeatures(features_CoberturaVHRCONAE_2);
var lyr_CoberturaVHRCONAE_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoberturaVHRCONAE_2, 
                style: style_CoberturaVHRCONAE_2,
                interactive: true,
    title: 'Cobertura VHR CONAE<br />\
    <img src="styles/legend/CoberturaVHRCONAE_2_0.png" /> Pendiente<br />\
    <img src="styles/legend/CoberturaVHRCONAE_2_1.png" /> Analizado<br />'
        });
var format_Basuralesdetectados_3 = new ol.format.GeoJSON();
var features_Basuralesdetectados_3 = format_Basuralesdetectados_3.readFeatures(json_Basuralesdetectados_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Basuralesdetectados_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Basuralesdetectados_3.addFeatures(features_Basuralesdetectados_3);
var lyr_Basuralesdetectados_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Basuralesdetectados_3, 
                style: style_Basuralesdetectados_3,
                interactive: true,
                title: '<img src="styles/legend/Basuralesdetectados_3.png" /> Basurales detectados'
            });
var format_Basuralesoriginalespoligonos_4 = new ol.format.GeoJSON();
var features_Basuralesoriginalespoligonos_4 = format_Basuralesoriginalespoligonos_4.readFeatures(json_Basuralesoriginalespoligonos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Basuralesoriginalespoligonos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Basuralesoriginalespoligonos_4.addFeatures(features_Basuralesoriginalespoligonos_4);
var lyr_Basuralesoriginalespoligonos_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Basuralesoriginalespoligonos_4, 
                style: style_Basuralesoriginalespoligonos_4,
                interactive: true,
                title: '<img src="styles/legend/Basuralesoriginalespoligonos_4.png" /> Basurales originales (poligonos)'
            });
var format_Basuralesoriginalespuntos_5 = new ol.format.GeoJSON();
var features_Basuralesoriginalespuntos_5 = format_Basuralesoriginalespuntos_5.readFeatures(json_Basuralesoriginalespuntos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Basuralesoriginalespuntos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Basuralesoriginalespuntos_5.addFeatures(features_Basuralesoriginalespuntos_5);
var lyr_Basuralesoriginalespuntos_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Basuralesoriginalespuntos_5, 
                style: style_Basuralesoriginalespuntos_5,
                interactive: true,
                title: '<img src="styles/legend/Basuralesoriginalespuntos_5.png" /> Basurales originales (puntos)'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(false);lyr_CoberturaVHRCONAE_2.setVisible(false);lyr_Basuralesdetectados_3.setVisible(false);lyr_Basuralesoriginalespoligonos_4.setVisible(true);lyr_Basuralesoriginalespuntos_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_CoberturaVHRCONAE_2,lyr_Basuralesdetectados_3,lyr_Basuralesoriginalespoligonos_4,lyr_Basuralesoriginalespuntos_5];
lyr_CoberturaVHRCONAE_2.set('fieldAliases', {'tit_nombre': 'tit_nombre', 'gob_local': 'gob_local', 'depto': 'depto', 'prov': 'prov', 'mosaico': 'mosaico', 'plataforma': 'plataforma', 'sensor': 'sensor', 'fecha': 'fecha', 'tipo_prod': 'tipo_prod', 'res_metros': 'res_metros', 'region': 'region', 'analizado': 'analizado', });
lyr_Basuralesdetectados_3.set('fieldAliases', {'area_ha': 'area_ha', 'PARTIDO_1': 'PARTIDO_1', 'CLUSTER_ID': 'CLUSTER_ID', 'CLUSTER_SI': 'CLUSTER_SI', 'Distance': 'Distance', });
lyr_Basuralesoriginalespoligonos_4.set('fieldAliases', {'Name': 'Name', 'area_ha': 'area_ha', 'municipio': 'municipio', 'cod_indec': 'cod_indec', 'fecha': 'fecha', 'ar_ha': 'ar_ha', });
lyr_Basuralesoriginalespuntos_5.set('fieldAliases', {'id_bca': 'id_bca', 'municipio': 'municipio', 'zonificaci': 'zonificaci', 'dominio': 'dominio', 'gestion': 'gestion', 'no_activo': 'no_activo', 'supt': 'supt', 'supimpactd': 'supimpactd', 'latitud': 'latitud', 'longitud': 'longitud', 'observacio': 'observacio', 'nombre': 'nombre', 'nomencla': 'nomencla', 'cod_indec': 'cod_indec', 'zonas': 'zonas', 'u_c_r': 'u_c_r', 'sag': 'sag', 'fun': 'fun', });
lyr_CoberturaVHRCONAE_2.set('fieldImages', {'tit_nombre': 'TextEdit', 'gob_local': 'TextEdit', 'depto': 'TextEdit', 'prov': 'TextEdit', 'mosaico': 'TextEdit', 'plataforma': 'TextEdit', 'sensor': 'TextEdit', 'fecha': 'TextEdit', 'tipo_prod': 'TextEdit', 'res_metros': 'TextEdit', 'region': 'TextEdit', 'analizado': 'TextEdit', });
lyr_Basuralesdetectados_3.set('fieldImages', {'area_ha': 'TextEdit', 'PARTIDO_1': 'TextEdit', 'CLUSTER_ID': 'TextEdit', 'CLUSTER_SI': 'TextEdit', 'Distance': 'TextEdit', });
lyr_Basuralesoriginalespoligonos_4.set('fieldImages', {'Name': 'TextEdit', 'area_ha': 'TextEdit', 'municipio': 'TextEdit', 'cod_indec': 'TextEdit', 'fecha': 'DateTime', 'ar_ha': 'TextEdit', });
lyr_Basuralesoriginalespuntos_5.set('fieldImages', {'id_bca': 'TextEdit', 'municipio': 'TextEdit', 'zonificaci': 'TextEdit', 'dominio': 'TextEdit', 'gestion': 'TextEdit', 'no_activo': 'TextEdit', 'supt': 'TextEdit', 'supimpactd': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'observacio': 'TextEdit', 'nombre': 'TextEdit', 'nomencla': 'TextEdit', 'cod_indec': 'TextEdit', 'zonas': 'TextEdit', 'u_c_r': 'TextEdit', 'sag': 'TextEdit', 'fun': 'TextEdit', });
lyr_CoberturaVHRCONAE_2.set('fieldLabels', {'tit_nombre': 'inline label', 'gob_local': 'inline label', 'depto': 'inline label', 'prov': 'inline label', 'mosaico': 'inline label', 'plataforma': 'inline label', 'sensor': 'inline label', 'fecha': 'inline label', 'tipo_prod': 'inline label', 'res_metros': 'inline label', 'region': 'inline label', 'analizado': 'inline label', });
lyr_Basuralesdetectados_3.set('fieldLabels', {'area_ha': 'inline label', 'PARTIDO_1': 'inline label', 'CLUSTER_ID': 'inline label', 'CLUSTER_SI': 'inline label', 'Distance': 'inline label', });
lyr_Basuralesoriginalespoligonos_4.set('fieldLabels', {'Name': 'inline label', 'area_ha': 'inline label', 'municipio': 'inline label', 'cod_indec': 'inline label', 'fecha': 'inline label', 'ar_ha': 'inline label', });
lyr_Basuralesoriginalespuntos_5.set('fieldLabels', {'id_bca': 'inline label', 'municipio': 'inline label', 'zonificaci': 'inline label', 'dominio': 'inline label', 'gestion': 'inline label', 'no_activo': 'inline label', 'supt': 'inline label', 'supimpactd': 'inline label', 'latitud': 'inline label', 'longitud': 'inline label', 'observacio': 'inline label', 'nombre': 'inline label', 'nomencla': 'inline label', 'cod_indec': 'inline label', 'zonas': 'inline label', 'u_c_r': 'inline label', 'sag': 'inline label', 'fun': 'inline label', });
lyr_Basuralesoriginalespuntos_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});