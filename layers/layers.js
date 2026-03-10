var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_T20240519_A3_Camp_SubBlock_Outlines_1 = new ol.format.GeoJSON();
var features_T20240519_A3_Camp_SubBlock_Outlines_1 = format_T20240519_A3_Camp_SubBlock_Outlines_1.readFeatures(json_T20240519_A3_Camp_SubBlock_Outlines_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T20240519_A3_Camp_SubBlock_Outlines_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T20240519_A3_Camp_SubBlock_Outlines_1.addFeatures(features_T20240519_A3_Camp_SubBlock_Outlines_1);
var lyr_T20240519_A3_Camp_SubBlock_Outlines_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T20240519_A3_Camp_SubBlock_Outlines_1, 
                style: style_T20240519_A3_Camp_SubBlock_Outlines_1,
                popuplayertitle: 'T20240519_A3_Camp_SubBlock_Outlines',
                interactive: false,
                title: '<img src="styles/legend/T20240519_A3_Camp_SubBlock_Outlines_1.png" /> T20240519_A3_Camp_SubBlock_Outlines'
            });
var format_T20240519_A2_Camp_Block_Outlines_2 = new ol.format.GeoJSON();
var features_T20240519_A2_Camp_Block_Outlines_2 = format_T20240519_A2_Camp_Block_Outlines_2.readFeatures(json_T20240519_A2_Camp_Block_Outlines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T20240519_A2_Camp_Block_Outlines_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T20240519_A2_Camp_Block_Outlines_2.addFeatures(features_T20240519_A2_Camp_Block_Outlines_2);
var lyr_T20240519_A2_Camp_Block_Outlines_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T20240519_A2_Camp_Block_Outlines_2, 
                style: style_T20240519_A2_Camp_Block_Outlines_2,
                popuplayertitle: 'T20240519_A2_Camp_Block_Outlines',
                interactive: false,
                title: '<img src="styles/legend/T20240519_A2_Camp_Block_Outlines_2.png" /> T20240519_A2_Camp_Block_Outlines'
            });
var format_T20230412_A1_Camp_Outlines_3 = new ol.format.GeoJSON();
var features_T20230412_A1_Camp_Outlines_3 = format_T20230412_A1_Camp_Outlines_3.readFeatures(json_T20230412_A1_Camp_Outlines_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T20230412_A1_Camp_Outlines_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T20230412_A1_Camp_Outlines_3.addFeatures(features_T20230412_A1_Camp_Outlines_3);
var lyr_T20230412_A1_Camp_Outlines_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T20230412_A1_Camp_Outlines_3, 
                style: style_T20230412_A1_Camp_Outlines_3,
                popuplayertitle: 'T20230412_A1_Camp_Outlines',
                interactive: false,
                title: '<img src="styles/legend/T20230412_A1_Camp_Outlines_3.png" /> T20230412_A1_Camp_Outlines'
            });
var format_FacilityInformation_4 = new ol.format.GeoJSON();
var features_FacilityInformation_4 = format_FacilityInformation_4.readFeatures(json_FacilityInformation_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FacilityInformation_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FacilityInformation_4.addFeatures(features_FacilityInformation_4);
var lyr_FacilityInformation_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FacilityInformation_4, 
                style: style_FacilityInformation_4,
                popuplayertitle: 'Facility Information',
                interactive: true,
                title: '<img src="styles/legend/FacilityInformation_4.png" /> Facility Information'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_T20240519_A3_Camp_SubBlock_Outlines_1.setVisible(true);lyr_T20240519_A2_Camp_Block_Outlines_2.setVisible(true);lyr_T20230412_A1_Camp_Outlines_3.setVisible(true);lyr_FacilityInformation_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_T20240519_A3_Camp_SubBlock_Outlines_1,lyr_T20240519_A2_Camp_Block_Outlines_2,lyr_T20230412_A1_Camp_Outlines_3,lyr_FacilityInformation_4];
