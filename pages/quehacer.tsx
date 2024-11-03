import { Card, Row, Col, Typography, Image } from "antd";
import { CSSProperties } from "react";

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

// Estilo para el título principal con líneas decorativas
const titleWithLinesStyle: CSSProperties = {
    fontFamily: 'Montserrat, sans-serif',
    // fontSize: "1.25em",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.8em",
  color: "#333",
  marginBottom: "16px",
};

export default function Component() {
  return (
    <>
      <div className="text-center space-y-2">
        {/* Título principal con líneas decorativas */}
        <div style={titleWithLinesStyle}>
          <span style={{ borderBottom: "1px solid #333", width: "20%" }}></span>
          <Title level={1} className="text-primary" style={{ margin: "0 10px" }}>
            ¿Qué hacer con tu familiar durante la visita en el hospital?
          </Title>
          <span style={{ borderBottom: "1px solid #333", width: "20%" }}></span>
        </div>
        
        <div className="space-y-1">
          <Title level={2} className="font-semibold">Manejo ambiental</Title>
          <Paragraph  style={{ fontSize: '1.25em' }}>
            Modificar el ambiente en el cual se encuentra el paciente, ayudará a que su nivel de conciencia sea
            óptimo, además, ayudará al usuario a orientarse en relación a si es de día o de noche.
          </Paragraph>
        </div>
      </div>

      <Title level={3} style={{textAlign: "center", marginBottom: "50px"}}>¿Cómo hacerlo?</Title>

      <Row gutter={[16, 16]} justify="center">
        {cardData.map((card) => (
          <Col xs={24} sm={12} md={8} lg={8} key={card.key}>
            <Card style={{ ...cardStyle, background: card.background }}>
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center">
                  {/* Aquí podrías agregar iconos si los necesitas */}
                </div>
              </div>

              {/* Título centrado */}
              <Title level={3} style={centeredTitleStyle}>{card.title}</Title>

              {/* Contenedor de la imagen con altura fija */}
              <div style={{ height: '200px', display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                <Image
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: 'contain' }}
                  src={card.imgSrc}
                />
              </div>

              <Text style={{ fontSize: '1.25em' }} className="text-sm">{card.description}</Text>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="space-y-1">
          <Title level={2} className="font-semibold">Terapia de orientación a la realidad</Title>
          <Paragraph  style={{ fontSize: '1.25em', marginTop: "16px"}}>
            Técnicas mediante las cuales la persona tomará conciencia de su situación en el tiempo, espacio 
            y persona. proporcionando a la persona una mejor comprensión de sí mismo y del mundo que le rodea.
          </Paragraph>
        </div>
    </>
  );
}
