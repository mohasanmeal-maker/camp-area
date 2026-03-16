var wms_layers = [];

var format_T20240519_A3_Camp_SubBlock_Outlines_0 = new ol.format.GeoJSON();
var features_T20240519_A3_Camp_SubBlock_Outlines_0 = format_T20240519_A3_Camp_SubBlock_Outlines_0.readFeatures(json_T20240519_A3_Camp_SubBlock_Outlines_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T20240519_A3_Camp_SubBlock_Outlines_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T20240519_A3_Camp_SubBlock_Outlines_0.addFeatures(features_T20240519_A3_Camp_SubBlock_Outlines_0);
var lyr_T20240519_A3_Camp_SubBlock_Outlines_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T20240519_A3_Camp_SubBlock_Outlines_0, 
                style: style_T20240519_A3_Camp_SubBlock_Outlines_0,
                popuplayertitle: 'T20240519_A3_Camp_SubBlock_Outlines',
                interactive: false,
                title: '<img src="styles/legend/T20240519_A3_Camp_SubBlock_Outlines_0.png" /> T20240519_A3_Camp_SubBlock_Outlines'
            });
var format_T20240519_A2_Camp_Block_Outlines_1 = new ol.format.GeoJSON();
var features_T20240519_A2_Camp_Block_Outlines_1 = format_T20240519_A2_Camp_Block_Outlines_1.readFeatures(json_T20240519_A2_Camp_Block_Outlines_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T20240519_A2_Camp_Block_Outlines_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T20240519_A2_Camp_Block_Outlines_1.addFeatures(features_T20240519_A2_Camp_Block_Outlines_1);
var lyr_T20240519_A2_Camp_Block_Outlines_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T20240519_A2_Camp_Block_Outlines_1, 
                style: style_T20240519_A2_Camp_Block_Outlines_1,
                popuplayertitle: 'T20240519_A2_Camp_Block_Outlines',
                interactive: false,
    title: 'T20240519_A2_Camp_Block_Outlines<br />\
    <img src="styles/legend/T20240519_A2_Camp_Block_Outlines_1_0.png" /> A<br />\
    <img src="styles/legend/T20240519_A2_Camp_Block_Outlines_1_1.png" /> B<br />\
    <img src="styles/legend/T20240519_A2_Camp_Block_Outlines_1_2.png" /> C<br />\
    <img src="styles/legend/T20240519_A2_Camp_Block_Outlines_1_3.png" /> D<br />\
    <img src="styles/legend/T20240519_A2_Camp_Block_Outlines_1_4.png" /> E<br />\
    <img src="styles/legend/T20240519_A2_Camp_Block_Outlines_1_5.png" /> F<br />\
    <img src="styles/legend/T20240519_A2_Camp_Block_Outlines_1_6.png" /> G<br />\
    <img src="styles/legend/T20240519_A2_Camp_Block_Outlines_1_7.png" /> H<br />\
    <img src="styles/legend/T20240519_A2_Camp_Block_Outlines_1_8.png" /> I<br />\
    <img src="styles/legend/T20240519_A2_Camp_Block_Outlines_1_9.png" /> P<br />\
    <img src="styles/legend/T20240519_A2_Camp_Block_Outlines_1_10.png" /> <br />' });
var format_T20230412_A1_Camp_Outlines_2 = new ol.format.GeoJSON();
var features_T20230412_A1_Camp_Outlines_2 = format_T20230412_A1_Camp_Outlines_2.readFeatures(json_T20230412_A1_Camp_Outlines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T20230412_A1_Camp_Outlines_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T20230412_A1_Camp_Outlines_2.addFeatures(features_T20230412_A1_Camp_Outlines_2);
var lyr_T20230412_A1_Camp_Outlines_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T20230412_A1_Camp_Outlines_2, 
                style: style_T20230412_A1_Camp_Outlines_2,
                popuplayertitle: 'T20230412_A1_Camp_Outlines',
                interactive: false,
                title: '<img src="styles/legend/T20230412_A1_Camp_Outlines_2.png" /> T20230412_A1_Camp_Outlines'
            });

        var lyr_GoogleSatellite_3 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SubBlockt20240519_a3_camp_subblock_outlines_4 = new ol.format.GeoJSON();
