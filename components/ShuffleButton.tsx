import React from "react";
import { Button } from "@shadcn/button";

export const ShuffleButton: React.FC = () => {
    return (
        <Button
            size="sm"
            variant="outline"
        >
            <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m6 4a2 2 0 110-4m6 0a2 2 0 100-4m6 4a2 2 0 110-4m-6 4v2m6-2a2 2 0 100 4m-6-4a2 2 0 110 4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                />
            </svg>
            Shuffle
        </Button>
    );
};
