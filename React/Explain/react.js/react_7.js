// if we have data.js object
// we can call  it un useState
// 5:05
// when i click on count it do render for the page
// when state is changed = re render

import { useMemo } from "react";

//* profiler -> can see what things is doing re redner in browser

// why is happing re render on list 5:10
//

// how to disable this re render we do flag or useEffect that do it once
//! BUT it not slove this problem

//* 1. to slove it we slice them to two component

// when i add a name in input and click submit it will add to list
// the re render how it work:
// 5:30
// first slove

//* memorise = remeber
// if the props change we do useMemo if not we dont 
export default memo(List) // if the prop not change dont do re render keep remember the prop

// when the list change it did re render

// memo = if the changed it do re-render

// when the props the list not change and we change the count the page re-render all the page to slove we use:
//* useCallback -> take a function and list
const [people, setPeople] = useState(data)
const removePerson = useCallback(
    (id) => {
        const newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
        // calling this fun when i click on removePerson 
        // it work when i change or when i click
        // it will do re-render for her self not for all page
    }, [people] // when it changed it will call the (id) func
);

//* useMemo
// she a hook inside her we put function that i want to slice it from the all logic
const value = useMemo(()=> slowFunc(),[])
// she slice the app from the slowfunc
// if there is a function takes to much time and i dont want it ruin the applecation so i put useMemo to slove it