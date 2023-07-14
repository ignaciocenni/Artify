import Image from 'next/image';
import message from '../../public/images/message.svg';

const SendMessageButton = () => (
  <button className="flex flex-row rounded-lg shadow-xl py-1 px-3 gap-1 items-center text-[var(--primary)] bg-[var(--secundary)]">
    <Image width={35} height={35} src={message} alt="boton" />
    <h1 className="text-xs font-bold">Enviar mensaje</h1>
  </button>
);

export default SendMessageButton;