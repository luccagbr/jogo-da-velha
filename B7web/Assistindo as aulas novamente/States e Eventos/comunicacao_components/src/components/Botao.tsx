type Props = {
    text: string;
    clickFunction: (txt: string) => void;
}

export const Botao = ({ text, clickFunction }: Props) => {
    const handleClick = () => {
        clickFunction('Frase');
    }

    return (
        <button onClick={handleClick}>{text}</button>
    )
}