/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Flexbox } from '..';
import types from './types';

export default (props: types.BurgerProps) => (
    <Flexbox alignItems="center" onClick={props.onClick}>
        {(props.alignMobile === 'flex-end' || props.alignMobile === 'center' || !props.alignMobile) && props.currentMenu && (
            <Flexbox css={props.styleTitle}>
                {props.currentMenu.title.toUpperCase()}
            </Flexbox>
        )}
        <Flexbox css={props.styleContainer}>
            <Flexbox
                flexDirection='column'
                justifyContent='space-between'
                css={props.styleButton}
                children={[
                    <div key={1} />,
                    <div key={2} />,
                    <div key={3} />
                ]}
            />
        </Flexbox>
        {(props.alignMobile === 'flex-start') && (
            <Flexbox css={props.styleTitle}>
                {props.currentMenu.title.toUpperCase()}
            </Flexbox>
        )}
    </Flexbox>
)