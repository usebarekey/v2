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

// node_modules/.deno/@tabler+icons-svelte@3.41.0/node_modules/@tabler/icons-svelte/dist/icons/chevron-right.svelte
Chevron_right[FILENAME] = "node_modules/.deno/@tabler+icons-svelte@3.41.0/node_modules/@tabler/icons-svelte/dist/icons/chevron-right.svelte";
function Chevron_right($$anchor, $$props) {
  check_target(new.target);
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  push($$props, false, Chevron_right);
  const iconNode = [["path", { "d": "M9 6l6 6l-6 6" }]];
  var $$exports = { ...legacy_api() };
  var fragment = comment();
  var node = first_child(fragment);
  add_svelte_meta(
    () => Icon_default(node, spread_props({ type: "outline", name: "chevron-right" }, () => $$sanitized_props, {
      get iconNode() {
        return iconNode;
      },
      children: wrap_snippet(Chevron_right, ($$anchor2, $$slotProps) => {
        var fragment_1 = comment();
        var node_1 = first_child(fragment_1);
        slot(node_1, $$props, "default", {}, null);
        append($$anchor2, fragment_1);
      }),
      $$slots: { default: true }
    })),
    "component",
    Chevron_right,
    4,
    0,
    { componentTag: "Icon" }
  );
  append($$anchor, fragment);
  return pop($$exports);
}
if (import.meta.hot) {
  Chevron_right = hmr(Chevron_right);
  import.meta.hot.accept((module) => {
    Chevron_right[HMR].update(module.default);
  });
}
var chevron_right_default = Chevron_right;
export {
  chevron_right_default as default
};
//# sourceMappingURL=@tabler_icons-svelte_icons_chevron-right.js.map
