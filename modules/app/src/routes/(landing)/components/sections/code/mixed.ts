const title = "Barekey makes it effortless.";
const description = "Barekey does all the heavy lifting for you. Just write the code that matters and let Barekey handle the rest.";
const code = 
`import { BarekeyClient } from "@barekey/sdk";
import { OldLandingPage } from "@/components/old-landing-page";
import { NewLandingPage } from "@/components/new-landing-page";
import { Hono } from "hono";

const env = new BarekeyClient();

new Hono().get("/", async () => {
    return await env.flags.new_landing_page
        ? <NewLandingPage />
        : <OldLandingPage />;
});
`;

export const mixed = {
    title,
    description,
    code,
}