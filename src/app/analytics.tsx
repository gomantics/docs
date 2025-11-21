import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights as VercelSpeedInsights } from "@vercel/speed-insights/next";

export function Analytics() {
  return (
    <>
      <VercelAnalytics />
      <VercelSpeedInsights />
    </>
  );
}
