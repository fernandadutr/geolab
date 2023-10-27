import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../Styles/Componentes';

const Granulometria: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: "column" }}>
            <section>

                <TouchableOpacity
                    style={{}}
                >
                    <Text style={styles.buttonText}>Preparação da
                        amostra
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.radius20button}
                >
                    <Text style={styles.buttonText}>Teor de Umidade</Text>
                </TouchableOpacity>
            </section>
            <section>

                <TouchableOpacity
                    style={styles.radius20button}
                >
                    <Text style={styles.buttonText}>Peneiramento
                        Grosso</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.radius20button}
                >
                    <Text style={styles.buttonText}>Sedimentação</Text>
                </TouchableOpacity>
            </section>
            <section>
                <TouchableOpacity
                    style={styles.radius20button}
                >
                    <Text style={styles.buttonText}>Peneiramento
                        Fino</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.radius20button}
                >
                    <Text style={styles.buttonText}>Gerar Curva
                        Granulométrica</Text>
                </TouchableOpacity>
            </section>
        </div>
    );

}

export default Granulometria;