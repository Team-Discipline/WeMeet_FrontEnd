import React from 'react';

interface ErrorProps {
    error: {
        detail: string | Array<{ loc: [number, number], msg: string }>
    }
}

const ErrorComponent: React.FC<ErrorProps> = ({error}) => {
    if (typeof error.detail === 'string') {
        return (
            <ul>
                <li>{error.detail}</li>
            </ul>
        );
    } else if (typeof error.detail === 'object' && error.detail.length > 0) {
        return (
            <ul>
                {error.detail.map((err, i: number) => (
                    <li key={i}>
                        <strong>{err.loc[1]}</strong> : {err.msg}
                    </li>
                ))}
            </ul>
        );
    } else {
        return null;
    }
};

export default ErrorComponent;
