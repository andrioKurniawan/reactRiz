import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

const Kalkulator = () => {
    // State variables
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState(null);
    const [firstValue, setFirstValue] = useState('');

    // Function to handle number inputs
    const handleNumberInput = (num) => {
        if (displayValue === '0') {
            setDisplayValue(num.toString());
        } else {
            setDisplayValue(displayValue + num);
        }
    };

    // Function to handle operator inputs
    const handleOperatorInput = (operator) => {
        setOperator(operator);
        setFirstValue(displayValue);
        setDisplayValue('0');
    };

    // Function to handle equal button press
    const handleEqual = () => {
        const num1 = parseFloat(firstValue);
        const num2 = parseFloat(displayValue);

        if (operator === '+') {
            setDisplayValue((num1 + num2).toString());
        } else if (operator === '-') {
            setDisplayValue((num1 - num2).toString());
        } else if (operator === '*') {
            setDisplayValue((num1 * num2).toString());
        } else if (operator === '/') {
            setDisplayValue((num1 / num2).toString());
        }

        setOperator(null);
        setFirstValue('');
    };

    // Function to handle clear button press
    const handleClear = () => {
        setDisplayValue('0');
        setOperator(null);
        setFirstValue('');
    };

    const { width } = Dimensions.get('window');
    const buttonWidth = (width - 50) / 4; // Calculate button width with margin

    return (
        <View style={styles.container}>
            <View style={styles.displayContainer}>
                <Text style={styles.displayText}>
                    {displayValue}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.row}>
                    <TouchableOpacity style={[styles.button, { width: buttonWidth }]} onPress={() => handleNumberInput(7)}>
                        <Text style={styles.buttonText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { width: buttonWidth }]} onPress={() => handleNumberInput(8)}>
                        <Text style={styles.buttonText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { width: buttonWidth }]} onPress={() => handleNumberInput(9)}>
                        <Text style={styles.buttonText}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.operatorButton, { width: buttonWidth }]} onPress={() => handleOperatorInput('/')}>
                        <Text style={[styles.buttonText, styles.operatorButtonText]}>÷</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={[styles.button, { width: buttonWidth }]} onPress={() => handleNumberInput(4)}>
                        <Text style={styles.buttonText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { width: buttonWidth }]} onPress={() => handleNumberInput(5)}>
                        <Text style={styles.buttonText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { width: buttonWidth }]} onPress={() => handleNumberInput(6)}>
                        <Text style={styles.buttonText}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.operatorButton, { width: buttonWidth }]} onPress={() => handleOperatorInput('*')}>
                        <Text style={[styles.buttonText, styles.operatorButtonText]}>×</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={[styles.button, { width: buttonWidth }]} onPress={() => handleNumberInput(1)}>
                        <Text style={styles.buttonText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { width: buttonWidth }]} onPress={() => handleNumberInput(2)}>
                        <Text style={styles.buttonText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { width: buttonWidth }]} onPress={() => handleNumberInput(3)}>
                        <Text style={styles.buttonText}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.operatorButton, { width: buttonWidth }]} onPress={() => handleOperatorInput('-')}>
                        <Text style={[styles.buttonText, styles.operatorButtonText]}>−</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={[styles.button, { width: buttonWidth * 2 + 10 }]} onPress={() => handleNumberInput(0)}>
                        <Text style={styles.buttonText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.operatorButton, { width: buttonWidth }]} onPress={() => handleOperatorInput('+')}>
                        <Text style={[styles.buttonText, styles.operatorButtonText]}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.equalButton, { width: buttonWidth }]} onPress={handleEqual}>
                        <Text style={styles.equalButtonText}>=</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
                    <Text style={styles.clearButtonText}>C</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    displayContainer: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 20,
    },
    displayText: {
        fontSize: 48,
        color: '#333',
    },
    buttonContainer: {
        flex: 3,
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    button: {
        height: 60,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#13aff2',
        elevation: 3,
        margin: 5,
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
    },
    operatorButton: {
        backgroundColor: '#f0f0f0',
    },
    operatorButtonText: {
        color: '#ff9500',
    },
    equalButton: {
        backgroundColor: '#ff9500',
    },
    equalButtonText: {
        fontSize: 24,
        color: '#fff',
    },
    clearButton: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        marginTop: 10,
        elevation: 3,
        padding: 10,
    },
    clearButtonText: {
        fontSize: 24,
        color: '#333',
    },
});

export default function DetailTransactionScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Kalkulator />
        </View>
    );
}
