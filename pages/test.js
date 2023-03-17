const MyComponent = () => {
  return (
    <div>
      <style jsx>{`
        div {
          background: blue;
          color: white;
          padding: 20px;
          text-align: center;
        }

        @media screen and (max-width: 768px) {
          div {
            background: green;
            color: black;
          }
        }

        @media screen and (max-width: 480px) {
          div {
            background: red;
            color: white;
          }
        }
      `}</style>
      <h1>Hello World</h1>
      <p>This is a responsive component</p>
    </div>
  );
};

export default MyComponent;
