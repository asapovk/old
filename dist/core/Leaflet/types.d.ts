import { CSSProperties } from "react";
declare namespace LeafletTypes {
    interface Props {
        style?: CSSProperties;
        className?: string;
        data: Data[];
        groups?: Group[];
        noData?: React.ReactNode;
    }
    interface MenuProps extends Props {
        onChoose: (i: number) => void;
        styles: any;
        active?: number;
    }
    type Data = {
        label: string;
        render: React.ReactNode;
        groupId?: number | string;
    };
    type Group = {
        label: string;
        id: number | string;
    };
    interface State {
        items: number[];
        showMenu: boolean;
    }
    interface Action {
        type: 'openMenu' | 'setItem' | 'addItem' | 'back' | 'close';
        payload?: any;
    }
}
export default LeafletTypes;
