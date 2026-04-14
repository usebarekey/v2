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

// node_modules/.deno/@tabler+icons-svelte@3.41.0/node_modules/@tabler/icons-svelte/dist/icons/flag-filled.svelte
Flag_filled[FILENAME] = "node_modules/.deno/@tabler+icons-svelte@3.41.0/node_modules/@tabler/icons-svelte/dist/icons/flag-filled.svelte";
function Flag_filled($$anchor, $$props) {
  check_target(new.target);
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  push($$props, false, Flag_filled);
  const iconNode = [
    [
      "path",
      {
        "d": "M4 5a1 1 0 0 1 .3 -.714a6 6 0 0 1 8.213 -.176l.351 .328a4 4 0 0 0 5.272 0l.249 -.227c.61 -.483 1.527 -.097 1.61 .676l.005 .113v9a1 1 0 0 1 -.3 .714a6 6 0 0 1 -8.213 .176l-.351 -.328a4 4 0 0 0 -5.136 -.114v6.552a1 1 0 0 1 -1.993 .117l-.007 -.117v-16z"
      }
    ]
  ];
  var $$exports = { ...legacy_api() };
  var fragment = comment();
  var node = first_child(fragment);
  add_svelte_meta(
    () => Icon_default(node, spread_props({ type: "filled", name: "flag-filled" }, () => $$sanitized_props, {
      get iconNode() {
        return iconNode;
      },
      children: wrap_snippet(Flag_filled, ($$anchor2, $$slotProps) => {
        var fragment_1 = comment();
        var node_1 = first_child(fragment_1);
        slot(node_1, $$props, "default", {}, null);
        append($$anchor2, fragment_1);
      }),
      $$slots: { default: true }
    })),
    "component",
    Flag_filled,
    4,
    0,
    { componentTag: "Icon" }
  );
  append($$anchor, fragment);
  return pop($$exports);
}
if (import.meta.hot) {
  Flag_filled = hmr(Flag_filled);
  import.meta.hot.accept((module) => {
    Flag_filled[HMR].update(module.default);
  });
}
var flag_filled_default = Flag_filled;
export {
  flag_filled_default as default
};
//# sourceMappingURL=@tabler_icons-svelte_icons_flag-filled.js.map
