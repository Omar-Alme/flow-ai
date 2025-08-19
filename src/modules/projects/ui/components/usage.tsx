import { formatDuration, intervalToDuration } from "date-fns"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CrownIcon } from "lucide-react"
import { useAuth } from "@clerk/nextjs"

interface Props {
    points: number
    msBeforeNext: number
}

export function Usage({ points, msBeforeNext }: Props) {
    const { has } = useAuth();
    const hasProAccess = has?.({ plan: "pro" });
    return (
        <div className="rounded-t-xl bg-background border border-b-0 p-2.5">
            <div className="flex items-center gap-x-2">
                <div>
                    <p className="text-sm">
                        {points} {hasProAccess ? "credits" : "free credits"} remaining
                    </p>
                    <p className="text-xs text-muted-foreground">
                        Resets in {" "}
                        {formatDuration(
                            intervalToDuration({
                                start: new Date(),
                                end: new Date(Date.now() + msBeforeNext)
                            }),
                            { format: ["months", "days", "hours", "minutes"] }
                        )}
                    </p>
                </div>
                { !hasProAccess && (
                    <Button
                        asChild
                        variant="tertiary"
                        size="sm"
                        className="ml-auto"
                >
                    <Link href="/pricing">
                        <CrownIcon /> Upgrade
                    </Link>
                </Button>
                )}
            </div>
        </div>
    )
}
