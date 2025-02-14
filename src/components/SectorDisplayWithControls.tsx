import { Component, For } from "solid-js";
import { AppDisplayState } from "~/types.ts";
import { SetStoreFunction } from "solid-js/store";
import { Checkbox } from "./ui-core";
import { cn } from "~/lib/utils";

interface SectorDisplayWithControlsProps {
  airspaceGroup: string;
  store: AppDisplayState;
  setStore: SetStoreFunction<AppDisplayState>;
}

export const SectorDisplayWithControls: Component<SectorDisplayWithControlsProps> = (props) => {
  return (
    <div>
      <div class={cn(["flex flex-col space-y-1 mt-2"])}>
        <div class="text-white">{props.airspaceGroup}</div>
        <For
          each={props.store.areaDisplayStates.find((a) => a.name === props.airspaceGroup)?.sectors}
        >
          {(sector) => (
            <div class="flex justify-between">
              <Checkbox
                label={sector.name}
                checked={sector.isDisplayed}
                onChange={(val) => {
                  props.setStore(
                    "areaDisplayStates",
                    (a) => a.name === props.airspaceGroup,
                    "sectors",
                    (s) => s.name === sector.name,
                    "isDisplayed",
                    val,
                  );
                  props.setStore("updateCount", (prev) => prev + 1);
                }}
              />
              <input
                type="color"
                value={sector.color}
                class="w-6 h-6 mr-2"
                onChange={(e) => {
                  props.setStore(
                    "areaDisplayStates",
                    (a) => a.name === props.airspaceGroup,
                    "sectors",
                    (s) => s.name === sector.name,
                    "color",
                    e.target.value,
                  );
                  props.setStore("updateCount", (prev) => prev + 1);
                }}
              />
            </div>
          )}
        </For>
      </div>
    </div>
  );
};
