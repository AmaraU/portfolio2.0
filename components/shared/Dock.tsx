'use client'
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { DiscordLogoIcon, GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import { IconMail } from "@tabler/icons-react";

export function FloatingDockDemo() {
    const contactlinks = [
        {
            title: "Linkedin",
            icon: (
                <LinkedInLogoIcon className="h-full w-full text-blue-800 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/amaraude/",
        },
        {
            title: "GitHub",
            icon: (
                <GitHubLogoIcon className="h-full w-full text-orange-950 dark:text-neutral-300" />
            ),
            href: "https://github.com/AmaraU/",
        },
        {
            title: "Email",
            icon: (
                <IconMail className="h-full w-full text-neutral-800 dark:text-neutral-300" />
            ),
            href: "mailto:amaraude01@gmail.com",
        },
        {
            title: "amara_u",
            icon: (
                <DiscordLogoIcon className="h-full w-full text-purple-950 dark:text-neutral-300" />
            ),
            href: "",
        },

    ];


    return (
        <div id="experience" className="bg-background flex items-center justify-center mt-14 w-full">
            <FloatingDock
                items={contactlinks}
            />
        </div>
    );
}
