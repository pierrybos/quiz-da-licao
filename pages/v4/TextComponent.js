export default ({ title, showText, textSize, textColor, subtitle }) => {
  return (
    <div
      className="textSide"
      style={{
        display: showText ? "block" : "none",
        fontSize: `${textSize}em`,
        color: `rgba(${textColor.r},${textColor.g},${textColor.b},${textColor.a})`,
      }}
    >
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};