var features_SubBlockt20240519_a3_camp_subblock_outlines_4 = format_SubBlockt20240519_a3_camp_subblock_outlines_4.readFeatures(json_SubBlockt20240519_a3_camp_subblock_outlines_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SubBlockt20240519_a3_camp_subblock_outlines_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SubBlockt20240519_a3_camp_subblock_outlines_4.addFeatures(features_SubBlockt20240519_a3_camp_subblock_outlines_4);
var lyr_SubBlockt20240519_a3_camp_subblock_outlines_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SubBlockt20240519_a3_camp_subblock_outlines_4, 
                style: style_SubBlockt20240519_a3_camp_subblock_outlines_4,
                popuplayertitle: 'Sub-Block — t20240519_a3_camp_subblock_outlines',
                interactive: false,
                title: '<img src="styles/legend/SubBlockt20240519_a3_camp_subblock_outlines_4.png" /> Sub-Block — t20240519_a3_camp_subblock_outlines'
            });
var format_Blockt20240519_a2_camp_block_outlines_5 = new ol.format.GeoJSON();
var features_Blockt20240519_a2_camp_block_outlines_5 = format_Blockt20240519_a2_camp_block_outlines_5.readFeatures(json_Blockt20240519_a2_camp_block_outlines_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Blockt20240519_a2_camp_block_outlines_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Blockt20240519_a2_camp_block_outlines_5.addFeatures(features_Blockt20240519_a2_camp_block_outlines_5);
var lyr_Blockt20240519_a2_camp_block_outlines_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Blockt20240519_a2_camp_block_outlines_5, 
                style: style_Blockt20240519_a2_camp_block_outlines_5,
                popuplayertitle: 'Block — t20240519_a2_camp_block_outlines',
                interactive: false,
    title: 'Block — t20240519_a2_camp_block_outlines<br />\
    <img src="styles/legend/Blockt20240519_a2_camp_block_outlines_5_0.png" /> A<br />\
    <img src="styles/legend/Blockt20240519_a2_camp_block_outlines_5_1.png" /> B<br />\
    <img src="styles/legend/Blockt20240519_a2_camp_block_outlines_5_2.png" /> C<br />\
    <img src="styles/legend/Blockt20240519_a2_camp_block_outlines_5_3.png" /> D<br />\
    <img src="styles/legend/Blockt20240519_a2_camp_block_outlines_5_4.png" /> E<br />\
    <img src="styles/legend/Blockt20240519_a2_camp_block_outlines_5_5.png" /> F<br />\
    <img src="styles/legend/Blockt20240519_a2_camp_block_outlines_5_6.png" /> G<br />\
    <img src="styles/legend/Blockt20240519_a2_camp_block_outlines_5_7.png" /> <br />' });
var format_Campt20230412_a1_camp_outlines_6 = new ol.format.GeoJSON();
var features_Campt20230412_a1_camp_outlines_6 = format_Campt20230412_a1_camp_outlines_6.readFeatures(json_Campt20230412_a1_camp_outlines_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Campt20230412_a1_camp_outlines_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Campt20230412_a1_camp_outlines_6.addFeatures(features_Campt20230412_a1_camp_outlines_6);
var lyr_Campt20230412_a1_camp_outlines_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Campt20230412_a1_camp_outlines_6, 
                style: style_Campt20230412_a1_camp_outlines_6,
                popuplayertitle: 'Camp — t20230412_a1_camp_outlines',
                interactive: false,
                title: '<img src="styles/legend/Campt20230412_a1_camp_outlines_6.png" /> Camp — t20230412_a1_camp_outlines'
            });
