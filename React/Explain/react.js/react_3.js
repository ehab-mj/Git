// Changes = render -> needs memory

// 6:45

// in React Event Listner be like:
const [count, setCount] = userState(0);

function handleClick() {
    setCount(count + 1);
}

return (
    <>
        <h2> count {count}</h2>
        <button onClick={handleClick}>add</button>
        {/* <button onClick={() => setCount(count + 1)}>add</button> */}
    </>)

// if there a change on input -> we write onChange
// firtName : e.target.value -> he takes the changed value the user put
import { useState } from 'react';

export default function Form() {
    const [form, setForm] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com',
    });

    return (
        <>
            <label>
                First name:
                <input
                    value={form.firstName}
                    onChange={e => {
                        setForm({
                            ...form,
                            firstName: e.target.value
                        });
                    }}
                />
            </label>
            <label>
                Last name:
                <input
                    value={form.lastName}
                    onChange={e => {
                        setForm({
                            ...form,
                            lastName: e.target.value
                        });
                    }}
                />
            </label>
            <label>
                Email:
                <input
                    value={form.email}
                    onChange={e => {
                        setForm({
                            ...form,
                            email: e.target.value
                        });
                    }}
                />
            </label>
            <p>
                {form.firstName}{' '}
                {form.lastName}{' '}
                ({form.email})
            </p>
        </>
    );
}
// this correct not wrong but DRY code