import * as React from "react";

interface MenuItemProps {
    active: boolean,
    onChoose: (item: string) => void,
    label: string
}

class MenuItem extends React.Component<MenuItemProps> {

    render() {

        const { active, label, onChoose } = this.props;
        let className = 'showcase-panel-menu-items-item';
        if (active) className += '-active';

        return (
            <div className={className} onClick={() => onChoose(label)}>
                {label}
            </div>
        )

    }
}

export default MenuItem