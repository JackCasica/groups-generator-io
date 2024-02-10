import React from "react";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";
import { min } from "date-fns";
type NumberOfGroupsSliderProps = {
    children?: React.ReactNode;
    setNumberOfGroups: (value: number) => void;
    numberOfGroups: number;
    maxGroups?: number;
    minGroups?: number;
};

export const NumberOfGroupsSlider: React.FC<NumberOfGroupsSliderProps> = ({
    numberOfGroups,
    setNumberOfGroups,
    minGroups = 2,
    maxGroups = 16,
}: NumberOfGroupsSliderProps) => {
    return (
        <div className="flex gap-2">
            <Button
                className="bg-white"
                onClick={() => {
                    if (numberOfGroups === minGroups) return;
                    return setNumberOfGroups(numberOfGroups - 1);
                }}
            >
                -
            </Button>
            <Slider
                defaultValue={[2]}
                min={minGroups}
                max={maxGroups}
                step={1}
                onValueChange={([value]) => setNumberOfGroups(value)}
                className=""
                value={[numberOfGroups]}
            />
            <Button
                className="bg-white"
                onClick={() => {
                    if (numberOfGroups === maxGroups) return;
                    return setNumberOfGroups(numberOfGroups + 1);
                }}
            >
                {" "}
                +{" "}
            </Button>
        </div>
    );
};
