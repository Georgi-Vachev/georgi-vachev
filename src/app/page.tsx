import { redirect } from "next/navigation";

export default function HomePage() {
  // Immediately redirect to /resume
  redirect("/resume");
}
