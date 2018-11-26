import React, { Fragment, useState } from 'react';
import { Flexbox } from '../../Flexbox';
import { Icon } from '../../Icon';
import { Select } from '../../Select';
import useStyles from '../../hooks/useStyles';

interface IProps {

}
export default (props: IProps) => {
    const styles = useStyles();
    const [addHover, setAddHover] = useState(false);

    const st = {
        addButton: {
            position: "relative",
            transition: "all 0.25s",
            width: addHover ? "2.75rem" : "2.25rem",
            height: addHover ? "2.75rem" : "2.25rem",
            transform: "rotate(" + addHover ? "0deg" : "180deg" + ")",
            borderRadius: "2rem",
            background: styles.theme.highlight.hex,
            marginLeft: addHover ? "0.75rem" : "1rem",
            marginRight: addHover ? "2rem" : "2.25rem",
            marginTop: addHover ? "-0.25rem" : "0",
            marginBottom: addHover ? "-0.25rem" : "0",
        } as any,
        addButtonIcon: {
            fill: styles.theme.textOnAccent.hex,
        },

        title: {
            paddingLeft: "2.25rem",
        },
        accountText: {
            paddingLeft: "2.25rem",
            fontWeight: 500,
            color: styles.theme.text.hex,
        },
        selectField: {
            borderColor: styles.theme.pale.hex,
            background: styles.theme.interface.hex,
        },
        dropIcon: {
            height: "2.25rem",
            marginLeft: "0.75rem",
            marginRight: "0.75rem",
        }
    }

    const addMouseIn = () => setAddHover(true);
    const addMouseOut = () => setAddHover(false);

    return (
        <Fragment>
            <h3 style={st.title}>Лицевой счет</h3>
            <Flexbox className="ui-lkcomponent-account-select">
                <Flexbox className="ui-lkcomponent-account-select-field" style={st.selectField} flex={1}>
                    <Flexbox style={st.accountText} flex={1} alignItems="center">1234567890</Flexbox>
                    <Icon type="down" style={st.dropIcon} />
                </Flexbox>
                <Flexbox style={st.addButton} alignItems="center" justifyContent="center" onMouseEnter={addMouseIn} onMouseLeave={addMouseOut}>
                    <Icon type="add" style={st.addButtonIcon} size={1.1} />
                </Flexbox>
            </Flexbox>
        </Fragment>
    )
}