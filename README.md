# React-Native-Mobile-Course

- [Curso REACT NATIVE para Principiantes + Aplicación DESDE CERO con Expo](https://www.youtube.com/watch?v=U23lNFm_J70)

- [React Native](https://reactnative.dev/)

- [Expo](https://expo.dev/)
    - [Create a project](https://docs.expo.dev/get-started/create-a-project/)

## Comando para criar o projeto

```bash
npx create-expo-app@latest react-native-course --template blank
```

## Instalar as dependências

```bash
npx expo install react-dom react-native-web react-native-screens react-native-safe-area-context @expo/metro-runtime
```

Vamos explorar cada dependência que é instalada com o comando `npx expo install react-dom react-native-web react-native-screens react-native-safe-area-context @expo/metro-runtime`:

### 1. `react-dom`
- **Descrição**: `react-dom` é uma biblioteca que fornece métodos específicos para manipular o DOM em aplicações web feitas com React.
- **Uso**: Em aplicações React tradicionais, `react-dom` é utilizado para renderizar componentes React no DOM do navegador. No contexto do Expo e React Native, ele é relevante para o uso de React Native Web, permitindo que o código React Native seja executado no navegador como uma aplicação web.

### 2. `react-native-web`
- **Descrição**: `react-native-web` é uma biblioteca que permite executar componentes React Native em um ambiente web.
- **Uso**: `react-native-web` traduz os componentes nativos do React Native (`View`, `Text`, etc.) para elementos DOM HTML. Isso possibilita o uso do mesmo código base para desenvolver tanto aplicações móveis quanto aplicações web. Com Expo, essa biblioteca facilita a criação de aplicações multiplataforma que podem ser compiladas para dispositivos móveis e também funcionar na web.

### 3. `react-native-screens`
- **Descrição**: `react-native-screens` é uma biblioteca que oferece componentes e otimizações nativas para melhorar a performance de navegação no React Native.
- **Uso**: Esta biblioteca é utilizada para gerenciar as telas e a navegação entre elas de forma mais eficiente. Ela reduz a carga de trabalho do JavaScript ao renderizar telas e outras transições, o que pode melhorar significativamente o desempenho da aplicação. É amplamente usada com React Navigation para otimizar a navegação.

### 4. `react-native-safe-area-context`
- **Descrição**: `react-native-safe-area-context` fornece uma API para manipular áreas seguras em dispositivos móveis.
- **Uso**: A biblioteca é usada para garantir que o conteúdo da aplicação não seja cortado ou sobreposto por elementos do sistema, como o notch, status bar, ou gestos do sistema em dispositivos modernos. Ela fornece informações sobre as áreas seguras e permite ajustar o layout da aplicação para acomodá-las corretamente.

### 5. `@expo/metro-runtime`
- **Descrição**: `@expo/metro-runtime` é uma dependência relacionada ao Metro bundler, o empacotador padrão de módulos para React Native.
- **Uso**: Esta biblioteca é usada internamente pelo Expo e Metro para facilitar a execução de módulos e a integração com o ambiente de desenvolvimento. Ela cuida de algumas funcionalidades específicas durante o processo de construção e execução da aplicação, especialmente em ambientes de desenvolvimento.

### Conclusão
Essas dependências são usadas principalmente para:

- **Renderização multiplataforma**: Com `react-dom` e `react-native-web`, o mesmo código React Native pode ser executado em navegadores web.
- **Otimização de navegação**: `react-native-screens` melhora o desempenho de navegação nas aplicações móveis.
- **Compatibilidade com áreas seguras**: `react-native-safe-area-context` garante que o layout da aplicação seja adequado para dispositivos com áreas seguras específicas.
- **Execução e empacotamento**: `@expo/metro-runtime` lida com as necessidades de execução e empacotamento no ambiente Expo.

Essas bibliotecas são fundamentais para criar uma aplicação React Native que funcione de maneira eficaz em diferentes plataformas, desde dispositivos móveis até navegadores web.


----

## Base

```js
import {  } from 'react-native';

export default function name(){
    return(

    )
}
```