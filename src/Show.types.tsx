import { ReactNode } from "react";

export interface ShowProps {
    children: ReactNode;
}

export interface IfProps {
    condition: boolean;
    children: ReactNode;
}

export interface ElseProps {
    children: ReactNode;
}