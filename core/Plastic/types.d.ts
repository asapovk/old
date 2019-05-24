declare namespace PlasticTypes {
    type PlasticType = 'EMPTY' | 'VISA' | 'MASTERCARD' | 'MIR' | 'MAESTRO';
    type PlasticStackDirection = 'left' | 'right' | 'top' | 'bottom';
    interface Card {
        type: PlasticType;
        pan?: string;
        background?: string;
        color?: string;
    }
    interface StyleProps {
        isActive?: boolean;
        cardBackground?: string;
        cardColor?: string;
        stackCount?: number;
        stackOffset?: number;
        stackPosition?: number;
        stackDirection?: PlasticStackDirection;
    }
    interface Props extends Card {
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
        cards: Card[];
        onChange?: (index: number) => void;
        onMouseEnter?: (e: MouseEvent) => void;
        onMouseLeave?: (e: MouseEvent) => void;
    }
}
export default PlasticTypes;
