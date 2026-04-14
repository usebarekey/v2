import {
  Icon_default
} from "./chunk-3N2RT3ZC.js";
import "./chunk-LI6O5X7N.js";
import {
  check_target,
  hmr,
  legacy_api,
  legacy_rest_props,
  slot,
  spread_props,
  wrap_snippet
} from "./chunk-HKT2IKFE.js";
import "./chunk-HMS34BMV.js";
import {
  append,
  comment
} from "./chunk-SL2FLWMR.js";
import "./chunk-EGBBZ7FA.js";
import {
  FILENAME,
  HMR,
  add_svelte_meta,
  first_child,
  pop,
  push
} from "./chunk-ABGCGA5V.js";
import "./chunk-LYO35BPR.js";
import "./chunk-37WRVOPJ.js";
import "./chunk-TJDXFXQR.js";
import "./chunk-IHCNI2Z3.js";

// node_modules/.deno/@tabler+icons-svelte@3.41.0/node_modules/@tabler/icons-svelte/dist/icons/plug-connected.svelte
Plug_connected[FILENAME] = "node_modules/.deno/@tabler+icons-svelte@3.41.0/node_modules/@tabler/icons-svelte/dist/icons/plug-connected.svelte";
function Plug_connected($$anchor, $$props) {
  check_target(new.target);
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  push($$props, false, Plug_connected);
  const iconNode = [
    [
      "path",
      { "d": "M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5" }
    ],
    [
      "path",
      { "d": "M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5" }
    ],
    ["path", { "d": "M3 21l2.5 -2.5" }],
    ["path", { "d": "M18.5 5.5l2.5 -2.5" }],
    ["path", { "d": "M10 11l-2 2" }],
    ["path", { "d": "M13 14l-2 2" }]
  ];
  var $$exports = { ...legacy_api() };
  var fragment = comment();
  var node = first_child(fragment);
  add_svelte_meta(
    () => Icon_default(node, spread_props({ type: "outline", name: "plug-connected" }, () => $$sanitized_props, {
      get iconNode() {
        return iconNode;
      },
      children: wrap_snippet(Plug_connected, ($$anchor2, $$slotProps) => {
        var fragment_1 = comment();
        var node_1 = first_child(fragment_1);
        slot(node_1, $$props, "default", {}, null);
        append($$anchor2, fragment_1);
      }),
      $$slots: { default: true }
    })),
    "component",
    Plug_connected,
    4,
    0,
    { componentTag: "Icon" }
  );
  append($$anchor, fragment);
  return pop($$exports);
}
if (import.meta.hot) {
  Plug_connected = hmr(Plug_connected);
  import.meta.hot.accept((module) => {
    Plug_connected[HMR].update(module.default);
  });
}
var plug_connected_default = Plug_connected;
export {
  plug_connected_default as default
};
//# sourceMappingURL=@tabler_icons-svelte_icons_plug-connected.js.map
