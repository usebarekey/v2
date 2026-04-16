export const title = "";
export const description = "";
export const code = `
import { BarekeyClient } from "@barekey/sdk;
import { OldLandingPage } from "@/components/old-landing-page";
import { NewLandingPage } from "@/components/new-landing-page";
import { Hono } from "hono";

const env = new BarekeyClient();

new Hono().get("/", async () => {
    return await env.flags.get.new_landing_page
        ? <NewLandingPage />
        : <OldLandingPage />;
});
`;