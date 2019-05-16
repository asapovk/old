/** @jsx jsx */
import { jsx } from "@emotion/core";
import { ScrollView } from "../ScrollView";
import Types from './types';

export default (props: Types.SelectItemsProps) => {
    const { options } = props;

    return (
        <ScrollView customCss={props.cssItemStyle}>
            {options.map(option => {
                return (
                    <div
                        key={option.value}
                        css={props.cssItemStyle}
                        children={option.text}
                        onClick={() => props.onSelect(option)}
                    />
                )
            })}
        </ScrollView>
    )
};
