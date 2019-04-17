import { CSSProperties } from "react";
import { IconTypes } from "../../types";
declare namespace StickyTabsTypes {
    interface Tab {
        key: string;
        title: React.ReactNode;
        content: React.ReactNode;
        icon: IconTypes.Type;
    }
    interface Props {
        style?: CSSProperties;
        className?: string;
        children?: any;
        bp?: number[];
        tabs: Tab[];
        reverseContainer?: boolean;
        noDataComponent?: JSX.Element;
    }
}
export default StickyTabsTypes;
