export interface UseTextFieldInput {
    defaultValue?: string;
    id?: string;
}
declare const _default: (opt?: UseTextFieldInput | undefined) => {
    value: any;
    onChange: (value: string) => void;
};
/**
 * Хук для текст филда
 * стейт + сохранение в LS
 */
export default _default;
