# useCallback

- Use React.memo - prevents unchange state/props components from rerendering
- Use useCallback, prevent call back component from rerendering

## What?

- useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed.

## Why?

- It is useful when passing callbacks to optimaized child components that rely on reference equality to prevent unnecessary renders.

## How?

- First import from react

      import React, {useState, useCallback} from 'react'

- Second useCallBack

      const incrementAge = useCallback(() => {setAge(age+1))}, [age])

      const incrementSalary = useCallback(() => {setAge(salary+1000))}, [salary])

## React.memo

When changing a state in the parent component, all children component will rerender. To improve performance
add React.memo(componentA) to child component. Only the child component with the state changed will rerender.

- child componentA will rerender only if props or state are change

      export default React.memo(componentA)

      //React.memo has nothing to do with hooks
      //React.memo is a feature since 16.6

# useMemo

- will only recompute the cached value when one of the dependencies has changed
- this optimization aviod expensive calculations on every render

_Counter.js_

    	const isEven = useMemo(() => {
    		let i = 0;
    		while (i < 200000000) i++;
    		return counterOne % 2 === 0;
    	}, [counterOne]);

## useCallback and useMemo difference

- useCallBack caches the provided function instance itself
- useMemo invokes the provided function and caches it's result
