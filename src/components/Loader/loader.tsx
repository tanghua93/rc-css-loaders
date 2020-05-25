import React from 'react';
import classNames from 'classnames';
import loaderList, { ChildType } from './loaderType';
import "loaders.css";
import "../../style/index.scss";
export interface ILoaderProps {
    classPrefix?: string;
    color?: string;
    name: string;
    className?: string;
    scale?: number;
}
const Loader: React.FC<ILoaderProps> = (props: ILoaderProps) => {
    const {
        color,
        name,
        className,
        scale,
        classPrefix,
        ...restProps
    } = props;
    const loaderClass = classNames({
        [`${classPrefix}-inner`]: true,
        [`${name}`]: !!name
    });
    const renderChild = (item: ChildType[] | null) => {
        return item ? item.map((childItem) => {
            if (childItem && typeof childItem.count === 'number') {
                return Array.from(Array(childItem.count)).map((_child,i) => {
                    if (childItem.color) {
                        return (
                            <div key={i} style={{ ...childItem.color(color ? color : '#fff') }}>
                                {
                                    renderChild(childItem.children)
                                }
                            </div>
                        )
                    } else {
                        return (<div key={i} style={{ backgroundColor: color }}>{renderChild(childItem.children)}</div>)
                    }
                })
            }else{
                return null;
            }
        }) : null
    }
    const renderLoaderItem = React.useCallback(() => {
        return loaderList.map((item) => {
            if (item && item.name === name) {
                return (
                    <div key={name} style={{ transform: `scale(${scale})` }} className={loaderClass}>
                        {renderChild(item.children)}
                    </div>
                )
            }else{
                return null;
            }

        })
    },[name])
    return <div
        {...restProps}
        className={classNames(classPrefix, className)}
    >
        {renderLoaderItem()}
    </div>
}

Loader.defaultProps = {
    classPrefix: 'loader',
    name: 'ball-spin-fade-loader',
    scale: 1,
    color: '#fff'
}

export default Loader