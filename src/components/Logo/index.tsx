"use client";
import { motion, useAnimation } from "framer-motion";
import { SVGProps, useState } from "react";

const variants = {
  hover: {
    y: 5,
  },
  initial: {
    y: 0,
  },
};
const variant2 = {
  hover: {
    y: -5,
  },
  initial: {
    y: 0,
  },
};

const Logo = (props: SVGProps<SVGSVGElement>) => {
  const [isHovered, setIsHovered] = useState(false);
  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  // Imperative
  const controls = useAnimation();
  function handleMouseEnterControls() {
    controls.start("hover");
  }

  function handleMouseLeaveControls() {
    controls.start("initial");
  }
  return (
    <>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        className="-ml-4 md:ml-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={handleMouseEnterControls}
        onMouseLeave={handleMouseLeaveControls}
      >
        <motion.path
          variants={variants}
          animate={controls}
          transition={{
            duration: 0.5,
            ease: "backInOut",
          }}
          d="M28.4275 20.0525V34.08C28.4275 34.6637 28.2355 35.1101 27.8515 35.4192C27.4502 35.711 27.0662 35.857 26.6995 35.857C26.4862 35.8657 26.2736 35.8287 26.0757 35.7486C25.8779 35.6685 25.6994 35.547 25.5523 35.3923C25.2605 35.064 25.1146 34.6266 25.1146 34.08V33.385H22.9066V34.08C22.9066 34.6272 22.761 35.0646 22.4698 35.3923C22.1779 35.7027 21.7863 35.8576 21.2947 35.857C20.9299 35.857 20.5565 35.711 20.1744 35.4192C19.7731 35.1101 19.5725 34.6637 19.5725 34.08V20.0525H17.3318V34.08C17.3318 35.2832 17.751 36.2579 18.5894 37.0042C19.4451 37.7338 20.3469 38.0982 21.2947 38.0976C21.8084 38.1036 22.3185 38.0107 22.7971 37.824C23.2514 37.6364 23.6613 37.3555 24 36.9994C24.3453 37.3478 24.7534 37.6276 25.2029 37.824C25.6815 38.0107 26.1916 38.1036 26.7053 38.0976C27.6711 38.0976 28.5728 37.7331 29.4106 37.0042C30.2483 36.2573 30.6675 35.2826 30.6682 34.08V20.0525H28.4275Z"
          fill="white"
        />
        <motion.path
          variants={variant2}
          animate={controls}
          transition={{
            duration: 0.5,
            ease: "backInOut",
          }}
          d="M19.5725 18.6749V13.9248C19.5725 13.3411 19.7731 12.8931 20.1744 12.5808C20.5584 12.289 20.9318 12.143 21.2947 12.143C21.7862 12.143 22.1779 12.2979 22.4698 12.6077C22.761 12.936 22.9066 13.3734 22.9066 13.92V31.9968H25.1203V13.9248C25.1203 13.3776 25.2662 12.9402 25.5581 12.6125C25.7052 12.4578 25.8836 12.3363 26.0815 12.2562C26.2793 12.1761 26.492 12.1391 26.7053 12.1478C27.0701 12.1478 27.4541 12.2938 27.8573 12.5856C28.2413 12.8947 28.4333 13.3427 28.4333 13.9296V18.6797H30.6739V13.9248C30.6739 12.7216 30.2547 11.7469 29.4163 11.0006C28.5779 10.271 27.6762 9.90656 26.711 9.9072C26.1973 9.90117 25.6873 9.99406 25.2086 10.1808C24.7575 10.3752 24.3474 10.6534 24 11.0006C23.6608 10.6462 23.251 10.3669 22.7971 10.1808C22.3185 9.99406 21.8084 9.90117 21.2947 9.9072C20.3469 9.9072 19.4451 10.2717 18.5894 11.0006C17.7517 11.7475 17.3325 12.7222 17.3318 13.9248V18.6749H19.5725Z"
          fill="white"
        />
      </svg>
    </>
  );
};

export default Logo;
