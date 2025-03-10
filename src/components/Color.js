// import React from "react";

// const Color = (props) => {
//   const { colorData, setColor } = props;
//   return (
//     <>
//       <ul className="colors ps-0">
//         {colorData &&
//           colorData?.map((item, index) => {
//             return (
//               <li
//                 onClick={() => setColor(item?._id)}
//                 style={{ backgroundColor: item?.title }}
//                 key={index}
//               ></li>
//             );
//           })}
//       </ul>
//     </>
//   );
// };

// export default Color;

import React from "react";

const Color = ({ colorData, setColor }) => {
  return (
    <ul className="flex flex-wrap gap-2 list-none p-0">
      {colorData &&
        colorData.map((item, index) => (
          <li
            key={index}
            onClick={() => setColor(item?._id)}
            className="w-6 h-6 rounded-full cursor-pointer border-2 border-transparent hover:border-gray-500 transition"
            style={{ backgroundColor: item?.title }}
          ></li>
        ))}
    </ul>
  );
};

export default Color;

