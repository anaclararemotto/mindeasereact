import { useRef, useState } from "react";
import type { ChangeEvent } from "react";
import styles from './card-profile.styles.module.scss'
import { Button } from "../button/button";

export default function CardProfile() {
  const [image, setImage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className={styles["container"]}>
      <div
        onClick={handleClick}
        className={styles["container__avatar"]}
      >
        {image ? (
          <img
            src={image}
            alt="avatar"
            className={styles["container__avatar__img"]}
          />
        ) : (
          <span style={{ fontSize: 28 }}>+</span>
        )}

        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
    </div>
    <div >
<p className={styles["container__title"]}>Joana Santos</p>
<p className={styles["container__subtitle"]}>joana.santos@email.com</p>
<Button transparent={true} label="Editar perfil" to="/edit-profile"/>   
    </div>
    </div>
  );
}