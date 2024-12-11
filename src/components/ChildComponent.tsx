'use client'
import GrandChildComponent from "@/components/GrandChildComponent";

type Props = {
    testValue: string;
    testNumber?: number;
}

export const ChildComponent = (props: Props) => {
    return (
        <div>
            <h1>Child Component</h1>
            <p>{props.testValue}</p>
            <p>{props.testNumber}</p>
            <GrandChildComponent testValue={props.testValue} />
        </div>
    );
};