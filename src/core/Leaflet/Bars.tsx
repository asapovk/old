/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Flexbox, Icon, C2 } from '../..';

export const LeftBar = (props) => {
    return (
        <Flexbox css={props.styles.leftBar} column>
            <Icon
                type='arrow-left'
                shape='oval'
                background='background'
                color='highlight'
                onClick={() => props.onBack()}
                size='1.25rem'
            />
            <Icon
                type='close'
                shape='oval'
                background='background'
                color='highlight'
                size='1.25rem'
                onClick={() => props.onClose()}
            />
        </Flexbox>
    )
}

export const RightBar = (props) => {
    return (
        <Flexbox css={props.styles.rightBar} column>
            <Flexbox alignItems='center' column onClick={() => props.onAdd()}>
                <Icon
                    type='add'
                    size='2rem'
                    shape='oval'
                    // background='background'
                    color='lowlight'
                />
                <C2
                    color='lowlight'
                    pt='1rem'
                    align='center'
                    children='Добавить к сравнению'
                />
            </Flexbox>
        </Flexbox>
    )
}