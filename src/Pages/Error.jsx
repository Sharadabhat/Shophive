// import React from "react";

// export default function Error() {
//   return <div>Error</div>;
// }
// import React from "react";

// export default function Error() {
//   return (
//     <div
//       className="flex items-center justify-center h-screen w-screen bg-cover bg-center text-white text-center"
//       style={{alignItems:"center", backgroundImage: "url('https://source.unsplash.com/random/1920x1080?dark')" }}
//     >
//       <div className="flex flex-col items-center text-center bg-black bg-opacity-50 p-8 rounded-lg shadow-lg"> 
//         <img
//           src="https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif"
//           alt="Error GIF"
//           className="w-64 h-64 mb-4"
//         />
//         <h1 className="text-5xl font-extrabold text-red-400 drop-shadow-lg font-mono">
//           Oops! Something went wrong.
//         </h1>
//         <p className="text-xl mt-2 text-gray-300 font-serif italic">
//           We can't seem to find the page you're looking for.
//         </p>
//         <button
//           onClick={() => (window.location.href = "/")}
//           className="mt-6 px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 hover:from-orange-600 hover:to-red-600 text-white text-lg rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 font-bold"
//         >
//           Go Back Home
//         </button>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function Error() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        textAlign: "center",
        backgroundColor:"#abf3e3",
        color: "#2b7d6a",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img
          src="https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif"
          alt="Error Image"
          style={{ width: "300px", height: "300px", marginBottom: "2px",marginTop:"1px" }}
        />
        <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>Oops! Something went wrong.</h1>
        <p style={{ fontSize: "18px", marginTop: "8px", color: "#2b7d6a" }}>
          The page you're looking for cannot be found.
        </p>
      </div>
    </div>
  );
}

