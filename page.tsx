import React from 'react';

function Home() {
  const images = [
    {
      path: "/266.png",
      url: "https://yuku.app/market/qqmo2-iyaaa-aaaap-aajwq-cai/266"
    },
    {
      path: "/235.png",
      url: "https://yuku.app/market/qqmo2-iyaaa-aaaap-aajwq-cai/6ihed-tykor-uwiaa-aaaaa-dyacn-uaqca-aaadv-q"
    },
    {
      path: "/34.png",
      url: "https://yuku.app/market/qqmo2-iyaaa-aaaap-aajwq-cai/cc3dx-wykor-uwiaa-aaaaa-dyacn-uaqca-aaaar-a"
    },
    {
      path: "/201.png",
      url: "https://yuku.app/market/qqmo2-iyaaa-aaaap-aajwq-cai/e5xaa-kykor-uwiaa-aaaaa-dyacn-uaqca-aaade-q"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <header className="flex justify-end items-center p-4">
        <a
          href="https://yuku.app/market/qqmo2-iyaaa-aaaap-aajwq-cai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 shadow-lg"
        >
          Trade
        </a>
      </header>

      <main className="flex-grow">
        <div className="flex flex-col items-center justify-center py-8">
          <img
            src="/logo.png"
            alt="Logo"
            width="200"
            height="200"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 w-full max-w-4xl px-4">
            {images.map(({ path, url }, index) => (
              <a href={url} key={index} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <img
                  src={path}
                  alt={`Image ${index + 1}`}
                  className="w-full h-auto rounded-lg"
                />
              </a>
            ))}
          </div>
        </div>
      </main>

      <footer className="flex justify-center items-center py-4">
        <a href="https://twitter.com/Icpfan9" target="_blank" rel="noopener noreferrer">
          <img src="/twitter-icon.png" alt="Twitter Icon" className="w-6 h-6" />
        </a>
      </footer>
    </div>
  );
}

export default Home;