lyr_T20240519_A3_Camp_SubBlock_Outlines_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'District': 'District', 'Upazila': 'Upazila', 'Union': 'Union', 'SBlockSSID': 'SBlockSSID', 'SBlockName': 'SBlockName', 'SBlockLabe': 'SBlockLabe', 'BlockSSID': 'BlockSSID', 'BlockName': 'BlockName', 'BlockLabel': 'BlockLabel', 'CampSSID': 'CampSSID', 'CampName': 'CampName', 'SMSDCamp': 'SMSDCamp', 'NPMCamp': 'NPMCamp', 'CampLabel': 'CampLabel', 'CNameAlias': 'CNameAlias', 'AreaAcres': 'AreaAcres', 'AreaSqM': 'AreaSqM', 'AreaSqKM': 'AreaSqKM', 'CentroidX': 'CentroidX', 'CentroidY': 'CentroidY', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_T20240519_A2_Camp_Block_Outlines_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'District': 'District', 'Upazila': 'Upazila', 'Union': 'Union', 'BlockSSID': 'BlockSSID', 'BlockName': 'BlockName', 'BlockLabel': 'BlockLabel', 'CampSSID': 'CampSSID', 'CampName_1': 'CampName_1', 'SMSDCamp': 'SMSDCamp', 'NPMCamp': 'NPMCamp', 'CampLabel': 'CampLabel', 'CNameAlias': 'CNameAlias', 'CentroidX': 'CentroidX', 'CentroidY': 'CentroidY', 'AreaAcres': 'AreaAcres', 'AreaSqM': 'AreaSqM', 'AreaSqKM': 'AreaSqKM', 'Shape_Leng': 'Shape_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_T20230412_A1_Camp_Outlines_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'District': 'District', 'Upazila': 'Upazila', 'Union': 'Union', 'CampSSID': 'CampSSID', 'CampName': 'CampName', 'SMSDCamp': 'SMSDCamp', 'NPMCamp': 'NPMCamp', 'CNameAlias': 'CNameAlias', 'CampLabel': 'CampLabel', 'Settlement': 'Settlement', 'CentroidX': 'CentroidX', 'CentroidY': 'CentroidY', 'AreaAcres': 'AreaAcres', 'AreaSqM': 'AreaSqM', 'AreaSqKM': 'AreaSqKM', 'Type': 'Type', 'Camp_Let': 'Camp_Let', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FacilityInformation_4.set('fieldAliases', {'Facility ID': 'Facility ID', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_T20240519_A3_Camp_SubBlock_Outlines_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'District': 'TextEdit', 'Upazila': 'TextEdit', 'Union': 'TextEdit', 'SBlockSSID': 'TextEdit', 'SBlockName': 'TextEdit', 'SBlockLabe': 'TextEdit', 'BlockSSID': 'TextEdit', 'BlockName': 'TextEdit', 'BlockLabel': 'TextEdit', 'CampSSID': 'TextEdit', 'CampName': 'TextEdit', 'SMSDCamp': 'TextEdit', 'NPMCamp': 'TextEdit', 'CampLabel': 'TextEdit', 'CNameAlias': 'TextEdit', 'AreaAcres': 'TextEdit', 'AreaSqM': 'TextEdit', 'AreaSqKM': 'TextEdit', 'CentroidX': 'TextEdit', 'CentroidY': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_T20240519_A2_Camp_Block_Outlines_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'Range', 'District': 'TextEdit', 'Upazila': 'TextEdit', 'Union': 'TextEdit', 'BlockSSID': 'TextEdit', 'BlockName': 'TextEdit', 'BlockLabel': 'TextEdit', 'CampSSID': 'TextEdit', 'CampName_1': 'TextEdit', 'SMSDCamp': 'TextEdit', 'NPMCamp': 'TextEdit', 'CampLabel': 'TextEdit', 'CNameAlias': 'TextEdit', 'CentroidX': 'TextEdit', 'CentroidY': 'TextEdit', 'AreaAcres': 'TextEdit', 'AreaSqM': 'TextEdit', 'AreaSqKM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_T20230412_A1_Camp_Outlines_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'District': 'TextEdit', 'Upazila': 'TextEdit', 'Union': 'TextEdit', 'CampSSID': 'TextEdit', 'CampName': 'TextEdit', 'SMSDCamp': 'TextEdit', 'NPMCamp': 'TextEdit', 'CNameAlias': 'TextEdit', 'CampLabel': 'TextEdit', 'Settlement': 'TextEdit', 'CentroidX': 'TextEdit', 'CentroidY': 'TextEdit', 'AreaAcres': 'TextEdit', 'AreaSqM': 'TextEdit', 'AreaSqKM': 'TextEdit', 'Type': 'TextEdit', 'Camp_Let': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_FacilityInformation_4.set('fieldImages', {'Facility ID': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_T20240519_A3_Camp_SubBlock_Outlines_1.set('fieldLabels', {'OBJECTID': 'no label', 'District': 'no label', 'Upazila': 'no label', 'Union': 'no label', 'SBlockSSID': 'no label', 'SBlockName': 'no label', 'SBlockLabe': 'no label', 'BlockSSID': 'no label', 'BlockName': 'no label', 'BlockLabel': 'no label', 'CampSSID': 'no label', 'CampName': 'no label', 'SMSDCamp': 'no label', 'NPMCamp': 'no label', 'CampLabel': 'no label', 'CNameAlias': 'no label', 'AreaAcres': 'no label', 'AreaSqM': 'no label', 'AreaSqKM': 'no label', 'CentroidX': 'no label', 'CentroidY': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_T20240519_A2_Camp_Block_Outlines_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'District': 'no label', 'Upazila': 'no label', 'Union': 'no label', 'BlockSSID': 'no label', 'BlockName': 'no label', 'BlockLabel': 'no label', 'CampSSID': 'no label', 'CampName_1': 'no label', 'SMSDCamp': 'no label', 'NPMCamp': 'no label', 'CampLabel': 'no label', 'CNameAlias': 'no label', 'CentroidX': 'no label', 'CentroidY': 'no label', 'AreaAcres': 'no label', 'AreaSqM': 'no label', 'AreaSqKM': 'no label', 'Shape_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_T20230412_A1_Camp_Outlines_3.set('fieldLabels', {'OBJECTID': 'no label', 'District': 'no label', 'Upazila': 'no label', 'Union': 'no label', 'CampSSID': 'no label', 'CampName': 'no label', 'SMSDCamp': 'no label', 'NPMCamp': 'no label', 'CNameAlias': 'no label', 'CampLabel': 'no label', 'Settlement': 'no label', 'CentroidX': 'no label', 'CentroidY': 'no label', 'AreaAcres': 'no label', 'AreaSqM': 'no label', 'AreaSqKM': 'no label', 'Type': 'no label', 'Camp_Let': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FacilityInformation_4.set('fieldLabels', {'Facility ID': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', });
lyr_FacilityInformation_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});