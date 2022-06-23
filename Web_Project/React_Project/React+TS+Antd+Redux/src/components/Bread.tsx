import React, {Component} from "react";
import {authRoutes} from "../router";
import {matchPath} from "react-router";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {IRoute} from "../store/states/PermissionState";
import {Breadcrumb} from "antd";

interface IProps extends RouteComponentProps {
}

interface IState {
    routeList: IRoute[]
}

class Bread extends Component<IProps, IState> {
    state: IState = {
        routeList: []
    }

    static getDerivedStateFromProps(nextProps: Readonly<IProps>, nextState: Readonly<IState>): any {
        const routeList: IRoute[] = []
        const path = nextProps.history.location.pathname;
        authRoutes.forEach((route: IRoute) => {
            const match = matchPath(path, {
                path: route.path,
                exact: true,
                strict: false
            });
            if (route.path === '*') {
                return
            }
            if (match !== null) {
                routeList.push(route)
            } else {
                route.routes?.forEach((r) => {
                    let match1 = matchPath(path, {
                        path: r.path,
                        exact: true,
                        strict: false
                    })
                    if (match1 !== null) {
                        routeList.push(route)
                        routeList.push(r)
                    }
                })
            }
        })
        return {
            routeList: routeList
        }
    }

    render() {
        if (this.state.routeList.length <= 0) {
            return (
                <>
                </>
            )
        }
        return (
            <>
                <Breadcrumb className={'bread-crumb'}>
                    {
                        this.state.routeList.map((route: IRoute) => (
                            <Breadcrumb.Item key={route.id}>{route.title}</Breadcrumb.Item>
                        ))
                    }
                </Breadcrumb>
            </>
        );
    }
}

export default withRouter(Bread)