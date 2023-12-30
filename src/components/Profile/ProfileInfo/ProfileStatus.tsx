import React, {ChangeEvent} from "react";

type T_ProfileStatus = {
    status: string
    updateHandler: (status: string) => void
}

export class ProfileStatus extends React.Component<T_ProfileStatus, { editMode: boolean, status: string }> {

    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps: Readonly<T_ProfileStatus>, prevState: Readonly<{
        editMode: boolean;
        status: string
    }>) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    onActivateEditMode() {
        this.setState({editMode: true})
    }

    onDeactivateEditMode() {
        this.setState({editMode: false})
        this.props.updateHandler(this.state.status)
    }

    onChangeStatusHandler(e: ChangeEvent<HTMLInputElement>) {
        this.setState({status: e.currentTarget.value})
    }

    render() {
        return <>
            <div>
                {this.state.editMode ?
                    <input onChange={(e) => this.onChangeStatusHandler(e)} value={this.state.status}
                           onBlur={() => this.onDeactivateEditMode()} autoFocus/>
                    : <span onDoubleClick={() => this.onActivateEditMode()}>
                    {this.props.status}
                    </span>
                }
            </div>
        </>
    }
}