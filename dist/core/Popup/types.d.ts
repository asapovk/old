export interface TargetCoordinates {
    top: number;
    bottom: number;
    left: number;
    right: number;
}
export declare type Position = 'bottom-left' | 'bottom-right' | 'bottom-center' | 'top-left' | 'top-right' | 'top-center' | 'left-top' | 'left-middle' | 'left-bottom' | 'right-top' | 'right-middle' | 'right-bottom';
export interface IPopup {
    type?: 'error';
    position?: Position;
    trigger: any;
    on?: 'hover' | 'click';
    children?: any;
}
