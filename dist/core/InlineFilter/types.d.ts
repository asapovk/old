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
    interface InlineDateFilterProps {
        title?: string;
        yearsCount?: number;
        month?: string;
        year?: string;
        defaultMonth?: string;
        defaultYear?: 'ALL' | '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | string;
        onChange?: (year: string, month: string | null) => void;
        disabled?: boolean;
    }
}
export default InlineFilterProps;
