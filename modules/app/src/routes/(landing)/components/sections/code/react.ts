const file = "barekey.tsx";
const title = "React made easy with Barekey.";
const description =
  "Barekey makes it easy to use feature flags in your React application. Just use the BarekeyProvider component to wrap your application and you're good to go.";
const code = `import { useBarekey } from "@barekey/react";
import { NewLandingPage } from "@/components/new-landing-page";
import { OldLandingPage } from "@/components/old-landing-page";

export function LandingPage() {
    const env = useBarekey();

    return <>
      env.flags.new_landing_page
          ? <NewLandingPage />
          : <OldLandingPage />
      </>
}
`;

export const react_example = {
  title,
  description,
  code,
  file,
};
