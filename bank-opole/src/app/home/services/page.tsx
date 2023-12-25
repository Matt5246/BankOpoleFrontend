'use client'
import { useRef } from 'react'
import { increment, decrement, CounterState } from '../../../lib/features/counter/counterSlice'
import { useAppDispatch, useAppSelector } from '../../../lib/hooks'
import { Button } from 'antd';


export default function Home() {
    const dispatch = useAppDispatch()

    const count = useAppSelector((state) => state.counterReducer.value);

    return (
        <header>
            <h1 className="text-4xl font-bold">Bank App {count}</h1>
            <Button className="m-5" onClick={() => dispatch(increment())}>Increment</Button>
            <Button onClick={() => dispatch(decrement())}>Decrement</Button>
        </header>
    );
};

