/* eslint-disable max-lines-per-function */

import { useState } from 'react';

import { motion } from 'framer-motion';
import type { Transition, Variant } from 'framer-motion';

type CircleVariantKey = 'active' | 'inactive';

export const Logo: React.FC<{
  animate?: boolean;
  className?: string;
}> = ({ animate, className }) => {
  const [circleProps, setCircleProps] = useState<{
    animate: CircleVariantKey;
    transition: Transition;
    variants: {
      [K in CircleVariantKey]: Variant;
    };
  }>({
    animate: 'inactive',
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: 'reverse'
    },
    variants: {
      active: {
        opacity: ['50%', '100%']
      },
      inactive: {
        opacity: ['0%', '50%']
      }
    }
  });
  return (
    <svg
      className={className}
      height="666.378"
      preserveAspectRatio="xMidYMid"
      version="1.0"
      viewBox="0 0 620.397 499.784"
      width="827.196"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bottom Brain Background */}
      <path
        className="fill-logo-900 dark:fill-logo-800"
        d="M 524.3 405.3 c 0 5 -1.2 11.6 -2.6 17 -9.5 38.3 -51.7 81.1 -111 77.2 -53.8 -3.5 -97.6 -29.2 -97.6 -65.3 s 43.7 -65.3 97.6 -65.3 113.3 113.6 36.4 m 0 0"
      />
      {/* Middle Brain Background */}
      <path
        className="fill-logo-300"
        d="M 410.7 375 c -29 0 -95 8 -110.2 8 -26.8 0 -48.5 16.7 -48.5 37.4 0 9.9 5.1 18.9 13.3 25.6 0 0 18 18 50.4 9.3 14.2 -3.8 37.2 -31.8 77.8 -36.2 20.3 -2.3 58.2 13.3 124.7 13.7 a 40 40 0 0 0 3.5 -10.4 c 0 -36 -57.1 -47.4 -111 -47.4 m 0 0"
      />
      {/* Top Brain Background */}
      <path
        className="fill-logo-900 dark:fill-logo-800"
        d="M 521.7 422.4 s 39 -8 63.3 -39.7 c 28.3 -37.1 24.6 -76.8 24.6 -76.8 28.7 -53.4 -9 -103.5 -9 -103.5 C 597 146 562 122.6 562 122.6 c -22.7 -53.8 -73 -68.3 -73 -68.3 -39.5 -46 -109.5 -44.5 -109.5 -44.5 s -65.6 -24 -155.7 3 c -15 4.4 -64.8 14.8 -101.4 37 C 7.3 120.2 -1.5 229.6 .2 247.4 c 8.9 99.4 79 117.2 123.6 127.6 10.5 28.2 48.8 80.1 117.7 60.8 85 -14.8 120.7 -40 141.6 -40 s 79 22.2 138.6 26.7 m 0 0"
      />
      {/* Inner Brain Background */}
      <motion.path
        className="fill-white stroke-logo-300"
        d={[
          'M 523.2 186.4',
          'a 106 106 0 0 0 -51.7 -32.2 78 78 0 0 0 -92.4 -74',
          'A 107 107 0 0 0 347 47.3',
          'a 106.4 106.4 0 0 0 -162.6 108.4 107 107 0 0 0 -47.4 31.7 106 106 0 0 0 -25.8 69.4',
          'v 2.2',
          'a 105 105 0 0 0 67 95.4',
          'V 239.6',
          'a 17.9 17.9 0 1 1 16.8 0',
          'v 119.8',
          'a 107 107 0 0 0 22.2 2.3',
          'h 67',
          'V 325',
          'L 241 291.1',
          'a 18 18 0 1 1 11.9 -11.8',
          'l 48.1 38.7',
          'v 43.7',
          'h 21.6',
          'v-71.5',
          'L 271.3 250',
          'v -60.7',
          'a 17.9 17.9 0 1 1 16.8 0',
          'v 52.6',
          'l 34.4 27',
          'v -134',
          'a 18 18 0 1 1 16.8 0',
          'v 87.7',
          'l 34.7 -27.3',
          'v -32.6',
          'a 18 18 0 1 1 16.8 0',
          'v 40.8',
          'l -51.5 40.4',
          'v 117.8',
          'h 102.3',
          'L 396 326',
          'V 265',
          'a 18 18 0 1 1 16.7 0',
          'v 52.6',
          'l 34.5 27',
          'V 210.9',
          'a 18 18 0 1 1 16.7 0',
          'v 149.4',
          'a 102 102 0 0 0 54 -27.5',
          'l 1.6 -1.5',
          'a 106.1 106.1 0 0 0 3.8 -144.8'
        ].join(' ')}
        {...(animate && {
          animate: {
            fillOpacity: ['0%', '0%', '100%'],
            pathLength: [0, 1, 1]
          },
          onAnimationComplete: () => {
            setCircleProps((prevCircleProps) => {
              return { ...prevCircleProps, animate: 'active' };
            });
          },
          transition: {
            duration: 3
          }
        })}
      />
      {/* Inner Brain Dots */}
      <g>
        <motion.path
          className="fill-white"
          d="M 393.2 146.8 a 10.8 10.8 0 1 0 -21.6 0 10.8 10.8 0 0 0 21.6 0"
          {...circleProps}
        />
        <motion.path
          className="fill-white"
          d="M 404.4 238.5 a 10.8 10.8 0 1 0 0 21.6 10.8 10.8 0 0 0 0 -21.6"
          {...circleProps}
        />
        <motion.path
          className="fill-white"
          d="M 228 266.4 a 10.8 10.8 0 1 0 15.3 15.3 10.8 10.8 0 0 0 -15.3 -15.3"
          {...circleProps}
        />
        <motion.path
          className="fill-white"
          d="M 279.7 162.6 a 10.8 10.8 0 1 0 0 21.7 10.8 10.8 0 0 0 0 -21.7"
          {...circleProps}
        />
        <motion.path
          className="fill-white"
          d="M 186.4 213 a 10.8 10.8 0 1 0 0 21.7 10.8 10.8 0 0 0 0 -21.7"
          {...circleProps}
        />
        <motion.path
          className="fill-white"
          d="M 330.8 108.4 a 10.8 10.8 0 1 0 0 21.6 10.8 10.8 0 0 0 0 -21.6"
          {...circleProps}
        />
        <motion.path
          className="fill-white"
          d="M 455.4 184.3 a 10.8 10.8 0 1 0 0 21.6 10.8 10.8 0 0 0 0 -21.6"
          {...circleProps}
        />
      </g>
    </svg>
  );
};
