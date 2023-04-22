import React from "react"
import {motion} from "framer-motion";
import "../Styles/svgstyles.css";

function Aylogo(){
    const styles = {
        hidden: {
            opacity : 0,
            pathLength: 0,
          },
          visible: {
            opacity : 1,
            pathLength: 1,
            transition : {
                duration : 2,
                ease:"easeInOut"
            },
            fill : "black"
          }
    }


    return (
        <svg className="text-logo" width="400" height="100" viewBox="0 0 11360 2449" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
            <motion.path d="M8203.9 1566.41C8317.6 1566.41 8428.03 1590.46 8535.17 1638.57C8569.06 1653.87 8588.74 1665.35 8594.21 1673.01C8597.49 1677.38 8599.13 1681.75 8599.13 1686.13V1687.77L8353.13 1807.48C8352.04 1807.48 8350.4 1807.48 8348.22 1807.48C8346.03 1808.57 8344.39 1809.12 8343.3 1809.12C8332.36 1809.12 8308.31 1800.37 8271.14 1782.88C8266.76 1781.79 8263.49 1780.7 8261.3 1779.6C8155.25 1740.24 8055.21 1720.56 7961.19 1720.56C7927.3 1720.56 7897.23 1722.75 7870.99 1727.12C7833.82 1745.71 7807.04 1759.38 7790.64 1768.12L7770.96 1774.68H7738.16C7737.07 1774.68 7734.33 1774.68 7729.96 1774.68C7721.21 1775.78 7714.65 1776.32 7710.28 1776.32C7689.51 1775.23 7678.57 1768.67 7677.48 1756.64C7679.67 1745.71 7687.32 1734.78 7700.44 1723.84V1722.2C7700.44 1695.97 7714.65 1666.99 7743.08 1635.29C7775.88 1601.4 7841.47 1548.92 7939.87 1477.85C7991.26 1440.68 8031.16 1409.52 8059.59 1384.38C8149.24 1300.19 8198.98 1226.4 8208.82 1162.99C8211.01 1152.05 8212.1 1141.67 8212.1 1131.83C8212.1 1076.07 8193.51 1028.51 8156.34 989.153C8141.04 973.847 8125.18 962.914 8108.78 956.354C8071.61 994.619 8028.43 1052.56 7979.23 1130.19C7977.04 1132.37 7974.31 1136.2 7971.03 1141.67C7963.38 1154.79 7957.36 1162.99 7952.99 1166.27L7797.2 1215.46C7791.73 1211.09 7789 1204.53 7789 1195.78C7789 1157.52 7824.53 1091.92 7895.59 998.992C7898.87 995.713 7901.06 992.979 7902.15 990.793C7937.14 950.341 7967.2 924.649 7992.35 913.716C8048.11 890.757 8119.17 857.958 8205.54 815.32C8224.13 805.48 8253.1 800.56 8292.46 800.56C8297.92 800.56 8303.94 800.56 8310.5 800.56H8315.42C8391.95 800.56 8449.89 834.452 8489.25 902.236C8510.02 939.408 8520.41 980.407 8520.41 1025.23C8520.41 1102.86 8485.97 1178.29 8417.09 1251.54C8410.53 1258.1 8391.4 1277.24 8359.69 1308.94C8323.62 1342.83 8265.67 1390.39 8185.86 1451.61C8162.9 1469.11 8145.96 1482.23 8135.02 1490.97C8086.92 1527.05 8054.12 1559.3 8036.63 1587.73C8094.57 1573.52 8150.33 1566.41 8203.9 1566.41ZM8207.18 882.557C8227.95 873.811 8245.99 866.158 8261.3 859.598C8240.53 867.251 8222.49 874.904 8207.18 882.557ZM9205.9 1712.36C9282.43 1612.88 9320.7 1519.4 9320.7 1431.94C9320.7 1267.94 9238.7 1137.29 9074.71 1039.99C9067.05 1034.52 9059.95 1030.15 9053.39 1026.87C8971.39 1116.52 8930.39 1223.66 8930.39 1348.3V1358.14C8930.39 1474.03 8967.02 1566.41 9040.27 1635.29C9087.28 1679.02 9141.94 1704.71 9204.26 1712.36H9205.9ZM9266.58 849.758C9267.67 849.758 9269.86 849.758 9273.14 849.758C9276.42 848.665 9278.61 848.118 9279.7 848.118C9335.46 848.118 9399.96 893.49 9473.21 984.233C9475.4 986.42 9478.13 990.246 9481.41 995.713C9486.88 1002.27 9490.7 1006.65 9492.89 1008.83C9567.23 1112.69 9605.5 1228.04 9607.69 1354.86C9606.59 1492.61 9559.58 1598.12 9466.65 1671.37C9382.47 1736.96 9288.45 1781.24 9184.58 1804.2H9176.38C9158.89 1810.76 9133.74 1820.6 9100.95 1833.72C9067.05 1846.84 9041.91 1856.68 9025.51 1863.24C9000.36 1873.08 8976.31 1878 8953.35 1878C8872.45 1878 8797.01 1832.63 8727.04 1741.88C8719.39 1730.95 8712.28 1720.56 8705.72 1710.72C8658.71 1636.38 8635.2 1553.29 8635.2 1461.45V1446.7C8635.2 1290.35 8686.59 1159.71 8789.36 1054.75C8807.94 1036.16 8826.53 1019.77 8845.12 1005.55C8896.5 967.287 8990.52 923.555 9127.18 874.357C9168.73 859.051 9198.8 847.572 9217.38 839.919C9226.13 837.732 9237.06 835.545 9250.18 833.359C9262.21 835.545 9268.22 838.825 9268.22 843.199C9268.22 845.385 9267.67 847.572 9266.58 849.758ZM10130.8 1566.41C10244.5 1566.41 10355 1590.46 10462.1 1638.57C10496 1653.87 10515.7 1665.35 10521.1 1673.01C10524.4 1677.38 10526.1 1681.75 10526.1 1686.13V1687.77L10280.1 1807.48C10279 1807.48 10277.3 1807.48 10275.1 1807.48C10273 1808.57 10271.3 1809.12 10270.2 1809.12C10259.3 1809.12 10235.2 1800.37 10198.1 1782.88C10193.7 1781.79 10190.4 1780.7 10188.2 1779.6C10082.2 1740.24 9982.14 1720.56 9888.12 1720.56C9854.22 1720.56 9824.16 1722.75 9797.92 1727.12C9760.75 1745.71 9733.96 1759.38 9717.56 1768.12L9697.88 1774.68H9665.08C9663.99 1774.68 9661.26 1774.68 9656.88 1774.68C9648.14 1775.78 9641.58 1776.32 9637.21 1776.32C9616.43 1775.23 9605.5 1768.67 9604.41 1756.64C9606.59 1745.71 9614.25 1734.78 9627.37 1723.84V1722.2C9627.37 1695.97 9641.58 1666.99 9670 1635.29C9702.8 1601.4 9768.4 1548.92 9866.8 1477.85C9918.18 1440.68 9958.09 1409.52 9986.51 1384.38C10076.2 1300.19 10125.9 1226.4 10135.7 1162.99C10137.9 1152.05 10139 1141.67 10139 1131.83C10139 1076.07 10120.4 1028.51 10083.3 989.153C10068 973.847 10052.1 962.914 10035.7 956.354C9998.54 994.619 9955.35 1052.56 9906.15 1130.19C9903.97 1132.37 9901.23 1136.2 9897.96 1141.67C9890.3 1154.79 9884.29 1162.99 9879.92 1166.27L9724.12 1215.46C9718.66 1211.09 9715.92 1204.53 9715.92 1195.78C9715.92 1157.52 9751.45 1091.92 9822.52 998.992C9825.8 995.713 9827.98 992.979 9829.08 990.793C9864.06 950.341 9894.13 924.649 9919.27 913.716C9975.03 890.757 10046.1 857.958 10132.5 815.32C10151.1 805.48 10180 800.56 10219.4 800.56C10224.8 800.56 10230.9 800.56 10237.4 800.56H10242.3C10318.9 800.56 10376.8 834.452 10416.2 902.236C10436.9 939.408 10447.3 980.407 10447.3 1025.23C10447.3 1102.86 10412.9 1178.29 10344 1251.54C10337.5 1258.1 10318.3 1277.24 10286.6 1308.94C10250.5 1342.83 10192.6 1390.39 10112.8 1451.61C10089.8 1469.11 10072.9 1482.23 10061.9 1490.97C10013.8 1527.05 9981.05 1559.3 9963.55 1587.73C10021.5 1573.52 10077.3 1566.41 10130.8 1566.41ZM10134.1 882.557C10154.9 873.811 10172.9 866.158 10188.2 859.598C10167.5 867.251 10149.4 874.904 10134.1 882.557ZM10995.1 1695.97C11007.1 1675.19 11014.8 1649.5 11018 1618.89C11010.4 1555.48 10972.7 1508.47 10904.9 1477.85C10869.9 1462.55 10832.7 1454.89 10793.4 1454.89C10762.7 1472.39 10733.8 1481.13 10706.4 1481.13C10676.9 1480.04 10661.1 1473.48 10658.9 1461.45C10658.9 1430.84 10705.9 1402.96 10799.9 1377.82C10809.8 1375.63 10816.3 1373.99 10819.6 1372.9C10931.1 1301.83 10987.4 1219.29 10988.5 1125.27C10988.5 1055.3 10968.3 1004.46 10927.8 972.753C10920.2 966.194 10912.5 961.274 10904.9 957.994C10886.3 976.58 10865.5 1003.37 10842.6 1038.35C10839.3 1042.72 10833.8 1050.92 10826.2 1062.95C10808.7 1090.28 10795 1108.32 10785.2 1117.07L10599.8 1179.39C10591.1 1169.55 10586.7 1158.61 10586.7 1146.59C10586.7 1101.76 10625.5 1043.27 10703.2 971.114C10737.1 939.408 10762.2 920.276 10778.6 913.716C10874.8 873.264 10973.2 834.452 11073.8 797.28C11092.4 791.814 11108.8 789.081 11123 789.081C11190.8 789.081 11240 826.253 11270.6 900.596C11284.8 936.675 11291.9 973.847 11291.9 1012.11C11290.8 1128 11235.1 1226.4 11124.6 1307.3C11218.7 1323.7 11281 1367.43 11311.6 1438.5C11323.6 1465.83 11329.6 1494.8 11329.6 1525.41C11328.5 1591.01 11295.2 1647.31 11229.6 1694.33C11178.2 1730.4 11139.4 1753.36 11113.1 1763.2C11106.6 1765.39 11095.1 1769.22 11078.7 1774.68C11010.9 1796.55 10940.4 1821.69 10867.2 1850.12C10846.4 1856.68 10825.6 1859.96 10804.8 1859.96C10672.6 1858.87 10579.1 1810.21 10524.4 1714C10518.9 1696.51 10516.2 1686.67 10516.2 1684.49C10516.2 1638.57 10551.2 1595.93 10621.2 1556.57C10625.5 1554.38 10632.6 1550.56 10642.5 1545.09C10649 1541.81 10653.4 1539.62 10655.6 1538.53C10668.7 1534.16 10682.4 1531.97 10696.6 1531.97C10730.5 1531.97 10765.5 1552.2 10801.6 1592.65C10812.5 1603.58 10819.6 1610.69 10822.9 1613.97C10869.9 1659.89 10927.3 1687.22 10995.1 1695.97Z" variants={styles} initial="hidden"
      animate="visible"/>
        <motion.path d="M1200.22 1530.82C1211.65 1534.09 1211.65 1543.89 1200.22 1560.22C1188.79 1576.54 1172.46 1594.51 1151.23 1614.1C1131.63 1633.7 1109.59 1651.66 1085.09 1667.99C1062.23 1684.32 1043.45 1694.12 1028.76 1697.38C1015.69 1700.65 996.914 1703.91 972.42 1707.18C947.926 1708.81 919.349 1711.26 886.69 1714.53L928.33 2368.52C929.963 2394.65 914.45 2405.27 881.791 2400.37C850.765 2395.47 814.841 2380.77 774.017 2356.28C734.826 2333.42 697.268 2303.21 661.344 2265.65C625.419 2228.09 604.19 2189.72 597.659 2150.53C594.393 2137.46 593.576 2091.74 595.209 2013.36C596.842 1936.61 599.292 1845.16 602.557 1739.02C561.734 1742.29 521.727 1745.55 482.536 1748.82C443.345 1750.45 406.604 1752.9 372.312 1756.17C339.653 1757.8 310.26 1759.44 284.133 1761.07C259.639 1762.7 240.043 1763.52 225.347 1763.52C187.789 1840.27 155.946 1908.85 129.819 1969.27C103.692 2029.69 86.5462 2078.68 78.3815 2116.23C70.2167 2161.96 60.419 2187.27 48.9884 2192.17C37.5578 2198.7 26.9436 2192.98 17.1459 2175.02C8.98121 2157.06 4.08237 2130.11 2.44942 2094.19C0.816474 2059.9 5.71532 2024.79 17.1459 1988.86C22.0448 1969.27 35.9248 1937.43 58.7861 1893.34C81.6474 1849.25 110.224 1796.18 144.516 1734.12C121.655 1717.79 99.6098 1697.38 78.3815 1672.89C58.7861 1648.39 44.0896 1624.72 34.2919 1601.86C24.4942 1578.99 21.2283 1559.4 24.4942 1543.07C27.7601 1525.11 41.6402 1516.13 66.1344 1516.13H259.639C290.665 1455.71 323.324 1392.02 357.615 1325.07C391.907 1256.49 425.383 1187.09 458.042 1116.87C492.334 1046.65 524.176 976.437 553.569 906.22C582.962 834.37 609.906 764.154 634.4 695.57C636.033 669.443 636.033 648.214 634.4 631.885C634.4 613.923 634.4 601.675 634.4 595.144C627.868 546.155 631.951 496.35 646.647 445.729C661.344 393.475 678.49 350.202 698.085 315.91C719.313 281.618 739.725 259.573 759.32 249.775C780.549 238.345 792.796 248.142 796.062 279.168C797.695 293.865 800.961 341.22 805.859 421.235C812.391 499.616 818.923 597.593 825.455 715.165C833.62 831.105 841.784 960.107 849.949 1102.17C859.747 1242.61 868.728 1382.22 876.893 1521.02C961.806 1522.66 1034.47 1524.29 1094.89 1525.92C1155.31 1525.92 1190.42 1527.56 1200.22 1530.82ZM629.501 908.67C587.044 1014.81 541.322 1119.32 492.334 1222.2C444.978 1325.07 397.623 1423.05 350.267 1516.13C391.091 1516.13 432.731 1516.94 475.188 1518.58C517.644 1518.58 562.55 1518.58 609.906 1518.58L629.501 908.67ZM1531.77 1320.17C1541.57 1325.07 1555.45 1339.77 1573.41 1364.26C1593 1388.76 1613.42 1414.07 1634.64 1440.19C1657.51 1466.32 1680.37 1489.18 1703.23 1508.78C1726.09 1526.74 1747.32 1533.27 1766.91 1528.37C1786.51 1523.47 1806.1 1512.04 1825.7 1494.08C1845.29 1476.12 1863.26 1458.16 1879.59 1440.19C1897.55 1420.6 1913.88 1405.09 1928.57 1393.65C1943.27 1380.59 1954.7 1377.33 1962.87 1383.86C1971.03 1390.39 1965.32 1410.8 1945.72 1445.09C1927.76 1479.38 1901.63 1516.94 1867.34 1557.77C1834.68 1596.96 1797.12 1634.51 1754.67 1670.44C1713.84 1706.36 1675.47 1729.23 1639.54 1739.02C1608.52 1747.19 1579.12 1742.29 1551.36 1724.33C1523.6 1704.73 1495.84 1681.05 1468.08 1653.29C1441.96 1623.9 1415.01 1594.51 1387.25 1565.11C1361.13 1535.72 1334.18 1513.68 1306.42 1498.98C1294.99 1556.13 1282.74 1607.57 1269.68 1653.29C1256.62 1699.02 1245.19 1725.14 1235.39 1731.67C1212.53 1744.74 1188.85 1743.92 1164.36 1729.23C1141.49 1714.53 1123.53 1699.83 1110.47 1685.14C1105.57 1676.97 1099.85 1655.74 1093.32 1621.45C1088.42 1587.16 1084.34 1549.6 1081.07 1508.78C1077.81 1467.95 1075.36 1430.4 1073.73 1396.1C1072.09 1360.18 1072.91 1337.32 1076.18 1327.52C1077.81 1317.72 1090.06 1303.84 1112.92 1285.88C1135.78 1267.92 1161.09 1250.77 1188.85 1234.44C1218.24 1218.11 1246 1205.87 1272.13 1197.7C1298.26 1189.54 1316.22 1189.54 1326.02 1197.7C1334.18 1204.23 1337.45 1224.64 1335.81 1258.94C1335.81 1291.6 1333.37 1330.79 1328.47 1376.51C1346.43 1365.08 1366.02 1355.28 1387.25 1347.12C1408.48 1338.95 1428.08 1332.42 1446.04 1327.52C1465.63 1322.62 1482.78 1319.36 1497.48 1317.72C1513.81 1316.09 1525.24 1316.91 1531.77 1320.17ZM1956.63 1361.81C1969.69 1355.28 1990.92 1346.3 2020.31 1334.87C2049.71 1321.81 2079.92 1310.37 2110.94 1300.58C2143.6 1290.78 2173.81 1284.25 2201.57 1280.98C2229.33 1277.72 2247.29 1280.98 2255.46 1290.78C2263.62 1300.58 2272.6 1323.44 2282.4 1359.36C2293.83 1395.29 2305.26 1432.85 2316.69 1472.04C2329.76 1511.23 2344.45 1547.15 2360.78 1579.81C2377.11 1610.84 2395.89 1627.17 2417.12 1628.8C2436.71 1630.43 2455.49 1627.17 2473.46 1619C2491.42 1610.84 2507.75 1600.22 2522.44 1587.16C2537.14 1574.1 2549.39 1561.03 2559.19 1547.97C2570.62 1533.27 2578.78 1521.02 2583.68 1511.23C2588.58 1501.43 2595.11 1496.53 2603.27 1496.53C2613.07 1494.9 2617.16 1500.61 2615.52 1513.68C2615.52 1525.11 2608.17 1544.7 2593.48 1572.46C2578.78 1600.22 2551.02 1636.96 2510.2 1682.69C2426.92 1775.76 2354.25 1830.47 2292.2 1846.8C2231.78 1863.13 2186.87 1850.06 2157.48 1807.61C2141.15 1784.75 2129.72 1751.27 2123.19 1707.18C2101.96 1730.04 2076.65 1752.9 2047.26 1775.76C2019.5 1798.63 1991.74 1816.59 1963.98 1829.65C1936.22 1842.72 1910.09 1848.43 1885.59 1846.8C1862.73 1846.8 1844.77 1835.37 1831.71 1812.51C1817.01 1784.75 1815.38 1755.35 1826.81 1724.33C1836.61 1691.67 1854.57 1659.83 1880.7 1628.8C1908.46 1596.14 1941.11 1564.3 1978.67 1533.27C2016.23 1502.25 2053.79 1474.49 2091.35 1449.99C2088.08 1418.97 2084 1399.37 2079.1 1391.21C2075.83 1386.31 2065.22 1389.57 2047.26 1401C2030.93 1410.8 2012.15 1423.05 1990.92 1437.74C1969.69 1450.81 1948.46 1462.24 1927.23 1472.04C1906.01 1481.83 1889.68 1483.47 1878.25 1476.94C1865.18 1470.4 1859.47 1462.24 1861.1 1452.44C1862.73 1441.01 1867.63 1429.58 1875.8 1418.15C1885.59 1406.72 1897.84 1396.1 1912.54 1386.31C1927.23 1376.51 1941.93 1368.34 1956.63 1361.81ZM2108.49 1609.2C2105.23 1592.87 2102.78 1577.36 2101.14 1562.66C2101.14 1546.34 2100.33 1530.82 2098.69 1516.13C2069.3 1538.99 2048.89 1562.66 2037.46 1587.16C2027.66 1610.02 2024.4 1626.35 2027.66 1636.15C2030.93 1647.58 2039.09 1653.29 2052.16 1653.29C2065.22 1651.66 2084 1636.96 2108.49 1609.2ZM2614.43 1361.81C2627.49 1355.28 2648.72 1346.3 2678.12 1334.87C2707.51 1321.81 2737.72 1310.37 2768.74 1300.58C2801.4 1290.78 2831.61 1284.25 2859.37 1280.98C2887.13 1277.72 2905.1 1280.98 2913.26 1290.78C2921.43 1300.58 2930.41 1323.44 2940.2 1359.36C2951.63 1395.29 2963.07 1432.85 2974.5 1472.04C2987.56 1511.23 3002.26 1547.15 3018.59 1579.81C3034.92 1610.84 3053.69 1627.17 3074.92 1628.8C3094.52 1630.43 3113.3 1627.17 3131.26 1619C3149.22 1610.84 3165.55 1600.22 3180.25 1587.16C3194.94 1574.1 3207.19 1561.03 3216.99 1547.97C3228.42 1533.27 3236.58 1521.02 3241.48 1511.23C3246.38 1501.43 3252.91 1496.53 3261.08 1496.53C3270.88 1494.9 3274.96 1500.61 3273.33 1513.68C3273.33 1525.11 3265.98 1544.7 3251.28 1572.46C3236.58 1600.22 3208.82 1636.96 3168 1682.69C3084.72 1775.76 3012.05 1830.47 2950 1846.8C2889.58 1863.13 2844.68 1850.06 2815.28 1807.61C2798.95 1784.75 2787.52 1751.27 2780.99 1707.18C2759.76 1730.04 2734.45 1752.9 2705.06 1775.76C2677.3 1798.63 2649.54 1816.59 2621.78 1829.65C2594.02 1842.72 2567.89 1848.43 2543.4 1846.8C2520.54 1846.8 2502.57 1835.37 2489.51 1812.51C2474.81 1784.75 2473.18 1755.35 2484.61 1724.33C2494.41 1691.67 2512.37 1659.83 2538.5 1628.8C2566.26 1596.14 2598.92 1564.3 2636.48 1533.27C2674.03 1502.25 2711.59 1474.49 2749.15 1449.99C2745.88 1418.97 2741.8 1399.37 2736.9 1391.21C2733.64 1386.31 2723.02 1389.57 2705.06 1401C2688.73 1410.8 2669.95 1423.05 2648.72 1437.74C2627.49 1450.81 2606.27 1462.24 2585.04 1472.04C2563.81 1481.83 2547.48 1483.47 2536.05 1476.94C2522.99 1470.4 2517.27 1462.24 2518.9 1452.44C2520.54 1441.01 2525.44 1429.58 2533.6 1418.15C2543.4 1406.72 2555.65 1396.1 2570.34 1386.31C2585.04 1376.51 2599.73 1368.34 2614.43 1361.81ZM2766.3 1609.2C2763.03 1592.87 2760.58 1577.36 2758.95 1562.66C2758.95 1546.34 2758.13 1530.82 2756.5 1516.13C2727.1 1538.99 2706.69 1562.66 2695.26 1587.16C2685.46 1610.02 2682.2 1626.35 2685.46 1636.15C2688.73 1647.58 2696.89 1653.29 2709.96 1653.29C2723.02 1651.66 2741.8 1636.96 2766.3 1609.2ZM3656.79 186.09C3661.69 156.697 3669.04 139.551 3678.84 134.653C3690.27 129.754 3700.88 132.203 3710.68 142.001C3720.48 151.798 3729.46 168.128 3737.62 190.989C3745.79 212.218 3749.87 235.079 3749.87 259.573C3749.87 305.295 3746.61 370.613 3740.07 455.527C3735.18 540.44 3730.28 633.518 3725.38 734.761C3720.48 836.003 3716.4 940.512 3713.13 1048.29C3711.5 1154.43 3713.95 1252.4 3720.48 1342.22C3727.01 1432.03 3738.44 1507.96 3754.77 1570.01C3772.73 1630.43 3798.86 1665.54 3833.15 1675.34C3860.91 1683.5 3887.86 1677.79 3913.98 1658.19C3940.11 1638.6 3967.87 1601.86 3997.26 1547.97C4026.66 1494.08 4047.07 1472.04 4058.5 1481.83C4069.93 1491.63 4064.21 1520.21 4041.35 1567.56C3987.47 1681.87 3937.66 1767.6 3891.94 1824.75C3847.85 1881.91 3808.66 1916.2 3774.37 1927.63C3740.07 1940.69 3711.5 1933.34 3688.64 1905.58C3665.77 1879.46 3650.26 1840.27 3642.1 1788.01C3638.83 1765.15 3635.57 1730.04 3632.3 1682.69C3630.67 1635.33 3629.03 1580.63 3627.4 1518.58C3614.34 1587.16 3595.56 1652.48 3571.06 1714.53C3546.57 1776.58 3520.44 1817.4 3492.68 1837C3460.02 1861.49 3421.65 1868.84 3377.56 1859.04C3335.1 1850.88 3295.91 1832.92 3259.99 1805.16C3225.7 1775.76 3199.57 1739.84 3181.61 1697.38C3163.64 1654.93 3163.64 1612.47 3181.61 1570.01C3193.04 1542.25 3216.71 1513.68 3252.64 1484.28C3290.2 1453.26 3331.02 1423.05 3375.11 1393.65C3420.83 1362.63 3466.56 1333.24 3512.28 1305.48C3558 1276.08 3596.37 1248.32 3627.4 1222.2C3627.4 1112.79 3628.22 1000.11 3629.85 884.175C3633.12 768.236 3635.57 661.278 3637.2 563.301C3640.46 465.324 3643.73 382.044 3647 313.46C3650.26 244.876 3653.53 202.42 3656.79 186.09ZM3380.01 1545.52C3376.74 1556.95 3382.46 1570.83 3397.16 1587.16C3411.85 1601.86 3431.45 1606.75 3455.94 1601.86C3480.44 1596.96 3507.38 1574.91 3536.77 1535.72C3567.8 1496.53 3598.01 1428.76 3627.4 1332.42V1312.82C3607.81 1329.15 3584.94 1347.12 3558.82 1366.71C3532.69 1386.31 3506.56 1406.72 3480.44 1427.95C3455.94 1447.54 3433.9 1467.95 3414.3 1489.18C3394.71 1508.78 3383.28 1527.56 3380.01 1545.52ZM4387.54 1168.31C4390.81 1122.59 4398.16 1098.09 4409.59 1094.83C4421.02 1089.93 4432.45 1096.46 4443.88 1114.42C4455.31 1130.75 4465.11 1153.61 4473.27 1183C4483.07 1210.76 4487.15 1234.44 4485.52 1254.04C4478.99 1335.69 4476.54 1423.05 4478.17 1516.13C4481.44 1607.57 4485.52 1695.75 4490.42 1780.66C4495.32 1865.58 4500.22 1941.51 4505.12 2008.46C4511.65 2075.41 4514.91 2124.4 4514.91 2155.42C4514.91 2186.45 4505.93 2216.66 4487.97 2246.05C4471.64 2277.08 4453.68 2301.57 4434.08 2319.54C4414.49 2337.5 4397.34 2346.48 4382.65 2346.48C4367.95 2346.48 4363.05 2331.78 4367.95 2302.39C4369.58 2287.69 4371.21 2261.57 4372.85 2224.01C4374.48 2186.45 4376.11 2141.54 4377.75 2089.29C4379.38 2037.04 4380.2 1979.07 4380.2 1915.38C4381.83 1853.33 4382.65 1790.46 4382.65 1726.78C4358.15 1744.74 4330.39 1759.44 4299.36 1770.87C4269.97 1782.3 4245.48 1784.75 4225.88 1778.21C4211.19 1773.32 4192.41 1756.99 4169.55 1729.23C4148.32 1699.83 4124.64 1667.99 4098.51 1633.7C4072.39 1599.41 4044.63 1567.56 4015.23 1538.17C3987.47 1508.78 3959.71 1490.82 3931.95 1484.28C3902.56 1477.75 3893.58 1464.69 3905.01 1445.09C3916.44 1423.86 3939.3 1404.27 3973.59 1386.31C4007.88 1366.71 4047.07 1352.83 4091.16 1344.67C4136.89 1334.87 4177.71 1338.13 4213.64 1354.46C4229.96 1362.63 4245.48 1375.69 4260.17 1393.65C4274.87 1409.98 4288.75 1429.58 4301.81 1452.44C4314.88 1475.3 4327.94 1499.8 4341.01 1525.92C4355.7 1550.42 4369.58 1574.1 4382.65 1596.96C4382.65 1546.34 4382.65 1498.16 4382.65 1452.44C4382.65 1405.09 4382.65 1362.63 4382.65 1325.07C4384.28 1285.88 4385.09 1253.22 4385.09 1227.09C4386.73 1199.33 4387.54 1179.74 4387.54 1168.31ZM4702.66 1361.81C4715.72 1355.28 4736.95 1346.3 4766.34 1334.87C4795.74 1321.81 4825.95 1310.37 4856.97 1300.58C4889.63 1290.78 4919.84 1284.25 4947.6 1280.98C4975.36 1277.72 4993.32 1280.98 5001.49 1290.78C5009.65 1300.58 5018.63 1323.44 5028.43 1359.36C5039.86 1395.29 5051.29 1432.85 5062.72 1472.04C5075.79 1511.23 5090.48 1547.15 5106.81 1579.81C5123.14 1610.84 5141.92 1627.17 5163.15 1628.8C5182.74 1630.43 5201.52 1627.17 5219.49 1619C5237.45 1610.84 5253.78 1600.22 5268.47 1587.16C5283.17 1574.1 5295.42 1561.03 5305.22 1547.97C5316.65 1533.27 5324.81 1521.02 5329.71 1511.23C5334.61 1501.43 5341.14 1496.53 5349.31 1496.53C5359.1 1494.9 5363.19 1500.61 5361.55 1513.68C5361.55 1525.11 5354.2 1544.7 5339.51 1572.46C5324.81 1600.22 5297.05 1636.96 5256.23 1682.69C5172.95 1775.76 5100.28 1830.47 5038.23 1846.8C4977.81 1863.13 4932.9 1850.06 4903.51 1807.61C4887.18 1784.75 4875.75 1751.27 4869.22 1707.18C4847.99 1730.04 4822.68 1752.9 4793.29 1775.76C4765.53 1798.63 4737.77 1816.59 4710.01 1829.65C4682.25 1842.72 4656.12 1848.43 4631.62 1846.8C4608.76 1846.8 4590.8 1835.37 4577.74 1812.51C4563.04 1784.75 4561.41 1755.35 4572.84 1724.33C4582.64 1691.67 4600.6 1659.83 4626.73 1628.8C4654.49 1596.14 4687.15 1564.3 4724.7 1533.27C4762.26 1502.25 4799.82 1474.49 4837.38 1449.99C4834.11 1418.97 4830.03 1399.37 4825.13 1391.21C4821.86 1386.31 4811.25 1389.57 4793.29 1401C4776.96 1410.8 4758.18 1423.05 4736.95 1437.74C4715.72 1450.81 4694.49 1462.24 4673.27 1472.04C4652.04 1481.83 4635.71 1483.47 4624.28 1476.94C4611.21 1470.4 4605.5 1462.24 4607.13 1452.44C4608.76 1441.01 4613.66 1429.58 4621.83 1418.15C4631.62 1406.72 4643.87 1396.1 4658.57 1386.31C4673.27 1376.51 4687.96 1368.34 4702.66 1361.81ZM4854.52 1609.2C4851.26 1592.87 4848.81 1577.36 4847.17 1562.66C4847.17 1546.34 4846.36 1530.82 4844.72 1516.13C4815.33 1538.99 4794.92 1562.66 4783.49 1587.16C4773.69 1610.02 4770.43 1626.35 4773.69 1636.15C4776.96 1647.58 4785.12 1653.29 4798.19 1653.29C4811.25 1651.66 4830.03 1636.96 4854.52 1609.2ZM5705.83 1320.17C5715.63 1325.07 5729.51 1339.77 5747.47 1364.26C5767.07 1388.76 5787.48 1414.07 5808.71 1440.19C5831.57 1466.32 5854.43 1489.18 5877.29 1508.78C5900.15 1526.74 5921.38 1533.27 5940.97 1528.37C5960.57 1523.47 5980.16 1512.04 5999.76 1494.08C6019.36 1476.12 6037.32 1458.16 6053.65 1440.19C6071.61 1420.6 6087.94 1405.09 6102.64 1393.65C6117.33 1380.59 6128.76 1377.33 6136.93 1383.86C6145.09 1390.39 6139.38 1410.8 6119.78 1445.09C6101.82 1479.38 6075.69 1516.94 6041.4 1557.77C6008.74 1596.96 5971.18 1634.51 5928.73 1670.44C5887.9 1706.36 5849.53 1729.23 5813.6 1739.02C5782.58 1747.19 5753.19 1742.29 5725.43 1724.33C5697.67 1704.73 5669.9 1681.05 5642.14 1653.29C5616.02 1623.9 5589.07 1594.51 5561.31 1565.11C5535.19 1535.72 5508.24 1513.68 5480.48 1498.98C5469.05 1556.13 5456.81 1607.57 5443.74 1653.29C5430.68 1699.02 5419.25 1725.14 5409.45 1731.67C5386.59 1744.74 5362.91 1743.92 5338.42 1729.23C5315.56 1714.53 5297.59 1699.83 5284.53 1685.14C5279.63 1676.97 5273.92 1655.74 5267.38 1621.45C5262.48 1587.16 5258.4 1549.6 5255.14 1508.78C5251.87 1467.95 5249.42 1430.4 5247.79 1396.1C5246.16 1360.18 5246.97 1337.32 5250.24 1327.52C5251.87 1317.72 5264.12 1303.84 5286.98 1285.88C5309.84 1267.92 5335.15 1250.77 5362.91 1234.44C5392.3 1218.11 5420.06 1205.87 5446.19 1197.7C5472.32 1189.54 5490.28 1189.54 5500.08 1197.7C5508.24 1204.23 5511.51 1224.64 5509.88 1258.94C5509.88 1291.6 5507.43 1330.79 5502.53 1376.51C5520.49 1365.08 5540.09 1355.28 5561.31 1347.12C5582.54 1338.95 5602.14 1332.42 5620.1 1327.52C5639.7 1322.62 5656.84 1319.36 5671.54 1317.72C5687.87 1316.09 5699.3 1316.91 5705.83 1320.17ZM5212.16 1080.13C5277.47 1013.18 5342.79 962.557 5408.11 928.265C5471.8 893.973 5537.93 871.112 5606.51 859.681C5673.46 846.618 5743.68 841.719 5817.16 844.985C5889.01 848.25 5964.13 854.782 6042.51 864.58C6045.78 653.93 6043.33 419.602 6035.16 161.596C6035.16 145.267 6040.06 127.304 6049.86 107.709C6061.29 86.4806 6073.54 68.5182 6086.6 53.8217C6099.66 39.1251 6111.91 28.511 6123.34 21.9792C6134.77 13.8144 6141.3 13.8144 6142.94 21.9792C6147.84 51.3722 6151.1 94.6453 6152.73 151.799C6154.37 207.319 6154.37 273.453 6152.73 350.202C6152.73 425.317 6151.1 507.781 6147.84 597.593C6146.2 687.405 6143.75 780.483 6140.49 876.827C6143.75 878.46 6150.28 879.276 6160.08 879.276C6284.19 893.973 6400.94 905.404 6510.35 913.568C6619.76 920.1 6720.18 921.733 6811.63 918.467C6904.71 913.568 6988.8 902.138 7063.92 884.175C7139.03 866.213 7204.35 838.453 7259.87 800.895C7290.9 779.667 7314.58 767.42 7330.91 764.154C7348.87 759.255 7350.5 770.685 7335.8 798.446C7319.47 829.472 7292.53 864.58 7254.97 903.771C7219.05 941.328 7170.88 978.07 7110.46 1013.99C7050.04 1049.92 6978.19 1081.76 6894.91 1109.52C6813.26 1135.65 6719.37 1152.8 6613.23 1160.96C6543.01 1167.49 6466.26 1170.76 6382.98 1170.76C6301.33 1170.76 6217.24 1169.12 6130.69 1165.86C6125.79 1286.7 6121.71 1403.45 6118.44 1516.13C6116.81 1628.8 6115.99 1729.23 6115.99 1817.4C6115.99 1903.95 6118.44 1974.17 6123.34 2028.05C6128.24 2081.94 6136.4 2110.52 6147.84 2113.78C6164.16 2118.68 6178.04 2115.42 6189.48 2103.99C6202.54 2094.19 6213.15 2079.49 6221.32 2059.9C6229.48 2040.3 6236.01 2018.26 6240.91 1993.76C6245.81 1970.9 6249.08 1948.86 6250.71 1927.63C6253.98 1891.7 6263.77 1877.82 6280.1 1885.99C6296.43 1895.79 6312.76 1916.2 6329.09 1947.22C6347.05 1979.88 6360.93 2018.26 6370.73 2062.35C6382.16 2108.07 6383.8 2148.08 6375.63 2182.37C6370.73 2203.6 6360.93 2226.46 6346.24 2250.95C6333.17 2277.08 6316.03 2299.94 6294.8 2319.54C6275.21 2340.76 6251.53 2356.28 6223.77 2366.07C6196.01 2377.51 6165.8 2379.14 6133.14 2370.97C6098.85 2361.18 6074.35 2328.52 6059.66 2273C6044.96 2219.11 6035.98 2141.54 6032.71 2040.3C6029.45 1940.69 6028.63 1818.22 6030.26 1672.89C6033.53 1525.92 6036.79 1356.1 6040.06 1163.41C5961.68 1160.14 5884.93 1156.88 5809.82 1153.61C5734.7 1150.35 5665.3 1147.9 5601.61 1146.26C5537.93 1143 5482.41 1142.18 5435.05 1143.81C5387.7 1143.81 5352.59 1146.26 5329.73 1151.16C5252.98 1169.12 5203.18 1174.02 5180.31 1165.86C5155.82 1156.06 5166.43 1127.48 5212.16 1080.13ZM6331.62 1361.81C6344.68 1355.28 6365.91 1346.3 6395.3 1334.87C6424.7 1321.81 6454.91 1310.37 6485.93 1300.58C6518.59 1290.78 6548.8 1284.25 6576.56 1280.98C6604.32 1277.72 6622.28 1280.98 6630.45 1290.78C6638.61 1300.58 6647.59 1323.44 6657.39 1359.36C6668.82 1395.29 6680.25 1432.85 6691.68 1472.04C6704.75 1511.23 6719.44 1547.15 6735.77 1579.81C6752.1 1610.84 6770.88 1627.17 6792.11 1628.8C6811.71 1630.43 6830.48 1627.17 6848.45 1619C6866.41 1610.84 6882.74 1600.22 6897.43 1587.16C6912.13 1574.1 6924.38 1561.03 6934.18 1547.97C6945.61 1533.27 6953.77 1521.02 6958.67 1511.23C6963.57 1501.43 6970.1 1496.53 6978.27 1496.53C6988.06 1494.9 6992.15 1500.61 6990.51 1513.68C6990.51 1525.11 6983.16 1544.7 6968.47 1572.46C6953.77 1600.22 6926.01 1636.96 6885.19 1682.69C6801.91 1775.76 6729.24 1830.47 6667.19 1846.8C6606.77 1863.13 6561.86 1850.06 6532.47 1807.61C6516.14 1784.75 6504.71 1751.27 6498.18 1707.18C6476.95 1730.04 6451.64 1752.9 6422.25 1775.76C6394.49 1798.63 6366.73 1816.59 6338.97 1829.65C6311.21 1842.72 6285.08 1848.43 6260.59 1846.8C6237.72 1846.8 6219.76 1835.37 6206.7 1812.51C6192 1784.75 6190.37 1755.35 6201.8 1724.33C6211.6 1691.67 6229.56 1659.83 6255.69 1628.8C6283.45 1596.14 6316.11 1564.3 6353.66 1533.27C6391.22 1502.25 6428.78 1474.49 6466.34 1449.99C6463.07 1418.97 6458.99 1399.37 6454.09 1391.21C6450.82 1386.31 6440.21 1389.57 6422.25 1401C6405.92 1410.8 6387.14 1423.05 6365.91 1437.74C6344.68 1450.81 6323.45 1462.24 6302.23 1472.04C6281 1481.83 6264.67 1483.47 6253.24 1476.94C6240.17 1470.4 6234.46 1462.24 6236.09 1452.44C6237.72 1441.01 6242.62 1429.58 6250.79 1418.15C6260.59 1406.72 6272.83 1396.1 6287.53 1386.31C6302.23 1376.51 6316.92 1368.34 6331.62 1361.81ZM6483.48 1609.2C6480.22 1592.87 6477.77 1577.36 6476.13 1562.66C6476.13 1546.34 6475.32 1530.82 6473.69 1516.13C6444.29 1538.99 6423.88 1562.66 6412.45 1587.16C6402.65 1610.02 6399.39 1626.35 6402.65 1636.15C6405.92 1647.58 6414.08 1653.29 6427.15 1653.29C6440.21 1651.66 6458.99 1636.96 6483.48 1609.2Z" variants={styles} initial="hidden"
      animate="visible"/>
        </g>
        </svg>             
    )
}


export default Aylogo;