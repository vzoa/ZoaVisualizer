import { Component, For } from "solid-js";
import { Layer, Source } from "solid-map-gl";
import { ArrivalRoute } from "~/types";

interface ArrivalPointsProps {
  arrivals: ArrivalRoute[];
}

export const ArrivalPoints: Component<ArrivalPointsProps> = (props) => {
  return (
    <For each={props.arrivals}>
      {(arrival) => (
        <Source
          id={`arrival-${arrival.id}`}
          source={{
            type: "geojson",
            data: {
              type: "Feature",
              geometry: {
                type: "LineString",
                coordinates: arrival.points.map(p => [p.lon, p.lat])
              },
              properties: {
                name: arrival.name
              }
            }
          }}
        >
          <Layer
            id={`arrival-line-${arrival.id}`}
            style={{
              type: "line",
              paint: {
                "line-color": "#FF9800",
                "line-width": 2
              }
            }}
          />
          <Layer
            id={`arrival-points-${arrival.id}`}
            style={{
              type: "circle",
              paint: {
                "circle-radius": 4,
                "circle-color": "#FF9800",
                "circle-stroke-width": 1,
                "circle-stroke-color": "#fff"
              }
            }}
          />
        </Source>
      )}
    </For>
  );
}; 