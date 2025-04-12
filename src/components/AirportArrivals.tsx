import { Component, createEffect, createSignal, For } from "solid-js";
import { Checkbox } from "./ui-core/Checkbox";
import { Airport, ArrivalRoute } from "~/types";

const AIRPORTS = [
  { id: "KSFO", name: "San Francisco International" },
  { id: "KOAK", name: "Oakland International" },
  { id: "KSJC", name: "San Jose International" },
];

interface AirportArrivalsProps {
  onArrivalToggle: (arrival: ArrivalRoute, isDisplayed: boolean) => void;
}

export const AirportArrivals: Component<AirportArrivalsProps> = (props) => {
  const [selectedAirport, setSelectedAirport] = createSignal<string | null>(null);
  const [arrivals, setArrivals] = createSignal<ArrivalRoute[]>([]);
  const [selectedArrivals, setSelectedArrivals] = createSignal<Set<string>>(new Set<string>());

  createEffect(async () => {
    const airport = selectedAirport();
    if (!airport) {
      setArrivals([]);
      setSelectedArrivals(new Set<string>());
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/arrivals/${airport}`);
      if (!response.ok) throw new Error('Failed to fetch arrivals');
      const data = await response.json();
      setArrivals(data);
    } catch (error) {
      console.error('Error fetching arrivals:', error);
      setArrivals([]);
    }
  });

  const handleArrivalToggle = (arrival: ArrivalRoute, checked: boolean) => {
    setSelectedArrivals(prev => {
      const next = new Set(prev);
      if (checked) {
        next.add(arrival.id);
      } else {
        next.delete(arrival.id);
      }
      return next;
    });
    props.onArrivalToggle(arrival, checked);
  };

  return (
    <div class="flex flex-col space-y-4">
      <div class="space-y-2">
        <label class="text-white text-sm">Select Airport</label>
        <select
          class="bg-slate-700 text-white p-2 rounded w-full"
          value={selectedAirport() || ""}
          onChange={(e) => setSelectedAirport(e.target.value || null)}
        >
          <option value="">Select Airport</option>
          {AIRPORTS.map(airport => (
            <option value={airport.id}>{airport.name}</option>
          ))}
        </select>
      </div>

      <div class="space-y-2">
        <label class="text-white text-sm">Arrival Routes</label>
        <div class="flex flex-col space-y-1 max-h-96 overflow-y-auto">
          <For each={arrivals()}>
            {(arrival) => (
              <Checkbox
                label={arrival.name}
                checked={selectedArrivals().has(arrival.id)}
                onChange={(checked) => handleArrivalToggle(arrival, checked)}
              />
            )}
          </For>
        </div>
      </div>
    </div>
  );
}; 