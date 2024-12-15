import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, id, email, phone, appointmentType, date } = req.body;

    // Formatear la fecha en formato ISO 8601
    const formattedDate = new Date(date).toISOString();

    try {
      // Enviar solicitud POST a Calendly
      const response = await axios.post(
        "https://api.calendly.com/one_off_event_types",
        {
          event: {
            name: appointmentType,
            start_time: formattedDate, // Asegurarse de que la fecha esté correctamente formateada
            invitees: [
              { 
                email, 
                first_name: name, 
                custom_answers: [
                  { question: "Cédula", answer: id }, 
                  { question: "Teléfono", answer: phone }
                ] 
              },
            ],
          },
        },
        {
          headers: {
            Authorization: `Bearer eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzM0MjEwMDEwLCJqdGkiOiI4NTczZjY2ZS0yYmVjLTRjZTctYWJlNS00NjQ1OTEyNGFmMDUiLCJ1c2VyX3V1aWQiOiI1Yjk1ZWFkOC0yY2M2LTQ1NTctYTNkMC1lNjkyYTYzOWMxY2UifQ.jtBynLkPZyY8gN0gzTHr7KavrqbdHpkvBGjC0mf87Bvs-7BxAtDmj1AyFIB_Ge8DgbKBHp2M-ooOzRsD2orMAw`, // Reemplaza con tu token válido
            "Content-Type": "application/json",
          },
        }
      );

      // Responder si la cita se creó exitosamente
      res.status(200).json({ success: true, data: response.data });
    } catch (error) {
      // Captura y responde con errores detallados
      console.error("Error al crear la cita:", error.response?.data || error.message);
      res.status(500).json({
        message: "Hubo un error al intentar crear la cita.",
        error: error.response?.data || error.message,
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
