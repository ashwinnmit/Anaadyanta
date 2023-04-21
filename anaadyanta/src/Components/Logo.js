import React from "react"
import {motion} from "framer-motion";

function Logo(){
    const styles = {
        hidden: {
            opacity : 0,
            pathLength: 0,
            rotate : -180
          },
          visible: {
            opacity : 1,
            pathLength: 1,
            rotate : 0,
            transition : {
                duration : 2,
                ease:"easeInOut"
            },
            fill : "black"
          }
    }


    return (
      <motion.svg width="200" height="175" viewBox="0 0 3155 3068" fill="none" xmlns="http://www.w3.org/2000/svg" variants={styles} initial="hidden"
      animate="visible">
      <path d="M587.706 2063.46C583.734 2046.51 579.655 2029.62 575.841 2012.61C557.382 1934.39 543.06 1855.25 532.935 1775.51C518.05 1646.05 525.201 1518.93 573.298 1396.19C606.012 1314.71 651.896 1239.15 709.115 1172.55C764.84 1106.39 825.121 1044.68 895.042 993.35C941.604 959.184 991.767 931.109 1048.66 919.191C1068.72 914.693 1089.39 913.53 1109.84 915.748C1162.23 922.634 1188.13 966.123 1172.24 1017.03C1160.58 1054.11 1134.47 1080.59 1103.96 1102.52C1087.84 1113.62 1070.93 1123.53 1053.37 1132.19C993.833 1163.07 934.929 1194.85 882.329 1237.02C789.101 1311.76 724.053 1406.84 679.134 1516.54C642.69 1605.43 621.29 1698.23 607.835 1793.05C596.08 1879.89 590.521 1967.46 591.202 2055.09C591.202 2057.74 590.726 2060.39 590.461 2062.99L587.706 2063.46Z" fill="black"/>
      <path d="M1589.59 2702.88C1569.68 2699.96 1549.71 2697.1 1529.79 2694.14C1446.57 2681.69 1363.67 2667.33 1282.47 2644.66C1175.2 2614.73 1075.2 2570.08 988.482 2498.46C909.026 2432.88 848.11 2352.53 799.536 2262.48C756.735 2183.02 719.391 2101.34 698.415 2013.14C685.225 1957.58 679.08 1901.22 691.317 1844.64C695 1827.92 701.178 1811.85 709.644 1796.97C730.833 1760.42 771.037 1749.72 808.647 1768.9C827.568 1779.01 843.276 1794.22 853.989 1812.81C872.462 1843.55 883.761 1878.06 887.043 1913.77C894.406 1982.05 901.557 2050.38 921.103 2116.65C956.753 2237.63 1024.71 2337.96 1116.09 2423.4C1207.46 2508.84 1312.08 2573.79 1424.32 2627.55C1475.34 2652.02 1527.99 2673.11 1579.9 2695.67C1583.29 2697.15 1586.68 2698.43 1590.12 2699.8L1589.59 2702.88Z" fill="black"/>
      <path d="M852.77 829.456C854.318 828.236 855.946 827.121 857.643 826.119C952.514 775.585 1047.86 726.11 1149.25 689.508C1222.61 663.022 1297.56 644.271 1375.8 639.503C1469.39 633.703 1563.19 646.948 1651.51 678.437C1769.75 720.178 1878.92 778.71 1976.17 858.166C2020.08 894.027 2057.54 936.192 2082.11 988.103C2093.18 1011.3 2101.24 1035.78 2097.05 1061.73C2091.28 1097.65 2062.36 1122.07 2025.38 1124.03C2003.65 1124.83 1982.07 1120.17 1962.61 1110.47C1938.16 1099.31 1915.99 1083.7 1897.25 1064.43C1863.5 1029.16 1830.93 992.712 1796.07 958.493C1695.11 859.596 1572.96 802.494 1434.28 779.928C1349.26 766.931 1262.97 764.369 1177.32 772.301C1069.79 781.147 964.644 802.494 860.451 829.562C858.173 830.145 855.842 830.516 853.511 831.045L852.77 829.456Z" fill="black"/>
      <path d="M2559.96 1844.38C2559.57 1846.64 2559.04 1848.86 2558.37 1851.05C2521.72 1952.81 2483.79 2054.04 2432.57 2149.65C2376.47 2254.37 2304.7 2345.64 2206.86 2415.03C2122.8 2474.73 2029.3 2513.19 1930.3 2539.36C1864.78 2556.62 1798.62 2571.14 1730.87 2575.32C1667.3 2579.45 1604.21 2576.38 1544.41 2551.59C1526.96 2544.44 1510.73 2534.61 1496.31 2522.46C1462.04 2493.11 1460.45 2449.25 1490.38 2415.46C1511.57 2391.3 1540.17 2380.87 1570.58 2374.46C1600.98 2368.05 1632.76 2369.8 1663.96 2373.08C1726.58 2379.38 1789.24 2384.68 1852.28 2379.38C1972.36 2369.43 2080.05 2326.41 2179.16 2259.09C2278.27 2191.76 2360.74 2108.81 2433.73 2015.42C2475.37 1962.13 2513.19 1905.83 2552.65 1850.9C2554.4 1848.51 2556.1 1846.02 2557.95 1843.59L2559.96 1844.38Z" fill="black"/>
      <path d="M2075.12 752.866C2178.68 842.916 2281.97 932.966 2363.87 1044.73C2433.84 1140.08 2479.08 1245.71 2495.87 1363.04C2504.68 1427.1 2506.35 1491.94 2500.85 1556.38C2495.72 1631.83 2483.12 1706.58 2463.24 1779.54C2446.5 1838.76 2422.29 1894.91 2382.72 1942.8C2370.36 1957.98 2355.98 1971.4 2339.98 1982.69C2287.64 2018.71 2229.43 1994.82 2215.92 1932.79C2207.23 1893.01 2214.17 1854.55 2230.12 1818.05C2247.23 1778.75 2267.2 1740.72 2285.1 1701.52C2329.09 1607.47 2349.84 1504.23 2345.59 1400.49C2341.07 1314.95 2323.4 1230.62 2293.2 1150.46C2244.79 1017.72 2173.6 897.423 2092.34 782.635C2085.72 773.26 2079.15 763.884 2072.53 754.561L2075.12 752.866Z" fill="black"/>
      <path d="M767.908 493.625C766.849 522.706 766.054 551.893 764.73 580.921C760.688 679.491 750.498 777.713 734.219 875.014C720.552 953.993 703.496 1032.07 668.111 1104.8C615.141 1213.55 528.64 1276.27 408.555 1290.2C301.29 1302.75 204.512 1272.56 117.587 1209.89C76.4821 1180.23 40.8855 1145.06 18.0022 1098.97C13.0831 1087.32 8.8731 1075.38 5.39511 1063.22C4.08556 1060.47 2.91879 1057.66 1.89919 1054.8C0.287829 1050.8 -0.312699 1046.47 0.151068 1042.19C11.063 1007.07 36.436 989.219 71.7145 983.445C114.091 976.347 146.509 993.456 173.789 1024.13C189.075 1042.64 205.343 1060.32 222.522 1077.1C254.983 1107.81 296.154 1127.72 340.382 1134.09C395.842 1141.67 443.993 1123.5 487.587 1090.71C534.519 1055.43 569.427 1009.61 599.726 960.032C673.303 839.47 721.559 709.004 750.481 571.121C755.778 545.377 760.069 519.316 764.783 493.413L767.908 493.625Z" fill="black"/>
      <path d="M1555.59 3068C1556.75 3065.43 1558.04 3062.92 1559.46 3060.48C1646.59 2932.24 1740.67 2809.5 1851.91 2701.02C1899.1 2654.99 1949.9 2613.51 2010.34 2585.65C2121.58 2534.37 2228.74 2548.25 2328.85 2613.56C2436.17 2683.54 2496.67 2785.24 2514.25 2911.9C2518.68 2939.2 2516.72 2967.16 2508.53 2993.58C2494.86 3034.68 2466.9 3049.14 2422.77 3037.7C2374.3 3025.09 2345.75 2986.9 2341.78 2930.86C2337.97 2877.89 2322.18 2829 2289.07 2786.88C2244.58 2730.21 2184.35 2710.71 2114.59 2715.8C2048.96 2720.57 1989.1 2744.4 1931.26 2774.07C1790.04 2845.52 1668.79 2943.1 1563.8 3061.22C1562 3063.23 1560.2 3065.3 1558.5 3067.31C1557.97 3067.63 1557.23 3067.58 1555.59 3068Z" fill="black"/>
      <path d="M2855.06 2127.83C2854.27 2126.98 2853.42 2126.19 2852.73 2125.29C2765.75 2000.12 2685.87 1871.03 2624.53 1730.81C2600.38 1675.62 2580.67 1619.04 2572.41 1558.92C2556.52 1442.39 2594.13 1345.77 2680.74 1267.58C2743.72 1210.8 2818.46 1180.02 2902.31 1169.32C2962.49 1161.7 3021.65 1165.24 3079.18 1185.8C3101.03 1193.27 3121.04 1205.27 3137.93 1221.02C3157.58 1239.72 3159.11 1272.56 3147.83 1294.23C3121.35 1344.18 3072.61 1363.99 3014.61 1347.2C2967.94 1333.48 2920.9 1328.55 2873.23 1339.57C2798.17 1356.89 2752.46 1405.57 2729.73 1477.3C2713.1 1529.84 2710.35 1583.98 2714.16 1638.48C2725.92 1806.72 2774.65 1964.52 2850.98 2114.21C2853.1 2118.35 2854.9 2122.64 2856.86 2126.82L2855.06 2127.83Z" fill="black"/>
      <path d="M189.156 1967.43C205.841 1974.47 222.58 1981.31 239.16 1988.62C364.806 2042.91 487.275 2103.24 601.321 2179.31C647.405 2210.14 690.947 2244.15 728.45 2285.57C813.627 2380.28 837.305 2489.61 797.842 2609.43C752.446 2747.47 657.046 2837.58 517.892 2880.22C493.129 2888 466.764 2889.19 441.402 2883.66C414.917 2877.78 399.025 2860.46 395.741 2834.5C388.643 2777.3 414.917 2734.71 468.947 2714.37C495.432 2704.35 522.871 2695.35 547.608 2681.74C598.831 2653.56 636.334 2612.87 650.901 2554.18C663.031 2505.87 653.973 2459.42 636.281 2414.13C615.782 2361.69 584.529 2315.76 549.356 2272.38C451.255 2151.29 333.183 2053.77 198.478 1975.74C194.929 1973.73 191.539 1971.56 187.884 1969.49L189.156 1967.43Z" fill="black"/>
      <path d="M2414.72 597.979C2388.23 604.071 2362.17 610.48 2335.79 616.254C2232.84 639.581 2128.42 655.915 2023.27 665.146C1947.41 671.185 1871.5 673.939 1796.29 658.101C1657.08 628.755 1561.63 532.296 1535.04 392.188C1513.32 277.93 1534.51 171.565 1598.6 74.364C1613.03 51.6283 1631.85 31.9995 1653.95 16.6262C1667.99 7.03846 1683.35 -1.43704 1700.57 0.205052C1712.4 1.06075 1723.76 5.16706 1733.41 12.0708C1752.65 27.2396 1765.92 48.7153 1770.87 72.7106C1775.82 96.7059 1772.14 121.679 1760.48 143.226C1754.34 154.324 1747.38 164.947 1739.66 175.008C1706.66 220.669 1685.37 270.356 1685.74 327.829C1686.16 392.506 1717.15 441.822 1766.62 480.755C1816.1 519.689 1872.25 541.301 1931.36 558.516C2002.79 578.661 2075.97 591.999 2149.92 598.35C2221.19 604.591 2292.84 605.034 2364.19 599.674C2380.87 598.456 2397.45 596.337 2414.08 594.642L2414.72 597.979Z" fill="black"/>
      <path d="M1084.73 2235.67C1084.73 2170.25 1133.25 2120.46 1196.76 2120.51C1225.63 2120.61 1253.28 2132.15 1273.65 2152.61C1294.01 2173.07 1305.43 2200.77 1305.41 2229.63C1305.41 2293.94 1256.09 2345.06 1194.17 2345.06C1179.77 2345.16 1165.5 2342.4 1152.18 2336.94C1138.85 2331.49 1126.75 2323.43 1116.57 2313.26C1106.38 2303.08 1098.33 2290.98 1092.86 2277.66C1087.4 2264.34 1084.63 2250.07 1084.73 2235.67Z" fill="black"/>
      <path d="M1908.42 2133.55C1908.35 2119.17 1911.12 2104.92 1916.57 2091.62C1922.03 2078.32 1930.05 2066.22 1940.19 2056.03C1950.33 2045.84 1962.38 2037.75 1975.66 2032.22C1988.93 2026.7 2003.16 2023.85 2017.54 2023.85C2047.61 2023.88 2076.46 2035.71 2097.9 2056.79C2119.35 2077.86 2131.67 2106.51 2132.22 2136.57C2132.31 2150.95 2129.56 2165.21 2124.11 2178.53C2118.66 2191.84 2110.63 2203.94 2100.48 2214.14C2090.33 2224.33 2078.26 2232.41 2064.97 2237.92C2051.68 2243.43 2037.43 2246.25 2023.05 2246.22C1960.17 2246.06 1908.37 2195.16 1908.42 2133.55Z" fill="black"/>
      <path d="M2151.29 1473.05C2136.91 1473.24 2122.63 1470.58 2109.28 1465.23C2095.93 1459.87 2083.77 1451.93 2073.51 1441.86C2063.24 1431.78 2055.07 1419.78 2049.47 1406.53C2043.86 1393.28 2040.93 1379.06 2040.85 1364.68C2040.27 1303.86 2093.82 1250.15 2155.43 1250.1C2184.47 1250.42 2212.23 1262.12 2232.74 1282.7C2253.24 1303.27 2264.85 1331.07 2265.07 1360.12C2265.07 1420.35 2212.47 1472.63 2151.29 1473.05Z" fill="black"/>
      <path d="M885.294 1416.43C948.382 1417.01 996.903 1465.64 996.162 1527.67C995.42 1589.7 945.521 1636.26 881.851 1635.78C819.61 1635.3 770.242 1586.73 770.983 1526.56C771.725 1462.99 820.828 1415.85 885.294 1416.43Z" fill="black"/>
      <path d="M1338.09 972.215C1338.3 943.16 1350 915.369 1370.63 894.913C1391.27 874.457 1419.16 862.999 1448.21 863.042C1510.3 863.572 1560.09 916.278 1559.08 980.425C1558.57 1009.23 1546.79 1036.68 1526.27 1056.9C1505.76 1077.12 1478.13 1088.5 1449.33 1088.59C1387.4 1087.9 1337.77 1035.78 1338.09 972.215Z" fill="black"/>
      </motion.svg>      
    )
}


export default Logo;