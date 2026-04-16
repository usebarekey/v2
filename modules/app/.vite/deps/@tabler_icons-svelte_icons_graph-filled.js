import {
  Icon_default
} from "./chunk-L6K42BBS.js";
import "./chunk-TJDXFXQR.js";
import "./chunk-DCAUGMVX.js";
import "./chunk-4FNOW6UU.js";
import "./chunk-LI6O5X7N.js";
import {
  check_target,
  hmr,
  legacy_api,
  legacy_rest_props,
  slot,
  spread_props,
  wrap_snippet
} from "./chunk-UT3G44YH.js";
import "./chunk-HMS34BMV.js";
import {
  append,
  comment
} from "./chunk-UKPC6S3Z.js";
import "./chunk-BXYZSQND.js";
import {
  FILENAME,
  HMR,
  add_svelte_meta,
  first_child,
  pop,
  push
} from "./chunk-JUTHNBTR.js";
import "./chunk-IHCNI2Z3.js";
import "./chunk-LYO35BPR.js";
import "./chunk-PR4QN5HX.js";

// node_modules/.deno/@tabler+icons-svelte@3.41.0/node_modules/@tabler/icons-svelte/dist/icons/graph-filled.svelte
Graph_filled[FILENAME] = "node_modules/.deno/@tabler+icons-svelte@3.41.0/node_modules/@tabler/icons-svelte/dist/icons/graph-filled.svelte";
function Graph_filled($$anchor, $$props) {
  check_target(new.target);
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  push($$props, false, Graph_filled);
  const iconNode = [
    [
      "path",
      {
        "d": "M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12zm-2.293 6.293a1 1 0 0 0 -1.414 0l-2.293 2.292l-1.293 -1.292a1 1 0 0 0 -1.414 0l-3 3a1 1 0 0 0 0 1.414l.094 .083a1 1 0 0 0 1.32 -.083l2.293 -2.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -.083l2.293 -2.292l1.293 1.292a1 1 0 0 0 1.414 -1.414l-2 -2z"
      }
    ]
  ];
  var $$exports = { ...legacy_api() };
  var fragment = comment();
  var node = first_child(fragment);
  add_svelte_meta(
    () => Icon_default(node, spread_props({ type: "filled", name: "graph-filled" }, () => $$sanitized_props, {
      get iconNode() {
        return iconNode;
      },
      children: wrap_snippet(Graph_filled, ($$anchor2, $$slotProps) => {
        var fragment_1 = comment();
        var node_1 = first_child(fragment_1);
        slot(node_1, $$props, "default", {}, null);
        append($$anchor2, fragment_1);
      }),
      $$slots: { default: true }
    })),
    "component",
    Graph_filled,
    4,
    0,
    { componentTag: "Icon" }
  );
  append($$anchor, fragment);
  return pop($$exports);
}
if (import.meta.hot) {
  Graph_filled = hmr(Graph_filled);
  import.meta.hot.accept((module) => {
    Graph_filled[HMR].update(module.default);
  });
}
var graph_filled_default = Graph_filled;
export {
  graph_filled_default as default
};
//# sourceMappingURL=@tabler_icons-svelte_icons_graph-filled.js.map
