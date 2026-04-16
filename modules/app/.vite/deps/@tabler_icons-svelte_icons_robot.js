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

// node_modules/.deno/@tabler+icons-svelte@3.41.0/node_modules/@tabler/icons-svelte/dist/icons/robot.svelte
Robot[FILENAME] = "node_modules/.deno/@tabler+icons-svelte@3.41.0/node_modules/@tabler/icons-svelte/dist/icons/robot.svelte";
function Robot($$anchor, $$props) {
  check_target(new.target);
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  push($$props, false, Robot);
  const iconNode = [
    [
      "path",
      {
        "d": "M6 6a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -4"
      }
    ],
    ["path", { "d": "M12 2v2" }],
    ["path", { "d": "M9 12v9" }],
    ["path", { "d": "M15 12v9" }],
    ["path", { "d": "M5 16l4 -2" }],
    ["path", { "d": "M15 14l4 2" }],
    ["path", { "d": "M9 18h6" }],
    ["path", { "d": "M10 8v.01" }],
    ["path", { "d": "M14 8v.01" }]
  ];
  var $$exports = { ...legacy_api() };
  var fragment = comment();
  var node = first_child(fragment);
  add_svelte_meta(
    () => Icon_default(node, spread_props({ type: "outline", name: "robot" }, () => $$sanitized_props, {
      get iconNode() {
        return iconNode;
      },
      children: wrap_snippet(Robot, ($$anchor2, $$slotProps) => {
        var fragment_1 = comment();
        var node_1 = first_child(fragment_1);
        slot(node_1, $$props, "default", {}, null);
        append($$anchor2, fragment_1);
      }),
      $$slots: { default: true }
    })),
    "component",
    Robot,
    4,
    0,
    { componentTag: "Icon" }
  );
  append($$anchor, fragment);
  return pop($$exports);
}
if (import.meta.hot) {
  Robot = hmr(Robot);
  import.meta.hot.accept((module) => {
    Robot[HMR].update(module.default);
  });
}
var robot_default = Robot;
export {
  robot_default as default
};
//# sourceMappingURL=@tabler_icons-svelte_icons_robot.js.map
