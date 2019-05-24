declare namespace PlasticTypes {
    type PlasticType = 'EMPTY' | 'VISA' | 'MASTERCARD' | 'MIR' | 'MAESTRO';
    type PlasticStackDirection = 'left' | 'right' | 'top' | 'bottom';
    interface StyleProps {
        isActive?: boolean;
        cardBackground?: string;
        cardColor?: string;
        stackCount?: number;
        stackOffset?: number;
        stackPosition?: number;
        stackDirection?: PlasticStackDirection;
    }
    interface Props {
        pan: string;
        background?: string;
        color?: string;
        type: PlasticType;
        active?: boolean;
        onClick?: () => void;
        __stackOffset?: number;
        __stackPosition?: number;
        __stackDirection?: PlasticStackDirection;
    }
    interface PlasticStackProps {
        defaultValue?: number;
        direction?: PlasticStackDirection;
        offset?: number;
        cards: {
            pan: string;
            background?: string;
            color?: string;
            type: PlasticType;
            key?: string | number;
        }[];
        onChange?: (index: number) => void;
        onMouseEnter?: (e: MouseEvent) => void;
        onMouseLeave?: (e: MouseEvent) => void;
    }
}
export default PlasticTypes;
