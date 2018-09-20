import React from 'react';
export declare const themes: {
    blackCurrant: {
        background: {
            rgb: string;
            rgba: (alpha: number) => string;
            hex: string;
        };
        interface: {
            rgb: string;
            rgba: (alpha: number) => string;
            hex: string;
        };
        pale: {
            rgb: string;
            rgba: (alpha: number) => string;
            hex: string;
        };
        lowlight: {
            rgb: string;
            rgba: (alpha: number) => string;
            hex: string;
        };
        text: {
            rgb: string;
            rgba: (alpha: number) => string;
            hex: string;
        };
        highlight: {
            rgb: string;
            rgba: (alpha: number) => string;
            hex: string;
        };
        accents: {
            red: string;
            green: string;
            blue: string;
            orange: string;
        };
        shadow: {
            rgb: string;
            rgba: (alpha: number) => string;
            hex: string;
        };
        corner: string;
    };
    whiteCurrant: {
        background: {
            rgb: string;
            rgba: (alpha: number) => string;
            hex: string;
        };
        interface: {
            rgb: string;
            rgba: (alpha: number) => string;
            hex: string;
        };
        pale: {
            rgb: string;
            rgba: (alpha: number) => string;
            hex: string;
        };
        lowlight: {
            rgb: string;
            rgba: (alpha: number) => string;
            hex: string;
        };
        text: {
            rgb: string;
            rgba: (alpha: number) => string;
            hex: string;
        };
        highlight: {
            rgb: string;
            rgba: (alpha: number) => string;
            hex: string;
        };
        accents: {
            red: string;
            green: string;
            blue: string;
            orange: string;
        };
        shadow: {
            rgb: string;
            rgba: (alpha: number) => string;
            hex: string;
        };
        corner: string;
    };
};
export interface themeNames {
    theme?: 'blackCurrant' | 'whiteCurrant';
}
export declare const ThemeContext: React.Context<{
    background: {
        rgb: string;
        rgba: (alpha: number) => string;
        hex: string;
    };
    interface: {
        rgb: string;
        rgba: (alpha: number) => string;
        hex: string;
    };
    pale: {
        rgb: string;
        rgba: (alpha: number) => string;
        hex: string;
    };
    lowlight: {
        rgb: string;
        rgba: (alpha: number) => string;
        hex: string;
    };
    text: {
        rgb: string;
        rgba: (alpha: number) => string;
        hex: string;
    };
    highlight: {
        rgb: string;
        rgba: (alpha: number) => string;
        hex: string;
    };
    accents: {
        red: string;
        green: string;
        blue: string;
        orange: string;
    };
    shadow: {
        rgb: string;
        rgba: (alpha: number) => string;
        hex: string;
    };
    corner: string;
}>;
declare const _default: React.ComponentType<React.ConsumerProps<{
    background: {
        rgb: string;
        rgba: (alpha: number) => string;
        hex: string;
    };
    interface: {
        rgb: string;
        rgba: (alpha: number) => string;
        hex: string;
    };
    pale: {
        rgb: string;
        rgba: (alpha: number) => string;
        hex: string;
    };
    lowlight: {
        rgb: string;
        rgba: (alpha: number) => string;
        hex: string;
    };
    text: {
        rgb: string;
        rgba: (alpha: number) => string;
        hex: string;
    };
    highlight: {
        rgb: string;
        rgba: (alpha: number) => string;
        hex: string;
    };
    accents: {
        red: string;
        green: string;
        blue: string;
        orange: string;
    };
    shadow: {
        rgb: string;
        rgba: (alpha: number) => string;
        hex: string;
    };
    corner: string;
}>>;
export default _default;