var format_FacilityInfo_7 = new ol.format.GeoJSON();
var features_FacilityInfo_7 = format_FacilityInfo_7.readFeatures(json_FacilityInfo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FacilityInfo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FacilityInfo_7.addFeatures(features_FacilityInfo_7);
var lyr_FacilityInfo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FacilityInfo_7, 
                style: style_FacilityInfo_7,
                popuplayertitle: 'Facility Info',
                interactive: true,
                title: '<img src="styles/legend/FacilityInfo_7.png" /> Facility Info'
            });

lyr_T20240519_A3_Camp_SubBlock_Outlines_0.setVisible(false);lyr_T20240519_A2_Camp_Block_Outlines_1.setVisible(false);lyr_T20230412_A1_Camp_Outlines_2.setVisible(false);lyr_GoogleSatellite_3.setVisible(true);lyr_SubBlockt20240519_a3_camp_subblock_outlines_4.setVisible(true);lyr_Blockt20240519_a2_camp_block_outlines_5.setVisible(true);lyr_Campt20230412_a1_camp_outlines_6.setVisible(true);lyr_FacilityInfo_7.setVisible(true);
var layersList = [lyr_T20240519_A3_Camp_SubBlock_Outlines_0,lyr_T20240519_A2_Camp_Block_Outlines_1,lyr_T20230412_A1_Camp_Outlines_2,lyr_GoogleSatellite_3,lyr_SubBlockt20240519_a3_camp_subblock_outlines_4,lyr_Blockt20240519_a2_camp_block_outlines_5,lyr_Campt20230412_a1_camp_outlines_6,lyr_FacilityInfo_7];
lyr_T20240519_A3_Camp_SubBlock_Outlines_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'District': 'District', 'Upazila': 'Upazila', 'Union': 'Union', 'SBlockSSID': 'SBlockSSID', 'SBlockName': 'SBlockName', 'SBlockLabe': 'SBlockLabe', 'BlockSSID': 'BlockSSID', 'BlockName': 'BlockName', 'BlockLabel': 'BlockLabel', 'CampSSID': 'CampSSID', 'CampName': 'CampName', 'SMSDCamp': 'SMSDCamp', 'NPMCamp': 'NPMCamp', 'CampLabel': 'CampLabel', 'CNameAlias': 'CNameAlias', 'AreaAcres': 'AreaAcres', 'AreaSqM': 'AreaSqM', 'AreaSqKM': 'AreaSqKM', 'CentroidX': 'CentroidX', 'CentroidY': 'CentroidY', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_T20240519_A2_Camp_Block_Outlines_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'District': 'District', 'Upazila': 'Upazila', 'Union': 'Union', 'BlockSSID': 'BlockSSID', 'BlockName': 'BlockName', 'BlockLabel': 'BlockLabel', 'CampSSID': 'CampSSID', 'CampName_1': 'CampName_1', 'SMSDCamp': 'SMSDCamp', 'NPMCamp': 'NPMCamp', 'CampLabel': 'CampLabel', 'CNameAlias': 'CNameAlias', 'CentroidX': 'CentroidX', 'CentroidY': 'CentroidY', 'AreaAcres': 'AreaAcres', 'AreaSqM': 'AreaSqM', 'AreaSqKM': 'AreaSqKM', 'Shape_Leng': 'Shape_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_T20230412_A1_Camp_Outlines_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'District': 'District', 'Upazila': 'Upazila', 'Union': 'Union', 'CampSSID': 'CampSSID', 'CampName': 'CampName', 'SMSDCamp': 'SMSDCamp', 'NPMCamp': 'NPMCamp', 'CNameAlias': 'CNameAlias', 'CampLabel': 'CampLabel', 'Settlement': 'Settlement', 'CentroidX': 'CentroidX', 'CentroidY': 'CentroidY', 'AreaAcres': 'AreaAcres', 'AreaSqM': 'AreaSqM', 'AreaSqKM': 'AreaSqKM', 'Type': 'Type', 'Camp_Let': 'Camp_Let', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_SubBlockt20240519_a3_camp_subblock_outlines_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'District': 'District', 'Upazila': 'Upazila', 'Union': 'Union', 'SBlockSSID': 'SBlockSSID', 'SBlockName': 'SBlockName', 'SBlockLabe': 'SBlockLabe', 'BlockSSID': 'BlockSSID', 'BlockName': 'BlockName', 'BlockLabel': 'BlockLabel', 'CampSSID': 'CampSSID', 'CampName': 'CampName', 'SMSDCamp': 'SMSDCamp', 'NPMCamp': 'NPMCamp', 'CampLabel': 'CampLabel', 'CNameAlias': 'CNameAlias', 'AreaAcres': 'AreaAcres', 'AreaSqM': 'AreaSqM', 'AreaSqKM': 'AreaSqKM', 'CentroidX': 'CentroidX', 'CentroidY': 'CentroidY', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Blockt20240519_a2_camp_block_outlines_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'District': 'District', 'Upazila': 'Upazila', 'Union': 'Union', 'BlockSSID': 'BlockSSID', 'BlockName': 'BlockName', 'BlockLabel': 'BlockLabel', 'CampSSID': 'CampSSID', 'CampName_1': 'CampName_1', 'SMSDCamp': 'SMSDCamp', 'NPMCamp': 'NPMCamp', 'CampLabel': 'CampLabel', 'CNameAlias': 'CNameAlias', 'CentroidX': 'CentroidX', 'CentroidY': 'CentroidY', 'AreaAcres': 'AreaAcres', 'AreaSqM': 'AreaSqM', 'AreaSqKM': 'AreaSqKM', 'Shape_Leng': 'Shape_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Campt20230412_a1_camp_outlines_6.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'District': 'District', 'Upazila': 'Upazila', 'Union': 'Union', 'CampSSID': 'CampSSID', 'CampName': 'CampName', 'SMSDCamp': 'SMSDCamp', 'NPMCamp': 'NPMCamp', 'CNameAlias': 'CNameAlias', 'CampLabel': 'CampLabel', 'Settlement': 'Settlement', 'CentroidX': 'CentroidX', 'CentroidY': 'CentroidY', 'AreaAcres': 'AreaAcres', 'AreaSqM': 'AreaSqM', 'AreaSqKM': 'AreaSqKM', 'Type': 'Type', 'Camp_Let': 'Camp_Let', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FacilityInfo_7.set('fieldAliases', {'New Facility ID': 'New Facility ID', 'NAME OF VOLUNTEER': 'NAME OF VOLUNTEER', 'CAMP': 'CAMP', 'BLOCK': 'BLOCK', 'SUB-BLOCK': 'SUB-BLOCK', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_T20240519_A3_Camp_SubBlock_Outlines_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'District': 'TextEdit', 'Upazila': 'TextEdit', 'Union': 'TextEdit', 'SBlockSSID': 'TextEdit', 'SBlockName': 'TextEdit', 'SBlockLabe': 'TextEdit', 'BlockSSID': 'TextEdit', 'BlockName': 'TextEdit', 'BlockLabel': 'TextEdit', 'CampSSID': 'TextEdit', 'CampName': 'TextEdit', 'SMSDCamp': 'TextEdit', 'NPMCamp': 'TextEdit', 'CampLabel': 'TextEdit', 'CNameAlias': 'TextEdit', 'AreaAcres': 'TextEdit', 'AreaSqM': 'TextEdit', 'AreaSqKM': 'TextEdit', 'CentroidX': 'TextEdit', 'CentroidY': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_T20240519_A2_Camp_Block_Outlines_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'Range', 'District': 'TextEdit', 'Upazila': 'TextEdit', 'Union': 'TextEdit', 'BlockSSID': 'TextEdit', 'BlockName': 'TextEdit', 'BlockLabel': 'TextEdit', 'CampSSID': 'TextEdit', 'CampName_1': 'TextEdit', 'SMSDCamp': 'TextEdit', 'NPMCamp': 'TextEdit', 'CampLabel': 'TextEdit', 'CNameAlias': 'TextEdit', 'CentroidX': 'TextEdit', 'CentroidY': 'TextEdit', 'AreaAcres': 'TextEdit', 'AreaSqM': 'TextEdit', 'AreaSqKM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_T20230412_A1_Camp_Outlines_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'District': 'TextEdit', 'Upazila': 'TextEdit', 'Union': 'TextEdit', 'CampSSID': 'TextEdit', 'CampName': 'TextEdit', 'SMSDCamp': 'TextEdit', 'NPMCamp': 'TextEdit', 'CNameAlias': 'TextEdit', 'CampLabel': 'TextEdit', 'Settlement': 'TextEdit', 'CentroidX': 'TextEdit', 'CentroidY': 'TextEdit', 'AreaAcres': 'TextEdit', 'AreaSqM': 'TextEdit', 'AreaSqKM': 'TextEdit', 'Type': 'TextEdit', 'Camp_Let': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SubBlockt20240519_a3_camp_subblock_outlines_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'District': 'TextEdit', 'Upazila': 'TextEdit', 'Union': 'TextEdit', 'SBlockSSID': 'TextEdit', 'SBlockName': 'TextEdit', 'SBlockLabe': 'TextEdit', 'BlockSSID': 'TextEdit', 'BlockName': 'TextEdit', 'BlockLabel': 'TextEdit', 'CampSSID': 'TextEdit', 'CampName': 'TextEdit', 'SMSDCamp': 'TextEdit', 'NPMCamp': 'TextEdit', 'CampLabel': 'TextEdit', 'CNameAlias': 'TextEdit', 'AreaAcres': 'TextEdit', 'AreaSqM': 'TextEdit', 'AreaSqKM': 'TextEdit', 'CentroidX': 'TextEdit', 'CentroidY': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Blockt20240519_a2_camp_block_outlines_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'OBJECTID': 'Range', 'District': 'TextEdit', 'Upazila': 'TextEdit', 'Union': 'TextEdit', 'BlockSSID': 'TextEdit', 'BlockName': 'TextEdit', 'BlockLabel': 'TextEdit', 'CampSSID': 'TextEdit', 'CampName_1': 'TextEdit', 'SMSDCamp': 'TextEdit', 'NPMCamp': 'TextEdit', 'CampLabel': 'TextEdit', 'CNameAlias': 'TextEdit', 'CentroidX': 'TextEdit', 'CentroidY': 'TextEdit', 'AreaAcres': 'TextEdit', 'AreaSqM': 'TextEdit', 'AreaSqKM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Campt20230412_a1_camp_outlines_6.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'District': 'TextEdit', 'Upazila': 'TextEdit', 'Union': 'TextEdit', 'CampSSID': 'TextEdit', 'CampName': 'TextEdit', 'SMSDCamp': 'TextEdit', 'NPMCamp': 'TextEdit', 'CNameAlias': 'TextEdit', 'CampLabel': 'TextEdit', 'Settlement': 'TextEdit', 'CentroidX': 'TextEdit', 'CentroidY': 'TextEdit', 'AreaAcres': 'TextEdit', 'AreaSqM': 'TextEdit', 'AreaSqKM': 'TextEdit', 'Type': 'TextEdit', 'Camp_Let': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_FacilityInfo_7.set('fieldImages', {'New Facility ID': '', 'NAME OF VOLUNTEER': '', 'CAMP': '', 'BLOCK': '', 'SUB-BLOCK': '', 'LATITUDE': '', 'LONGITUDE': '', });
lyr_T20240519_A3_Camp_SubBlock_Outlines_0.set('fieldLabels', {'OBJECTID': 'no label', 'District': 'no label', 'Upazila': 'no label', 'Union': 'no label', 'SBlockSSID': 'no label', 'SBlockName': 'no label', 'SBlockLabe': 'no label', 'BlockSSID': 'no label', 'BlockName': 'no label', 'BlockLabel': 'no label', 'CampSSID': 'no label', 'CampName': 'no label', 'SMSDCamp': 'no label', 'NPMCamp': 'no label', 'CampLabel': 'no label', 'CNameAlias': 'no label', 'AreaAcres': 'no label', 'AreaSqM': 'no label', 'AreaSqKM': 'no label', 'CentroidX': 'no label', 'CentroidY': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_T20240519_A2_Camp_Block_Outlines_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'District': 'no label', 'Upazila': 'no label', 'Union': 'no label', 'BlockSSID': 'no label', 'BlockName': 'no label', 'BlockLabel': 'no label', 'CampSSID': 'no label', 'CampName_1': 'no label', 'SMSDCamp': 'no label', 'NPMCamp': 'no label', 'CampLabel': 'no label', 'CNameAlias': 'no label', 'CentroidX': 'no label', 'CentroidY': 'no label', 'AreaAcres': 'no label', 'AreaSqM': 'no label', 'AreaSqKM': 'no label', 'Shape_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_T20230412_A1_Camp_Outlines_2.set('fieldLabels', {'OBJECTID': 'no label', 'District': 'no label', 'Upazila': 'no label', 'Union': 'no label', 'CampSSID': 'no label', 'CampName': 'no label', 'SMSDCamp': 'no label', 'NPMCamp': 'no label', 'CNameAlias': 'no label', 'CampLabel': 'no label', 'Settlement': 'no label', 'CentroidX': 'no label', 'CentroidY': 'no label', 'AreaAcres': 'no label', 'AreaSqM': 'no label', 'AreaSqKM': 'no label', 'Type': 'no label', 'Camp_Let': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_SubBlockt20240519_a3_camp_subblock_outlines_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'District': 'no label', 'Upazila': 'no label', 'Union': 'no label', 'SBlockSSID': 'no label', 'SBlockName': 'no label', 'SBlockLabe': 'no label', 'BlockSSID': 'no label', 'BlockName': 'no label', 'BlockLabel': 'no label', 'CampSSID': 'no label', 'CampName': 'no label', 'SMSDCamp': 'no label', 'NPMCamp': 'no label', 'CampLabel': 'no label', 'CNameAlias': 'no label', 'AreaAcres': 'no label', 'AreaSqM': 'no label', 'AreaSqKM': 'no label', 'CentroidX': 'no label', 'CentroidY': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Blockt20240519_a2_camp_block_outlines_5.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'District': 'no label', 'Upazila': 'no label', 'Union': 'no label', 'BlockSSID': 'no label', 'BlockName': 'no label', 'BlockLabel': 'no label', 'CampSSID': 'no label', 'CampName_1': 'no label', 'SMSDCamp': 'no label', 'NPMCamp': 'no label', 'CampLabel': 'no label', 'CNameAlias': 'no label', 'CentroidX': 'no label', 'CentroidY': 'no label', 'AreaAcres': 'no label', 'AreaSqM': 'no label', 'AreaSqKM': 'no label', 'Shape_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Campt20230412_a1_camp_outlines_6.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'District': 'no label', 'Upazila': 'no label', 'Union': 'no label', 'CampSSID': 'no label', 'CampName': 'no label', 'SMSDCamp': 'no label', 'NPMCamp': 'no label', 'CNameAlias': 'no label', 'CampLabel': 'no label', 'Settlement': 'no label', 'CentroidX': 'no label', 'CentroidY': 'no label', 'AreaAcres': 'no label', 'AreaSqM': 'no label', 'AreaSqKM': 'no label', 'Type': 'no label', 'Camp_Let': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FacilityInfo_7.set('fieldLabels', {'New Facility ID': 'no label', 'NAME OF VOLUNTEER': 'no label', 'CAMP': 'no label', 'BLOCK': 'no label', 'SUB-BLOCK': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', });
lyr_FacilityInfo_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});