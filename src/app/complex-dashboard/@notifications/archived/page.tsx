import Card from "@/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <div>Archived Notifications</div>
      &nbsp;
      <Link
        href="/complex-dashboard"
        className="underline underline-offset-4 text-blue-300"
      >
        Default
      </Link>
    </Card>
  );
}
