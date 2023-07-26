import { useState } from "react";
import axios from "axios";
import SubmitButton from "../../../../../components/buttons/SubmitButton"
import Swal from "sweetalert2";

export default function FormName({ userData, userId }) {

    const [form, setForm] = useState({
        name: "",
        lastName: "",
        aboutMe: ""

    })
    const handleChange = (event) => {
        const { value, name } = event.target
        setForm({ ...form, [name]: value });
    }
    const filteredData = Object.fromEntries(
        Object.entries(form).filter(([key, value]) => value !== '')
    );

    const onSubmit = async (event) => {
        event.preventDefault()
        const putProfile = async (form) => {
            try {
                const res = (await axios.put(`/api/users/${userId}`, filteredData)).data;
                return { created: true, res };
            } catch (error) {
                return { created: false, error: error.message };
            }
        };
        const response = await putProfile(form);

        if (response.created) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Perfil Editado",
                showConfirmButton: true,
            });
        } else {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Algo salió mal",
                showConfirmButton: true,
            });
        }
    }

    return (
        <div>
            <form className=" w-[37em]" onSubmit={onSubmit}>
                <label htmlFor="Nombre">Nombre</label>
                <input
                    className=" bg-[var(--primary)] flex text-xl shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline mb-3"
                    id="name"
                    type="text"
                    placeholder={userData.name}
                    onChange={handleChange}
                    name="name"
                    value={form.name}
                />
                <label htmlFor="Nombre">Apellidos</label>
                <input
                    className=" bg-[var(--primary)] flex text-xl shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline mb-3"
                    id="lastName"
                    type="text"
                    placeholder={userData.lastName}
                    onChange={handleChange}
                    name="lastName"
                    value={form.lastName}
                />
                <label htmlFor="Nombre">Acerca de mi</label>
                <textarea
                    className=" bg-[var(--primary)]  shadow appearance-none border rounded w-full h-[10em] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none mb-3"
                    id="aboutMe"
                    type="text"
                    onChange={handleChange}
                    name="aboutMe"
                    value={form.aboutMe}
                    placeholder={userData.aboutMe}
                />
                <div className="w-[37em]">
                    <SubmitButton
                        label="Guardar"
                        disabled={Object.keys(filteredData).length === 0} />
                </div>
            </form>
        </div>

    )
} 
