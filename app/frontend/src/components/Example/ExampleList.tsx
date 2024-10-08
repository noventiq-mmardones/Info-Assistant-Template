// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    { text: "¿Cómo puedo buscar documentos en un Consejo Empresarial Sectorial?", value: "¿Cómo puedo buscar documentos en un Consejo Empresarial Sectorial?" },
    { text: "¿Qué tipo de documentos puedo consultar en cada Consejo?", value: "¿Qué tipo de documentos puedo consultar en cada Consejo?" },
    { text: "¿Puedo obtener información de varios Consejos en una misma consulta?", value: "¿Puedo obtener información de varios Consejos en una misma consulta?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
