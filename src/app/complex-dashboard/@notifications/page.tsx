import Card from "@/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div>Notifications</div>
      &nbsp;
      <Link
        href="/complex-dashboard/archived"
        className="underline underline-offset-4 text-blue-300"
      >
        Archived
      </Link>
    </Card>
  );
}
