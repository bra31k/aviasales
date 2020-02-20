import React, {MouseEventHandler} from "react";

import "./index.css";

interface IErrorBoundaryState {
    hasError: boolean;
}

interface IErrorBoundaryProps {
    error: boolean;
    tryMore: MouseEventHandler;
}

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor(props: IErrorBoundaryProps) {
        super(props);

        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError() {
        return {
            hasError: true
        };
    }

    componentDidUpdate(prevProps: Readonly<IErrorBoundaryProps>, prevState: Readonly<IErrorBoundaryState>): void {
        if (prevProps.error !== this.props.error) {
            this.setState((_, props) => ({hasError: props.error}));
        }
    }

    render() {
        const {children, tryMore} = this.props;

        if (this.state.hasError) {
            return (
                <div className="error">
                    <div className="error-text">
                        Произошла ошибка.
                    </div>
                    <button
                        type="button"
                        className="button-error"
                        onClick={tryMore}
                    >
                        ПОПРОБОВАТЬ СНОВА
                    </button>
                </div>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
