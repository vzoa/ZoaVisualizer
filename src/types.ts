import { FillLayerSpecification } from "mapbox-gl";

export interface MapStyle {
  value: string;
  label: string;
  disabled: boolean;
}

export interface BaseMap {
  name: string;
  url: string;
  sourceLayer: string;
  showDefault: boolean;
}

export interface PersistedBaseMapState {
  id: string;
  baseMap: BaseMap;
  checked: boolean;
}

export interface MountedBaseMapState {
  id: string;
  hasMounted: boolean;
}

export interface SectorDefinition {
  sectorName: string;
  defaultColor: string;
  polyUrl: string;
}

export interface AreaDefinition {
  name: string;
  sectors: SectorDefinition[];
}

export interface AppDisplayState {
  updateCount: number;
  areaDisplayStates: AirspaceDisplayState[];
}

export interface AirspaceDisplayState {
  name: string;
  sectors: SectorDisplayState[];
}

export interface SectorDisplayState {
  name: string;
  //parentAreaName: AirspaceConfigDependentGroup;
  isDisplayed: boolean;
  color: string;
}

export interface Settings {
  popup: {
    showUncheckedSectors: boolean;
    uncheckedSectorsInVisibleSectorsOnly: boolean;
    followMouse: boolean;
  };
}

export interface PopupState {
  hoveredPolys: mapboxgl.GeoJSONFeature[];
  vis: boolean;
}

export type RgbaDecimal = {
  r: number;
  g: number;
  b: number;
  a: number;
};

export type FillPaint = FillLayerSpecification["paint"];

export interface ArrivalPoint {
  id: string;
  lat: number;
  lon: number;
}

export interface ArrivalRoute {
  id: string;
  name: string;
  points: ArrivalPoint[];
}

export interface Airport {
  id: string;
  name: string;
  arrivals: ArrivalRoute[];
}
