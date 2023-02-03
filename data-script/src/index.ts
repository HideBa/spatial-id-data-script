import { Space } from "@spatial-id/javascript-sdk"
import * as GeoJSON from "geojson";
import * as fs from "fs";

const initialXYZF: {
  z: number;
  f: number;
  x: number;
  y: number;
} = {
  z: 19,
  f: 0,
  x: 465648,
  y: 206500
}
const space = new Space(initialXYZF)

const parent = space.parent(10)
const targetZoom = 16

type RawData = {
  id: string;
  polygon: number[][];
}

//目的のZoomレベルに来たら値を返す、そうでなければその子供でされにこの関数を呼び出す
const extractChildren = (me: Space, currentZ: number, targetZ: number): RawData[] => {
  const children = me.children()
    if(currentZ === targetZ){
      const result = children.map(c => {
        const points = c.vertices3d().filter(coord => coord[2] === 0).map(coord => ([coord[0], coord[1]]))
        return points.length > 0 ? {id: c.id, polygon: [points], center: c.center, alt:c.alt, upId: c.up().id, downId: c.down().id, northId: c.north().id, eastId: c.east().id, southId: c.south().id, westId: c.west().id, parentId: c.parent().id} : undefined
      })
      const result2 = result.filter(c => !!c) as any
      return result2
    }
    const data = children.map(c => (extractChildren(c, currentZ+1, targetZ)))
    const emptyData: RawData[] = []
    const flattenData = emptyData.concat(...data)

    return flattenData
}

const data = extractChildren(parent, parent.zoom, targetZoom-1)

const geoData = (GeoJSON as any).parse(data, {"Polygon": "polygon", "LineString": "line"})
console.log(geoData);

fs.writeFileSync(`./data/grid/data_${targetZoom}.geojson`, JSON.stringify(geoData))
