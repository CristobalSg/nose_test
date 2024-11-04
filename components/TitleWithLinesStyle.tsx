import React, { FC, useEffect, useState } from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

// Estilo para el título principal con líneas decorativas
const titleWithLinesStyle: React.CSSProperties = {
  fontFamily: 'Montserrat, sans-serif',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#333",
  marginBottom: "16px",
};

// Estilo para el contenedor del componente
const containerStyle: React.CSSProperties = {
  padding: "20px", // Ajusta el padding según tus necesidades
  textAlign: "center",
  maxWidth: "800px", // Max-width para que sea responsivo
  margin: "0 auto", // Centra el contenedor
};

// Props para el componente
interface DynamicTitleProps {
  mainTitle: string; // Título principal
  subtitle?: string;  // Título del subtítulo
  paragraphText?: string; // Texto del párrafo
}

// Componente principal
const DynamicTitle: FC<DynamicTitleProps> = ({ mainTitle, subtitle, paragraphText }) => {
  // Estado para manejar el tamaño de la fuente
  const [fontSize, setFontSize] = useState<string>("1.5em");

  // Efecto para ajustar el tamaño de la fuente según el ancho de la ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // Tamaño de pantalla móvil
        setFontSize("1.1em"); // Tamaño de fuente reducido
      } else {
        setFontSize("1.5em"); // Tamaño de fuente normal
      }
    };

    handleResize(); // Llama la función al cargar el componente
    window.addEventListener("resize", handleResize); // Escucha el cambio de tamaño de la ventana

    return () => window.removeEventListener("resize", handleResize); // Limpieza del efecto
  }, []);

  return (
    <div style={containerStyle}>
      {/* Título principal con líneas decorativas */}
      <div style={{ ...titleWithLinesStyle, fontSize }}>
        <span style={{ borderBottom: "1px solid #333", width: "20%" }}></span>
        <Title level={1} className="text-primary" style={{ margin: "0 10px", fontFamily: 'Montserrat, sans-serif', fontSize }}>
          {mainTitle}
        </Title>
        <span style={{ borderBottom: "1px solid #333", width: "20%" }}></span>
      </div>
      
      <div className="space-y-1">
        {subtitle && <Title level={2} className="font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.35em' }}>{subtitle}</Title>}
        {paragraphText && <Paragraph style={{ fontSize: '1.25em', fontFamily: 'Montserrat, sans-serif' }}>
          {paragraphText}
        </Paragraph>}
      </div>
    </div>
  );
};

export default DynamicTitle;
