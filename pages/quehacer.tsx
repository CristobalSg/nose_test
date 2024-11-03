import { Card, Row, Col, Typography, Image} from "antd";
// import { LightbulbOutlined, WindowOutlined, BedOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

export default function Component() {
  return (
        <>

      <div className="text-center space-y-2">
        <Title level={1} className="text-primary">
          ¿Qué hacer con tu familiar durante la visita en el hospital?
        </Title>
        <div className="space-y-1">
          <Title level={2} className="font-semibold">Manejo ambiental</Title>
          <Paragraph className="text-muted-foreground max-w-2xl mx-auto">
            Modificar el ambiente en el cual se encuentra el paciente, ayudará a que su nivel de conciencia sea
            óptimo, además, ayudará al usuario a orientarse en relación a si es de día o de noche.
          </Paragraph>
        </div>
      </div>

      <Title level={3} className="text-center mb-6">¿Cómo hacerlo?</Title>

      <Row gutter={[16, 16]} justify="center">
        <Col span={8}>
          <Card style={{ background: "#d0e8c0" }}>
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center">
                {/* <LightbulbOutlined style={{ fontSize: '48px' }} /> */}
              </div>
            </div>
            <Title level={3} className="text-center">¡Enciende la luz!</Title>
            <Text className="text-sm">
              En la pared, detrás de la cama, se encuentran dos cuerdas de color blanco, tíralas, y se encenderán
              las luces.
            </Text>
          </Card>
        </Col>

        <Col span={8}>
          <Card style={{ background: "#e6e6fa" }}>
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center">
                {/* <WindowOutlined style={{ fontSize: '48px' }} /> */}
              </div>
            </div>
            <Title level={3} className="text-center">Abre la cortina</Title>
            <div style={{ height: '300px', position: 'relative' }}>
                <Image
                    width={"100%"}
                    height={"100%"}
                    style={{ objectFit: 'cover' }}
                    src="https://media-public.canva.com/qv-Jk/MADZ40qv-Jk/2/tl.png"
                    />
            </div>
            <Text className="text-sm">
              La cortina Roller, en su lateral cuenta con una cadenilla plástica, la cual si la tiras, la
              tela se enrollará permitiendo que ingrese la luz natural.
            </Text>
          </Card>
        </Col>

        <Col span={8}>
          <Card style={{ background: "#e6dcc3" }}>
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center">
                {/* <BedOutlined style={{ fontSize: '48px' }} /> */}
              </div>
            </div>
            <Title level={3} className="text-center">Posiciona la cama</Title>
            <Text className="text-sm">
              La cama cuenta con botones a los lados, a la altura de la cabecera, los que te permitirán posicionar la
              cama de manera que el paciente quede parcialmente reclinado o sentado (según indicación médica).
            </Text>
          </Card>
        </Col>
      </Row>
        </>
  );
}
