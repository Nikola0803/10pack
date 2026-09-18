import { redirect } from "next/navigation";

/**
 * The original site links to /verify for lot lookup, but that page was not part
 * of the export. The COA library is where lots are verified, so send traffic
 * there until the real verification view is rebuilt.
 */
export default function VerifyPage() {
  redirect("/coa");
}
