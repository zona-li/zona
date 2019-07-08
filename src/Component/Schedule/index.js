import React from "react";

import { useForm } from "./useForm";

const Calendar = () => {
    const [values, handleChange] = useForm({name: "", email: "", phone: ""});

    return (
        <div>
            <p>Replace me with calendar</p>
            <form>
                Your name:
                <input name="name" type="text" value={values.name} onChange={handleChange} />
                <br></br>
                Email:
                <input name="email" type="email" value={values.email} onChange={handleChange} />
                <br></br>
                Phone number:
                <input name="phone" type="tel" value={values.phone} onChange={handleChange} />
            </form>
        </div>
    );
}

export default Calendar;