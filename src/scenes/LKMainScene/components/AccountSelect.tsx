import React, { Fragment, useState } from 'react';
import { Flexbox } from '../../../Flexbox';
import { Icon } from '../../../Icon';
import { Select } from '../../../Select';
import useStyles from '../../../hooks/useStyles';
import useClass from '../../../hooks/useClass';

interface IAccount {
    label: string,
    value: string | number
}
interface IProps {
    values: IAccount[]
    value?: string | number
    onChange?: (value: string | number) => void
}

export default (props: IProps) => {
    const styles = useStyles();
    const [accountSelectClassName, AccountSelectClassName] = useClass('ui-lkcomponent-account-select');

    const st = styles.scenes.lkmain.components.accountSelect;

    const onSelectToggle = () => {
        AccountSelectClassName.toggleModifier('active');
    }

    const accountSetHandler = (account: IAccount) => {
        props.onChange && props.onChange(account.value);
    }

    let displayAccount = "";

    props.values.forEach((item, index) => {
        if (!index) {
            displayAccount = item.label;
        }
        if (item.value === props.value) {
            displayAccount = item.label;
        }
    });

    return (
        <div className={accountSelectClassName}>
            <h3>Лицевой счет</h3>
            <Flexbox alignItems="center">
                <Flexbox
                    flex={1}
                    children={(
                        <Flexbox
                            flex={1}
                            className="_field"
                            style={{
                                ...st.field,
                                height: AccountSelectClassName.hasModifier("active") ? (props.values.length * 3 + 2.25) + "rem" : '2.25rem'
                            }}
                            onClick={onSelectToggle}
                            children={(
                                <Fragment>
                                    <Flexbox
                                        className="_text"
                                        flex={1}
                                        style={st.accountText}
                                        children={displayAccount}
                                    />
                                    <Icon type="down" style={st.dropIcon} />
                                    <div className="_list" style={{
                                        height: (props.values.length * 3) + "rem"
                                    }}>
                                        {props.values.map(item => (
                                            <div
                                                key={item.value}
                                                onClick={() => accountSetHandler(item)}
                                                children={item.label}
                                            />
                                        ))}
                                    </div>
                                </Fragment>
                            )}
                        />
                    )}
                />
                <Flexbox
                    style={st.add}
                    className="_add"
                    alignItems="center"
                    justifyContent="center"
                    children={(
                        <Icon type="add" style={st.addIcon} size={1.1} />
                    )}
                />
            </Flexbox>
        </div>
    )
}