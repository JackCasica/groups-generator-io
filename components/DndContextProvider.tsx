"use client";
import React from "react";
import { DndContext } from "@dnd-kit/core";

type DndContextProviderProps = { children: React.ReactNode };

export const DndContextProvider: React.FC<DndContextProviderProps> = ({ children }) => {
    return <DndContext>{children}</DndContext>;
};
