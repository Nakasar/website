import {Card, CardContent} from "@/components/ui/card";
import Link from "next/link";

export default function Gaming() {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <section className="md:w-2/3">
        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-white bg-emerald-500 w-fit">TCGs</h2>
            <p className="mb-4">
              Level 1 Judge for <Link href="https://nexus.cascadegames.com/users/Nakasar" className="text-emerald-500 hover:text-emerald-700" target="_blank">Star Wars Unlimited</Link> and Riftbound and Rules Advisor for Magic: The Gathering.
            </p>
            <p>
              Need a judge for a local event near Luxembourg or Metz? Contact me!
            </p>
            <p>Playing...</p>
            <ul className="list-disc list-inside mb-4">
              <li>Magic: the Gathering</li>
              <li>Star Wars Unlimited</li>
              <li>Riftbound</li>
              <li>Altered</li>
            </ul>
            <p>Creator of <Link href="https://joutes.app" className="text-emerald-500 hover:text-emerald-700" target="_blank">Joutes</Link>, a TCG/gaming tournament and league community platform.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}