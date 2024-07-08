import { useState } from 'react';
import emailjs from 'emailjs-com';
import './contacto.css';
const Contacto = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    user_email: '',
    user_Phone: '',
    mensaje: '',
  });

  const [enviando, setEnviando] = useState(false); // Estado para el envío del formulario

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviando(true); // Activa el estado de envío

    // Configurar emailjs con tu servicio de SMTP
    const serviceID = 'service_nkryj1p'; // Reemplaza con tu ID de servicio
    const templateID = 'template_vhojq2d'; // Reemplaza con tu ID de plantilla
    const userID = 'xKpm3cse7rdoAfbV1'; // Reemplaza con tu ID de usuario

    emailjs.send(serviceID, templateID, formData, userID).then(
      (response) => {
        console.log(
          'Correo enviado con éxito!',
          response.status,
          response.text
        );
        // Aquí puedes añadir lógica adicional después de enviar el correo
        setEnviando(false); // Desactiva el estado de envío
      },
      (error) => {
        console.error('Error al enviar el correo:', error);
        // Manejar errores aquí
        setEnviando(false); // Desactiva el estado de envío en caso de error
      }
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="contenderdso playfair-display-letras grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-white mt-4 font-[sans-serif] before:absolute before:right-0 before:w-[300px] before:bg-[#d3d3cb] before:h-full max-md:before:hidden">
      <div>
        <h2 className="playfair-display-letras text-gray-800 text-3xl font-extrabold">
          Realiza tu consulta hoy mismo
        </h2>
        <p className="playfair-display-letras text-sm text-gray-500 mt-4 leading-relaxed">
          Rellena el siguiente formulario o contáctanos manualmente y en breve
          nos pondremos en contacto contigo.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4 mt-8">
            <input
              type="text"
              name="from_name"
              placeholder="Nombre Completo"
              className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              value={formData.from_name}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="user_Phone"
              placeholder="Telefono No."
              className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              value={formData.user_Phone}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              value={formData.user_email}
              onChange={handleChange}
              required
            />

            <textarea
              name="mensaje"
              placeholder="Escribe tu mensaje..."
              className="px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              value={formData.mensaje}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white"
            disabled={enviando} // Desactiva el botón mientras se envía
          >
            {enviando ? (
              <svg
                className="animate-spin h-5 w-5 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.005 8.005 0 014 12H0c0 6.627 5.373 12 12 12v-4c-3.314 0-6.294-1.346-8.485-3.515l1.414-1.414z"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                className="mr-2"
                viewBox="0 0 548.244 548.244"
              >
                <path
                  fillRule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clipRule="evenodd"
                  data-original="#000000"
                />
              </svg>
            )}
            {enviando ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
        <ul className="mt-4 flex flex-wrap justify-center gap-6">
          <li className="flex items-center text-[#262626]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              fill="currentColor"
              viewBox="0 0 479.058 479.058"
            >
              <path
                d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                data-original="#000000"
              />
            </svg>
            <a
              href="mailto:infoktssolutions@gmail.com"
              className="text-sm ml-4 text-[#262626]"
            >
              <strong>infoktssolutions@gmail.com</strong>
            </a>
          </li>
          <li className="flex items-center text-[#262626]">
            <svg
              className="w-6 h-6 text-white dark:text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
            </svg>

            <span className="text-m ml-4 text-[#262626]">(+54)91160254313</span>
          </li>
          <li className="flex items-center text-[#262626]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm-7 10c0-4.963 4.038-9 9-9s9 4.037 9 9-4.038 9-9 9-9-4.037-9-9zm9.5-4.5c-.276 0-.5.224-.5.5s.224.5.5.5.5-.224.5-.5-.224-.5-.5-.5zm-6.5 5h2v2h-2v-2zm4 0h2v2h-2v-2z"
                data-original="#000000"
              />
            </svg>
            <span className="text-sm ml-4 text-[#262626]">
              Au panamericana 1938
            </span>
          </li>
        </ul>
      </div>
      <div className="z-10 relative h-full max-md:min-h-[350px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d488.7765771508248!2d-58.54481767795927!3d-34.50076042515149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb07cc3a4ff2b%3A0x6ad2dc346bdd3f56!2sAu%20Panamericana%201938!5e0!3m2!1ses-419!2sar!4v1720450355444!5m2!1ses-419!2sar"
          className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
          frameBorder="0"
          allowFullScreen
          title="ubicacion"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacto;
