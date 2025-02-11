import { dataCard } from "../data/dataCard";

type Props = {
    textoDigitado: string;
};

export const buscarCard = ({textoDigitado}: Props) => {
    return dataCard.filter(
        (produto) =>
            produto.title.toLowerCase().includes(textoDigitado.toLowerCase()) ||
            produto.description.toLowerCase().includes(textoDigitado.toLowerCase())
    );
};