import { CSSProperties } from "react";
declare namespace TabsTypes {
    interface Tab {
        key: string;
        title: string;
        content: React.ReactNode;
        icon: any;
    }
    interface Props {
        style?: CSSProperties;
        className?: string;
        children?: any;
        tabs: Tab[];
        reverseContainer?: boolean;
    }
}
export default TabsTypes;
