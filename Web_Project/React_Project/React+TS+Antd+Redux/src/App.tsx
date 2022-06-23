import React, {Component} from 'react';
import 'antd/dist/antd.css';
import './App.css';
import View from './components/View';
import {Spin} from 'antd';
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {syncAdminInfo} from './store/actions/AdminAction';
import {AdminState} from './store/states/AdminState';
import {getPermissionList} from './store/actions/PermissionAction';
import {PermissionState} from './store/states/PermissionState'


interface IProps extends AdminState {
    getAdminInfo: () => void
    getPermissionList: () => void

}

class App extends Component<IProps, any> {
    constructor(props: IProps) {
        super(props);
        if (this.props.loading) {
            this.props.getAdminInfo();
            this.props.getPermissionList()
        }
    }

    shouldComponentUpdate(nextProps: Readonly<IProps>, nextState: Readonly<any>, nextContext: any): boolean {
        return !nextProps.loading;
    }

    render() {
        if (this.props.loading) {
            return (
                <>
                    <Spin/>
                </>
            )
        }
        return (
            <View/>
        );
    }

}

interface IStoreState {
    admin: AdminState
    permission: PermissionState
}

interface IStateProps extends AdminState, PermissionState {
}

const mapStateToProps = (state: IStoreState): IStateProps => {
    if (!state.admin.loading && !state.permission.loading) {
        return {...state.admin, ...state.permission};
    }
    return {...state.admin, ...state.permission, loading: true};
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
    getAdminInfo: () => {
        syncAdminInfo(dispatch)
    },
    getPermissionList: () => {
        getPermissionList(dispatch)
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
