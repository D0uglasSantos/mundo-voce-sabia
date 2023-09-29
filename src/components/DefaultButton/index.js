import style from "./DefaultButton.module.css";

export default function DefaultButton({children, tamanho}) {
  return (
    <>
      <button className={`
        ${style.defaultButton}
        ${style[tamanho]}
      `}>
        {children}
      </button>
    </>
  );
}
