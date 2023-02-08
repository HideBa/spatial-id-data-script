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
    data = await SpatialIdRequest.queryVectorTile({tiles:["https://tileserver.dejicho-chosa.geolonia-dev.click/services/mesh_population/202108/1/00/tiles/{z}/{x}/{y}.pbf?key=YOUR-API-KEY"]}, s)
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
    // const populations = populationData.features.map((f: any) => f.properties)
    const populations = populationData.features.reduce((prev: any, current: any) => {
      const prop = current.properties
      return {
        pop_sex_code_1:prev.pop_sex_code_1 + prop.pop_sex_code_1,
        pop_sex_code_2:prev.pop_sex_code_2 + prop.pop_sex_code_2,
        pop_age00:prev.pop_age00 + prop.pop_age00,
        pop_age10:prev.pop_age10 + prop.pop_age10,
        pop_age20:prev.pop_age20 + prop.pop_age20,
        pop_age30:prev.pop_age30 + prop.pop_age30,
        pop_age40:prev.pop_age40 + prop.pop_age40,
        pop_age50:prev.pop_age50 + prop.pop_age50,
      }
    }, {
        pop_sex_code_1:0,
        pop_sex_code_2:0,
        pop_age00:0,
        pop_age10:0,
        pop_age20:0,
        pop_age30:0,
        pop_age40:0,
        pop_age50:0
    })
    console.log("pop----------", populations);
    f.properties = {...f.properties, populations }
    return f
  }
})
)

res.then(d => {
  fs.writeFileSync(`./data/attr/data_population_16.geojson`, JSON.stringify(geojsonData))
}).catch(e => console.error(e))
