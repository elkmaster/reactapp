import React from "react";
import styles from "./Layout.module.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";

interface Props {
  leftCol: JSX.Element;
  rightCol: JSX.Element;
  minWidthLeft?: number;
  minWidthRight?: number;
}
function Layout({
  leftCol,
  rightCol,
  minWidthLeft = 20,
  minWidthRight = 30
}: Props) {
  const { width } = useWindowDimensions();
  const [isDragging, setIsDragging] = React.useState(false);
  const [left, setLeft] = React.useState(20);
  const [right, setRight] = React.useState(80);

  const handleDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;
    const newPosLeft = e.clientX / (width / 100);
    const newPosRight = 100 - newPosLeft;
    if (newPosLeft > minWidthLeft && newPosRight > minWidthRight) {
      setLeft(newPosLeft);
      setRight(newPosRight);
    } else {
      setIsDragging(false);
    }
  };
  return (
    <>
      <header className={styles.Header}>
        <h3>User Hobbies</h3>
      </header>
      <div
        className={styles.Layout}
        onMouseMove={handleDrag}
        onMouseUp={() => setIsDragging(false)}
        style={isDragging ? { cursor: "col-resize" } : {}}
      >
        <div
          style={{ width: `${left}%` }}
          className={styles.left}
          onMouseUp={() => setIsDragging(false)}
        >
          {leftCol}
        </div>

        <div
          style={{ left: `${left}%` }}
          className={styles.handle}
          onMouseDown={() => setIsDragging(true)}
        />

        <div
          style={{ width: `${right}%` }}
          className={styles.right}
          onMouseUp={() => setIsDragging(false)}
        >
          {rightCol}
        </div>
      </div>
    </>
  );
}

export default Layout;
