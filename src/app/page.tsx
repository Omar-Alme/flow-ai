"use client"

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function Home() {
  const trpc = useTRPC();
  const invoke = useMutation(trpc.invoke.mutationOptions({
    onSuccess: () => {
      // Show success toast
      toast.success("Background job started successfully!");
    },
    onError: () => {
      // Show error toast
      toast.error("Failed to invoke background job.");
    }
  }));

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Button disabled={invoke.isPending} onClick={() => invoke.mutate({ text: "Omar" })}>
        Invoke Background Job
      </Button>
    </div>
  );
}
