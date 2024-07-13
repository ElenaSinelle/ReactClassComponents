import "./FallBackComponent.css";

const FallBackComponent: React.FC = () => {
  return (
    <div className="fallBack">
      <p className="fallBack__message">
        Something went wrong
      </p>
    </div>
  );
};

export default FallBackComponent;
