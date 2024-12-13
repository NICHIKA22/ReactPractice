type Props = {
    testValue: string;
}

export  const GrandChildComponent = (props: Props) => {
    return (
        <div>
            <h1>GrandChild Component</h1>
            <p>{props.testValue}</p>
        </div>
    );
};

export default GrandChildComponent;