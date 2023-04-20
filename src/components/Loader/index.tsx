import dynamic from "next/dynamic";

const Path = dynamic(() =>
  import("framer-motion").then((mod) => mod.motion.path)
);


const Loader = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col gap-2 justify-center items-center">
      <svg
        width="112"
        height="113"
        viewBox="0 0 112 113"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          initial={{ opacity: 0 }}
          animate={{
            y: [10, 0, 10],
            opacity: [0, 1, 0],
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 2,
            ease: "backInOut",
          }}
          d="M65.9231 47.2069V80.23C65.9231 81.6041 65.4711 82.655 64.5671 83.3827C63.6225 84.0698 62.7185 84.4133 61.8551 84.4133C61.353 84.4338 60.8524 84.3469 60.3866 84.1582C59.9208 83.9696 59.5007 83.6836 59.1544 83.3194C58.4674 82.5465 58.1239 81.5167 58.1239 80.23V78.5938H52.9259V80.23C52.9259 81.5182 52.5831 82.548 51.8976 83.3194C51.2105 84.0502 50.2885 84.4148 49.1313 84.4133C48.2725 84.4133 47.3934 84.0698 46.4939 83.3827C45.5492 82.655 45.0769 81.6041 45.0769 80.23V47.2069H39.8021V80.23C39.8021 83.0626 40.7889 85.3572 42.7627 87.114C44.7771 88.8316 46.9 89.6896 49.1313 89.6881C50.3407 89.7023 51.5415 89.4836 52.6682 89.044C53.7378 88.6025 54.7026 87.9411 55.5 87.1027C56.3128 87.9229 57.2737 88.5816 58.3318 89.044C59.4585 89.4836 60.6593 89.7023 61.8687 89.6881C64.1423 89.6881 66.2652 88.8301 68.2374 87.114C70.2096 85.3557 71.1965 83.0611 71.198 80.23V47.2069H65.9231Z"
          fill="white"
        />
        <Path
          initial={{ opacity: 0 }}
          animate={{
            y: [-10, 0, -10],
            opacity: [0, 1, 0],
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 2,
            ease: "backInOut",
          }}
          d="M45.0769 43.9638V32.7813C45.0769 31.4072 45.5492 30.3526 46.4939 29.6173C47.3979 28.9303 48.2771 28.5868 49.1313 28.5868C50.2885 28.5868 51.2105 28.9514 51.8976 29.6806C52.5831 30.4535 52.9259 31.4833 52.9259 32.77V75.3258H58.1374V32.7813C58.1374 31.4931 58.481 30.4633 59.168 29.6919C59.5143 29.3277 59.9344 29.0418 60.4001 28.8531C60.8659 28.6645 61.3666 28.5775 61.8687 28.5981C62.7275 28.5981 63.6315 28.9416 64.5807 29.6286C65.4847 30.3563 65.9367 31.411 65.9367 32.7926V43.9751H71.2115V32.7813C71.2115 29.9488 70.2247 27.6541 68.2509 25.8974C66.2772 24.1798 64.1543 23.3217 61.8823 23.3232C60.6729 23.309 59.4721 23.5277 58.3454 23.9673C57.2834 24.4249 56.3178 25.0798 55.5 25.8974C54.7015 25.063 53.7368 24.4055 52.6682 23.9673C51.5415 23.5277 50.3407 23.309 49.1313 23.3232C46.9 23.3232 44.7771 24.1813 42.7627 25.8974C40.7904 27.6556 39.8036 29.9503 39.8021 32.7813V43.9638H45.0769Z"
          fill="white"
        />
      </svg>

    </div>
  );
};

export default Loader;