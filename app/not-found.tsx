"use client";

import { motion } from "framer-motion";
import { Compass, Home } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
} from "@/components/ui/empty";
import { Glitchy404 } from "@/components/ui/glitchy-404";

const PRIMARY_ORB_HORIZONTAL_OFFSET = 40;
const PRIMARY_ORB_VERTICAL_OFFSET = 20;

export default function NotFoundPage() {
  return (
    <div className="w-full relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,rgba(52,187,146,0.1),transparent_70%)] text-foreground">
      <div
        aria-hidden={true}
        className="-z-10 absolute inset-0 overflow-hidden"
      >
        <motion.div
          animate={{
            x: [
              0,
              PRIMARY_ORB_HORIZONTAL_OFFSET,
              -PRIMARY_ORB_HORIZONTAL_OFFSET,
              0,
            ],
            y: [
              0,
              PRIMARY_ORB_VERTICAL_OFFSET,
              -PRIMARY_ORB_VERTICAL_OFFSET,
              0,
            ],
            rotate: [0, 10, -10, 0],
          }}
          className="absolute top-1/2 left-1/3 h-64 w-64 rounded-full bg-gradient-to-tr from-[#34bb92]/20 to-[#2da881]/20 blur-3xl"
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 5,
            ease: "easeInOut",
          }}
        />
        <motion.div
          animate={{
            x: [
              0,
              -PRIMARY_ORB_HORIZONTAL_OFFSET,
              PRIMARY_ORB_HORIZONTAL_OFFSET,
              0,
            ],
            y: [
              0,
              -PRIMARY_ORB_VERTICAL_OFFSET,
              PRIMARY_ORB_VERTICAL_OFFSET,
              0,
            ],
          }}
          className="absolute right-1/4 bottom-1/3 h-72 w-72 rounded-full bg-gradient-to-br from-[#34bb92]/10 to-[#2da881]/10 blur-3xl"
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 5,
            ease: "easeInOut",
          }}
        />
      </div>

      <Empty>
        <EmptyHeader>
          <div className="mb-4">
            <Glitchy404 width={400} height={100} color="#ffffff" />
          </div>
          <EmptyDescription className="text-nowrap">
            The page you&apos;re looking for might have been <br />
            moved or doesn&apos;t exist.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex gap-2">
            <Button asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" /> Go Home
              </Link>
            </Button>

            <Button asChild variant="outline">
              <Link href="/#services">
                <Compass className="mr-2 h-4 w-4" /> Explore
              </Link>
            </Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  );
}
