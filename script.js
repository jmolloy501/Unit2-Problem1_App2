require([
        "esri/config",
        "esri/Map",
        "esri/views/MapView",
        
        "esri/layers/FeatureLayer"

  ], function(esriConfig,Map, MapView, FeatureLayer) {
        esriConfig.apiKey = "AAPK67d1cbf28ed14c1c804f49a6042c44fd2XwMIGFEEdYuovdTBQtKKb1PMP69IoYvFscedg6eV5dZFRTrIGP1cEltoyLjQkd-";

        const map = new Map({
          basemap: "arcgis-topographic" // Basemap layer service
        });
        
        const view = new MapView({
          map: map,
          center: [-92, 38.5], // Longitude, latitude
          zoom: 8, // Zoom level
          container: "viewDiv" // Div element
        });
        
        //Katy Trail feature layer (line)
  const TrailLayer = new FeatureLayer({
    url: "https://services2.arcgis.com/kNS2ppBA4rwAQQZy/arcgis/rest/services/MO_2019_Katy_Trail/FeatureServer"
  });
        map.add(TrailLayer);
        
        //Lewis and Clark Historic Sites feature layer (point)
  const HistoricSites = new FeatureLayer({
    url: "https://services1.arcgis.com/fBc8EJBxQRMcHlei/arcgis/rest/services/HPHS/FeatureServer"
  });
        
        map.add(HistoricSites);
        
        
      });
