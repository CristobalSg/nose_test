import { Card, Row, Col, Typography, Image } from "antd";
import { CSSProperties } from "react";
import QuestionCard from '../components/QuestionCard'; 
import ImportantCard from '../components/ImportantCard'; 
import DynamicTitle  from "../components/TitleWithLinesStyle"
import ConversationItem from '../components/ConversationItem';
import CardGrid from '../components/CardGrid';

const { Title, Text, Paragraph } = Typography;

// Datos de las tarjetas
const cardData = [
  {
    key: "light",
    background: "#d0e8c0",
    title: "¡Enciende la luz!",
    description:
      "En la pared, detrás de la cama, se encuentran dos cuerdas de color blanco, tíralas, y se encenderán las luces.",
    imgSrc: "https://media-public.canva.com/qv-Jk/MADZ40qv-Jk/2/tl.png",
  },
  {
    key: "curtain",
    background: "#e6e6fa",
    title: "Abre la cortina",
    description:
      "La cortina Roller, en su lateral cuenta con una cadenilla plástica, la cual si la tiras, la tela se enrollará permitiendo que ingrese la luz natural.",
    imgSrc: "https://media-public.canva.com/WNbxM/MAFx8nWNbxM/1/tl.png",
  },
  {
    key: "bed",
    background: "#e6dcc3",
    title: "Posiciona la cama",
    description:
      "La cama cuenta con botones a los lados, a la altura de la cabecera, los que te permitirán posicionar la cama de manera que el paciente quede parcialmente reclinado o sentado (según indicación médica).",
    imgSrc: "https://media-public.canva.com/wEhQo/MAFsYCwEhQo/1/tl.png",
  },
];

// Definir un estilo para que todas las tarjetas mantengan la misma altura
const cardStyle: CSSProperties = {
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  borderRadius: '8px',
  background: "#ffffff",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "16px",
};

// Estilo para centrar el título
const centeredTitleStyle: CSSProperties = {
  textAlign: "center",
  fontSize: "2em",
  color: "#333",
  marginBottom: "16px",
};

export default function Component() {
     const exampleQuestions = [
    "¿Cuál es la fecha de hoy? (Día-mes-año)",
    "¿En qué día de la semana estamos?",
    "¿En dónde estamos? (edificio, ciudad y comuna)",
    "¿En qué estación estamos?",
    "¿Cómo te llamas?",
    "¿Cuántos años tienes?",
    "¿En qué año naciste?",
    "¿Dónde vive?",
    "¿Con quién vive?",
    "¿Cuáles son los familiares más cercanos?"
  ];

  const additionalImages = [
    "https://media-public.canva.com/IRSUI/MAEEhtIRSUI/1/tl.jpg",
    "https://media-public.canva.com/QVS5o/MAEnWaQVS5o/1/tl.png",
    "https://media-public.canva.com/pwM9A/MAFDdwpwM9A/1/tl.png",
    "https://media-public.canva.com/O4lQw/MAFsk-O4lQw/1/tl.png"
  ];

  return (
    <>
        <DynamicTitle
            mainTitle="¿Qué hacer con tu familiar durante la visita en el hospital?"
            subtitle="Manejo ambiental"
            paragraphText="Modificar el ambiente en el cual se encuentra el paciente, ayudará a que su nivel de conciencia sea óptimo, además, ayudará al usuario a orientarse en relación a si es de día o de noche."
        />

        <Title level={3} style={{textAlign: "center", marginBottom: "50px", fontFamily: 'Montserrat, sans-serif'}}>¿Cómo hacerlo?</Title>

        <CardGrid cardData={cardData} />

        <div className="space-y-1" style={{textAlign: "center", paddingTop:"100px", paddingBottom: "100px"}}>
          <Title level={3} className="font-semibold" style={{fontFamily: 'Montserrat, sans-serif'}}>Terapia de orientación a la realidad</Title>
          <Paragraph  style={{ fontSize: '1.15em', marginTop: "16px", fontFamily: 'Montserrat, sans-serif'}}>
            Técnicas mediante las cuales la persona tomará conciencia de su situación en el tiempo, espacio 
            y persona. proporcionando a la persona una mejor comprensión de sí mismo y del mundo que le rodea.
          </Paragraph>
        </div>

        <QuestionCard
            title="Preguntar"
            imageUrl="https://media-public.canva.com/pwM9A/MAFDdwpwM9A/1/tl.png"
            description="Realiza preguntas relacionadas con la persona, el espacio y el tiempo"
            // exampleQuestions={exampleQuestions}
            additionalMessage="Puedes apoyar este proceso con ayuda de fotos, calendario o algún otro objeto que sea familiar al usuario"
            additionalImages={additionalImages}
        />

        <ImportantCard
            title="IMPORTANTE"
            imageUrl="https://media-public.canva.com/as-LM/MAElCNas-LM/1/tl.png"
            subtitle="Si el usuario no responde de manera correcta puedes darle pistas, darle un tiempo, y en caso de errar de nuevo, le entregas la respuesta correcta."
            paragraphText="Evita el sentimiento de culpa en el usuario, por haber errado en la respuesta."
        />

        <Title level={3}>También puedes: </Title>

        <ConversationItem 
            imageSrc="https://media-public.canva.com/oPB90/MAFdMNoPB90/1/tl.png" 
            text="Conversar o contarle sobre noticias actuales, que sean del agrado del usuario (puedes apoyarte de un diario o una revista)."
        />
        <ConversationItem 
            imageSrc="https://media-public.canva.com/eLALQ/MAFkqpeLALQ/1/tl.png" 
            text="Conversar o contarle sobre temas relacionados a su hogar." 
            reverse={true} // To reverse the order of image and text
        />
        <ConversationItem 
            imageSrc="https://media-public.canva.com/fMqvE/MAFb2lfMqvE/1/tl.png" 
            text="Conversar o contarle sobre temas relacionados a su Familia (puedes apoyarte de fotos)."
        />
        
        <Title level={4} style={{textAlign: "center",display: "flex", alignItems: 'center', justifyContent: 'center'}}>
        Esto lo puedes realizar independiente del estado de conciencia que tenga tu familiar 
        </Title>

        <DynamicTitle
            mainTitle="¿Qué evitar hacer con tu familiar durante la visita en el hospital?"
        />

        <ConversationItem 
            imageSrc="https://media-public.canva.com/aeAkI/MAFXLQaeAkI/1/tl.png" 
            text=" Evita conversaciones con temas problemáticos, tristes o negativos, que pudiesen alterar al usuario. "
        />
    </>
  );
}