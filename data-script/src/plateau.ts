const SpatialIdRequest = require("./spatial-id-request.js")
import { Space } from "@spatial-id/javascript-sdk"
import * as fs from "fs";
import * as GeoJSON from "geojson"

const isStr = (s: any):s is string => {
  return !!s
}

const getPlateau = async(s: Space) => {
  let data;
  try {
    data = await SpatialIdRequest.queryVectorTile({url:"https://tileserver.dejicho-chosa.geolonia-dev.click/services/plateau_minato_ku?key=YOUR-API-KEY"}, s)
  }catch(e){
    console.error("err---", e);
  }
  return data
}

const readFeatures = (path: string): GeoJSON.FeatureCollection => {
  const data = fs.readFileSync(path)
  const geojson = JSON.parse(data.toString())
  return geojson as GeoJSON.FeatureCollection //TODO: fix later
}


const geojsonData = readFeatures("./data/clipped/minato-xyz-16.geojson")

const res = Promise.all(
geojsonData.features.map(async f => {
  if(!f)return
  const id = f.properties?.id
  if(isStr(id)){
    const space = new SpatialIdRequest.Space(id);
    let plateauData;
    try {
      plateauData = await getPlateau(space);
    }catch(e){
      console.log("err: ", e);
    }
    const plateauBuildings = plateauData.features.map((f: any) => f.properties)
    f.properties = {...f.properties, plateauBuildings }
    return f
  }
})
)

res.then(d => {
  fs.writeFileSync(`./data/attr/data_attr_16.geojson`, JSON.stringify(geojsonData))
}).catch(e => console.error(e))
