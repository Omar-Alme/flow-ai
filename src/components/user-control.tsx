import useCurrentTheme from "@/hooks/use-current-theme";
import { UserButton } from "@clerk/nextjs";
import {dark} from "@clerk/themes";

interface Props {
    showName?: boolean;
}

export default function UserControl({ showName }: Props) {

    const currentTheme = useCurrentTheme();

    return (
        <UserButton showName={showName} appearance={{
            elements: {
                userButton: "rounded-md!",
                userButtonAvatarBox: "rounded-md! size-8!",
                userButtonTrigger: "rounded-md! p-2",
            },
            baseTheme: currentTheme === "dark" ? dark : undefined
        }} />
    )
}