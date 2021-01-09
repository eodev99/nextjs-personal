import Layout from "../components/Layout";
import ComingSoon from "../components/ComingSoon";

export default function Index() {
  const url = "/blank";
  const title = "Blank";
  return (
    <Layout>
      <div className="container">
        <ComingSoon />
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
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
