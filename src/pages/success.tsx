import Layout from "../components/Layout";

export default function Success() {
  return (
    <Layout>
      Success
      <div className="container">
        <div>
          <h2>Thanks for contacting! Will reply ASAP</h2>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </Layout>
  );
}
