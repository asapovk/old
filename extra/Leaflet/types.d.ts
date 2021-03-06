import { CSSProperties } from "react";
declare namespace LeafletTypes {
    interface Props {
        style?: CSSProperties;
        className?: string;
        groups?: Group[];
        noData?: React.ReactNode;
        capacity?: [number, number];
        breakpoints?: [number, number];
        groupKey?: string;
        nameKey: string;
        nameRender?: (row: {
            [key: string]: any;
        }, value: any) => any;
        data: Data[];
        items?: Item[];
        default?: number;
        onEnterMobile?: (index: number) => void;
        hideCompare?: boolean;
    }
    interface MenuProps extends Props {
        onChoose: (i: number) => void;
        styles: any;
        active?: number;
        isMobile: boolean;
        side?: boolean;
        left?: boolean;
    }
    interface ItemsProps {
        styles: any;
        data: Data[];
        items: Item[];
        opened: number[];
        breakpoints?: [number, number];
    }
    type Data = {
        [key: string]: any;
    };
    type Group = {
        label: string;
        value: number | string;
    };
    type Item = {
        title?: string;
        titleKey?: string;
        iconKey?: string;
        rows: GridRow[];
    };
    type GridRow = {
        name?: string;
        dataKey: string;
        format?: boolean | 'currency';
        unit?: 'rub' | 'volume' | 'power';
    };
    interface State {
        opened: number[];
        choose: boolean;
    }
    interface Action {
        type: 'openMenu' | 'setItem' | 'addItem' | 'back' | 'close' | 'exit';
        payload?: any;
    }
}
export default LeafletTypes;
