"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 flex flex-col justify-center items-center">
        <p className="text-2xl font-semibold">Generate Videos in seconds</p>
        <Button asChild>
          <Link href="/dashboard">
            Get started <ArrowRight />
          </Link>
        </Button>
      </div>
    </div>
  );
}
