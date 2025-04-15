import { Component, For } from "solid-js";
import { Layer, Source } from "solid-map-gl";
import { ArrivalProcedure, Sequence } from "~/types";

interface ArrivalPointsProps {
  arrivals: ArrivalProcedure[];
}

// const pointsToGeojsonCoords = (points: Point[]) => {
//   let x = [...new Set(points.map((p) => [p.longitude, p.latitude]))];
//   console.log(x);
//   return x;
// };

const transitionString = (arrival: ArrivalProcedure, sequence: Sequence) => {
  let transitionId = sequence.transition ? sequence.transition : "null";
  return `${arrival.arrivalIdentifier}-${transitionId}`;
};

export const ArrivalPoints: Component<ArrivalPointsProps> = (props) => {
  return (
    <For each={props.arrivals}>
      {(arrival) => (
        <For each={arrival.sequences}>
          {(sequence) => (
            <Source
              id={transitionString(arrival, sequence)}
              source={{
                type: "geojson",
                data: {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: sequence.points.map((p) => [p.longitude, p.latitude]),
                  },
                  properties: {
                    arrival: arrival.arrivalIdentifier,
                    transition: sequence.transition,
                  },
                },
              }}
            >
              <Layer
                id={`arrival-line-${transitionString(arrival, sequence)}`}
                style={{
                  type: "line",
                  paint: {
                    "line-color": "#000000",
                    "line-width": 2,
                  },
                }}
              />
              <Layer
                id={`arrival-points-${transitionString(arrival, sequence)}`}
                style={{
                  type: "circle",
                  paint: {
                    "circle-radius": 4,
                    "circle-color": "#000000",
                    "circle-stroke-width": 1,
                    "circle-stroke-color": "#fff",
                  },
                }}
              />
            </Source>
          )}
        </For>
      )}
    </For>
  );
};
