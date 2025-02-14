import { AreaDefinition, BaseMap, MapStyle } from "~/types.ts";
import { DEFAULT_MAP_STYLE } from "~/defaults.ts";

// Area East
import sector30 from "./polys/east/30.geojson";
import sector33 from "./polys/east/33.geojson";
import sector34 from "./polys/east/34.geojson";
import sector44 from "./polys/east/44.geojson";
import sector45 from "./polys/east/45.geojson";
import sector46 from "./polys/east/46.geojson";

// Area North
import sector29 from "./polys/north/29.geojson";
import sector32 from "./polys/north/32.geojson";
import sector40 from "./polys/north/40.geojson";
import sector41 from "./polys/north/41.geojson";
import sector42 from "./polys/north/42.geojson";
import sector43 from "./polys/north/43.geojson";

// Pac North
import sector31 from "./polys/pacnorth/31.geojson";
import sector36 from "./polys/pacnorth/36.geojson";

// Pac South
import sector14 from "./polys/pacsouth/14.geojson";
import sector35 from "./polys/pacsouth/35.geojson";

// Area South
import sector10 from "./polys/south/10.geojson";
import sector11 from "./polys/south/11.geojson";
import sector13 from "./polys/south/13.geojson";
import sector15 from "./polys/south/15.geojson";
import sector16 from "./polys/south/16.geojson";
import sector22 from "./polys/south/22.geojson";

export const MAP_STYLES: MapStyle[] = [
  DEFAULT_MAP_STYLE,
  {
    value: "mapbox://styles/mapbox/light-v11",
    label: "World Light",
    disabled: false,
  },
  {
    value: "mapbox://styles/kengreim/clw6l16rw002o01q1cq9h43ft",
    label: "Satellite Low Opacity",
    disabled: false,
  },
];

export const BASE_MAPS: BaseMap[] = [
  {
    name: "LO W-S",
    url: "mapbox://kengreim.4525vady",
    sourceLayer: "01GE9SE1H343T0ZZQ6DP787MKV-2yipi9",
    showDefault: true,
  },
  {
    name: "HI W-S",
    url: "mapbox://kengreim.06318cwy",
    sourceLayer: "3_HI-W-536qzx",
    showDefault: false,
  },
  {
    name: "LO E-N",
    url: "mapbox://kengreim.24hjuu7e",
    sourceLayer: "2_LO-E-68fxnv",
    showDefault: false,
  },
  {
    name: "HI E-N",
    url: "mapbox://kengreim.1pttoy8k",
    sourceLayer: "4_HI-E-ddd7d9",
    showDefault: false,
  },
];

export const AREA_NORTH_POLYS: AreaDefinition = {
  name: "Area North",
  sectors: [
    {
      sectorName: "29",
      defaultColor: "#e60049",
      polyUrl: sector29,
    },
    {
      sectorName: "32",
      defaultColor: "#0bb4ff",
      polyUrl: sector32,
    },
    {
      sectorName: "40",
      defaultColor: "#e6d800",
      polyUrl: sector40,
    },
    {
      sectorName: "41",
      defaultColor: "#fd9a5c",
      polyUrl: sector41,
    },
    {
      sectorName: "42",
      defaultColor: "#5100e6",
      polyUrl: sector42,
    },
    {
      sectorName: "43",
      defaultColor: "#621065",
      polyUrl: sector43,
    },
  ],
};

export const AREA_EAST_POLYS: AreaDefinition = {
  name: "Area East",
  sectors: [
    {
      sectorName: "30",
      defaultColor: "#31754f",
      polyUrl: sector30,
    },
    {
      sectorName: "33",
      defaultColor: "#674040",
      polyUrl: sector33,
    },
    {
      sectorName: "34",
      defaultColor: "#1abdaa",
      polyUrl: sector34,
    },
    {
      sectorName: "44",
      defaultColor: "#bca843",
      polyUrl: sector44,
    },
    {
      sectorName: "45",
      defaultColor: "#a30707",
      polyUrl: sector45,
    },
    {
      sectorName: "46",
      defaultColor: "#141955",
      polyUrl: sector46,
    },
  ],
};

export const PAC_NORTH_POLYS: AreaDefinition = {
  name: "Pac North",
  sectors: [
    {
      sectorName: "31",
      defaultColor: "#7D7F7D",
      polyUrl: sector31,
    },
    {
      sectorName: "36",
      defaultColor: "#FAD201",
      polyUrl: sector36,
    },
  ],
};

export const PAC_SOUTH_POLYS: AreaDefinition = {
  name: "Pac South",
  sectors: [
    {
      sectorName: "14",
      defaultColor: "#721422",
      polyUrl: sector14,
    },
    {
      sectorName: "35",
      defaultColor: "#2271B3",
      polyUrl: sector35,
    },
  ],
};

export const AREA_SOUTH_POLYS: AreaDefinition = {
  name: "Area South",
  sectors: [
    {
      sectorName: "10",
      defaultColor: "#317F43",
      polyUrl: sector10,
    },
    {
      sectorName: "11",
      defaultColor: "#1D1E33",
      polyUrl: sector11,
    },
    {
      sectorName: "13",
      defaultColor: "#e47070",
      polyUrl: sector13,
    },
    {
      sectorName: "15",
      defaultColor: "#a35b01",
      polyUrl: sector15,
    },
    {
      sectorName: "16",
      defaultColor: "rgba(46,44,44,0.99)",
      polyUrl: sector16,
    },
    {
      sectorName: "22",
      defaultColor: "#8ce142",
      polyUrl: sector22,
    },
  ],
};

export const POLY_DEFINITIONS = [
  AREA_NORTH_POLYS,
  AREA_EAST_POLYS,
  AREA_SOUTH_POLYS,
  PAC_NORTH_POLYS,
  PAC_SOUTH_POLYS,
];
