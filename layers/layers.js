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
var format_TOWER_1 = new ol.format.GeoJSON();
var features_TOWER_1 = format_TOWER_1.readFeatures(json_TOWER_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOWER_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOWER_1.addFeatures(features_TOWER_1);
var lyr_TOWER_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TOWER_1, 
                style: style_TOWER_1,
                interactive: true,
                title: '<img src="styles/legend/TOWER_1.png" /> TOWER'
            });

lyr_OSMStandard_0.setVisible(true);lyr_TOWER_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_TOWER_1];
lyr_TOWER_1.set('fieldAliases', {'OGF_ID': 'OGF_ID', 'SUBTYPE': 'SUBTYPE', 'STYPE_NUM': 'STYPE_NUM', 'TOWER_ID': 'TOWER_ID', 'NAME': 'NAME', 'PURPOSE': 'PURPOSE', 'CALL_SIGN': 'CALL_SIGN', 'HEIGHT': 'HEIGHT', 'ELEV_ASL': 'ELEV_ASL', 'FACE_SIZE': 'FACE_SIZE', 'MANUFACTUR': 'MANUFACTUR', 'MODEL_NUM': 'MODEL_NUM', 'DATE_CONS': 'DATE_CONS', 'INSPECTED': 'INSPECTED', 'POWER': 'POWER', 'AP_RESTR': 'AP_RESTR', 'UPGRD_REQ': 'UPGRD_REQ', 'FULL_LOAD': 'FULL_LOAD', 'COMMENTS': 'COMMENTS', 'ACCURACY': 'ACCURACY', 'LOC_DES': 'LOC_DES', 'GUNT_DES': 'GUNT_DES', 'SENS_CLASS': 'SENS_CLASS', 'SENS_DATE': 'SENS_DATE', 'SENS_RAT': 'SENS_RAT', 'SENS_DESCR': 'SENS_DESCR', 'VERISTT_FL': 'VERISTT_FL', 'VERISTT_DT': 'VERISTT_DT', 'BUSEFFDTFL': 'BUSEFFDTFL', 'BUS_EFF_DT': 'BUS_EFF_DT', 'BUS_EXP_DT': 'BUS_EXP_DT', 'SYS_AREA': 'SYS_AREA', 'SYS_LENGTH': 'SYS_LENGTH', 'USER_CALC': 'USER_CALC', 'GNL_CMT': 'GNL_CMT', 'GEO_UPD_DT': 'GEO_UPD_DT', 'EFF_DATE': 'EFF_DATE', });
lyr_TOWER_1.set('fieldImages', {'OGF_ID': '', 'SUBTYPE': '', 'STYPE_NUM': '', 'TOWER_ID': '', 'NAME': '', 'PURPOSE': '', 'CALL_SIGN': '', 'HEIGHT': '', 'ELEV_ASL': '', 'FACE_SIZE': '', 'MANUFACTUR': '', 'MODEL_NUM': '', 'DATE_CONS': '', 'INSPECTED': '', 'POWER': '', 'AP_RESTR': '', 'UPGRD_REQ': '', 'FULL_LOAD': '', 'COMMENTS': '', 'ACCURACY': '', 'LOC_DES': '', 'GUNT_DES': '', 'SENS_CLASS': '', 'SENS_DATE': '', 'SENS_RAT': '', 'SENS_DESCR': '', 'VERISTT_FL': '', 'VERISTT_DT': '', 'BUSEFFDTFL': '', 'BUS_EFF_DT': '', 'BUS_EXP_DT': '', 'SYS_AREA': '', 'SYS_LENGTH': '', 'USER_CALC': '', 'GNL_CMT': '', 'GEO_UPD_DT': '', 'EFF_DATE': '', });
lyr_TOWER_1.set('fieldLabels', {'OGF_ID': 'no label', 'SUBTYPE': 'no label', 'STYPE_NUM': 'no label', 'TOWER_ID': 'no label', 'NAME': 'no label', 'PURPOSE': 'no label', 'CALL_SIGN': 'no label', 'HEIGHT': 'no label', 'ELEV_ASL': 'no label', 'FACE_SIZE': 'no label', 'MANUFACTUR': 'no label', 'MODEL_NUM': 'no label', 'DATE_CONS': 'no label', 'INSPECTED': 'no label', 'POWER': 'no label', 'AP_RESTR': 'no label', 'UPGRD_REQ': 'no label', 'FULL_LOAD': 'no label', 'COMMENTS': 'no label', 'ACCURACY': 'no label', 'LOC_DES': 'no label', 'GUNT_DES': 'no label', 'SENS_CLASS': 'no label', 'SENS_DATE': 'no label', 'SENS_RAT': 'no label', 'SENS_DESCR': 'no label', 'VERISTT_FL': 'no label', 'VERISTT_DT': 'no label', 'BUSEFFDTFL': 'no label', 'BUS_EFF_DT': 'no label', 'BUS_EXP_DT': 'no label', 'SYS_AREA': 'no label', 'SYS_LENGTH': 'no label', 'USER_CALC': 'no label', 'GNL_CMT': 'no label', 'GEO_UPD_DT': 'no label', 'EFF_DATE': 'no label', });
lyr_TOWER_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});