type ColorFuncType = (color: string) => { [key: string]: string };
export type ChildType = {
    count: number,
    color: ColorFuncType | null,
    children: ChildType[] | null
}
type LoaderType = {
    name: string,
    children: ChildType[]
}
const loaderList: LoaderType[] = [
    {
        name: 'ball-beat',
        children: [
            { count: 3, color: null, children: null }
        ]
    },
    {
        name: 'ball-clip-rotate-multiple',
        children: [
            {
                count: 1, color: (color: string) => {
                    return { 'borderRightColor': color, 'borderLeftColor': color }
                }, children: null
            },
            {
                count: 1, color: (color: string) => {
                    return { 'borderTopColor': color, 'borderBottomColor': color }
                }, children: null
            },
        ]
    },
    {
        name: 'ball-clip-rotate-pulse',
        children: [
            { count: 1, color: null, children: null },
            {
                count: 1, color: (color: string) => {
                    return { 'borderTopColor': color, 'borderBottomColor': color }
                }, children: null
            }
        ]
    },
    {
        name: 'ball-clip-rotate',
        children: [
            {
                count: 1,
                children: null,
                color: (color: string) => {
                    return {
                        'borderTopColor': color,
                        'borderLeftColor': color,
                        'borderRightColor': color
                    }
                }
            }
        ]
    },
    {
        name: 'ball-grid-beat',
        children: [
            { count: 9, color: null, children: null }
        ]
    },
    {
        name: 'ball-grid-pulse',
        children: [{
            count: 9,
            color: null,
            children: null
        }]
    },
    {
        name: 'ball-pulse-rise',
        children: [{
            count: 5,
            color: null,
            children: null
        }]
    },
    {
        name: 'ball-pulse-sync',
        children: [{
            count: 3,
            color: null,
            children: null
        }]
    },
    {
        name: 'ball-pulse',
        children: [{
            count: 3,
            color: null,
            children: null
        }]
    },
    {
        name: 'ball-rotate',
        children: [
            {
                count: 1, children: [
                    {
                        count: 2,
                        color: null,
                        children: null
                    }
                ], color: null
            }
        ]
    },
    {
        name: 'ball-scale-multiple',
        children: [{
            count: 3,
            color: null,
            children: null
        }]
    },
    {
        name: 'ball-scale-ripple-multiple',
        children: [
            {
                count: 3, color: (color: string) => {
                    return { 'borderColor': color }
                }, children: null
            }
        ]
    },
    {
        name: 'ball-scale-ripple',
        children: [
            {
                count: 1, color: (color: string) => {
                    return { 'borderColor': color }
                }, children: null
            }
        ]
    },
    {
        name: 'ball-scale',
        children: [{
            count: 1,
            color: null,
            children: null
        }]
    },
    {
        name: 'ball-spin-fade-loader',
        children: [{
            count: 8,
            color: null,
            children: null
        }]
    },
    {
        name: 'ball-triangle-path',
        children: [
            {
                count: 3, color: (color: string) => {
                    return { 'borderColor': color }
                }, children: null
            }
        ]
    },
    {
        name: 'ball-zig-zag-deflect',
        children: [{
            count: 2,
            color: null,
            children: null
        }]
    },
    {
        name: 'ball-zig-zag',
        children: [{
            count: 2,
            color: null,
            children: null
        }]
    },
    {
        name: 'cube-transition',
        children: [{
            count: 2,
            color: null,
            children: null
        }]
    },
    {
        name: 'line-scale-party',
        children: [{
            count: 4,
            color: null,
            children: null
        }]
    },
    {
        name: 'line-scale-pulse-out-rapid',
        children: [{
            count: 5,
            color: null,
            children: null
        }]
    },
    {
        name: 'line-scale-pulse-out',
        children: [{
            count: 5,
            color: null,
            children: null
        }]
    },
    {
        name: 'line-scale',
        children: [{
            count: 5,
            color: null,
            children: null
        }]
    },
    {
        name: 'line-spin-fade-loader',
        children: [{
            count: 8,
            color: null,
            children: null
        }]
    },
    {
        name: 'pacman',
        children: [
            {
                count: 2, color: (color: string) => {
                    return { 'borderTopColor': color, 'borderLeftColor': color, 'borderBottomColor': color }
                }, children: null
            },
            { count: 3, color: null, children: null }
        ]
    },
    {
        name: 'semi-circle-spin',
        children: [
            {
                count: 1,
                color(color: string) {
                    return {
                        backgroundImage: `linear-gradient(transparent 0,transparent 70%, ${color} 30%, ${color} 100%)`
                    };
                },
                children: null
            }
        ]
    },
    {
        name: 'square-spin',
        children: [
            {
                count: 1,
                color: null,
                children: null
            }
        ]
    },
    {
        name: 'triangle-skew-spin',
        children: [
            {
                count: 1, color: (color: string) => {
                    return { 'borderBottomColor': color }
                }, children: null
            }
        ]
    },
    {
        name: 'ball-scale-random',
        children: [
            {
                color: null,
                children: null,
                count: 3
            }
        ]
    }
];

export default loaderList