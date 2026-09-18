import { site } from "@/lib/site";

export function ComplianceBar() {
  return (
    <div className="gradient-luxe text-white text-[10px] md:text-xs uppercase tracking-[0.25em] text-center py-2 px-4">
      {site.complianceBar}
    </div>
  );
}
