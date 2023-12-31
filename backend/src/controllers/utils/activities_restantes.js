const extras = {
  Viajes: [
    [
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message: "Buenos días, ¿hablo con la agencia de tours Laguna Blanca?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message: "Así es, ¿en qué puedo ayudarle?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Estoy interesado en un tour a Laguna Blanca, ¿podría proporcionarme información sobre los paquetes disponibles?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Información sobre tours a Laguna Blanca",
        message:
          "Buenas tardes, me gustaría obtener información sobre los paquetes de tours a Laguna Blanca. Por favor, ¿podrían proporcionarme detalles sobre las fechas disponibles y los precios?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Confirmación de reserva de tour a Laguna Blanca",
        message:
          "Buenas tardes, quisiera confirmar la reserva de un tour a Laguna Blanca para el próximo fin de semana. Por favor, ¿podrían confirmarme la disponibilidad y el precio final?",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: null,
        subject: "Confirmación de pago del tour a Laguna Blanca",
        message:
          "Buenas tardes, les informo que ya he realizado el pago correspondiente al tour a Laguna Blanca. Por favor, ¿podrían confirmarme la recepción del pago y la reserva correspondiente?",
      },
      {
        method: "Llamada",
        state: "Concretado",
        attached: null,
        subject: "",
        message:
          "Buenas tardes, solo para confirmar la fecha y hora de salida para el tour a Laguna Blanca que reservé la semana pasada.",
      },
    ],
    [
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Buenos días, me gustaría obtener información sobre el paquete turístico a Huaca del Rey que vi en su sitio web.",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Consulta sobre el paquete turístico a Huaca del Rey",
        message:
          "Buenos días, escribo para solicitar más detalles acerca del paquete turístico que ofrecen para visitar Huaca del Rey. ¿Podrían enviarme más información por correo electrónico? Gracias.",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Hola, llamo para saber si recibieron mi correo electrónico sobre el paquete turístico a Huaca del Rey. Estoy muy interesado en reservar.",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject:
          "Seguimiento sobre la consulta del paquete turístico a Huaca del Rey",
        message:
          "Hola, solo quería saber si recibieron mi correo electrónico y si pudieron enviarme más información sobre el paquete turístico a Huaca del Rey. Gracias.",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Reserva del paquete turístico a Huaca del Rey",
        message:
          "Buenos días, quisiera realizar la reserva del paquete turístico a Huaca del Rey para dos personas. ¿Podrían indicarme el procedimiento para hacerlo? Gracias.",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: null,
        subject:
          "Confirmación de reserva del paquete turístico a Huaca del Rey",
        message:
          "Le confirmamos que su reserva para el paquete turístico a Huaca del Rey ha sido registrada. Por favor, encuentre adjunto el itinerario detallado del viaje y los datos de pago para confirmar la reserva. ¡Gracias por elegir nuestros servicios!",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: null,
        subject: "Confirmación de pago del paquete turístico a Huaca del Rey",
        message:
          "Le confirmamos que hemos recibido el pago correspondiente a la reserva del paquete turístico a Huaca del Rey. Quedamos a la espera de su llegada para iniciar el viaje en la fecha acordada. ¡Buen viaje!",
      },
    ],
    [
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Hola, buenos días. Estoy interesado en el tour a Gran Cascada. ¿Podría darme más información?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "¡Hola! Claro, con mucho gusto le puedo brindar toda la información necesaria para el tour.",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Información del tour a Gran Cascada",
        message:
          "Estimado cliente, agradezco su interés en el tour a Gran Cascada. Adjunto le envío toda la información necesaria para que pueda tomar una decisión informada.",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: "Folleto_Tour_Gran_Cascada.pdf",
        subject: "Folleto del tour a Gran Cascada",
        message:
          "Estimado cliente, le envío el folleto del tour a Gran Cascada. Espero que le guste y le ayude a tomar una decisión.",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "¡Hola! ¿Ha tenido la oportunidad de revisar la información que le enviamos?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Sí, he revisado el folleto y me parece muy interesante. ¿Podría indicarme el precio y la disponibilidad para el mes de mayo?",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: null,
        subject: "Confirmación de reserva del tour a Gran Cascada",
        message:
          "Estimado cliente, le confirmo la reserva del tour a Gran Cascada para el mes de mayo. Por favor, adjunto encontrará la información necesaria para el pago y confirmación de la reserva. ¡Esperamos verle pronto!",
      },
    ],
    [
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Buenos días, ¿estoy hablando con el equipo de ventas de Tours Aventura?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message: "Sí, habla con Laura. ¿En qué puedo ayudarte?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Me gustaría obtener información sobre el tour a Palo del Rey que ofrecen en su página web. ¿Podrías darme más detalles?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Información sobre tour a Palo del Rey",
        message:
          "Buenos días, quisiera obtener más información sobre el tour a Palo del Rey que ofrecen en su página web. ¿Podrían enviarme más detalles?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: "folleto_palo_del_rey.pdf",
        subject: "Folleto de tour a Palo del Rey",
        message:
          "Adjunto les envío el folleto con la información completa sobre el tour a Palo del Rey. Si necesitan más detalles, no duden en ponerse en contacto conmigo.",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Acabo de revisar el folleto que me enviaste y me parece muy interesante. Me gustaría reservar dos lugares para el tour. ¿Podría indicarme cuáles son los próximos días disponibles?",
      },
      {
        method: "Llamada",
        state: "Concretado",
        attached: null,
        subject: "",
        message:
          "¡Genial! Tenemos disponibilidad para el próximo fin de semana. Podemos hacer la reserva por teléfono o por correo electrónico, ¿cuál prefieres?",
      },
    ],
    [
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Buenos días, hablo con la agencia de viajes Turismo aventura, estoy interesado en el tour a Palo del Rey, ¿podrían darme más información?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Información sobre el tour a Palo del Rey",
        message:
          "Estimados, me pongo en contacto con ustedes para solicitar información detallada sobre el tour a Palo del Rey, horarios, actividades, precios, entre otras cosas. Muchas gracias.",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Buenos días, les escribía para confirmar que recibieron mi solicitud de información y preguntar si hay alguna disponibilidad para la próxima semana. Además, quisiera saber si es posible realizar algunas modificaciones en el itinerario.",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject:
          "Confirmación y detalles de la reserva del tour a Palo del Rey",
        message:
          "Estimados, después de analizar las opciones de viaje, me gustaría confirmar la reserva del tour a Palo del Rey para dos personas, del 15 al 20 de mayo. Además, quisiera confirmar algunas modificaciones al itinerario que habíamos hablado por teléfono. Quedo atento a su respuesta.",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: null,
        subject: "Confirmación de pago del tour a Palo del Rey",
        message:
          "Estimados, les informo que he realizado el pago correspondiente al tour a Palo del Rey, tal como acordamos. Quedo atento a su respuesta para confirmar la reserva y recibir la información de los detalles del viaje. Muchas gracias.",
      },
    ],
    [
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Información sobre Tour al Gran Lago",
        message:
          "Buenos días, estoy interesado en obtener información sobre el Tour al Gran Lago. ¿Podrían enviarme detalles sobre el itinerario, precios y fechas disponibles? Gracias.",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Buenos días, llamaba para saber si han recibido mi correo sobre el Tour al Gran Lago y si podrían brindarme más información al respecto. Gracias.",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Solicitud de cotización para Tour al Gran Lago",
        message:
          "Hola de nuevo, quisiera solicitar una cotización para el Tour al Gran Lago que me habían enviado. Espero su respuesta. Gracias.",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Recordatorio sobre solicitud de cotización",
        message:
          "Buenos días, solo quería recordarles que sigo interesado en el Tour al Gran Lago y espero su respuesta a la solicitud de cotización que les envié hace unos días. Gracias.",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Buenos días, llamaba para saber si hay alguna novedad sobre mi solicitud de cotización para el Tour al Gran Lago. Gracias.",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: null,
        subject: "Confirmación de reserva para Tour al Gran Lago",
        message:
          "Hola, quisiera confirmar la reserva para el Tour al Gran Lago que habíamos estado gestionando por correo y llamadas. Realizaré el pago de inmediato. Gracias.",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: null,
        subject: "Recibo de pago para Tour al Gran Lago",
        message:
          "Adjunto encontrará el recibo de pago correspondiente al Tour al Gran Lago. Muchas gracias por su atención y espero con ansias la experiencia que nos brindarán.",
      },
    ],
    [
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Paquete vacacional a Manta Ritual",
        message:
          "Estimado/a cliente, le escribimos para ofrecerle nuestro paquete vacacional a Manta Ritual, que incluye alojamiento, transporte y actividades. ¿Le interesaría recibir más información?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Buen día, ¿está interesado en nuestro paquete vacacional a Manta Ritual? Podemos brindarle más información y ayudarle a planificar su viaje.",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Detalle del paquete vacacional a Manta Ritual",
        message:
          "Estimado/a cliente, adjuntamos más detalles sobre nuestro paquete vacacional a Manta Ritual. ¿Le gustaría reservar su viaje con nosotros?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Le recordamos que nuestro paquete vacacional a Manta Ritual incluye alojamiento en hotel de 5 estrellas, transporte terrestre y marítimo, y actividades como paseos en barco y caminatas por la playa. ¿Está interesado/a en reservar su viaje?",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: null,
        subject: "Confirmación de reserva",
        message:
          "Estimado/a cliente, le confirmamos que hemos recibido su reserva para el paquete vacacional a Manta Ritual. Adjuntamos los detalles de su itinerario y esperamos que disfrute de su viaje. ¡Gracias por confiar en nosotros!",
      },
    ],
    [
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Información sobre el Tour a Playa del Descanso",
        message:
          "Buenas tardes, me gustaría recibir más información sobre el Tour a Playa del Descanso que ofrecen en su agencia. ¿Podrían enviarme detalles sobre fechas, precios y servicios incluidos? Gracias.",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Buenos días, quisiera saber si recibieron mi correo electrónico solicitando información sobre el Tour a Playa del Descanso. ¿Podrían brindarme detalles por teléfono?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Re: Información sobre el Tour a Playa del Descanso",
        message:
          "¡Hola! Sí, recibimos su correo y le hemos enviado un folleto detallado con los servicios incluidos, fechas y precios. ¿Lo ha recibido? Si necesita más información, no dude en contactarnos.",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Muchas gracias por el correo. Me gustaría hacer algunas preguntas adicionales sobre el Tour. ¿Sería posible agendar una llamada para el día de mañana?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message: "Perfecto, quedamos en contacto entonces. ¡Gracias!",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Buen día, disculpen la espera. Me gustaría confirmar mi reserva para el Tour a Playa del Descanso para dos personas en las fechas del 10 al 15 de julio.",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: null,
        subject: "Confirmación de reserva - Tour a Playa del Descanso",
        message:
          "¡Felicidades! Su reserva para el Tour a Playa del Descanso ha sido confirmada para las fechas del 10 al 15 de julio. Gracias por elegir nuestros servicios. Adjunto encontrará su itinerario detallado y el comprobante de pago. Cualquier consulta adicional, no dude en contactarnos. ¡Que disfruten su viaje!",
      },
    ],
    [
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Consulta Tour Gran Cañón",
        message:
          "Buenos días, estoy interesado en obtener información sobre el tour al Gran Cañón que ofrecen.",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Buenos días, recibí su correo y con gusto puedo brindarle la información que necesita. ¿Podría proporcionarme su número de teléfono para llamarle y explicarle todo detalladamente?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Perfecto, le estaré llamando en unos minutos para proporcionarle la información que necesita.",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Buenos días, le llamo para informarle que ofrecemos el tour al Gran Cañón en dos modalidades, una de 1 día y otra de 3 días, ambas incluyen transporte y guía turístico. ¿Le gustaría reservar alguno de estos tours?",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: null,
        subject: "Reserva tour Gran Cañón",
        message:
          "¡Buenas noticias! Quiero reservar el tour de 3 días al Gran Cañón para dos personas, ¿cuál es el siguiente paso para realizar la reserva?",
      },
    ],
    [
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Tour Marino - Información",
        message:
          "Buenos días, estoy interesado en obtener más información sobre el tour marino que ofrecen. ¿Podrían enviarme detalles y precios?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Hola, llamaba para obtener información sobre el tour marino que ofrecen. ¿Podrían brindarme detalles y precios?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Tour Marino - Disponibilidad",
        message:
          "Gracias por la información. ¿Podrían confirmarme si hay disponibilidad para el día 15 de mayo?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Muchas gracias por la información. ¿Podrían confirmarme si hay disponibilidad para el día 15 de mayo?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Tour Marino - Reserva",
        message:
          "Excelente, quisiera hacer la reserva para el día 15 de mayo. ¿Podrían indicarme los detalles para el pago?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Genial, quisiera hacer la reserva para el día 15 de mayo. ¿Podrían indicarme los detalles para el pago?",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: null,
        subject: "Tour Marino - Confirmación de Reserva",
        message:
          "Muchas gracias por la confirmación de la reserva. Quedo a la espera de la información para realizar el pago. ¡Saludos!",
      },
    ],
    [
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Tour de naturaleza salvaje",
        message:
          "Estimado/a cliente, le informamos que tenemos un tour de naturaleza salvaje disponible para la fecha que nos indicó. ¿Le gustaría recibir más información?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Buenos días, llamaba para ofrecerle un tour de naturaleza salvaje que tenemos disponible para la fecha que nos indicó. ¿Está interesado/a en recibir más información?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Más detalles sobre el Tour de naturaleza salvaje",
        message:
          "Le adjuntamos información detallada sobre el tour, incluyendo el itinerario, alojamiento y precio. ¿Le gustaría realizar la reserva?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "¿Le gustaría recibir información más detallada sobre el tour, como el itinerario, alojamiento y precio? Podríamos enviarle la información por correo electrónico si lo prefiere.",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: null,
        subject: "Reserva del Tour de naturaleza salvaje",
        message:
          "Le confirmamos que hemos recibido su reserva para el tour de naturaleza salvaje. Por favor, realice el pago para completar la reserva. Gracias por su confianza.",
      },
    ],
    [
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Hola, ¿me podrías brindar información sobre el Tour Noche Estrellada que ofrecen?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "¡Genial! ¿Podrías brindarme el costo del tour y la fecha disponible más cercana?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Información de Tour Noche Estrellada",
        message:
          "Estimado cliente, adjunto encontrará toda la información correspondiente al Tour Noche Estrellada, espero que sea de su interés. Saludos cordiales.",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "¡Vaya! Me ha gustado mucho la información que me enviaste por correo. ¿Cómo puedo reservar mi cupo para el tour?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Confirmación de reserva",
        message:
          "Estimado cliente, confirmo que hemos recibido su solicitud de reserva para el Tour Noche Estrellada. En breve nos pondremos en contacto para coordinar el pago y los detalles de la reserva. Saludos cordiales.",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Confirmación de pago",
        message:
          "Estimado cliente, confirmo que hemos recibido su pago correspondiente al Tour Noche Estrellada. ¡Estamos emocionados de compartir esta experiencia única con usted! Saludos cordiales.",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: null,
        subject: "Confirmación de reserva y detalles",
        message:
          "Estimado cliente, confirmo que su reserva para el Tour Noche Estrellada está confirmada. Adjunto encontrará los detalles correspondientes a la fecha, hora y lugar de encuentro para el tour. ¡Nos vemos pronto! Saludos cordiales.",
      },
    ],
    [
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Buenos días, ¿estoy hablando con la agencia de viajes La Gran Huella?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message: "Sí, correcto. ¿En qué puedo ayudarte?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Estoy interesado en reservar el tour La Gran Huella para dos personas en la fecha del 15 de mayo. ¿Tienen disponibilidad?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: "Itinerario del tour",
        subject: "Reserva de Tour La Gran Huella",
        message:
          "Le envío este correo electrónico para confirmar mi interés en el Tour La Gran Huella para dos personas en la fecha del 15 de mayo. Adjunto el itinerario del tour para que puedan revisarlo. Por favor, avísenme si tienen disponibilidad.",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: null,
        subject: "Confirmación de reserva Tour La Gran Huella",
        message:
          "¡Buenas noticias! Tenemos disponibilidad para el Tour La Gran Huella en la fecha que solicitó. Para confirmar la reserva, por favor haga un depósito del 50% del valor total del tour en nuestra cuenta bancaria. Una vez que recibamos el depósito, le enviaremos la confirmación de reserva.",
      },
    ],
    [
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Buenos días, estoy interesado en el Tour Casa de Chocolate. ¿Podrían brindarme más información?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "¡Claro que sí! Tenemos diferentes opciones de tours, ¿le gustaría conocer más sobre alguno en específico?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Me gustaría conocer el tour que incluye la degustación de chocolates.",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: "Folleto del Tour",
        subject: "Información del Tour Casa de Chocolate",
        message:
          "Le enviamos el folleto del tour que incluye la degustación de chocolates. Quedamos atentos a cualquier pregunta o duda adicional.",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "He revisado el folleto y me gustaría reservar una visita para la próxima semana. ¿Tienen disponibilidad?",
      },
      {
        method: "Llamada",
        state: "Concretado",
        attached: null,
        subject: "",
        message:
          "Sí, tenemos disponibilidad para la fecha que solicita. Le confirmamos su reserva y le enviamos los detalles de la misma por correo electrónico. ¡Gracias por elegir nuestro Tour Casa de Chocolate!",
      },
    ],
    [
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Solicitud de información para Tour Gran Cascada",
        message:
          "Buenos días, me interesa conocer más acerca del Tour Gran Cascada que ofrecen. ¿Podrían proporcionarme más información sobre el itinerario, precios y disponibilidad? Gracias.",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Buenos días, soy el vendedor de la agencia de viajes y quería saber si recibió nuestra respuesta al correo electrónico que envió ayer. Estoy a su disposición para aclarar cualquier duda que tenga.",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Información adicional del Tour Gran Cascada",
        message:
          "Gracias por la respuesta. Me gustaría saber si el Tour incluye transporte desde el aeropuerto y si hay algún requisito para la reserva.",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Buenos días, le comento que el Tour incluye transporte desde el aeropuerto y en cuanto a la reserva, requerimos un depósito del 50% del precio total. ¿Le gustaría hacer la reserva?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Confirmación de reserva del Tour Gran Cascada",
        message:
          "Me gustaría confirmar la reserva del Tour Gran Cascada para dos personas. ¿Cómo puedo realizar el depósito?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Instrucciones de pago para el Tour Gran Cascada",
        message:
          "Para realizar el depósito puede hacerlo mediante transferencia bancaria o tarjeta de crédito a través de nuestro sitio web. Le enviaremos las instrucciones detalladas junto con la confirmación de la reserva.",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: null,
        subject: "Confirmación de reserva y pago del Tour Gran Cascada",
        message:
          "Confirmamos la reserva y el pago del Tour Gran Cascada para dos personas. Le enviamos los detalles de la reserva y el itinerario. ¡Gracias por confiar en nosotros!",
      },
    ],
  ],
  Pets: [
    [
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Consulta sobre venta de mascotas",
        message:
          "Hola, estoy interesado en comprar una mascota. ¿Tienes algún cachorro disponible?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Respuesta a consulta de mascotas",
        message:
          "¡Hola! Sí, tenemos varios cachorros disponibles. ¿Qué tipo de mascota estás buscando?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Solicitud de información sobre cachorros",
        message:
          "Me gustaría un cachorro de raza pequeña, preferiblemente un BUlldog Inglés. ¿Podrías decirme si tienes alguno disponible y cuál es el precio?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Información sobre cachorros",
        message:
          "¡Claro! Tenemos un hermoso cachorro BUlldog Inglés disponible por 800 euros. Es muy amigable y está en perfectas condiciones de salud. ¿Te gustaría ver fotos?",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: null,
        subject: "Confirmación de compra de cachorro",
        message:
          "¡Genial! Sí, me encantaría ver algunas fotos. Me gusta mucho la descripción que me has dado. ¿Cómo puedo hacer el pago y cuándo podría recibir al cachorro?",
      },
    ],
    [
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Consulta sobre venta de mascotas",
        message:
          "Hola, estoy buscando un perro grande para mi familia. ¿Tienes algún Husky siberiano disponible?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Respuesta a consulta de mascotas",
        message:
          "¡Hola! Sí, tenemos varios Husky siberiano disponibles. ¿Estás buscando un macho o una hembra?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Solicitud de información sobre Husky siberiano",
        message:
          "Estoy buscando una hembra Husky siberiano. ¿Podrías decirme si tienes alguna disponible y cuál es el precio?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Información sobre Husky siberiano",
        message:
          "¡Claro! Tenemos una hermosa hembra Husky siberiano disponible por 1200 euros. Es muy juguetona y está en perfectas condiciones de salud. ¿Te gustaría ver algunas fotos?",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: null,
        subject: "Confirmación de compra de Husky siberiano",
        message:
          "¡Genial! Sí, me encantaría ver algunas fotos. Me gusta mucho la descripción que me has dado. ¿Cómo puedo hacer el pago y cuándo podría recibir al cachorro?",
      },
    ],
    [
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Consulta sobre venta de mascotas",
        message:
          "Hola, estoy buscando un Gato Faraónico para mi hija. ¿Tienes alguno disponible?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Respuesta a consulta de mascotas",
        message:
          "¡Hola! Sí, tenemos un Gato Faraónico disponible. ¿Estás buscando un macho o una hembra?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Solicitud de información sobre Gato Faraónico",
        message:
          "Estoy buscando una hembra Gato Faraónico. ¿Podrías decirme si tienes alguna disponible y cuál es el precio?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Información sobre Gato Faraónico",
        message:
          "¡Claro! Tenemos una hermosa hembra Gato Faraónico disponible por 600 euros.",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Confirmación de compra de Gato Faraónico",
        message:
          "¡Perfecto! Me encantaría ver algunas fotos de la gatita. ¿Cómo puedo hacer el pago y cuándo podríamos recibirla en casa?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Confirmación de pago y entrega del Gato Faraónico",
        message:
          "Para realizar el pago puedes hacerlo mediante transferencia bancaria o con tarjeta de crédito a través de nuestra web. En cuanto recibamos el pago, podríamos enviar la gatita en los próximos 2 días hábiles. ¿Te parece bien?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Aceptación de pago y entrega",
        message:
          "¡Excelente! Realizaré el pago mediante transferencia bancaria hoy mismo. Muchas gracias por toda la información.",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Confirmación de recepción de pago",
        message:
          "Perfecto, una vez que recibamos el pago, nos pondremos en contacto contigo para coordinar la entrega de la gatita.",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: null,
        subject: "Agradecimiento y despedida",
        message:
          "Muchas gracias por toda la atención y paciencia. Estoy muy emocionada de recibir a nuestra nueva integrante de la familia. ¡Hasta pronto!",
      },
    ],
    [
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Hola, ¿está disponible el tigre de montaña que tienen en venta?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Sí, está disponible. ¿Le gustaría programar una visita para verlo?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Visita para ver el tigre de montaña",
        message:
          "Buenos días, me gustaría programar una visita para ver el tigre de montaña que tienen en venta. ¿Podrían informarme de los horarios disponibles?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Claro, le informo que los horarios disponibles son de lunes a viernes de 9am a 6pm. ¿Qué día y hora le conviene más?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Hola, me gustaría confirmar la visita para ver el tigre de montaña. ¿Qué documentación necesito llevar?",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: null,
        subject: "Compra del tigre de montaña",
        message:
          "Buenas tardes, después de haber visitado al tigre de montaña, me gustaría proceder con la compra. ¿Cuáles son los próximos pasos?",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: null,
        subject: "",
        message:
          "Genial, necesitamos que nos envíe la documentación requerida para proceder con la venta. Una vez verificada la información, procederemos con el contrato de venta y el pago correspondiente. ¿Cuál es su forma de pago preferida?",
      },
    ],
    [
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message: "Buenos días, ¿en qué puedo ayudarte?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Estoy interesado en comprar un doberman, ¿podrías darme más información al respecto?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: "brochure.pdf",
        subject: "Información sobre Doberman",
        message:
          "Estimado/a, adjunto encontrará un brochure con toda la información detallada sobre nuestros perros doberman. Por favor, hágame saber si tiene alguna otra pregunta o si le gustaría programar una visita para conocerlos en persona. Gracias por su interés.",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "¡Hola! Acabo de revisar el brochure y me encantaría programar una visita para conocer a los dobermans disponibles. ¿Cuándo sería posible?",
      },
      {
        method: "Llamada",
        state: "Concretado",
        attached: null,
        subject: "",
        message:
          "¡Genial! Me gustaría concretar la compra de un doberman macho de 3 meses de edad. ¿Cuáles son los siguientes pasos?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: "formulario.pdf",
        subject: "Formulario de compra",
        message:
          "¡Gracias por tu interés en nuestros dobermans! Adjunto encontrarás un formulario que debes completar para formalizar la compra. Una vez que lo hayas completado y enviado, te enviaremos las instrucciones para el pago y coordinar la entrega del perro. ¡Estamos muy emocionados de que te unas a nuestra familia de dueños de dobermans!",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: null,
        subject: "Confirmación de pago y entrega",
        message:
          "¡Felicidades por tu nuevo doberman! Hemos recibido el pago y ya hemos coordinado la entrega. Te esperamos mañana en nuestras instalaciones a las 10:00 am para entregarte a tu nuevo amigo. ¡Gracias por confiar en nosotros!",
      },
    ],
    [
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Consulta sobre leopardo",
        message:
          "Hola, estoy interesado en comprar un leopardo. ¿Podrías decirme si tienes alguno disponible y cuál sería el precio?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Buenos días, quería confirmar si recibiste mi correo electrónico sobre la compra del leopardo. ¿Podrías brindarme más información al respecto?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Disponibilidad de leopardo",
        message:
          "Sí, tenemos un leopardo macho disponible. El precio es de $10,000 dólares. Si estás interesado, puedo enviarte fotos y detalles sobre su salud y cuidado.",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Confirmación de compra de leopardo",
        message:
          "Me gustaría proceder con la compra del leopardo. ¿Cuáles son los pasos a seguir para realizar el pago y la entrega?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Forma de pago y entrega del leopardo",
        message:
          "Puedes realizar el pago mediante transferencia bancaria o tarjeta de crédito a través de nuestra página web. Una vez que recibamos el pago, coordinaremos la entrega del leopardo. ¿Qué método de pago prefieres?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Confirmación de pago",
        message:
          "Acabo de realizar la transferencia bancaria por el valor acordado. ¿Podrías confirmar la recepción del pago y cuándo podríamos recibir al leopardo?",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: null,
        subject: "Recepción del leopardo",
        message:
          "Confirmo la recepción del pago. Estaremos coordinando la entrega del leopardo en los próximos 2 días hábiles. Muchas gracias por tu compra.",
      },
    ],
    [
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Hola, quisiera obtener información sobre la compra de un ornitorrinco.",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Información sobre compra de ornitorrinco",
        message:
          "Estimado vendedor, quisiera saber sobre los precios y requisitos para la compra de un ornitorrinco. Gracias.",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Hola de nuevo, ¿pudieron revisar mi correo electrónico y responder a mi consulta sobre el ornitorrinco?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Información sobre compra de ornitorrinco",
        message:
          "Estimado vendedor, solo quería confirmar si recibieron mi correo y si hay disponibilidad de ornitorrincos para la venta. Gracias.",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Buenos días, ¿pudieron revisar mi último correo electrónico sobre el ornitorrinco? Me gustaría saber más detalles.",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: null,
        subject: "Compra de Ornitorrinco Concretada",
        message:
          "Estimado cliente, nos complace informarle que tenemos disponibilidad de un ornitorrinco para la venta. Por favor, envíenos sus datos para coordinar la entrega y forma de pago. ¡Gracias por su interés!",
      },
      {
        method: "Llamada",
        state: "Concretado",
        attached: null,
        subject: "",
        message:
          "Hola, acabo de recibir un correo electrónico de confirmación de que hay disponibilidad de ornitorrinco para la venta. ¿Podemos coordinar la entrega y forma de pago?",
      },
    ],
    [
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Buenos días, quisiera saber si tienen algún tigre de bengala disponible para la venta.",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Solicitud de información sobre tigres de bengala",
        message:
          "Buenos días, me gustaría obtener más información acerca de los tigres de bengala que tienen disponibles para la venta.",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Hola de nuevo, me gustaría saber si podríamos programar una visita para ver a los tigres de bengala que tienen disponibles.",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Perfecto, ¿podríamos coordinar una visita para el próximo fin de semana?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Confirmación de visita",
        message:
          "¡Hola! Solo quería confirmar que estaré visitando sus instalaciones el próximo fin de semana para ver los tigres de bengala.",
      },
      {
        method: "Llamada",
        state: "Concretado",
        attached: null,
        subject: "",
        message:
          "¡Buenas noticias! Me encantó el tigre de bengala que vi en su tienda y estoy listo para hacer la compra.",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: null,
        subject: "Confirmación de compra",
        message:
          "Estimados, quisiera confirmar mi compra del tigre de bengala que vi en su tienda. ¿Cuál es el siguiente paso?",
      },
    ],
    [
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Consulta sobre disponibilidad de hamsters",
        message:
          "Buenas tardes, me gustaría saber si tienen hamsters disponibles en este momento y cuál sería el precio. Gracias",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Buenos días, llamaba para verificar si recibieron mi correo electrónico sobre los hamsters. ¿Podrían confirmarme la disponibilidad y el precio?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Respuesta a consulta sobre hamsters",
        message:
          "Buenas tardes, sí tenemos hamsters disponibles en este momento. El precio es de $30 por hamster. ¿Cuántos estaría interesado en adquirir?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Perfecto, me interesaría adquirir dos hamsters. ¿Sería posible enviarlos por correo o tendría que ir a la tienda a recogerlos?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Confirmación de venta de hamsters",
        message:
          "Estimado cliente, hemos registrado su pedido de dos hamsters. Si desea, podemos enviarlos por correo a su dirección. El precio total sería de $60 más gastos de envío. ¿Desea proceder con la compra?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Confirmación de pago y envío de hamsters",
        message:
          "Estimado cliente, hemos recibido su pago de $70 y procederemos a enviar los hamsters a su dirección de envío. Le enviaremos un número de seguimiento en cuanto el envío haya sido procesado.",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: null,
        subject: "Envío de hamsters",
        message:
          "Estimado cliente, le informamos que sus hamsters han sido enviados y ya se encuentran en camino a su dirección de envío. Esperamos que lleguen en perfectas condiciones y le agradecemos por su compra.",
      },
    ],
    [
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message: "Buenos días, ¿en qué puedo ayudarlo?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Hola, estoy interesado en comprar una iguana. ¿Tienen disponibilidad?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Consulta sobre disponibilidad de iguanas",
        message:
          "Buenas tardes, estoy interesado en comprar una iguana. ¿Podrían indicarme si tienen alguna disponible?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Sí, tenemos iguanas disponibles en diferentes tamaños y colores. ¿Podría indicarme qué tamaño y color está buscando?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Consulta sobre características de iguanas",
        message:
          "Muchas gracias por su respuesta. ¿Podrían indicarme las características de las iguanas que tienen disponibles? Tamaño, color, edad, alimentación, etc.",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Por supuesto, las iguanas que tenemos disponibles son de entre 20 y 30 centímetros de longitud, con colores que van desde el verde hasta el amarillo. Tienen una alimentación principalmente vegetariana y su edad oscila entre los 6 meses y un año.",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: null,
        subject: "Compra de iguana",
        message:
          "Buenas tardes, después de evaluar todas las opciones, me gustaría comprar una iguana de 25 cm de longitud, color verde y de 8 meses de edad. ¿Cómo podemos proceder con la compra?",
      },
    ],
    [
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Consulta sobre conejos tibetanos",
        message:
          "Buenos días, me gustaría recibir más información sobre los conejos tibetanos que tienen disponibles para la venta. ¿Podrían enviarme fotos y precios? Muchas gracias.",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Respuesta a consulta sobre conejos tibetanos",
        message:
          "Hola, gracias por su interés en nuestros conejos tibetanos. Adjunto le envío algunas fotos y precios. Por favor, háganos saber si tiene alguna pregunta adicional o si desea programar una visita para conocer a nuestros conejos personalmente.",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Buenas tardes, llamaba para preguntar si aún tienen disponibles conejos tibetanos y cuál sería el precio final si me decidiera a comprar uno.",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Sí, tenemos conejos tibetanos disponibles. El precio final dependerá de la edad y las características del conejo que esté interesado en comprar. ¿Podría indicarme qué características está buscando en particular?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Consulta sobre precio final del conejo tibetano",
        message:
          "Buenos días, gracias por la información que me enviaron por correo. Me gustaría saber cuál sería el precio final de un conejo tibetano de 2 meses de edad, de pelaje oscuro. Muchas gracias.",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: null,
        subject: "Confirmación de compra del conejo tibetano",
        message:
          "Hola, les escribo para confirmar mi interés en comprar el conejo tibetano de 2 meses de edad de pelaje oscuro por el precio que me indicaron. Adjunto encontrarán el comprobante de pago. Por favor, háganme saber cuándo podré pasar a buscar a mi nuevo compañero. ¡Gracias!",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: null,
        subject: "Confirmación de entrega del conejo tibetano",
        message:
          "Hola, muchas gracias por su compra. Estamos felices de saber que nuestro conejo tibetano encontrará un hogar feliz con usted. Podría pasar a recogerlo a partir de mañana en nuestras instalaciones de la ciudad. ¡Hasta pronto!",
      },
    ],
    [
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Buenos días, ¿está disponible el Caballo Pura Sangre que vi en su sitio web?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Sí, todavía está disponible. ¿Le gustaría programar una visita para verlo en persona?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message: "¡Por supuesto! ¿Cuál es el horario de atención?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: "Certificado Veterinario",
        subject: "Certificado Veterinario del Caballo Pura Sangre",
        message:
          "Buenas tardes, como habíamos acordado, le envío el Certificado Veterinario del Caballo Pura Sangre que está interesado. ¿Podría confirmar si recibió el archivo adjunto correctamente?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Sí, todo está en orden. Me gustaría proceder con la compra, ¿cuáles son las formas de pago?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Formas de pago para el Caballo Pura Sangre",
        message:
          "Estimado cliente, le informamos que las formas de pago disponibles son transferencia bancaria y pago en efectivo. ¿Cuál prefiere?",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: null,
        subject: "Confirmación de compra del Caballo Pura Sangre",
        message:
          "Estimado cliente, le informamos que hemos recibido su transferencia bancaria por el valor total del Caballo Pura Sangre. En los próximos días nos pondremos en contacto para coordinar la entrega del animal. ¡Muchas gracias por su compra!",
      },
    ],
    [
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message: "Buenos días, ¿hablo con el vendedor de los leones sangre?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message: "Sí, habla con él. ¿En qué puedo ayudarte?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Estoy interesado en comprar un león sangre. ¿Tienen alguno disponible?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Disponibilidad de león sangre",
        message:
          "Buenas tardes, me gustaría saber si tienen disponible algún león sangre para la venta. Quedo atento a su respuesta. Saludos cordiales.",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Estimado cliente, actualmente contamos con un león sangre disponible para la venta. Si está interesado, podemos coordinar una visita para que pueda verlo. ¿Le parece bien?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Hola, estoy llamando para confirmar la visita para ver al león sangre disponible para la venta.",
      },
      {
        method: "Llamada",
        state: "Concretado",
        attached: null,
        subject: "",
        message:
          "Perfecto, nos vemos en la hora y lugar acordados. ¡Gracias por su interés en nuestros leones sangre!",
      },
    ],
    [
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Consulta sobre disponibilidad de pingüinos",
        message:
          "Buenos días, estoy interesado en comprar un pingüino. ¿Podrían indicarme si tienen alguno disponible actualmente?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Buenas tardes, llamaba para consultar sobre la disponibilidad de pingüinos. ¿Podrían ayudarme con esa información?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Respuesta sobre disponibilidad de pingüinos",
        message:
          "Buenas tardes, en este momento contamos con un pingüino macho de 2 años de edad. ¿Estaría interesado en conocer más detalles?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Sí, me gustaría saber más sobre el pingüino que tienen disponible. ¿Podrían darme más información sobre su edad, salud y alimentación?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Información sobre pingüino disponible",
        message:
          "Buenas tardes, el pingüino disponible tiene 2 años de edad, se encuentra en excelente estado de salud y su alimentación se basa principalmente en pescado fresco y krill. ¿Le gustaría coordinar una visita para conocerlo en persona?",
      },
      {
        method: "Llamada",
        state: "Concretado",
        attached: null,
        subject: "",
        message:
          "Sí, me gustaría coordinar una visita para conocer al pingüino en persona y proceder a la compra. ¿Cuáles son los siguientes pasos?",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: null,
        subject: "Confirmación de venta de pingüino",
        message:
          "Buenos días, confirmamos que la venta del pingüino ha sido concretada. Adjuntamos los detalles de la transacción y la fecha de entrega. Gracias por su compra.",
      },
    ],
    [
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Consulta por la compra de un Lemúr",
        message:
          "Buenos días, me gustaría obtener información sobre la compra de un Lemúr. ¿Tienen disponibilidad? ¿Cuál es el precio y los requisitos para adquirirlo?",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Buenos días, acabo de enviar un correo consultando por la compra de un Lemúr. ¿Podría brindarme más información por teléfono?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Información sobre los requisitos para comprar un Lemúr",
        message:
          "¡Gracias por responder mi consulta! Me gustaría saber más sobre los requisitos para adquirir un Lemúr. ¿Cuál es la documentación necesaria? ¿Es posible enviarlo a otra ciudad?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: "formulario.pdf",
        subject: "Envío de formulario para compra de Lemúr",
        message:
          "Adjunto encontrará el formulario que deben completar para la compra del Lemúr. Una vez completado, por favor envíenlo junto con los documentos requeridos para proceder con la venta.",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: null,
        subject: "Confirmación de compra de Lemúr",
        message:
          "¡Buenas noticias! Hemos revisado y aceptado el formulario y documentos que nos envió para la compra del Lemúr. Por favor, proceda con el pago del monto total para proceder con el envío.",
      },
    ],
    [
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Buenos días, estoy interesado en comprar un cuervo y me gustaría saber si tienen disponibilidad",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Consulta sobre disponibilidad de cuervos",
        message:
          "Buenas tardes, me gustaría saber si tienen cuervos disponibles para la venta y cuál sería su precio. Quedo atento a su respuesta. Saludos cordiales.",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Hola, soy el mismo cliente que los contactó anteriormente sobre los cuervos. ¿Hay alguna novedad al respecto?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Segunda consulta sobre disponibilidad de cuervos",
        message:
          "Buenos días, solo quería saber si han recibido mi consulta anterior sobre los cuervos y si pueden darme alguna respuesta al respecto. Muchas gracias.",
      },
      {
        method: "Llamada",
        state: "Concretado",
        attached: null,
        subject: "",
        message:
          "¡Buenas noticias! Tenemos un cuervo disponible para la venta y su precio es de $2000. ¿Le gustaría concretar la compra?",
      },
    ],
    [
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Solicitud de información sobre iguanas",
        message:
          "Buenas tardes, estoy interesado en comprar una iguana y me gustaría obtener información sobre las iguanas que tienen disponibles. ¿Podrían enviarme más información sobre precios y disponibilidad? Gracias.",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Buenos días, llamaba para confirmar si recibieron mi correo electrónico con la solicitud de información sobre iguanas. Me gustaría saber si tienen disponibles iguanas verdes o negras, y cuál es el precio. Quedo atento a su respuesta. Gracias.",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Respuesta a solicitud de información",
        message:
          "Buenas tardes, gracias por su interés en nuestras iguanas. Tenemos disponibles iguanas verdes y negras, ambas tienen un precio de $500. Adjunto encontrará algunas fotos. Quedo atento a sus comentarios. Gracias.",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: "Fotos de iguanas",
        subject: "Confirmación de compra",
        message:
          "Buenas tardes, he decidido comprar una iguana verde. ¿Podrían confirmarme la disponibilidad y el precio final con envío incluido a mi domicilio? Adjunto el formulario de pedido completado. Gracias.",
      },
      {
        method: "Llamada",
        state: "Concretado",
        attached: null,
        subject: "",
        message:
          "Buenos días, llamaba para confirmar que recibieron el formulario de pedido de la iguana verde que les envié por correo electrónico. ¿Podrían confirmar la disponibilidad y el precio final con envío incluido? Estoy muy interesado en concretar la compra. Gracias.",
      },
      {
        method: "Correo-E",
        state: "Concretado",
        attached: "Factura de compra",
        subject: "Confirmación de pago",
        message:
          "Buenas tardes, quiero confirmar que he realizado el pago por la iguana verde y el envío a mi domicilio. Adjunto la factura de compra. Quedo atento a la confirmación de la fecha de envío. Gracias.",
      },
      {
        method: "Llamada",
        state: "Concretado",
        attached: null,
        subject: "",
        message:
          "Buenos días, llamaba para confirmar si recibieron mi correo electrónico con la confirmación del pago por la iguana verde y el envío. ¿Podrían confirmar la fecha de envío y el número de seguimiento? Gracias.",
      },
    ],
    [
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Consulta por iguana",
        message:
          "Buen día, quisiera saber si tienen iguanas disponibles para la venta.",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Hola, estoy interesado en adquirir una iguana. ¿Podría darme información al respecto?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Información sobre iguanas",
        message:
          "Por supuesto, le envío información sobre las iguanas que tenemos disponibles para la venta y los requisitos para su cuidado.",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: "iguana.jpg",
        subject: "Foto de la iguana",
        message:
          "Adjunto una foto de la iguana que tenemos disponible para la venta. Si está interesado, no dude en contactarnos.",
      },
      {
        method: "Llamada",
        state: "Pendiente",
        attached: null,
        subject: "",
        message:
          "Gracias por la información, me gustaría comprar la iguana que me enviaron por correo. ¿Cuáles son los pasos a seguir?",
      },
      {
        method: "Correo-E",
        state: "Pendiente",
        attached: null,
        subject: "Pasos para la compra de la iguana",
        message:
          "Le enviamos los pasos a seguir para la compra de la iguana. Quedamos atentos a su respuesta.",
      },
      {
        method: "Llamada",
        state: "Concretado",
        attached: null,
        subject: "",
        message:
          "Ya realicé el pago de la iguana. ¿Cuándo podré recibirla en casa?",
      },
    ],
  ],
};
