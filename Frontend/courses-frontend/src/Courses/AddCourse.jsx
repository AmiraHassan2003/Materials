
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
    const navigate = useNavigate();
    const today = new Date().toISOString().split('T')[0];
    const [form, setForm] = useState({
        title: "",
        description: "",
        price: "",
        date: today
    });

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:5246/courses",
                {
                    title: form.title,
                    description: form.description,
                    price: form.price,
                    date: form.date
                }
            )
            .then((response) => {
                console.log(response);
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };



    return (
        <div className="p-6">
            <h2>Edit Course</h2>
            <form onSubmit={handleSubmit} className="mb-6">
                <input
                    name="title"
                    placeholder="Title"
                    value={form.title}
                    onChange={handleChange}
                />
                <input
                    name="description"
                    placeholder="Description"
                    value={form.description}
                    onChange={handleChange}
                />
                <input
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                />
                <input
                    name="price"
                    placeholder="Price"
                    value={form.price}
                    onChange={handleChange}
                />
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );



};

export default AddCourse;
