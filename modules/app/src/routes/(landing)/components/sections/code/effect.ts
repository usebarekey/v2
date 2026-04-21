const file = "effect.ts";
const title = "Of course, it works with Effect.";
const description =
  "Barekey is built with Effect, so of course we made a first-class adapter for it.";
const code = `import { HttpRouter } from "@effect/platform";
import { Barekey } from "@barekey/effect";
import { OldLandingPage } from "@/components/old-landing-page";
import { NewLandingPage } from "@/components/new-landing-page";
import { Effect } from "effect";

HttpRouter.empty.pipe(
    HttpRouter.get("/", Effect.gen(function* () {
        const env = yield* Barekey;
        
        return env.flags.new_landing_page
            ? <NewLandingPage />
            : <OldLandingPage />;
    })),
);
`;

export const effect_example = {
  title,
  description,
  code,
  file,
};
