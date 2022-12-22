import { LayoutComponents } from "../../components/LayoutComponents";

export const Home = () => {
  return (
    <LayoutComponents>
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">
            <span style={{ color: "#fff" }}>Voce esta logado</span>
          </h1>
          <br />
          <br />
          <p style={{ color: "#f4f4f4" }} className="home-description">
            colocar algumas informações aqui depois
          </p>
        </div>
      </div>
    </LayoutComponents>
  );
};
