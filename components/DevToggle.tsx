"use client";
import { Switch } from "@/components/ui/switch";
import React from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

type DevToggleProps = {};

export const DevToggle: React.FC<DevToggleProps> = ({}) => {
    const [checked, setChecked] = useLocalStorage("dev-theme", false);

    // Handle the change event
    const handleCheckedChange = (isChecked: boolean) => {
        setChecked(isChecked);
        if (isChecked) {
            document.body.classList.add("dev-theme");
        } else {
            document.body.classList.remove("dev-theme");
        }
    };

    // Ensure the class is added on initial render if checked is true
    React.useEffect(() => {
        if (checked) {
            document.body.classList.add("dev-theme");
        } else {
            document.body.classList.remove("dev-theme");
        }
    }, [checked]);

    return (
        <Switch
            className="absolute bottom-4 right-4"
            id="dark-mode"
            checked={checked}
            onCheckedChange={handleCheckedChange}
        />
    );
};
