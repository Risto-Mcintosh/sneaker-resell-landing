import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen">
      <main className="flex items-center text-gray-900 justify-center h-full max-w-2xl m-auto px-8">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
