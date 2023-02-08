const SpatialIdRequest = require("./spatial-id-request.js")
import { Space } from "@spatial-id/javascript-sdk"
import * as fs from "fs";
import * as GeoJSON from "geojson"

const isStr = (s: any):s is string => {
  return !!s
}

const getPopulation = async(s: Space) => {
  let data;
  try {
    data = await SpatialIdRequest.queryVectorTile({tiles:["https://tileserver.dejicho-chosa.geolonia-dev.click/services/fudosan_data/tiles/{z}/{x}/{y}.pbf?key=YOUR-API-KEY"]}, s)
    console.log("d------", data);
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
    let populationData;
    try {
      populationData = await getPopulation(space);
    }catch(e){
      console.log("err: ", e);
    }
    const populations = populationData.features.map((f: any) => f.properties)
    console.log("pop----------", populations);
    f.properties = {...f.properties, populations }
    return f
  }
})
)

res.then(d => {
  console.log("res---", d);
  fs.writeFileSync(`./data/attr/data_population_16.geojson`, JSON.stringify(geojsonData))
}).catch(e => console.error(e))
