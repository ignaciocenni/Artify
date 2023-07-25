import Link from "next/link";
import Image from "next/image";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles["error-container"]}>
      <Image className="animate-bounce" src="/images/404.svg" alt="404" width={400} height={400} />
      <h1>Ups! Ocurrió un error</h1>
      <h3>Inténtalo de nuevo</h3>
      <h4>
        <Link href="/">Volver al inicio</Link>
      </h4>
    </div>
  );
}
