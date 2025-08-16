import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextareaAutosize from "react-textarea-autosize";
import { z } from "zod";
import { toast } from "sonner";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useTRPC } from "@/trpc/client";
import { Button } from "@/components/ui/button";
import { Form,  FormField } from "@/components/ui/form";
import { ArrowUpIcon, Loader2Icon } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Props {
    projectId: string
}

const formSchema = z.object({
    value: z.string()
        .min(1, "Message is required")
        .max(10000, "Message is too long")
});

export default function MessageForm({ projectId }: Props) {
    const trpc = useTRPC();
    const queryClient = useQueryClient();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            value: ""
        }
    });

    const createMessage = useMutation(
        trpc.messages.create.mutationOptions({
            onSuccess: () => {
                form.reset();
                queryClient.invalidateQueries(trpc.messages.getMany.queryOptions({ projectId }));
                // TODO : Invalidate usage status
            },
            onError: (error) => {
                // TODO: redirect to pricing page
                toast.error(error.message);
            }
        })
    );

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        // Handle form submission
        await createMessage.mutateAsync({
            value: values.value,
            projectId
        });
    };

    const [isFocused, setIsFocused] = useState(false);
    const showUsage = false;
    const isPending = createMessage.isPending;
    const isButtonDisabled = !form.formState.isValid || isPending;

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className={cn(
                    "relative border p-4 pt-1 rounded-xl bg-sidebar dark:bg-sidebar transition-all",
                    isFocused && "shadow-xs",
                    showUsage && "rounded-top-none"
                )}
            >
                <FormField
                    control={form.control}
                    name="value"
                    render={({ field }) => (
                        <TextareaAutosize
                            {...field}
                            disabled={isPending}
                            minRows={2}
                            maxRows={8}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            placeholder="What would you like to build?"
                            className="pt-4 resize-none border-none w-full outline-none bg-transparent"
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
                                    e.preventDefault();
                                    form.handleSubmit(onSubmit)(e);
                                }
                            }}
                        />
                    )}
                />
                <div className="flex gap-x-2 items-end justify-between pt-2">
                    <div className="text-[10px] text-muted-foreground font-mono">
                        <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted  px-1.5 font-mono text-[10px] font-medium text-muted-foreground"><span>⌘</span>Enter
                        </kbd>
                        &nbsp; to submit
                    </div>
                    <Button
                        type="submit"
                        disabled={isButtonDisabled}
                        className={cn(
                            "size-8 rounded-full",
                            isButtonDisabled && "bg-muted-foreground border"
                        )}
                    >
                        {isPending ? (
                            <Loader2Icon className="animate-spin size-4" />
                        ) : (
                            <ArrowUpIcon className="size-4" />
                        )}
                    </Button>
                </div>
            </form>
        </Form>
    );
}
