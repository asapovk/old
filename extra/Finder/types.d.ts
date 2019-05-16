import { CSSProperties } from "react";
declare namespace FinderTypes {
    interface Props {
        filter?: boolean;
        tip?: boolean;
        filterPlaceholder?: string;
        style?: CSSProperties;
        children?: any;
    }
    interface NavProps {
        label: string;
        badge?: string | number;
        filter?: boolean;
        filterPlaceholder?: string;
        setFinderMenu?: (level: any, index: any, filter: any, filterPlaceholder: any) => void;
        finderLevel?: number;
        finderIndex?: number;
        active?: boolean;
        children?: any;
    }
    interface FilterProps {
        placeholder?: string;
        clearable?: boolean;
        onChange: (value: any, level: any) => void;
        level: number;
    }
    interface SectionProps {
        label?: string;
        children?: any;
    }
}
export default FinderTypes;
