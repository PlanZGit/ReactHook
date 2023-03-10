# useEffect Hook

- The Effect Hook lets you perform side efects in functional components
- It is a close replacement for componentDidMount, componentDidUpdate, componentWillUnmount

## notes

- import React, { useState, useEffect } from "react";
- useEffect is placed insided the component, easy access to state and props
- useEffect runs after every render of the component
- use conditional to run useEffect, for performance problem
- useEffect will return a function which will be executed when the component will unmount
- sometimes when we useEffect call a function, it is best to define it inside useEffect
- Multiple useEffect - if we have mutil effects to run, just use two useEffect and separate them inside the component

- Data Fetching using axios

      axios.get('https://jsonplaceholder.typicode.com/posts')
        - get request returns a response
      .then((res) => { console.log(res); setPosts(res.data);})
        - then response data
      .catch((err) => {console.log(err);});
        - throw catch error

### useEffect conditional

_HookCounterOne.js_

        useEffect(() => {
          console.log("updating the title...");
          document.title = `Clicked ${count} times`;
        }, [count]);

          // replace componentDidMount , componentDidUpdate
          // pass in array in second parameter with value, only updates when value changes

### useEffect run only once

_HookMouse.js_

        useEffect(() => {
          console.log("useEffect called");
          window.addEventListener("mousemove", logMousePosition);
        }, []);

        // replace componentDidMount
        // pass a empty array value

### useEffect with cleanup

_HookMouse.js_

        useEffect(() => {
          console.log("useEffect called");
          window.addEventListener("mousemove", logMousePosition);

          return () => {
            console.log("componentWillUnmount");
            window.removeEventListener("mousemove", logMousePosition);
          };
        }, []);

        // replace componentWillUnmount

### useEffect DataFetching

_DataFetching.js_

        useEffect(() => {
          axios
            .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then((res) => {
              console.log(res);
              setPost(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }, [idFromButtonClick]);

          return (
          <div>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
            ></input>
            <button type="button" onClick={handleClick}>
              Fetch Post
            </button>
            <div>{post.title}</div>
          </div>
        );
