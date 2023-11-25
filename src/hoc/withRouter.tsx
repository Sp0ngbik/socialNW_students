import {ComponentType} from "react";
import {useParams} from "react-router-dom";

export const withRouterHOC = <T, >(Component: ComponentType<T>) => {
    const ComponentWithParams = (props: T) => {
        const params = useParams<{ id: string }>()
        const {...restProps} = props
        return params ? <Component {...restProps as T} id={params.id}/> : <Component {...restProps as T & {}}/>
    }
    return ComponentWithParams
}