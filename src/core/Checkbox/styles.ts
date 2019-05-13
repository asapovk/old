import { css } from '@emotion/core';
import useTheme from '../../hooks/useTheme';
import { SizeTypes } from '../types';
import Types from './types';

export default (checked: boolean, isRadio?: boolean, uppercase?: boolean, size?: SizeTypes) => {
    const theme = useTheme().theme;

    return {
        container: css({
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            color: theme.text.rgb
        }),

        input: css({
            ...getSize(size).input,
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: theme.highlight.hex,
            backgroundColor: theme.background2.hex,
            ...theme.borders.checkbox,
            "> svg": {
                width: "100%",
                height: "100%"
            },
            "> div": {
                boxSizing: "border-box",
                height: "100%",
                width: "100%",
                borderRadius: "50%",
                borderWidth: "0.25rem",
                borderStyle: "solid",
                borderColor: theme.background2.hex,
                background: theme.highlight.hex,
            }
        }, checked && {
            // borderColor: theme.highlight.rgba(0.5),
        }, isRadio && {
            borderRadius: "50%"
        }),

        label: (labelColor?: Types.LabelColor) => css({
            marginLeft: "0.5rem",
            fontSize: "1rem",
            lineHeight: "1.5rem",
            userSelect: "none",
            color: labelColor ? theme[labelColor].hex : theme.text.hex
        }, uppercase && {
            textTransform: "uppercase"
        }),
    }
}

function getSize(size?: SizeTypes) {
    switch (size) {
        case "extra-large": {
            return {
                input: {
                    width: "2rem",
                    height: "2rem"
                }
            }
        }
        case "large": {
            return {
                input: {
                    width: "1.5rem",
                    height: "1.5rem"
                }
            }
        }
        case "small": {
            return {
                input: {
                    width: "0.75rem",
                    height: "0.75rem"
                }
            }
        }
        default: {
            return {
                input: {
                    width: "1rem",
                    height: "1rem"
                }
            }
        }
    }
}