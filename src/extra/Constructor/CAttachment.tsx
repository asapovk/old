import React from 'react';
import Component from './Prototype';
import { Button } from '../../';

export default class CAttachment extends Component {

    static needAppend = true;
    static defaultProps = {}

    /**
     * Валидация значений
     */
    validate(file = this.value) {

        const maxSize = this.getProperty("style", 2097152 /* 2mb */);

        if (file === null && this.object.required) {
            this.setError('Файл не загружен!');
            return false;
        }
        if (file !== null && file.size > maxSize) {
            this.setError(`Объем файла не должен привышать ${maxSize / 1024 / 1024} МБ`);
            return false;
        }
        return true;
    }

    componentWillMount() {
        super.componentWillMount();
    }

    render() {
        if (!this.isVisible()) return null;

        const { object } = this.props;

        let label = "Прикрепите файл"

        if (typeof this.value == "object" && this.value !== null && this.value.name) {
            label = this.value.name;
        }

        return (
            <div style={{ textAlign: "right", position: "relative" }}>

                <Button
                    label={label}
                    loading={this.state.isSaving}
                    style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                />

                <input
                    type="file"
                    disabled={this.state.isSaving}
                    accept="image/png, image/jpeg, application/pdf"
                    style={{ opacity: 0, position: "absolute", left: 0, top: 0, right: 0, bottom: 0, width: "100%", height: "100%" }}
                    onChange={e => {

                        const file = e!.target!.files![0];

                        if (!file) return;

                        if (!this.validate(file)) {
                            e.target.value = "";
                            return;
                        }

                        const reader = new FileReader();

                        reader.onload = (f => {
                            return (e) => {
                                const fileObject = {
                                    name: file.name,
                                    type: file.type,
                                    size: file.size,
                                    lastModified: file.lastModified,
                                    base64: btoa(e.target.result)
                                }
                                this.setValue(fileObject);
                                this.onValueChangeComplete(this.$id, this.$, this.value);
                                this.forceUpdate();
                            };
                        })(file);

                        reader.readAsBinaryString(file);

                    }} />
                {this.state.error != null ? <div style={{ fontSize: "12px", color: "red" }}>{this.state.error}</div> : ""}
            </div>
        );
    }
}