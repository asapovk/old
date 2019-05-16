/**
 * types.tsx
 * author: I.Trikoz
 */
declare namespace InlineFilterProps {
    interface Value {
        index: string | number;
        label: string | number;
        selected: boolean;
    }
    interface Props {
        title?: string;
        values?: Value[][];
        defaultValues?: Value[][];
        disabled?: boolean;
        onChange?: (value: Value) => void;
    }
    interface RowProps {
        last: boolean;
        values: Value[];
        disabled?: boolean;
        onChange: (value: Value) => void;
    }
}
export default InlineFilterProps;
