export interface UseTextFieldInput {
    defaultValue?: string;
    /**
     * ID использутеься для сохранения
     * - Должен быть уникальным в рамках экрана
     * - Если используеться одинаковый id в разных экранах
     * то значение будет одинаковое
     */
    id?: string;
}
declare const _default: (opt?: UseTextFieldInput | undefined) => {
    value: any;
    onChange: (event: {
        target: HTMLInputElement;
    }) => void;
};
/**
 * Использоватеть тексовое поле
 */
export default _default;
