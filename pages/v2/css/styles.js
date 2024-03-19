const estilos = {
  body: {
    margin: 0,
    padding: 0,
    backgroundImage: "url('v2/src/images/fundoSemanaSanta.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "#1e3666",
  },
  html: {
    margin: 0,
    padding: 0,
    height: "100%",
  },
  container: {
    display: "flex",
    height: "100%",
    alignItems: "center",
  },
  h3: {
    margin: 0,
    padding: 0,
  },
  p: {
    margin: 0,
    padding: 0,
  },
  leftSidebar: {
    alignItems: "center",
    textAlign: "center",
    width: "25%",
    backgroundColor: "#f0f0f0",
    padding: "20px",
    opacity: 0.5,
    marginLeft: "10%",
    borderRadius: "50px",
  },
  "left-sidebar > *": {
    opacity: 1,
  },
  sidebarItem: {},
  logo: {
    width: "272px",
    height: "153px",
  },
  "logo img": {
    maxWidth: "100%",
    height: "auto",
  },
  qrcode: {
    width: "272px",
    height: "153px",
  },
  "qrcode img": {
    maxWidth: "100%",
    height: "auto",
  },
  content: {
    flex: 1,
    padding: "20px",
  },
};

export default estilos;
