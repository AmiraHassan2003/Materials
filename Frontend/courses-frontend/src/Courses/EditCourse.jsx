import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const EditCourse = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const [form, setForm] = useState({
        title: "",
        description: "",
        price: "",
        date: ""
    });

    useEffect(() => {
        if (location.state?.course) {
            setForm(location.state.course);
        }
    }, [location.state]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:5246/courses/${form.id}`,
                {
                    Title: form.title,
                    Description: form.description,
                    Price: form.price,
                    Date: form.date
                }
            )
            .then((response) => {
                console.log("course updated successfully", response);
                navigate("/");
            })
            .catch((error) => console.error("Error updating course", error));
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

export default EditCourse;
