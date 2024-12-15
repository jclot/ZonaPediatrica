import { useState } from "react";

const ScheduleAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    email: "",
    phone: "",
    appointmentType: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/citas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("¡Cita creada exitosamente!");
        setFormData({
          name: "",
          id: "",
          email: "",
          phone: "",
          appointmentType: "",
          date: "",
        });
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      alert("Hubo un problema al enviar los datos.");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="id"
        placeholder="Cédula"
        value={formData.id}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Correo"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Teléfono"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="appointmentType"
        placeholder="Tipo de cita"
        value={formData.appointmentType}
        onChange={handleChange}
        required
      />
      <input
        type="datetime-local"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <button type="submit">Agendar cita</button>
    </form>
  );
};

export default ScheduleAppointment;
