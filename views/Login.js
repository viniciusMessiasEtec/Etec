import { View, Button, TextInput, TouchableOpacity, Text } from "react-native";
import { style } from "./Style";
import { useState } from "react";


export default function Login({ navigation }) {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    return (
        <View style={style.container}>

            <TextInput style={style.usuario}
                placeholder="Usuario"
                onChangeText={setUsuario} 
                value={usuario}
            />
            <TextInput style={style.senha}
                placeholder="Senha"
                onChangeText={setSenha} 
                secureTextEntry={true}
                value={senha}
            />
            <TouchableOpacity style={style.botao}  onPress={()=>alert(usuario)}>
                    <Text style={style.texto}>Entrar</Text>
            </TouchableOpacity>

        </View>
    )

}