var size = 0;
var placement = 'point';
function categories_T20240519_A2_Camp_Block_Outlines_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'A':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,26,28,0.4)', lineDash: [1.976,0.988], lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(238,48,171,0.4)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'B':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,26,28,0.4)', lineDash: [1.976,0.988], lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(202,200,75,0.4)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'C':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,26,28,0.4)', lineDash: [1.976,0.988], lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(228,165,113,0.4)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'D':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,26,28,0.4)', lineDash: [1.976,0.988], lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(108,64,230,0.4)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'E':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,26,28,0.4)', lineDash: [1.976,0.988], lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(126,155,228,0.4)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'F':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,26,28,0.4)', lineDash: [1.976,0.988], lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(212,91,103,0.4)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'G':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,26,28,0.4)', lineDash: [1.976,0.988], lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(187,97,207,0.4)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'H':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,26,28,0.4)', lineDash: [1.976,0.988], lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(152,205,106,0.4)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'I':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,26,28,0.4)', lineDash: [1.976,0.988], lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(48,207,61,0.4)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'P':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,26,28,0.4)', lineDash: [1.976,0.988], lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(80,223,168,0.4)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,26,28,0.4)', lineDash: [1.976,0.988], lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(61,203,231,0.4)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_T20240519_A2_Camp_Block_Outlines_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("BlockLabel");
    var labelFont = "15.600000000000001px \'Times New Roman\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("BlockLabel") !== null) {
        labelText = String(feature.get("BlockLabel"));
    }
    
    var style = categories_T20240519_A2_Camp_Block_Outlines_2(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
