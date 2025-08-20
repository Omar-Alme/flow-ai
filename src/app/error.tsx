"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4">
            <div className="flex flex-col items-center gap-4 py-12">
                <Image
                    src="/logo.svg"
                    alt="Flow Logo"
                    width={48}
                    height={48}
                    className="mb-2"
                />
                <h1 className="text-2xl md:text-4xl font-bold text-center text-foreground">
                    Something went wrong
                </h1>
                <p className="text-muted-foreground text-center max-w-md">
                    Sorry, we couldn&#39;t load this page. Please try again or return to the homepage.
                </p>
                <Link href="/">
                    <Button variant="outline" size="lg" className="mt-4">
                        Go Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}