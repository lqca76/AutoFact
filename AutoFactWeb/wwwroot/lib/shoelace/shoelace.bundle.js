/*! For license information please see shoelace.bundle.js.LICENSE.txt */
(()=>{"use strict";var t={56:(t,e,o)=>{t.exports=function(t){var e=o.nc;e&&t.setAttribute("nonce",e)}},72:t=>{var e=[];function o(t){for(var o=-1,i=0;i<e.length;i++)if(e[i].identifier===t){o=i;break}return o}function i(t,i){for(var r={},a=[],n=0;n<t.length;n++){var l=t[n],c=i.base?l[0]+i.base:l[0],d=r[c]||0,h="".concat(c," ").concat(d);r[c]=d+1;var u=o(h),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var f=s(p,i);i.byIndex=n,e.splice(n,0,{identifier:h,updater:f,references:1})}a.push(h)}return a}function s(t,e){var o=e.domAPI(e);return o.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;o.update(t=e)}else o.remove()}}t.exports=function(t,s){var r=i(t=t||[],s=s||{});return function(t){t=t||[];for(var a=0;a<r.length;a++){var n=o(r[a]);e[n].references--}for(var l=i(t,s),c=0;c<r.length;c++){var d=o(r[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=l}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o="",i=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),i&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),i&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o}).join("")},e.i=function(t,o,i,s,r){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(i)for(var n=0;n<this.length;n++){var l=this[n][0];null!=l&&(a[l]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);i&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),o&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=o):d[2]=o),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),e.push(d))}},e}},495:(t,e,o)=>{o.d(e,{A:()=>n});var i=o(601),s=o.n(i),r=o(314),a=o.n(r)()(s());a.push([t.id,':root,\n:host,\n.sl-theme-light {\n  color-scheme: light;\n\n  --sl-color-gray-50: hsl(0 0% 97.5%);\n  --sl-color-gray-100: hsl(240 4.8% 95.9%);\n  --sl-color-gray-200: hsl(240 5.9% 90%);\n  --sl-color-gray-300: hsl(240 4.9% 83.9%);\n  --sl-color-gray-400: hsl(240 5% 64.9%);\n  --sl-color-gray-500: hsl(240 3.8% 46.1%);\n  --sl-color-gray-600: hsl(240 5.2% 33.9%);\n  --sl-color-gray-700: hsl(240 5.3% 26.1%);\n  --sl-color-gray-800: hsl(240 3.7% 15.9%);\n  --sl-color-gray-900: hsl(240 5.9% 10%);\n  --sl-color-gray-950: hsl(240 7.3% 8%);\n\n  --sl-color-red-50: hsl(0 85.7% 97.3%);\n  --sl-color-red-100: hsl(0 93.3% 94.1%);\n  --sl-color-red-200: hsl(0 96.3% 89.4%);\n  --sl-color-red-300: hsl(0 93.5% 81.8%);\n  --sl-color-red-400: hsl(0 90.6% 70.8%);\n  --sl-color-red-500: hsl(0 84.2% 60.2%);\n  --sl-color-red-600: hsl(0 72.2% 50.6%);\n  --sl-color-red-700: hsl(0 73.7% 41.8%);\n  --sl-color-red-800: hsl(0 70% 35.3%);\n  --sl-color-red-900: hsl(0 62.8% 30.6%);\n  --sl-color-red-950: hsl(0 60% 19.6%);\n\n  --sl-color-orange-50: hsl(33.3 100% 96.5%);\n  --sl-color-orange-100: hsl(34.3 100% 91.8%);\n  --sl-color-orange-200: hsl(32.1 97.7% 83.1%);\n  --sl-color-orange-300: hsl(30.7 97.2% 72.4%);\n  --sl-color-orange-400: hsl(27 96% 61%);\n  --sl-color-orange-500: hsl(24.6 95% 53.1%);\n  --sl-color-orange-600: hsl(20.5 90.2% 48.2%);\n  --sl-color-orange-700: hsl(17.5 88.3% 40.4%);\n  --sl-color-orange-800: hsl(15 79.1% 33.7%);\n  --sl-color-orange-900: hsl(15.3 74.6% 27.8%);\n  --sl-color-orange-950: hsl(15.2 69.1% 19%);\n\n  --sl-color-amber-50: hsl(48 100% 96.1%);\n  --sl-color-amber-100: hsl(48 96.5% 88.8%);\n  --sl-color-amber-200: hsl(48 96.6% 76.7%);\n  --sl-color-amber-300: hsl(45.9 96.7% 64.5%);\n  --sl-color-amber-400: hsl(43.3 96.4% 56.3%);\n  --sl-color-amber-500: hsl(37.7 92.1% 50.2%);\n  --sl-color-amber-600: hsl(32.1 94.6% 43.7%);\n  --sl-color-amber-700: hsl(26 90.5% 37.1%);\n  --sl-color-amber-800: hsl(22.7 82.5% 31.4%);\n  --sl-color-amber-900: hsl(21.7 77.8% 26.5%);\n  --sl-color-amber-950: hsl(22.9 74.1% 16.7%);\n\n  --sl-color-yellow-50: hsl(54.5 91.7% 95.3%);\n  --sl-color-yellow-100: hsl(54.9 96.7% 88%);\n  --sl-color-yellow-200: hsl(52.8 98.3% 76.9%);\n  --sl-color-yellow-300: hsl(50.4 97.8% 63.5%);\n  --sl-color-yellow-400: hsl(47.9 95.8% 53.1%);\n  --sl-color-yellow-500: hsl(45.4 93.4% 47.5%);\n  --sl-color-yellow-600: hsl(40.6 96.1% 40.4%);\n  --sl-color-yellow-700: hsl(35.5 91.7% 32.9%);\n  --sl-color-yellow-800: hsl(31.8 81% 28.8%);\n  --sl-color-yellow-900: hsl(28.4 72.5% 25.7%);\n  --sl-color-yellow-950: hsl(33.1 69% 13.9%);\n\n  --sl-color-lime-50: hsl(78.3 92% 95.1%);\n  --sl-color-lime-100: hsl(79.6 89.1% 89.2%);\n  --sl-color-lime-200: hsl(80.9 88.5% 79.6%);\n  --sl-color-lime-300: hsl(82 84.5% 67.1%);\n  --sl-color-lime-400: hsl(82.7 78% 55.5%);\n  --sl-color-lime-500: hsl(83.7 80.5% 44.3%);\n  --sl-color-lime-600: hsl(84.8 85.2% 34.5%);\n  --sl-color-lime-700: hsl(85.9 78.4% 27.3%);\n  --sl-color-lime-800: hsl(86.3 69% 22.7%);\n  --sl-color-lime-900: hsl(87.6 61.2% 20.2%);\n  --sl-color-lime-950: hsl(86.5 60.6% 13.9%);\n\n  --sl-color-green-50: hsl(138.5 76.5% 96.7%);\n  --sl-color-green-100: hsl(140.6 84.2% 92.5%);\n  --sl-color-green-200: hsl(141 78.9% 85.1%);\n  --sl-color-green-300: hsl(141.7 76.6% 73.1%);\n  --sl-color-green-400: hsl(141.9 69.2% 58%);\n  --sl-color-green-500: hsl(142.1 70.6% 45.3%);\n  --sl-color-green-600: hsl(142.1 76.2% 36.3%);\n  --sl-color-green-700: hsl(142.4 71.8% 29.2%);\n  --sl-color-green-800: hsl(142.8 64.2% 24.1%);\n  --sl-color-green-900: hsl(143.8 61.2% 20.2%);\n  --sl-color-green-950: hsl(144.3 60.7% 12%);\n\n  --sl-color-emerald-50: hsl(151.8 81% 95.9%);\n  --sl-color-emerald-100: hsl(149.3 80.4% 90%);\n  --sl-color-emerald-200: hsl(152.4 76% 80.4%);\n  --sl-color-emerald-300: hsl(156.2 71.6% 66.9%);\n  --sl-color-emerald-400: hsl(158.1 64.4% 51.6%);\n  --sl-color-emerald-500: hsl(160.1 84.1% 39.4%);\n  --sl-color-emerald-600: hsl(161.4 93.5% 30.4%);\n  --sl-color-emerald-700: hsl(162.9 93.5% 24.3%);\n  --sl-color-emerald-800: hsl(163.1 88.1% 19.8%);\n  --sl-color-emerald-900: hsl(164.2 85.7% 16.5%);\n  --sl-color-emerald-950: hsl(164.3 87.5% 9.4%);\n\n  --sl-color-teal-50: hsl(166.2 76.5% 96.7%);\n  --sl-color-teal-100: hsl(167.2 85.5% 89.2%);\n  --sl-color-teal-200: hsl(168.4 83.8% 78.2%);\n  --sl-color-teal-300: hsl(170.6 76.9% 64.3%);\n  --sl-color-teal-400: hsl(172.5 66% 50.4%);\n  --sl-color-teal-500: hsl(173.4 80.4% 40%);\n  --sl-color-teal-600: hsl(174.7 83.9% 31.6%);\n  --sl-color-teal-700: hsl(175.3 77.4% 26.1%);\n  --sl-color-teal-800: hsl(176.1 69.4% 21.8%);\n  --sl-color-teal-900: hsl(175.9 60.8% 19%);\n  --sl-color-teal-950: hsl(176.5 58.6% 11.4%);\n\n  --sl-color-cyan-50: hsl(183.2 100% 96.3%);\n  --sl-color-cyan-100: hsl(185.1 95.9% 90.4%);\n  --sl-color-cyan-200: hsl(186.2 93.5% 81.8%);\n  --sl-color-cyan-300: hsl(187 92.4% 69%);\n  --sl-color-cyan-400: hsl(187.9 85.7% 53.3%);\n  --sl-color-cyan-500: hsl(188.7 94.5% 42.7%);\n  --sl-color-cyan-600: hsl(191.6 91.4% 36.5%);\n  --sl-color-cyan-700: hsl(192.9 82.3% 31%);\n  --sl-color-cyan-800: hsl(194.4 69.6% 27.1%);\n  --sl-color-cyan-900: hsl(196.4 63.6% 23.7%);\n  --sl-color-cyan-950: hsl(196.8 61% 16.1%);\n\n  --sl-color-sky-50: hsl(204 100% 97.1%);\n  --sl-color-sky-100: hsl(204 93.8% 93.7%);\n  --sl-color-sky-200: hsl(200.6 94.4% 86.1%);\n  --sl-color-sky-300: hsl(199.4 95.5% 73.9%);\n  --sl-color-sky-400: hsl(198.4 93.2% 59.6%);\n  --sl-color-sky-500: hsl(198.6 88.7% 48.4%);\n  --sl-color-sky-600: hsl(200.4 98% 39.4%);\n  --sl-color-sky-700: hsl(201.3 96.3% 32.2%);\n  --sl-color-sky-800: hsl(201 90% 27.5%);\n  --sl-color-sky-900: hsl(202 80.3% 23.9%);\n  --sl-color-sky-950: hsl(202.3 73.8% 16.5%);\n\n  --sl-color-blue-50: hsl(213.8 100% 96.9%);\n  --sl-color-blue-100: hsl(214.3 94.6% 92.7%);\n  --sl-color-blue-200: hsl(213.3 96.9% 87.3%);\n  --sl-color-blue-300: hsl(211.7 96.4% 78.4%);\n  --sl-color-blue-400: hsl(213.1 93.9% 67.8%);\n  --sl-color-blue-500: hsl(217.2 91.2% 59.8%);\n  --sl-color-blue-600: hsl(221.2 83.2% 53.3%);\n  --sl-color-blue-700: hsl(224.3 76.3% 48%);\n  --sl-color-blue-800: hsl(225.9 70.7% 40.2%);\n  --sl-color-blue-900: hsl(224.4 64.3% 32.9%);\n  --sl-color-blue-950: hsl(226.2 55.3% 18.4%);\n\n  --sl-color-indigo-50: hsl(225.9 100% 96.7%);\n  --sl-color-indigo-100: hsl(226.5 100% 93.9%);\n  --sl-color-indigo-200: hsl(228 96.5% 88.8%);\n  --sl-color-indigo-300: hsl(229.7 93.5% 81.8%);\n  --sl-color-indigo-400: hsl(234.5 89.5% 73.9%);\n  --sl-color-indigo-500: hsl(238.7 83.5% 66.7%);\n  --sl-color-indigo-600: hsl(243.4 75.4% 58.6%);\n  --sl-color-indigo-700: hsl(244.5 57.9% 50.6%);\n  --sl-color-indigo-800: hsl(243.7 54.5% 41.4%);\n  --sl-color-indigo-900: hsl(242.2 47.4% 34.3%);\n  --sl-color-indigo-950: hsl(243.5 43.6% 22.9%);\n\n  --sl-color-violet-50: hsl(250 100% 97.6%);\n  --sl-color-violet-100: hsl(251.4 91.3% 95.5%);\n  --sl-color-violet-200: hsl(250.5 95.2% 91.8%);\n  --sl-color-violet-300: hsl(252.5 94.7% 85.1%);\n  --sl-color-violet-400: hsl(255.1 91.7% 76.3%);\n  --sl-color-violet-500: hsl(258.3 89.5% 66.3%);\n  --sl-color-violet-600: hsl(262.1 83.3% 57.8%);\n  --sl-color-violet-700: hsl(263.4 70% 50.4%);\n  --sl-color-violet-800: hsl(263.4 69.3% 42.2%);\n  --sl-color-violet-900: hsl(263.5 67.4% 34.9%);\n  --sl-color-violet-950: hsl(265.1 61.5% 21.4%);\n\n  --sl-color-purple-50: hsl(270 100% 98%);\n  --sl-color-purple-100: hsl(268.7 100% 95.5%);\n  --sl-color-purple-200: hsl(268.6 100% 91.8%);\n  --sl-color-purple-300: hsl(269.2 97.4% 85.1%);\n  --sl-color-purple-400: hsl(270 95.2% 75.3%);\n  --sl-color-purple-500: hsl(270.7 91% 65.1%);\n  --sl-color-purple-600: hsl(271.5 81.3% 55.9%);\n  --sl-color-purple-700: hsl(272.1 71.7% 47.1%);\n  --sl-color-purple-800: hsl(272.9 67.2% 39.4%);\n  --sl-color-purple-900: hsl(273.6 65.6% 32%);\n  --sl-color-purple-950: hsl(276 59.5% 16.5%);\n\n  --sl-color-fuchsia-50: hsl(289.1 100% 97.8%);\n  --sl-color-fuchsia-100: hsl(287 100% 95.5%);\n  --sl-color-fuchsia-200: hsl(288.3 95.8% 90.6%);\n  --sl-color-fuchsia-300: hsl(291.1 93.1% 82.9%);\n  --sl-color-fuchsia-400: hsl(292 91.4% 72.5%);\n  --sl-color-fuchsia-500: hsl(292.2 84.1% 60.6%);\n  --sl-color-fuchsia-600: hsl(293.4 69.5% 48.8%);\n  --sl-color-fuchsia-700: hsl(294.7 72.4% 39.8%);\n  --sl-color-fuchsia-800: hsl(295.4 70.2% 32.9%);\n  --sl-color-fuchsia-900: hsl(296.7 63.6% 28%);\n  --sl-color-fuchsia-950: hsl(297.1 56.8% 14.5%);\n\n  --sl-color-pink-50: hsl(327.3 73.3% 97.1%);\n  --sl-color-pink-100: hsl(325.7 77.8% 94.7%);\n  --sl-color-pink-200: hsl(325.9 84.6% 89.8%);\n  --sl-color-pink-300: hsl(327.4 87.1% 81.8%);\n  --sl-color-pink-400: hsl(328.6 85.5% 70.2%);\n  --sl-color-pink-500: hsl(330.4 81.2% 60.4%);\n  --sl-color-pink-600: hsl(333.3 71.4% 50.6%);\n  --sl-color-pink-700: hsl(335.1 77.6% 42%);\n  --sl-color-pink-800: hsl(335.8 74.4% 35.3%);\n  --sl-color-pink-900: hsl(335.9 69% 30.4%);\n  --sl-color-pink-950: hsl(336.2 65.4% 15.9%);\n\n  --sl-color-rose-50: hsl(355.7 100% 97.3%);\n  --sl-color-rose-100: hsl(355.6 100% 94.7%);\n  --sl-color-rose-200: hsl(352.7 96.1% 90%);\n  --sl-color-rose-300: hsl(352.6 95.7% 81.8%);\n  --sl-color-rose-400: hsl(351.3 94.5% 71.4%);\n  --sl-color-rose-500: hsl(349.7 89.2% 60.2%);\n  --sl-color-rose-600: hsl(346.8 77.2% 49.8%);\n  --sl-color-rose-700: hsl(345.3 82.7% 40.8%);\n  --sl-color-rose-800: hsl(343.4 79.7% 34.7%);\n  --sl-color-rose-900: hsl(341.5 75.5% 30.4%);\n  --sl-color-rose-950: hsl(341.3 70.1% 17.1%);\n\n  --sl-color-primary-50: var(--sl-color-sky-50);\n  --sl-color-primary-100: var(--sl-color-sky-100);\n  --sl-color-primary-200: var(--sl-color-sky-200);\n  --sl-color-primary-300: var(--sl-color-sky-300);\n  --sl-color-primary-400: var(--sl-color-sky-400);\n  --sl-color-primary-500: var(--sl-color-sky-500);\n  --sl-color-primary-600: var(--sl-color-sky-600);\n  --sl-color-primary-700: var(--sl-color-sky-700);\n  --sl-color-primary-800: var(--sl-color-sky-800);\n  --sl-color-primary-900: var(--sl-color-sky-900);\n  --sl-color-primary-950: var(--sl-color-sky-950);\n\n  --sl-color-success-50: var(--sl-color-green-50);\n  --sl-color-success-100: var(--sl-color-green-100);\n  --sl-color-success-200: var(--sl-color-green-200);\n  --sl-color-success-300: var(--sl-color-green-300);\n  --sl-color-success-400: var(--sl-color-green-400);\n  --sl-color-success-500: var(--sl-color-green-500);\n  --sl-color-success-600: var(--sl-color-green-600);\n  --sl-color-success-700: var(--sl-color-green-700);\n  --sl-color-success-800: var(--sl-color-green-800);\n  --sl-color-success-900: var(--sl-color-green-900);\n  --sl-color-success-950: var(--sl-color-green-950);\n\n  --sl-color-warning-50: var(--sl-color-amber-50);\n  --sl-color-warning-100: var(--sl-color-amber-100);\n  --sl-color-warning-200: var(--sl-color-amber-200);\n  --sl-color-warning-300: var(--sl-color-amber-300);\n  --sl-color-warning-400: var(--sl-color-amber-400);\n  --sl-color-warning-500: var(--sl-color-amber-500);\n  --sl-color-warning-600: var(--sl-color-amber-600);\n  --sl-color-warning-700: var(--sl-color-amber-700);\n  --sl-color-warning-800: var(--sl-color-amber-800);\n  --sl-color-warning-900: var(--sl-color-amber-900);\n  --sl-color-warning-950: var(--sl-color-amber-950);\n\n  --sl-color-danger-50: var(--sl-color-red-50);\n  --sl-color-danger-100: var(--sl-color-red-100);\n  --sl-color-danger-200: var(--sl-color-red-200);\n  --sl-color-danger-300: var(--sl-color-red-300);\n  --sl-color-danger-400: var(--sl-color-red-400);\n  --sl-color-danger-500: var(--sl-color-red-500);\n  --sl-color-danger-600: var(--sl-color-red-600);\n  --sl-color-danger-700: var(--sl-color-red-700);\n  --sl-color-danger-800: var(--sl-color-red-800);\n  --sl-color-danger-900: var(--sl-color-red-900);\n  --sl-color-danger-950: var(--sl-color-red-950);\n\n  --sl-color-neutral-50: var(--sl-color-gray-50);\n  --sl-color-neutral-100: var(--sl-color-gray-100);\n  --sl-color-neutral-200: var(--sl-color-gray-200);\n  --sl-color-neutral-300: var(--sl-color-gray-300);\n  --sl-color-neutral-400: var(--sl-color-gray-400);\n  --sl-color-neutral-500: var(--sl-color-gray-500);\n  --sl-color-neutral-600: var(--sl-color-gray-600);\n  --sl-color-neutral-700: var(--sl-color-gray-700);\n  --sl-color-neutral-800: var(--sl-color-gray-800);\n  --sl-color-neutral-900: var(--sl-color-gray-900);\n  --sl-color-neutral-950: var(--sl-color-gray-950);\n\n  --sl-color-neutral-0: hsl(0, 0%, 100%);\n  --sl-color-neutral-1000: hsl(0, 0%, 0%);\n\n  --sl-border-radius-small: 0.1875rem;\n  --sl-border-radius-medium: 0.25rem;\n  --sl-border-radius-large: 0.5rem;\n  --sl-border-radius-x-large: 1rem;\n\n  --sl-border-radius-circle: 50%;\n  --sl-border-radius-pill: 9999px;\n\n  --sl-shadow-x-small: 0 1px 2px hsl(240 3.8% 46.1% / 6%);\n  --sl-shadow-small: 0 1px 2px hsl(240 3.8% 46.1% / 12%);\n  --sl-shadow-medium: 0 2px 4px hsl(240 3.8% 46.1% / 12%);\n  --sl-shadow-large: 0 2px 8px hsl(240 3.8% 46.1% / 12%);\n  --sl-shadow-x-large: 0 4px 16px hsl(240 3.8% 46.1% / 12%);\n\n  --sl-spacing-3x-small: 0.125rem;\n  --sl-spacing-2x-small: 0.25rem;\n  --sl-spacing-x-small: 0.5rem;\n  --sl-spacing-small: 0.75rem;\n  --sl-spacing-medium: 1rem;\n  --sl-spacing-large: 1.25rem;\n  --sl-spacing-x-large: 1.75rem;\n  --sl-spacing-2x-large: 2.25rem;\n  --sl-spacing-3x-large: 3rem;\n  --sl-spacing-4x-large: 4.5rem;\n\n  --sl-transition-x-slow: 1000ms;\n  --sl-transition-slow: 500ms;\n  --sl-transition-medium: 250ms;\n  --sl-transition-fast: 150ms;\n  --sl-transition-x-fast: 50ms;\n\n  --sl-font-mono: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;\n  --sl-font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",\n    "Segoe UI Symbol";\n  --sl-font-serif: Georgia, "Times New Roman", serif;\n\n  --sl-font-size-2x-small: 0.625rem;\n  --sl-font-size-x-small: 0.75rem;\n  --sl-font-size-small: 0.875rem;\n  --sl-font-size-medium: 1rem;\n  --sl-font-size-large: 1.25rem;\n  --sl-font-size-x-large: 1.5rem;\n  --sl-font-size-2x-large: 2.25rem;\n  --sl-font-size-3x-large: 3rem;\n  --sl-font-size-4x-large: 4.5rem;\n\n  --sl-font-weight-light: 300;\n  --sl-font-weight-normal: 400;\n  --sl-font-weight-semibold: 500;\n  --sl-font-weight-bold: 700;\n\n  --sl-letter-spacing-denser: -0.03em;\n  --sl-letter-spacing-dense: -0.015em;\n  --sl-letter-spacing-normal: normal;\n  --sl-letter-spacing-loose: 0.075em;\n  --sl-letter-spacing-looser: 0.15em;\n\n  --sl-line-height-denser: 1;\n  --sl-line-height-dense: 1.4;\n  --sl-line-height-normal: 1.8;\n  --sl-line-height-loose: 2.2;\n  --sl-line-height-looser: 2.6;\n\n  --sl-focus-ring-color: var(--sl-color-primary-600);\n  --sl-focus-ring-style: solid;\n  --sl-focus-ring-width: 3px;\n  --sl-focus-ring: var(--sl-focus-ring-style) var(--sl-focus-ring-width)\n    var(--sl-focus-ring-color);\n  --sl-focus-ring-offset: 1px;\n\n  --sl-button-font-size-small: var(--sl-font-size-x-small);\n  --sl-button-font-size-medium: var(--sl-font-size-small);\n  --sl-button-font-size-large: var(--sl-font-size-medium);\n\n  --sl-input-height-small: 1.875rem;\n  --sl-input-height-medium: 2.5rem;\n  --sl-input-height-large: 3.125rem;\n\n  --sl-input-background-color: var(--sl-color-neutral-0);\n  --sl-input-background-color-hover: var(--sl-input-background-color);\n  --sl-input-background-color-focus: var(--sl-input-background-color);\n  --sl-input-background-color-disabled: var(--sl-color-neutral-100);\n  --sl-input-border-color: var(--sl-color-neutral-300);\n  --sl-input-border-color-hover: var(--sl-color-neutral-400);\n  --sl-input-border-color-focus: var(--sl-color-primary-500);\n  --sl-input-border-color-disabled: var(--sl-color-neutral-300);\n  --sl-input-border-width: 1px;\n  --sl-input-required-content: "*";\n  --sl-input-required-content-offset: -2px;\n  --sl-input-required-content-color: var(--sl-input-label-color);\n\n  --sl-input-border-radius-small: var(--sl-border-radius-medium);\n  --sl-input-border-radius-medium: var(--sl-border-radius-medium);\n  --sl-input-border-radius-large: var(--sl-border-radius-medium);\n\n  --sl-input-font-family: var(--sl-font-sans);\n  --sl-input-font-weight: var(--sl-font-weight-normal);\n  --sl-input-font-size-small: var(--sl-font-size-small);\n  --sl-input-font-size-medium: var(--sl-font-size-medium);\n  --sl-input-font-size-large: var(--sl-font-size-large);\n  --sl-input-letter-spacing: var(--sl-letter-spacing-normal);\n\n  --sl-input-color: var(--sl-color-neutral-700);\n  --sl-input-color-hover: var(--sl-color-neutral-700);\n  --sl-input-color-focus: var(--sl-color-neutral-700);\n  --sl-input-color-disabled: var(--sl-color-neutral-900);\n  --sl-input-icon-color: var(--sl-color-neutral-500);\n  --sl-input-icon-color-hover: var(--sl-color-neutral-600);\n  --sl-input-icon-color-focus: var(--sl-color-neutral-600);\n  --sl-input-placeholder-color: var(--sl-color-neutral-500);\n  --sl-input-placeholder-color-disabled: var(--sl-color-neutral-600);\n  --sl-input-spacing-small: var(--sl-spacing-small);\n  --sl-input-spacing-medium: var(--sl-spacing-medium);\n  --sl-input-spacing-large: var(--sl-spacing-large);\n\n  --sl-input-focus-ring-color: hsl(198.6 88.7% 48.4% / 40%);\n  --sl-input-focus-ring-offset: 0;\n\n  --sl-input-filled-background-color: var(--sl-color-neutral-100);\n  --sl-input-filled-background-color-hover: var(--sl-color-neutral-100);\n  --sl-input-filled-background-color-focus: var(--sl-color-neutral-100);\n  --sl-input-filled-background-color-disabled: var(--sl-color-neutral-100);\n  --sl-input-filled-color: var(--sl-color-neutral-800);\n  --sl-input-filled-color-hover: var(--sl-color-neutral-800);\n  --sl-input-filled-color-focus: var(--sl-color-neutral-700);\n  --sl-input-filled-color-disabled: var(--sl-color-neutral-800);\n\n  --sl-input-label-font-size-small: var(--sl-font-size-small);\n  --sl-input-label-font-size-medium: var(--sl-font-size-medium);\n  --sl-input-label-font-size-large: var(--sl-font-size-large);\n  --sl-input-label-color: inherit;\n\n  --sl-input-help-text-font-size-small: var(--sl-font-size-x-small);\n  --sl-input-help-text-font-size-medium: var(--sl-font-size-small);\n  --sl-input-help-text-font-size-large: var(--sl-font-size-medium);\n  --sl-input-help-text-color: var(--sl-color-neutral-500);\n\n  --sl-toggle-size-small: 0.875rem;\n  --sl-toggle-size-medium: 1.125rem;\n  --sl-toggle-size-large: 1.375rem;\n\n  --sl-overlay-background-color: hsl(240 3.8% 46.1% / 33%);\n\n  --sl-panel-background-color: var(--sl-color-neutral-0);\n  --sl-panel-border-color: var(--sl-color-neutral-200);\n  --sl-panel-border-width: 1px;\n\n  --sl-tooltip-border-radius: var(--sl-border-radius-medium);\n  --sl-tooltip-background-color: var(--sl-color-neutral-800);\n  --sl-tooltip-color: var(--sl-color-neutral-0);\n  --sl-tooltip-font-family: var(--sl-font-sans);\n  --sl-tooltip-font-weight: var(--sl-font-weight-normal);\n  --sl-tooltip-font-size: var(--sl-font-size-small);\n  --sl-tooltip-line-height: var(--sl-line-height-dense);\n  --sl-tooltip-padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-small);\n  --sl-tooltip-arrow-size: 6px;\n\n  --sl-z-index-drawer: 700;\n  --sl-z-index-dialog: 800;\n  --sl-z-index-dropdown: 900;\n  --sl-z-index-toast: 950;\n  --sl-z-index-tooltip: 1000;\n}\n\n@supports (scrollbar-gutter: stable) {\n  .sl-scroll-lock {\n    scrollbar-gutter: var(--sl-scroll-lock-gutter) !important;\n  }\n\n  .sl-scroll-lock body {\n    overflow: hidden !important;\n  }\n}\n\n@supports not (scrollbar-gutter: stable) {\n  .sl-scroll-lock body {\n    padding-right: var(--sl-scroll-lock-size) !important;\n    overflow: hidden !important;\n  }\n}\n\n.sl-toast-stack {\n  position: fixed;\n  top: 0;\n  inset-inline-end: 0;\n  z-index: var(--sl-z-index-toast);\n  width: 28rem;\n  max-width: 100%;\n  max-height: 100%;\n  overflow: auto;\n}\n\n.sl-toast-stack sl-alert {\n  margin: var(--sl-spacing-medium);\n}\n\n.sl-toast-stack sl-alert::part(base) {\n  box-shadow: var(--sl-shadow-large);\n}\n',""]);const n=a},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},601:t=>{t.exports=function(t){return t[1]}},659:t=>{var e={};t.exports=function(t,o){var i=function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(o)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(o){!function(t,e,o){var i="";o.supports&&(i+="@supports (".concat(o.supports,") {")),o.media&&(i+="@media ".concat(o.media," {"));var s=void 0!==o.layer;s&&(i+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),i+=o.css,s&&(i+="}"),o.media&&(i+="}"),o.supports&&(i+="}");var r=o.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,o)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}}},e={};function o(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={id:i,exports:{}};return t[i](r,r.exports,o),r.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.nc=void 0;var i={};o.r(i),o.d(i,{backInDown:()=>Ka,backInLeft:()=>Xa,backInRight:()=>Ya,backInUp:()=>Ga,backOutDown:()=>Qa,backOutLeft:()=>Za,backOutRight:()=>Ja,backOutUp:()=>tn,bounce:()=>Oa,bounceIn:()=>en,bounceInDown:()=>on,bounceInLeft:()=>sn,bounceInRight:()=>rn,bounceInUp:()=>an,bounceOut:()=>nn,bounceOutDown:()=>ln,bounceOutLeft:()=>cn,bounceOutRight:()=>dn,bounceOutUp:()=>hn,easings:()=>$l,fadeIn:()=>un,fadeInBottomLeft:()=>pn,fadeInBottomRight:()=>fn,fadeInDown:()=>mn,fadeInDownBig:()=>bn,fadeInLeft:()=>gn,fadeInLeftBig:()=>vn,fadeInRight:()=>yn,fadeInRightBig:()=>wn,fadeInTopLeft:()=>_n,fadeInTopRight:()=>xn,fadeInUp:()=>kn,fadeInUpBig:()=>Cn,fadeOut:()=>$n,fadeOutBottomLeft:()=>zn,fadeOutBottomRight:()=>Sn,fadeOutDown:()=>An,fadeOutDownBig:()=>En,fadeOutLeft:()=>Tn,fadeOutLeftBig:()=>Dn,fadeOutRight:()=>In,fadeOutRightBig:()=>Ln,fadeOutTopLeft:()=>On,fadeOutTopRight:()=>Mn,fadeOutUp:()=>Pn,fadeOutUpBig:()=>Fn,flash:()=>Ma,flip:()=>Rn,flipInX:()=>Vn,flipInY:()=>Bn,flipOutX:()=>Nn,flipOutY:()=>Hn,headShake:()=>Pa,heartBeat:()=>Fa,hinge:()=>hl,jackInTheBox:()=>ul,jello:()=>Ra,lightSpeedInLeft:()=>Un,lightSpeedInRight:()=>qn,lightSpeedOutLeft:()=>jn,lightSpeedOutRight:()=>Wn,pulse:()=>Va,rollIn:()=>pl,rollOut:()=>fl,rotateIn:()=>Kn,rotateInDownLeft:()=>Xn,rotateInDownRight:()=>Yn,rotateInUpLeft:()=>Gn,rotateInUpRight:()=>Qn,rotateOut:()=>Zn,rotateOutDownLeft:()=>Jn,rotateOutDownRight:()=>tl,rotateOutUpLeft:()=>el,rotateOutUpRight:()=>ol,rubberBand:()=>Ba,shake:()=>Na,shakeX:()=>Ha,shakeY:()=>Ua,slideInDown:()=>il,slideInLeft:()=>sl,slideInRight:()=>rl,slideInUp:()=>al,slideOutDown:()=>nl,slideOutLeft:()=>ll,slideOutRight:()=>cl,slideOutUp:()=>dl,swing:()=>qa,tada:()=>ja,wobble:()=>Wa,zoomIn:()=>ml,zoomInDown:()=>bl,zoomInLeft:()=>gl,zoomInRight:()=>vl,zoomInUp:()=>yl,zoomOut:()=>wl,zoomOutDown:()=>_l,zoomOutLeft:()=>xl,zoomOutRight:()=>kl,zoomOutUp:()=>Cl});var s=Object.defineProperty,r=Object.defineProperties,a=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),u=t=>{throw TypeError(t)},p=(t,e,o)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,f=(t,e)=>{for(var o in e||(e={}))c.call(e,o)&&p(t,o,e[o]);if(l)for(var o of l(e))d.call(e,o)&&p(t,o,e[o]);return t},m=(t,e)=>r(t,n(e)),b=(t,e,o,i)=>{for(var r,n=i>1?void 0:i?a(e,o):e,l=t.length-1;l>=0;l--)(r=t[l])&&(n=(i?r(e,o,n):r(n))||n);return i&&n&&s(e,o,n),n},g=(t,e,o)=>e.has(t)||u("Cannot "+o),v=function(t,e){this[0]=t,this[1]=e},y=new WeakMap,w=new WeakMap,_=new WeakMap,x=new WeakSet,k=new WeakMap,C=class{constructor(t,e){this.handleFormData=t=>{const e=this.options.disabled(this.host),o=this.options.name(this.host),i=this.options.value(this.host),s="sl-button"===this.host.tagName.toLowerCase();this.host.isConnected&&!e&&!s&&"string"==typeof o&&o.length>0&&void 0!==i&&(Array.isArray(i)?i.forEach(e=>{t.formData.append(o,e.toString())}):t.formData.append(o,i.toString()))},this.handleFormSubmit=t=>{var e;const o=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(e=y.get(this.form))||e.forEach(t=>{this.setUserInteracted(t,!0)})),!this.form||this.form.noValidate||o||i(this.host)||(t.preventDefault(),t.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),k.set(this.host,[])},this.handleInteraction=t=>{const e=k.get(this.host);e.includes(t.type)||e.push(t.type),e.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.checkValidity&&!e.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=f({form:t=>{const e=t.form;if(e){const o=t.getRootNode().querySelector(`#${e}`);if(o)return o}return t.closest("form")},name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>{var e;return null!=(e=t.disabled)&&e},reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),checkValidity:t=>"function"!=typeof t.checkValidity||t.checkValidity(),setValue:(t,e)=>t.value=e,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),k.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),k.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,y.has(this.form)?y.get(this.form).add(this.host):y.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),w.has(this.form)||(w.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),_.has(this.form)||(_.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=y.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),w.has(this.form)&&(this.form.reportValidity=w.get(this.form),w.delete(this.form)),_.has(this.form)&&(this.form.checkValidity=_.get(this.form),_.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?x.add(t):x.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(t=>{e.hasAttribute(t)&&o.setAttribute(t,e.getAttribute(t))})),this.form.append(o),o.click(),o.remove()}}getForm(){var t;return null!=(t=this.form)?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,o=Boolean(x.has(e)),i=Boolean(e.required);e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||null==t||t.preventDefault()}},$=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),z=Object.freeze(m(f({},$),{valid:!1,valueMissing:!0})),S=Object.freeze(m(f({},$),{valid:!1,customError:!0}));const A=globalThis,E=A.ShadowRoot&&(void 0===A.ShadyCSS||A.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,T=Symbol(),D=new WeakMap;class I{constructor(t,e,o){if(this._$cssResult$=!0,o!==T)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(E&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=D.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&D.set(e,t))}return t}toString(){return this.cssText}}const L=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,o,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1],t[0]);return new I(o,t,T)},O=(t,e)=>{if(E)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const o of e){const e=document.createElement("style"),i=A.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=o.cssText,t.appendChild(e)}},M=E?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new I("string"==typeof t?t:t+"",void 0,T))(e)})(t):t,{is:P,defineProperty:F,getOwnPropertyDescriptor:R,getOwnPropertyNames:V,getOwnPropertySymbols:B,getPrototypeOf:N}=Object,H=globalThis,U=H.trustedTypes,q=U?U.emptyScript:"",j=H.reactiveElementPolyfillSupport,W=(t,e)=>t,K={toAttribute(t,e){switch(e){case Boolean:t=t?q:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},X=(t,e)=>!P(t,e),Y={attribute:!0,type:String,converter:K,reflect:!1,useDefault:!1,hasChanged:X};Symbol.metadata??=Symbol("metadata"),H.litPropertyMetadata??=new WeakMap;class G extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(t,o,e);void 0!==i&&F(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){const{get:i,set:s}=R(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const r=i?.call(this);s?.call(this,e),this.requestUpdate(t,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Y}static _$Ei(){if(this.hasOwnProperty(W("elementProperties")))return;const t=N(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(W("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(W("properties"))){const t=this.properties,e=[...V(t),...B(t)];for(const o of e)this.createProperty(o,t[o])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,o]of e)this.elementProperties.set(t,o)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const o=this._$Eu(t,e);void 0!==o&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(M(t))}else void 0!==t&&e.push(M(t));return e}static _$Eu(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return O(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ET(t,e){const o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(void 0!==i&&!0===o.reflect){const s=(void 0!==o.converter?.toAttribute?o.converter:K).toAttribute(e,o.type);this._$Em=t,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,e){const o=this.constructor,i=o._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=o.getPropertyOptions(i),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:K;this._$Em=i;const r=s.fromAttribute(e,t.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(t,e,o){if(void 0!==t){const i=this.constructor,s=this[t];if(o??=i.getPropertyOptions(t),!((o.hasChanged??X)(s,e)||o.useDefault&&o.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,o))))return;this.C(t,e,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:o,reflect:i,wrapped:s},r){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==s||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||o||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,o]of t){const{wrapped:t}=o,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,o,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}}G.elementStyles=[],G.shadowRootOptions={mode:"open"},G[W("elementProperties")]=new Map,G[W("finalized")]=new Map,j?.({ReactiveElement:G}),(H.reactiveElementVersions??=[]).push("2.1.1");const Q=globalThis,Z=Q.trustedTypes,J=Z?Z.createPolicy("lit-html",{createHTML:t=>t}):void 0,tt="$lit$",et=`lit$${Math.random().toFixed(9).slice(2)}$`,ot="?"+et,it=`<${ot}>`,st=document,rt=()=>st.createComment(""),at=t=>null===t||"object"!=typeof t&&"function"!=typeof t,nt=Array.isArray,lt=t=>nt(t)||"function"==typeof t?.[Symbol.iterator],ct="[ \t\n\f\r]",dt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ht=/-->/g,ut=/>/g,pt=RegExp(`>|${ct}(?:([^\\s"'>=/]+)(${ct}*=${ct}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ft=/'/g,mt=/"/g,bt=/^(?:script|style|textarea|title)$/i,gt=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),vt=gt(1),yt=gt(2),wt=gt(3),_t=Symbol.for("lit-noChange"),xt=Symbol.for("lit-nothing"),kt=new WeakMap,Ct=st.createTreeWalker(st,129);function $t(t,e){if(!nt(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==J?J.createHTML(e):e}const zt=(t,e)=>{const o=t.length-1,i=[];let s,r=2===e?"<svg>":3===e?"<math>":"",a=dt;for(let e=0;e<o;e++){const o=t[e];let n,l,c=-1,d=0;for(;d<o.length&&(a.lastIndex=d,l=a.exec(o),null!==l);)d=a.lastIndex,a===dt?"!--"===l[1]?a=ht:void 0!==l[1]?a=ut:void 0!==l[2]?(bt.test(l[2])&&(s=RegExp("</"+l[2],"g")),a=pt):void 0!==l[3]&&(a=pt):a===pt?">"===l[0]?(a=s??dt,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,n=l[1],a=void 0===l[3]?pt:'"'===l[3]?mt:ft):a===mt||a===ft?a=pt:a===ht||a===ut?a=dt:(a=pt,s=void 0);const h=a===pt&&t[e+1].startsWith("/>")?" ":"";r+=a===dt?o+it:c>=0?(i.push(n),o.slice(0,c)+tt+o.slice(c)+et+h):o+et+(-2===c?e:h)}return[$t(t,r+(t[o]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class St{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let s=0,r=0;const a=t.length-1,n=this.parts,[l,c]=zt(t,e);if(this.el=St.createElement(l,o),Ct.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=Ct.nextNode())&&n.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(tt)){const e=c[r++],o=i.getAttribute(t).split(et),a=/([.?@])?(.*)/.exec(e);n.push({type:1,index:s,name:a[2],strings:o,ctor:"."===a[1]?It:"?"===a[1]?Lt:"@"===a[1]?Ot:Dt}),i.removeAttribute(t)}else t.startsWith(et)&&(n.push({type:6,index:s}),i.removeAttribute(t));if(bt.test(i.tagName)){const t=i.textContent.split(et),e=t.length-1;if(e>0){i.textContent=Z?Z.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],rt()),Ct.nextNode(),n.push({type:2,index:++s});i.append(t[e],rt())}}}else if(8===i.nodeType)if(i.data===ot)n.push({type:2,index:s});else{let t=-1;for(;-1!==(t=i.data.indexOf(et,t+1));)n.push({type:7,index:s}),t+=et.length-1}s++}}static createElement(t,e){const o=st.createElement("template");return o.innerHTML=t,o}}function At(t,e,o=t,i){if(e===_t)return e;let s=void 0!==i?o._$Co?.[i]:o._$Cl;const r=at(e)?void 0:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(t),s._$AT(t,o,i)),void 0!==i?(o._$Co??=[])[i]=s:o._$Cl=s),void 0!==s&&(e=At(t,s._$AS(t,e.values),s,i)),e}class Et{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,i=(t?.creationScope??st).importNode(e,!0);Ct.currentNode=i;let s=Ct.nextNode(),r=0,a=0,n=o[0];for(;void 0!==n;){if(r===n.index){let e;2===n.type?e=new Tt(s,s.nextSibling,this,t):1===n.type?e=new n.ctor(s,n.name,n.strings,this,t):6===n.type&&(e=new Mt(s,this,t)),this._$AV.push(e),n=o[++a]}r!==n?.index&&(s=Ct.nextNode(),r++)}return Ct.currentNode=st,i}p(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class Tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,i){this.type=2,this._$AH=xt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=At(this,t,e),at(t)?t===xt||null==t||""===t?(this._$AH!==xt&&this._$AR(),this._$AH=xt):t!==this._$AH&&t!==_t&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):lt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==xt&&at(this._$AH)?this._$AA.nextSibling.data=t:this.T(st.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:o}=t,i="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=St.createElement($t(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Et(i,this),o=t.u(this.options);t.p(e),this.T(o),this._$AH=t}}_$AC(t){let e=kt.get(t.strings);return void 0===e&&kt.set(t.strings,e=new St(t)),e}k(t){nt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const s of t)i===e.length?e.push(o=new Tt(this.O(rt()),this.O(rt()),this,this.options)):o=e[i],o._$AI(s),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Dt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,i,s){this.type=1,this._$AH=xt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=xt}_$AI(t,e=this,o,i){const s=this.strings;let r=!1;if(void 0===s)t=At(this,t,e,0),r=!at(t)||t!==this._$AH&&t!==_t,r&&(this._$AH=t);else{const i=t;let a,n;for(t=s[0],a=0;a<s.length-1;a++)n=At(this,i[o+a],e,a),n===_t&&(n=this._$AH[a]),r||=!at(n)||n!==this._$AH[a],n===xt?t=xt:t!==xt&&(t+=(n??"")+s[a+1]),this._$AH[a]=n}r&&!i&&this.j(t)}j(t){t===xt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class It extends Dt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===xt?void 0:t}}class Lt extends Dt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==xt)}}class Ot extends Dt{constructor(t,e,o,i,s){super(t,e,o,i,s),this.type=5}_$AI(t,e=this){if((t=At(this,t,e,0)??xt)===_t)return;const o=this._$AH,i=t===xt&&o!==xt||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==xt&&(o===xt||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Mt{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){At(this,t)}}const Pt={M:tt,P:et,A:ot,C:1,L:zt,R:Et,D:lt,V:At,I:Tt,H:Dt,N:Lt,U:Ot,B:It,F:Mt},Ft=Q.litHtmlPolyfillSupport;Ft?.(St,Tt),(Q.litHtmlVersions??=[]).push("3.3.1");const Rt=globalThis;class Vt extends G{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{const i=o?.renderBefore??e;let s=i._$litPart$;if(void 0===s){const t=o?.renderBefore??null;i._$litPart$=s=new Tt(e.insertBefore(rt(),t),t,void 0,o??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return _t}}Vt._$litElement$=!0,Vt.finalized=!0,Rt.litElementHydrateSupport?.({LitElement:Vt});const Bt=Rt.litElementPolyfillSupport;Bt?.({LitElement:Vt}),(Rt.litElementVersions??=[]).push("4.2.1");var Nt=L`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,Ht=L`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,Ut=(t="value")=>(e,o)=>{const i=e.constructor,s=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(e,r,a){var n;const l=i.getPropertyOptions(t);if(e===("string"==typeof l.attribute?l.attribute:t)){const e=l.converter||K,i=("function"==typeof e?e:null!=(n=null==e?void 0:e.fromAttribute)?n:K.fromAttribute)(a,l.type);this[t]!==i&&(this[o]=i)}s.call(this,e,r,a)}},qt=L`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,jt=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=t=>{const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},Wt="";function Kt(t){Wt=t}var Xt={name:"default",resolver:t=>function(t=""){if(!Wt){const t=[...document.getElementsByTagName("script")],e=t.find(t=>t.hasAttribute("data-shoelace"));if(e)Kt(e.getAttribute("data-shoelace"));else{const e=t.find(t=>/shoelace(\.min)?\.js($|\?)/.test(t.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(t.src));let o="";e&&(o=e.getAttribute("src")),Kt(o.split("/").slice(0,-1).join("/"))}}return Wt.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}(`assets/icons/${t}.svg`)},Yt={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',copy:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},Gt=[Xt,{name:"system",resolver:t=>t in Yt?`data:image/svg+xml,${encodeURIComponent(Yt[t])}`:""}],Qt=[];function Zt(t){return Gt.find(e=>e.name===t)}var Jt=L`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function te(t,e){const o=f({waitUntilFirstUpdate:!1},e);return(e,i)=>{const{update:s}=e,r=Array.isArray(t)?t:[t];e.update=function(t){r.forEach(e=>{const s=e;if(t.has(s)){const e=t.get(s),r=this[s];e!==r&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[i](e,r))}}),s.call(this,t)}}}var ee=L`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;const oe={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:X},ie=(t=oe,e,o)=>{const{kind:i,metadata:s}=o;let r=globalThis.litPropertyMetadata.get(s);if(void 0===r&&globalThis.litPropertyMetadata.set(s,r=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),r.set(o.name,t),"accessor"===i){const{name:i}=o;return{set(o){const s=e.get.call(this);e.set.call(this,o),this.requestUpdate(i,s,t)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=o;return function(o){const s=this[i];e.call(this,o),this.requestUpdate(i,s,t)}}throw Error("Unsupported decorator location: "+i)};function se(t){return(e,o)=>"object"==typeof o?ie(t,e,o):((t,e,o)=>{const i=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),i?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}function re(t){return se({...t,state:!0,attribute:!1})}function ae(t){return(e,o)=>{const i="function"==typeof e?e:e[o];Object.assign(i,t)}}const ne=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,o),o);function le(t,e){return(o,i,s)=>{const r=e=>e.renderRoot?.querySelector(t)??null;if(e){const{get:t,set:e}="object"==typeof i?o:s??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return ne(o,i,{get(){let o=t.call(this);return void 0===o&&(o=r(this),(null!==o||this.hasUpdated)&&e.call(this,o)),o}})}return ne(o,i,{get(){return r(this)}})}}var ce,de=class extends Vt{constructor(){var t,e;super(),t=this,(e=ce).has(t)?u("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,false),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const o=new CustomEvent(t,f({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}static define(t,e=this,o={}){const i=customElements.get(t);if(!i){try{customElements.define(t,e,o)}catch(i){customElements.define(t,class extends e{},o)}return}let s=" (unknown version)",r=s;"version"in e&&e.version&&(s=" v"+e.version),"version"in i&&i.version&&(r=" v"+i.version),s&&r&&s===r||console.warn(`Attempted to register <${t}>${s}, but <${t}>${r} has already been registered.`)}attributeChangedCallback(t,e,o){var i;g(this,i=ce,"read from private field"),i.get(this)||(this.constructor.elementProperties.forEach((t,e)=>{t.reflect&&null!=this[e]&&this.initialReflectedProperties.set(e,this[e])}),((t,e,o)=>{g(t,e,"write to private field"),e.set(t,o)})(this,ce,!0)),super.attributeChangedCallback(t,e,o)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,o)=>{t.has(o)&&null==this[o]&&(this[o]=e)})}};ce=new WeakMap,de.version="2.20.1",de.dependencies={},b([se()],de.prototype,"dir",2),b([se()],de.prototype,"lang",2);const{I:he}=Pt,ue=t=>void 0===t.strings,pe={};var fe,me=Symbol(),be=Symbol(),ge=new Map,ve=class extends de{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var o;let i;if(null==e?void 0:e.spriteSheet)return this.svg=vt`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return 410===i.status?me:be}catch(t){return be}try{const t=document.createElement("div");t.innerHTML=await i.text();const e=t.firstElementChild;if("svg"!==(null==(o=null==e?void 0:e.tagName)?void 0:o.toLowerCase()))return me;fe||(fe=new DOMParser);const s=fe.parseFromString(e.outerHTML,"text/html").body.querySelector("svg");return s?(s.part.add("svg"),document.adoptNode(s)):me}catch(t){return me}}connectedCallback(){super.connectedCallback(),Qt.push(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){var t;super.disconnectedCallback(),t=this,Qt=Qt.filter(e=>e!==t)}getIconSource(){const t=Zt(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:o}=this.getIconSource(),i=o?Zt(this.library):void 0;if(!e)return void(this.svg=null);let s=ge.get(e);if(s||(s=this.resolveIcon(e,i),ge.set(e,s)),!this.initialRender)return;const r=await s;if(r===be&&ge.delete(e),e===this.getIconSource().url)if((t=>void 0!==t?._$litType$)(r)){if(this.svg=r,i){await this.updateComplete;const t=this.shadowRoot.querySelector("[part='svg']");"function"==typeof i.mutator&&t&&i.mutator(t)}}else switch(r){case be:case me:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),null==(t=null==i?void 0:i.mutator)||t.call(i,this.svg),this.emit("sl-load")}}render(){return this.svg}};ve.styles=[ee,Jt],b([re()],ve.prototype,"svg",2),b([se({reflect:!0})],ve.prototype,"name",2),b([se()],ve.prototype,"src",2),b([se()],ve.prototype,"label",2),b([se({reflect:!0})],ve.prototype,"library",2),b([te("label")],ve.prototype,"handleLabelChange",1),b([te(["name","src","library"])],ve.prototype,"setIcon",1);const ye=t=>(...e)=>({_$litDirective$:t,values:e});class we{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const _e=ye(class extends we{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const o=t.element.classList;for(const t of this.st)t in e||(o.remove(t),this.st.delete(t));for(const t in e){const i=!!e[t];i===this.st.has(t)||this.nt?.has(t)||(i?(o.add(t),this.st.add(t)):(o.remove(t),this.st.delete(t)))}return _t}}),xe=t=>t??xt,ke=ye(class extends we{constructor(t){if(super(t),3!==t.type&&1!==t.type&&4!==t.type)throw Error("The `live` directive is not allowed on child or event bindings");if(!ue(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===_t||e===xt)return e;const o=t.element,i=t.name;if(3===t.type){if(e===o[i])return _t}else if(4===t.type){if(!!e===o.hasAttribute(i))return _t}else if(1===t.type&&o.getAttribute(i)===e+"")return _t;return((t,e=pe)=>{t._$AH=e})(t),e}});var Ce=class extends de{constructor(){super(...arguments),this.formControlController=new C(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new jt(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=!!this.helpText||!!t;return vt`
      <div
        class=${_e({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${_e({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":"small"===this.size,"checkbox--medium":"medium"===this.size,"checkbox--large":"large"===this.size})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${xe(this.value)}
            .indeterminate=${ke(this.indeterminate)}
            .checked=${ke(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?vt`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?vt`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Ce.styles=[ee,qt,Ht],Ce.dependencies={"sl-icon":ve},b([le('input[type="checkbox"]')],Ce.prototype,"input",2),b([re()],Ce.prototype,"hasFocus",2),b([se()],Ce.prototype,"title",2),b([se()],Ce.prototype,"name",2),b([se()],Ce.prototype,"value",2),b([se({reflect:!0})],Ce.prototype,"size",2),b([se({type:Boolean,reflect:!0})],Ce.prototype,"disabled",2),b([se({type:Boolean,reflect:!0})],Ce.prototype,"checked",2),b([se({type:Boolean,reflect:!0})],Ce.prototype,"indeterminate",2),b([Ut("checked")],Ce.prototype,"defaultChecked",2),b([se({reflect:!0})],Ce.prototype,"form",2),b([se({type:Boolean,reflect:!0})],Ce.prototype,"required",2),b([se({attribute:"help-text"})],Ce.prototype,"helpText",2),b([te("disabled",{waitUntilFirstUpdate:!0})],Ce.prototype,"handleDisabledChange",1),b([te(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Ce.prototype,"handleStateChange",1);var $e=L`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const ze=new Set,Se=new Map;let Ae,Ee="ltr",Te="en";const De="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(De){const t=new MutationObserver(Le);Ee=document.documentElement.dir||"ltr",Te=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Ie(...t){t.map(t=>{const e=t.$code.toLowerCase();Se.has(e)?Se.set(e,Object.assign(Object.assign({},Se.get(e)),t)):Se.set(e,t),Ae||(Ae=t)}),Le()}function Le(){De&&(Ee=document.documentElement.dir||"ltr",Te=document.documentElement.lang||navigator.language),[...ze.keys()].map(t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()})}class Oe{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){ze.add(this.host)}hostDisconnected(){ze.delete(this.host)}dir(){return`${this.host.dir||Ee}`.toLowerCase()}lang(){return`${this.host.lang||Te}`.toLowerCase()}getTranslationData(t){var e,o;const i=new Intl.Locale(t.replace(/_/g,"-")),s=null==i?void 0:i.language.toLowerCase(),r=null!==(o=null===(e=null==i?void 0:i.region)||void 0===e?void 0:e.toLowerCase())&&void 0!==o?o:"";return{locale:i,language:s,region:r,primary:Se.get(`${s}-${r}`),secondary:Se.get(s)}}exists(t,e){var o;const{primary:i,secondary:s}=this.getTranslationData(null!==(o=e.lang)&&void 0!==o?o:this.lang());return e=Object.assign({includeFallback:!1},e),!!(i&&i[t]||s&&s[t]||e.includeFallback&&Ae&&Ae[t])}term(t,...e){const{primary:o,secondary:i}=this.getTranslationData(this.lang());let s;if(o&&o[t])s=o[t];else if(i&&i[t])s=i[t];else{if(!Ae||!Ae[t])return console.error(`No translation found for: ${String(t)}`),String(t);s=Ae[t]}return"function"==typeof s?s(...e):s}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}}var Me={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};Ie(Me);var Pe=Me,Fe=class extends Oe{};Ie(Pe);var Re=class extends de{constructor(){super(...arguments),this.localize=new Fe(this)}render(){return vt`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Re.styles=[ee,$e];var Ve=new Map,Be=new WeakMap;function Ne(t,e){return"rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function He(t,e){Ve.set(t,function(t){return null!=t?t:{keyframes:[],options:{duration:0}}}(e))}function Ue(t,e,o){const i=Be.get(t);if(null==i?void 0:i[e])return Ne(i[e],o.dir);const s=Ve.get(e);return s?Ne(s,o.dir):{keyframes:[],options:{duration:0}}}function qe(t,e,o){return new Promise(i=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=t.animate(e,m(f({},o),{duration:We()?0:o.duration}));s.addEventListener("cancel",i,{once:!0}),s.addEventListener("finish",i,{once:!0})})}function je(t){return(t=t.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?1e3*parseFloat(t):parseFloat(t)}function We(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ke(t){return Promise.all(t.getAnimations().map(t=>new Promise(e=>{t.cancel(),requestAnimationFrame(e)})))}function Xe(t,e){return t.map(t=>m(f({},t),{height:"auto"===t.height?`${e}px`:t.height}))}function Ye(t,e,o){return t?e(t):o?.(t)}var Ge=class t extends de{constructor(){super(...arguments),this.localize=new Fe(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&"treeitem"===t.getAttribute("role")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&0===this.getChildrenItems().length,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await Ke(this.childrenContainer);const{keyframes:t,options:e}=Ue(this,"tree-item.collapse",{dir:this.localize.dir()});await qe(this.childrenContainer,Xe(t,this.childrenContainer.scrollHeight),e),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const e=this.parentElement;return!!e&&t.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&0===this.getChildrenItems().length}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await Ke(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:t,options:e}=Ue(this,"tree-item.expand",{dir:this.localize.dir()});await qe(this.childrenContainer,Xe(t,this.childrenContainer.scrollHeight),e),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(o=>t.isTreeItem(o)&&(e||!o.disabled)):[]}render(){const t="rtl"===this.localize.dir(),e=!this.loading&&(!this.isLeaf||this.lazy);return vt`
      <div
        part="base"
        class="${_e({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":e,"tree-item--rtl":"rtl"===this.localize.dir()})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${_e({"tree-item__expand-button":!0,"tree-item__expand-button--visible":e})}
            aria-hidden="true"
          >
            ${Ye(this.loading,()=>vt` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${Ye(this.selectable,()=>vt`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${ke(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};Ge.styles=[ee,Nt],Ge.dependencies={"sl-checkbox":Ce,"sl-icon":ve,"sl-spinner":Re},b([re()],Ge.prototype,"indeterminate",2),b([re()],Ge.prototype,"isLeaf",2),b([re()],Ge.prototype,"loading",2),b([re()],Ge.prototype,"selectable",2),b([se({type:Boolean,reflect:!0})],Ge.prototype,"expanded",2),b([se({type:Boolean,reflect:!0})],Ge.prototype,"selected",2),b([se({type:Boolean,reflect:!0})],Ge.prototype,"disabled",2),b([se({type:Boolean,reflect:!0})],Ge.prototype,"lazy",2),b([le("slot:not([name])")],Ge.prototype,"defaultSlot",2),b([le("slot[name=children]")],Ge.prototype,"childrenSlot",2),b([le(".tree-item__item")],Ge.prototype,"itemElement",2),b([le(".tree-item__children")],Ge.prototype,"childrenContainer",2),b([le(".tree-item__expand-button slot")],Ge.prototype,"expandButtonSlot",2),b([te("loading",{waitUntilFirstUpdate:!0})],Ge.prototype,"handleLoadingChange",1),b([te("disabled")],Ge.prototype,"handleDisabledChange",1),b([te("selected")],Ge.prototype,"handleSelectedChange",1),b([te("expanded",{waitUntilFirstUpdate:!0})],Ge.prototype,"handleExpandedChange",1),b([te("expanded",{waitUntilFirstUpdate:!0})],Ge.prototype,"handleExpandAnimation",1),b([te("lazy",{waitUntilFirstUpdate:!0})],Ge.prototype,"handleLazyChange",1);var Qe=Ge;He("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}}),He("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}}),Qe.define("sl-tree-item");var Ze=L`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,Je=L`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const to=Math.min,eo=Math.max,oo=Math.round,io=Math.floor,so=t=>({x:t,y:t}),ro={left:"right",right:"left",bottom:"top",top:"bottom"},ao={start:"end",end:"start"};function no(t,e,o){return eo(t,to(e,o))}function lo(t,e){return"function"==typeof t?t(e):t}function co(t){return t.split("-")[0]}function ho(t){return t.split("-")[1]}function uo(t){return"x"===t?"y":"x"}function po(t){return"y"===t?"height":"width"}const fo=new Set(["top","bottom"]);function mo(t){return fo.has(co(t))?"y":"x"}function bo(t){return uo(mo(t))}function go(t){return t.replace(/start|end/g,t=>ao[t])}const vo=["left","right"],yo=["right","left"],wo=["top","bottom"],_o=["bottom","top"];function xo(t){return t.replace(/left|right|bottom|top/g,t=>ro[t])}function ko(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function Co(t){const{x:e,y:o,width:i,height:s}=t;return{width:i,height:s,top:o,left:e,right:e+i,bottom:o+s,x:e,y:o}}function $o(t,e,o){let{reference:i,floating:s}=t;const r=mo(e),a=bo(e),n=po(a),l=co(e),c="y"===r,d=i.x+i.width/2-s.width/2,h=i.y+i.height/2-s.height/2,u=i[n]/2-s[n]/2;let p;switch(l){case"top":p={x:d,y:i.y-s.height};break;case"bottom":p={x:d,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:h};break;case"left":p={x:i.x-s.width,y:h};break;default:p={x:i.x,y:i.y}}switch(ho(e)){case"start":p[a]-=u*(o&&c?-1:1);break;case"end":p[a]+=u*(o&&c?-1:1)}return p}async function zo(t,e){var o;void 0===e&&(e={});const{x:i,y:s,platform:r,rects:a,elements:n,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:u=!1,padding:p=0}=lo(e,t),f=ko(p),m=n[u?"floating"===h?"reference":"floating":h],b=Co(await r.getClippingRect({element:null==(o=await(null==r.isElement?void 0:r.isElement(m)))||o?m:m.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(n.floating)),boundary:c,rootBoundary:d,strategy:l})),g="floating"===h?{x:i,y:s,width:a.floating.width,height:a.floating.height}:a.reference,v=await(null==r.getOffsetParent?void 0:r.getOffsetParent(n.floating)),y=await(null==r.isElement?void 0:r.isElement(v))&&await(null==r.getScale?void 0:r.getScale(v))||{x:1,y:1},w=Co(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:n,rect:g,offsetParent:v,strategy:l}):g);return{top:(b.top-w.top+f.top)/y.y,bottom:(w.bottom-b.bottom+f.bottom)/y.y,left:(b.left-w.left+f.left)/y.x,right:(w.right-b.right+f.right)/y.x}}const So=new Set(["left","top"]);function Ao(){return"undefined"!=typeof window}function Eo(t){return Io(t)?(t.nodeName||"").toLowerCase():"#document"}function To(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function Do(t){var e;return null==(e=(Io(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function Io(t){return!!Ao()&&(t instanceof Node||t instanceof To(t).Node)}function Lo(t){return!!Ao()&&(t instanceof Element||t instanceof To(t).Element)}function Oo(t){return!!Ao()&&(t instanceof HTMLElement||t instanceof To(t).HTMLElement)}function Mo(t){return!(!Ao()||"undefined"==typeof ShadowRoot)&&(t instanceof ShadowRoot||t instanceof To(t).ShadowRoot)}const Po=new Set(["inline","contents"]);function Fo(t){const{overflow:e,overflowX:o,overflowY:i,display:s}=Yo(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+o)&&!Po.has(s)}const Ro=new Set(["table","td","th"]);function Vo(t){return Ro.has(Eo(t))}const Bo=[":popover-open",":modal"];function No(t){return Bo.some(e=>{try{return t.matches(e)}catch(t){return!1}})}const Ho=["transform","translate","scale","rotate","perspective"],Uo=["transform","translate","scale","rotate","perspective","filter"],qo=["paint","layout","strict","content"];function jo(t){const e=Wo(),o=Lo(t)?Yo(t):t;return Ho.some(t=>!!o[t]&&"none"!==o[t])||!!o.containerType&&"normal"!==o.containerType||!e&&!!o.backdropFilter&&"none"!==o.backdropFilter||!e&&!!o.filter&&"none"!==o.filter||Uo.some(t=>(o.willChange||"").includes(t))||qo.some(t=>(o.contain||"").includes(t))}function Wo(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}const Ko=new Set(["html","body","#document"]);function Xo(t){return Ko.has(Eo(t))}function Yo(t){return To(t).getComputedStyle(t)}function Go(t){return Lo(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Qo(t){if("html"===Eo(t))return t;const e=t.assignedSlot||t.parentNode||Mo(t)&&t.host||Do(t);return Mo(e)?e.host:e}function Zo(t){const e=Qo(t);return Xo(e)?t.ownerDocument?t.ownerDocument.body:t.body:Oo(e)&&Fo(e)?e:Zo(e)}function Jo(t,e,o){var i;void 0===e&&(e=[]),void 0===o&&(o=!0);const s=Zo(t),r=s===(null==(i=t.ownerDocument)?void 0:i.body),a=To(s);if(r){const t=ti(a);return e.concat(a,a.visualViewport||[],Fo(s)?s:[],t&&o?Jo(t):[])}return e.concat(s,Jo(s,[],o))}function ti(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function ei(t){const e=Yo(t);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=Oo(t),r=s?t.offsetWidth:o,a=s?t.offsetHeight:i,n=oo(o)!==r||oo(i)!==a;return n&&(o=r,i=a),{width:o,height:i,$:n}}function oi(t){return Lo(t)?t:t.contextElement}function ii(t){const e=oi(t);if(!Oo(e))return so(1);const o=e.getBoundingClientRect(),{width:i,height:s,$:r}=ei(e);let a=(r?oo(o.width):o.width)/i,n=(r?oo(o.height):o.height)/s;return a&&Number.isFinite(a)||(a=1),n&&Number.isFinite(n)||(n=1),{x:a,y:n}}const si=so(0);function ri(t){const e=To(t);return Wo()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:si}function ai(t,e,o,i){void 0===e&&(e=!1),void 0===o&&(o=!1);const s=t.getBoundingClientRect(),r=oi(t);let a=so(1);e&&(i?Lo(i)&&(a=ii(i)):a=ii(t));const n=function(t,e,o){return void 0===e&&(e=!1),!(!o||e&&o!==To(t))&&e}(r,o,i)?ri(r):so(0);let l=(s.left+n.x)/a.x,c=(s.top+n.y)/a.y,d=s.width/a.x,h=s.height/a.y;if(r){const t=To(r),e=i&&Lo(i)?To(i):i;let o=t,s=ti(o);for(;s&&i&&e!==o;){const t=ii(s),e=s.getBoundingClientRect(),i=Yo(s),r=e.left+(s.clientLeft+parseFloat(i.paddingLeft))*t.x,a=e.top+(s.clientTop+parseFloat(i.paddingTop))*t.y;l*=t.x,c*=t.y,d*=t.x,h*=t.y,l+=r,c+=a,o=To(s),s=ti(o)}}return Co({width:d,height:h,x:l,y:c})}function ni(t,e){const o=Go(t).scrollLeft;return e?e.left+o:ai(Do(t)).left+o}function li(t,e,o){void 0===o&&(o=!1);const i=t.getBoundingClientRect();return{x:i.left+e.scrollLeft-(o?0:ni(t,i)),y:i.top+e.scrollTop}}const ci=new Set(["absolute","fixed"]);function di(t,e,o){let i;if("viewport"===e)i=function(t,e){const o=To(t),i=Do(t),s=o.visualViewport;let r=i.clientWidth,a=i.clientHeight,n=0,l=0;if(s){r=s.width,a=s.height;const t=Wo();(!t||t&&"fixed"===e)&&(n=s.offsetLeft,l=s.offsetTop)}return{width:r,height:a,x:n,y:l}}(t,o);else if("document"===e)i=function(t){const e=Do(t),o=Go(t),i=t.ownerDocument.body,s=eo(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),r=eo(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-o.scrollLeft+ni(t);const n=-o.scrollTop;return"rtl"===Yo(i).direction&&(a+=eo(e.clientWidth,i.clientWidth)-s),{width:s,height:r,x:a,y:n}}(Do(t));else if(Lo(e))i=function(t,e){const o=ai(t,!0,"fixed"===e),i=o.top+t.clientTop,s=o.left+t.clientLeft,r=Oo(t)?ii(t):so(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:s*r.x,y:i*r.y}}(e,o);else{const o=ri(t);i={x:e.x-o.x,y:e.y-o.y,width:e.width,height:e.height}}return Co(i)}function hi(t,e){const o=Qo(t);return!(o===e||!Lo(o)||Xo(o))&&("fixed"===Yo(o).position||hi(o,e))}function ui(t,e,o){const i=Oo(e),s=Do(e),r="fixed"===o,a=ai(t,!0,r,e);let n={scrollLeft:0,scrollTop:0};const l=so(0);function c(){l.x=ni(s)}if(i||!i&&!r)if(("body"!==Eo(e)||Fo(s))&&(n=Go(e)),i){const t=ai(e,!0,r,e);l.x=t.x+e.clientLeft,l.y=t.y+e.clientTop}else s&&c();r&&!i&&s&&c();const d=!s||i||r?so(0):li(s,n);return{x:a.left+n.scrollLeft-l.x-d.x,y:a.top+n.scrollTop-l.y-d.y,width:a.width,height:a.height}}function pi(t){return"static"===Yo(t).position}function fi(t,e){if(!Oo(t)||"fixed"===Yo(t).position)return null;if(e)return e(t);let o=t.offsetParent;return Do(t)===o&&(o=o.ownerDocument.body),o}function mi(t,e){const o=To(t);if(No(t))return o;if(!Oo(t)){let e=Qo(t);for(;e&&!Xo(e);){if(Lo(e)&&!pi(e))return e;e=Qo(e)}return o}let i=fi(t,e);for(;i&&Vo(i)&&pi(i);)i=fi(i,e);return i&&Xo(i)&&pi(i)&&!jo(i)?o:i||function(t){let e=Qo(t);for(;Oo(e)&&!Xo(e);){if(jo(e))return e;if(No(e))return null;e=Qo(e)}return null}(t)||o}const bi={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:o,offsetParent:i,strategy:s}=t;const r="fixed"===s,a=Do(i),n=!!e&&No(e.floating);if(i===a||n&&r)return o;let l={scrollLeft:0,scrollTop:0},c=so(1);const d=so(0),h=Oo(i);if((h||!h&&!r)&&(("body"!==Eo(i)||Fo(a))&&(l=Go(i)),Oo(i))){const t=ai(i);c=ii(i),d.x=t.x+i.clientLeft,d.y=t.y+i.clientTop}const u=!a||h||r?so(0):li(a,l,!0);return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-l.scrollLeft*c.x+d.x+u.x,y:o.y*c.y-l.scrollTop*c.y+d.y+u.y}},getDocumentElement:Do,getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:i,strategy:s}=t;const r=[..."clippingAncestors"===o?No(e)?[]:function(t,e){const o=e.get(t);if(o)return o;let i=Jo(t,[],!1).filter(t=>Lo(t)&&"body"!==Eo(t)),s=null;const r="fixed"===Yo(t).position;let a=r?Qo(t):t;for(;Lo(a)&&!Xo(a);){const e=Yo(a),o=jo(a);o||"fixed"!==e.position||(s=null),(r?!o&&!s:!o&&"static"===e.position&&s&&ci.has(s.position)||Fo(a)&&!o&&hi(t,a))?i=i.filter(t=>t!==a):s=e,a=Qo(a)}return e.set(t,i),i}(e,this._c):[].concat(o),i],a=r[0],n=r.reduce((t,o)=>{const i=di(e,o,s);return t.top=eo(i.top,t.top),t.right=to(i.right,t.right),t.bottom=to(i.bottom,t.bottom),t.left=eo(i.left,t.left),t},di(e,a,s));return{width:n.right-n.left,height:n.bottom-n.top,x:n.left,y:n.top}},getOffsetParent:mi,getElementRects:async function(t){const e=this.getOffsetParent||mi,o=this.getDimensions,i=await o(t.floating);return{reference:ui(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:o}=ei(t);return{width:e,height:o}},getScale:ii,isElement:Lo,isRTL:function(t){return"rtl"===Yo(t).direction}};function gi(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}const vi=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var o,i;const{x:s,y:r,placement:a,middlewareData:n}=e,l=await async function(t,e){const{placement:o,platform:i,elements:s}=t,r=await(null==i.isRTL?void 0:i.isRTL(s.floating)),a=co(o),n=ho(o),l="y"===mo(o),c=So.has(a)?-1:1,d=r&&l?-1:1,h=lo(e,t);let{mainAxis:u,crossAxis:p,alignmentAxis:f}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return n&&"number"==typeof f&&(p="end"===n?-1*f:f),l?{x:p*d,y:u*c}:{x:u*c,y:p*d}}(e,t);return a===(null==(o=n.offset)?void 0:o.placement)&&null!=(i=n.arrow)&&i.alignmentOffset?{}:{x:s+l.x,y:r+l.y,data:{...l,placement:a}}}}},yi=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var o,i;const{placement:s,middlewareData:r,rects:a,initialPlacement:n,platform:l,elements:c}=e,{mainAxis:d=!0,crossAxis:h=!0,fallbackPlacements:u,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:m=!0,...b}=lo(t,e);if(null!=(o=r.arrow)&&o.alignmentOffset)return{};const g=co(s),v=mo(n),y=co(n)===n,w=await(null==l.isRTL?void 0:l.isRTL(c.floating)),_=u||(y||!m?[xo(n)]:function(t){const e=xo(t);return[go(t),e,go(e)]}(n)),x="none"!==f;!u&&x&&_.push(...function(t,e,o,i){const s=ho(t);let r=function(t,e,o){switch(t){case"top":case"bottom":return o?e?yo:vo:e?vo:yo;case"left":case"right":return e?wo:_o;default:return[]}}(co(t),"start"===o,i);return s&&(r=r.map(t=>t+"-"+s),e&&(r=r.concat(r.map(go)))),r}(n,m,f,w));const k=[n,..._],C=await zo(e,b),$=[];let z=(null==(i=r.flip)?void 0:i.overflows)||[];if(d&&$.push(C[g]),h){const t=function(t,e,o){void 0===o&&(o=!1);const i=ho(t),s=bo(t),r=po(s);let a="x"===s?i===(o?"end":"start")?"right":"left":"start"===i?"bottom":"top";return e.reference[r]>e.floating[r]&&(a=xo(a)),[a,xo(a)]}(s,a,w);$.push(C[t[0]],C[t[1]])}if(z=[...z,{placement:s,overflows:$}],!$.every(t=>t<=0)){var S,A;const t=((null==(S=r.flip)?void 0:S.index)||0)+1,e=k[t];if(e&&("alignment"!==h||v===mo(e)||z.every(t=>mo(t.placement)!==v||t.overflows[0]>0)))return{data:{index:t,overflows:z},reset:{placement:e}};let o=null==(A=z.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:A.placement;if(!o)switch(p){case"bestFit":{var E;const t=null==(E=z.filter(t=>{if(x){const e=mo(t.placement);return e===v||"y"===e}return!0}).map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:E[0];t&&(o=t);break}case"initialPlacement":o=n}if(s!==o)return{reset:{placement:o}}}return{}}}},wi=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){var o,i;const{placement:s,rects:r,platform:a,elements:n}=e,{apply:l=()=>{},...c}=lo(t,e),d=await zo(e,c),h=co(s),u=ho(s),p="y"===mo(s),{width:f,height:m}=r.floating;let b,g;"top"===h||"bottom"===h?(b=h,g=u===(await(null==a.isRTL?void 0:a.isRTL(n.floating))?"start":"end")?"left":"right"):(g=h,b="end"===u?"top":"bottom");const v=m-d.top-d.bottom,y=f-d.left-d.right,w=to(m-d[b],v),_=to(f-d[g],y),x=!e.middlewareData.shift;let k=w,C=_;if(null!=(o=e.middlewareData.shift)&&o.enabled.x&&(C=y),null!=(i=e.middlewareData.shift)&&i.enabled.y&&(k=v),x&&!u){const t=eo(d.left,0),e=eo(d.right,0),o=eo(d.top,0),i=eo(d.bottom,0);p?C=f-2*(0!==t||0!==e?t+e:eo(d.left,d.right)):k=m-2*(0!==o||0!==i?o+i:eo(d.top,d.bottom))}await l({...e,availableWidth:C,availableHeight:k});const $=await a.getDimensions(n.floating);return f!==$.width||m!==$.height?{reset:{rects:!0}}:{}}}};function _i(t){return function(t){for(let e=t;e;e=xi(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=xi(t);e;e=xi(e)){if(!(e instanceof Element))continue;const t=getComputedStyle(e);if("contents"!==t.display){if("static"!==t.position||jo(t))return e;if("BODY"===e.tagName)return e}}return null}(t)}function xi(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}var ki=class extends de{constructor(){super(...arguments),this.localize=new Fe(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect();let o=0,i=0,s=0,r=0,a=0,n=0,l=0,c=0;this.placement.includes("top")||this.placement.includes("bottom")?t.top<e.top?(o=t.left,i=t.bottom,s=t.right,r=t.bottom,a=e.left,n=e.top,l=e.right,c=e.top):(o=e.left,i=e.bottom,s=e.right,r=e.bottom,a=t.left,n=t.top,l=t.right,c=t.top):t.left<e.left?(o=t.right,i=t.top,s=e.left,r=e.top,a=t.right,n=t.bottom,l=e.left,c=e.bottom):(o=e.right,i=e.top,s=t.left,r=t.top,a=e.right,n=e.bottom,l=t.left,c=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${r}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${c}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||function(t){return null!==t&&"object"==typeof t&&"getBoundingClientRect"in t&&(!("contextElement"in t)||t.contextElement instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=function(t,e,o,i){void 0===i&&(i={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:n="function"==typeof IntersectionObserver,animationFrame:l=!1}=i,c=oi(t),d=s||r?[...c?Jo(c):[],...Jo(e)]:[];d.forEach(t=>{s&&t.addEventListener("scroll",o,{passive:!0}),r&&t.addEventListener("resize",o)});const h=c&&n?function(t,e){let o,i=null;const s=Do(t);function r(){var t;clearTimeout(o),null==(t=i)||t.disconnect(),i=null}return function a(n,l){void 0===n&&(n=!1),void 0===l&&(l=1),r();const c=t.getBoundingClientRect(),{left:d,top:h,width:u,height:p}=c;if(n||e(),!u||!p)return;const f={rootMargin:-io(h)+"px "+-io(s.clientWidth-(d+u))+"px "+-io(s.clientHeight-(h+p))+"px "+-io(d)+"px",threshold:eo(0,to(1,l))||1};let m=!0;function b(e){const i=e[0].intersectionRatio;if(i!==l){if(!m)return a();i?a(!1,i):o=setTimeout(()=>{a(!1,1e-7)},1e3)}1!==i||gi(c,t.getBoundingClientRect())||a(),m=!1}try{i=new IntersectionObserver(b,{...f,root:s.ownerDocument})}catch(t){i=new IntersectionObserver(b,f)}i.observe(t)}(!0),r}(c,o):null;let u,p=-1,f=null;a&&(f=new ResizeObserver(t=>{let[i]=t;i&&i.target===c&&f&&(f.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var t;null==(t=f)||t.observe(e)})),o()}),c&&!l&&f.observe(c),f.observe(e));let m=l?ai(t):null;return l&&function e(){const i=ai(t);m&&!gi(m,i)&&o(),m=i,u=requestAnimationFrame(e)}(),o(),()=>{var t;d.forEach(t=>{s&&t.removeEventListener("scroll",o),r&&t.removeEventListener("resize",o)}),null==h||h(),null==(t=f)||t.disconnect(),f=null,l&&cancelAnimationFrame(u)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[vi({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(wi({apply:({rects:t})=>{const e="width"===this.sync||"both"===this.sync,o="height"===this.sync||"both"===this.sync;this.popup.style.width=e?`${t.reference.width}px`:"",this.popup.style.height=o?`${t.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(yi({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:s}=e,{mainAxis:r=!0,crossAxis:a=!1,limiter:n={fn:t=>{let{x:e,y:o}=t;return{x:e,y:o}}},...l}=lo(t,e),c={x:o,y:i},d=await zo(e,l),h=mo(co(s)),u=uo(h);let p=c[u],f=c[h];if(r){const t="y"===u?"bottom":"right";p=no(p+d["y"===u?"top":"left"],p,p-d[t])}if(a){const t="y"===h?"bottom":"right";f=no(f+d["y"===h?"top":"left"],f,f-d[t])}const m=n.fn({...e,[u]:p,[h]:f});return{...m,data:{x:m.x-o,y:m.y-i,enabled:{[u]:r,[h]:a}}}}}}({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(wi({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:e})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${e}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push((t=>({name:"arrow",options:t,async fn(e){const{x:o,y:i,placement:s,rects:r,platform:a,elements:n,middlewareData:l}=e,{element:c,padding:d=0}=lo(t,e)||{};if(null==c)return{};const h=ko(d),u={x:o,y:i},p=bo(s),f=po(p),m=await a.getDimensions(c),b="y"===p,g=b?"top":"left",v=b?"bottom":"right",y=b?"clientHeight":"clientWidth",w=r.reference[f]+r.reference[p]-u[p]-r.floating[f],_=u[p]-r.reference[p],x=await(null==a.getOffsetParent?void 0:a.getOffsetParent(c));let k=x?x[y]:0;k&&await(null==a.isElement?void 0:a.isElement(x))||(k=n.floating[y]||r.floating[f]);const C=w/2-_/2,$=k/2-m[f]/2-1,z=to(h[g],$),S=to(h[v],$),A=z,E=k-m[f]-S,T=k/2-m[f]/2+C,D=no(A,T,E),I=!l.arrow&&null!=ho(s)&&T!==D&&r.reference[f]/2-(T<A?z:S)-m[f]/2<0,L=I?T<A?T-A:T-E:0;return{[p]:u[p]+L,data:{[p]:D,centerOffset:T-D-L,...I&&{alignmentOffset:L}},reset:I}}}))({element:this.arrowEl,padding:this.arrowPadding}));const e="absolute"===this.strategy?t=>bi.getOffsetParent(t,_i):bi.getOffsetParent;((t,e,o)=>{const i=new Map,s={platform:bi,...o},r={...s.platform,_c:i};return(async(t,e,o)=>{const{placement:i="bottom",strategy:s="absolute",middleware:r=[],platform:a}=o,n=r.filter(Boolean),l=await(null==a.isRTL?void 0:a.isRTL(e));let c=await a.getElementRects({reference:t,floating:e,strategy:s}),{x:d,y:h}=$o(c,i,l),u=i,p={},f=0;for(let o=0;o<n.length;o++){const{name:r,fn:m}=n[o],{x:b,y:g,data:v,reset:y}=await m({x:d,y:h,initialPlacement:i,placement:u,strategy:s,middlewareData:p,rects:c,platform:a,elements:{reference:t,floating:e}});d=null!=b?b:d,h=null!=g?g:h,p={...p,[r]:{...p[r],...v}},y&&f<=50&&(f++,"object"==typeof y&&(y.placement&&(u=y.placement),y.rects&&(c=!0===y.rects?await a.getElementRects({reference:t,floating:e,strategy:s}):y.rects),({x:d,y:h}=$o(c,u,l))),o=-1)}return{x:d,y:h,placement:u,strategy:s,middlewareData:p}})(t,e,{...s,platform:r})})(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:m(f({},bi),{getOffsetParent:e})}).then(({x:t,y:e,middlewareData:o,placement:i})=>{const s="rtl"===this.localize.dir(),r={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${t}px`,top:`${e}px`}),this.arrow){const t=o.arrow.x,e=o.arrow.y;let i="",a="",n="",l="";if("start"===this.arrowPlacement){const o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=s?o:"",l=s?"":o}else if("end"===this.arrowPlacement){const o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=s?"":o,l=s?o:"",n="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(l="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":"",i="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":""):(l="number"==typeof t?`${t}px`:"",i="number"==typeof e?`${e}px`:"");Object.assign(this.arrowEl.style,{top:i,right:a,bottom:n,left:l,[r]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return vt`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${_e({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${_e({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?vt`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function Ci(t,e){return new Promise(o=>{t.addEventListener(e,function i(s){s.target===t&&(t.removeEventListener(e,i),o())})})}ki.styles=[ee,Je],b([le(".popup")],ki.prototype,"popup",2),b([le(".popup__arrow")],ki.prototype,"arrowEl",2),b([se()],ki.prototype,"anchor",2),b([se({type:Boolean,reflect:!0})],ki.prototype,"active",2),b([se({reflect:!0})],ki.prototype,"placement",2),b([se({reflect:!0})],ki.prototype,"strategy",2),b([se({type:Number})],ki.prototype,"distance",2),b([se({type:Number})],ki.prototype,"skidding",2),b([se({type:Boolean})],ki.prototype,"arrow",2),b([se({attribute:"arrow-placement"})],ki.prototype,"arrowPlacement",2),b([se({attribute:"arrow-padding",type:Number})],ki.prototype,"arrowPadding",2),b([se({type:Boolean})],ki.prototype,"flip",2),b([se({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(t=>t.trim()).filter(t=>""!==t),toAttribute:t=>t.join(" ")}})],ki.prototype,"flipFallbackPlacements",2),b([se({attribute:"flip-fallback-strategy"})],ki.prototype,"flipFallbackStrategy",2),b([se({type:Object})],ki.prototype,"flipBoundary",2),b([se({attribute:"flip-padding",type:Number})],ki.prototype,"flipPadding",2),b([se({type:Boolean})],ki.prototype,"shift",2),b([se({type:Object})],ki.prototype,"shiftBoundary",2),b([se({attribute:"shift-padding",type:Number})],ki.prototype,"shiftPadding",2),b([se({attribute:"auto-size"})],ki.prototype,"autoSize",2),b([se()],ki.prototype,"sync",2),b([se({type:Object})],ki.prototype,"autoSizeBoundary",2),b([se({attribute:"auto-size-padding",type:Number})],ki.prototype,"autoSizePadding",2),b([se({attribute:"hover-bridge",type:Boolean})],ki.prototype,"hoverBridge",2);var $i=class extends de{constructor(){super(),this.localize=new Fe(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{"Escape"===t.key&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=je(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=je(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Ke(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:e,options:o}=Ue(this,"tooltip.show",{dir:this.localize.dir()});await qe(this.popup.popup,e,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Ke(this.body);const{keyframes:t,options:o}=Ue(this,"tooltip.hide",{dir:this.localize.dir()});await qe(this.popup.popup,t,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Ci(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ci(this,"sl-after-hide")}render(){return vt`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${_e({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};$i.styles=[ee,Ze],$i.dependencies={"sl-popup":ki},b([le("slot:not([name])")],$i.prototype,"defaultSlot",2),b([le(".tooltip__body")],$i.prototype,"body",2),b([le("sl-popup")],$i.prototype,"popup",2),b([se()],$i.prototype,"content",2),b([se()],$i.prototype,"placement",2),b([se({type:Boolean,reflect:!0})],$i.prototype,"disabled",2),b([se({type:Number})],$i.prototype,"distance",2),b([se({type:Boolean,reflect:!0})],$i.prototype,"open",2),b([se({type:Number})],$i.prototype,"skidding",2),b([se()],$i.prototype,"trigger",2),b([se({type:Boolean})],$i.prototype,"hoist",2),b([te("open",{waitUntilFirstUpdate:!0})],$i.prototype,"handleOpenChange",1),b([te(["content","distance","hoist","placement","skidding"])],$i.prototype,"handleOptionsChange",1),b([te("disabled")],$i.prototype,"handleDisabledChange",1),He("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),He("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),$i.define("sl-tooltip");var zi=L`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;function Si(t,e,o){return(t=>Object.is(t,-0)?0:t)(t<e?e:t>o?o:t)}function Ai(t,e=!1){function o(t){const e=t.getChildrenItems({includeDisabled:!1});if(e.length){const o=e.every(t=>t.selected),i=e.every(t=>!t.selected&&!t.indeterminate);t.selected=o,t.indeterminate=!o&&!i}}!function t(i){for(const o of i.getChildrenItems())o.selected=e?i.selected||o.selected:!o.disabled&&i.selected,t(o);e&&o(i)}(t),function t(e){const i=e.parentElement;Qe.isTreeItem(i)&&(o(i),t(i))}(t)}var Ei=class extends de{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new Fe(this),this.initTreeItem=t=>{t.selectable="multiple"===this.selection,["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(e=>{const o=t.querySelector(`[slot="${e}-icon"]`),i=this.getExpandButtonIcon(e);i&&(null===o?t.append(i):o.hasAttribute("data-default")&&o.replaceWith(i))})},this.handleTreeChanged=t=>{for(const e of t){const t=[...e.addedNodes].filter(Qe.isTreeItem),o=[...e.removedNodes].filter(Qe.isTreeItem);t.forEach(this.initTreeItem),this.lastFocusedItem&&o.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{const e=t.relatedTarget;e&&this.contains(e)||(this.tabIndex=0)},this.handleFocusIn=t=>{const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Qe.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.mutationObserver)||t.disconnect()}getExpandButtonIcon(t){const e=("expand"===t?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(e){const o=e.cloneNode(!0);return[o,...o.querySelectorAll("[id]")].forEach(t=>t.removeAttribute("id")),o.setAttribute("data-default",""),o.slot=`${t}-icon`,o}return null}selectItem(t){const e=[...this.selectedItems];if("multiple"===this.selection)t.selected=!t.selected,t.lazy&&(t.expanded=!0),Ai(t);else if("single"===this.selection||t.isLeaf){const e=this.getAllTreeItems();for(const o of e)o.selected=o===t}else"leaf"===this.selection&&(t.expanded=!t.expanded);const o=this.selectedItems;(e.length!==o.length||o.some(t=>!e.includes(t)))&&Promise.all(o.map(t=>t.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:o}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(t){null==t||t.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key))return;if(t.composedPath().some(t=>{var e;return["input","textarea"].includes(null==(e=null==t?void 0:t.tagName)?void 0:e.toLowerCase())}))return;const e=this.getFocusableItems(),o="ltr"===this.localize.dir(),i="rtl"===this.localize.dir();if(e.length>0){t.preventDefault();const s=e.findIndex(t=>t.matches(":focus")),r=e[s],a=t=>{const o=e[Si(t,0,e.length-1)];this.focusItem(o)},n=t=>{r.expanded=t};"ArrowDown"===t.key?a(s+1):"ArrowUp"===t.key?a(s-1):o&&"ArrowRight"===t.key||i&&"ArrowLeft"===t.key?!r||r.disabled||r.expanded||r.isLeaf&&!r.lazy?a(s+1):n(!0):o&&"ArrowLeft"===t.key||i&&"ArrowRight"===t.key?!r||r.disabled||r.isLeaf||!r.expanded?a(s-1):n(!1):"Home"===t.key?a(0):"End"===t.key?a(e.length-1):"Enter"!==t.key&&" "!==t.key||r.disabled||this.selectItem(r)}}handleClick(t){const e=t.target,o=e.closest("sl-tree-item"),i=t.composedPath().some(t=>{var e;return null==(e=null==t?void 0:t.classList)?void 0:e.contains("tree-item__expand-button")});o&&!o.disabled&&e===this.clickTarget&&(i?o.expanded=!o.expanded:this.selectItem(o))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t="multiple"===this.selection,e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const o of e)o.selectable=t;t&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(t=>Ai(t,!0)))}get selectedItems(){return this.getAllTreeItems().filter(t=>t.selected)}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter(t=>{var o;if(t.disabled)return!1;const i=null==(o=t.parentElement)?void 0:o.closest("[role=treeitem]");return i&&(!i.expanded||i.loading||e.has(i))&&e.add(t),!e.has(t)})}render(){return vt`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};Ei.styles=[ee,zi],b([le("slot:not([name])")],Ei.prototype,"defaultSlot",2),b([le("slot[name=expand-icon]")],Ei.prototype,"expandedIconSlot",2),b([le("slot[name=collapse-icon]")],Ei.prototype,"collapsedIconSlot",2),b([se()],Ei.prototype,"selection",2),b([te("selection")],Ei.prototype,"handleSelectionChange",1),Ei.define("sl-tree");var Ti=L`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,Di=class extends de{render(){return vt` <slot></slot> `}};Di.styles=[ee,Ti],Di.define("sl-visually-hidden");var Ii=L`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,Li=0,Oi=class extends de{constructor(){super(...arguments),this.attrId=++Li,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return vt`
      <slot
        part="base"
        class=${_e({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Oi.styles=[ee,Ii],b([se({reflect:!0})],Oi.prototype,"name",2),b([se({type:Boolean,reflect:!0})],Oi.prototype,"active",2),b([te("active")],Oi.prototype,"handleActiveChange",1),Oi.define("sl-tab-panel");var Mi=L`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,Pi=L`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;const Fi=Symbol.for(""),Ri=t=>{if(t?.r===Fi)return t?._$litStatic$},Vi=(t,...e)=>({_$litStatic$:e.reduce((e,o,i)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[i+1],t[0]),r:Fi}),Bi=new Map,Ni=t=>(e,...o)=>{const i=o.length;let s,r;const a=[],n=[];let l,c=0,d=!1;for(;c<i;){for(l=e[c];c<i&&void 0!==(r=o[c],s=Ri(r));)l+=s+e[++c],d=!0;c!==i&&n.push(r),a.push(l),c++}if(c===i&&a.push(e[i]),d){const t=a.join("$$lit$$");void 0===(e=Bi.get(t))&&(a.raw=a,Bi.set(t,e=a)),o=n}return t(e,...o)},Hi=Ni(vt);Ni(yt),Ni(wt);var Ui=class extends de{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?Vi`a`:Vi`button`;return Hi`
      <${e}
        part="base"
        class=${_e({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${xe(t?void 0:this.disabled)}
        type=${xe(t?void 0:"button")}
        href=${xe(t?this.href:void 0)}
        target=${xe(t?this.target:void 0)}
        download=${xe(t?this.download:void 0)}
        rel=${xe(t&&this.target?"noreferrer noopener":void 0)}
        role=${xe(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${xe(this.name)}
          library=${xe(this.library)}
          src=${xe(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};Ui.styles=[ee,Pi],Ui.dependencies={"sl-icon":ve},b([le(".icon-button")],Ui.prototype,"button",2),b([re()],Ui.prototype,"hasFocus",2),b([se()],Ui.prototype,"name",2),b([se()],Ui.prototype,"library",2),b([se()],Ui.prototype,"src",2),b([se()],Ui.prototype,"href",2),b([se()],Ui.prototype,"target",2),b([se()],Ui.prototype,"download",2),b([se()],Ui.prototype,"label",2),b([se({type:Boolean,reflect:!0})],Ui.prototype,"disabled",2);var qi=class extends de{constructor(){super(...arguments),this.localize=new Fe(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return vt`
      <span
        part="base"
        class=${_e({tag:!0,"tag--primary":"primary"===this.variant,"tag--success":"success"===this.variant,"tag--neutral":"neutral"===this.variant,"tag--warning":"warning"===this.variant,"tag--danger":"danger"===this.variant,"tag--text":"text"===this.variant,"tag--small":"small"===this.size,"tag--medium":"medium"===this.size,"tag--large":"large"===this.size,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?vt`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};qi.styles=[ee,Mi],qi.dependencies={"sl-icon-button":Ui},b([se({reflect:!0})],qi.prototype,"variant",2),b([se({reflect:!0})],qi.prototype,"size",2),b([se({type:Boolean,reflect:!0})],qi.prototype,"pill",2),b([se({type:Boolean})],qi.prototype,"removable",2),qi.define("sl-tag");var ji=L`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,Wi=class extends de{constructor(){super(...arguments),this.formControlController=new C(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new jt(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var t;super.disconnectedCallback(),this.input&&(null==(t=this.resizeObserver)||t.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){"auto"===this.resize?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){return t?("number"==typeof t.top&&(this.input.scrollTop=t.top),void("number"==typeof t.left&&(this.input.scrollLeft=t.left))):{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,i="preserve"){const s=null!=e?e:this.input.selectionStart,r=null!=o?o:this.input.selectionEnd;this.input.setRangeText(t,s,r,i),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=!!this.label||!!t,i=!!this.helpText||!!e;return vt`
      <div
        part="form-control"
        class=${_e({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":o,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${_e({textarea:!0,"textarea--small":"small"===this.size,"textarea--medium":"medium"===this.size,"textarea--large":"large"===this.size,"textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":"none"===this.resize,"textarea--resize-vertical":"vertical"===this.resize,"textarea--resize-auto":"auto"===this.resize})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${xe(this.name)}
              .value=${ke(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${xe(this.placeholder)}
              rows=${xe(this.rows)}
              minlength=${xe(this.minlength)}
              maxlength=${xe(this.maxlength)}
              autocapitalize=${xe(this.autocapitalize)}
              autocorrect=${xe(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${xe(this.spellcheck)}
              enterkeyhint=${xe(this.enterkeyhint)}
              inputmode=${xe(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${"auto"!==this.resize}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Wi.styles=[ee,qt,ji],b([le(".textarea__control")],Wi.prototype,"input",2),b([le(".textarea__size-adjuster")],Wi.prototype,"sizeAdjuster",2),b([re()],Wi.prototype,"hasFocus",2),b([se()],Wi.prototype,"title",2),b([se()],Wi.prototype,"name",2),b([se()],Wi.prototype,"value",2),b([se({reflect:!0})],Wi.prototype,"size",2),b([se({type:Boolean,reflect:!0})],Wi.prototype,"filled",2),b([se()],Wi.prototype,"label",2),b([se({attribute:"help-text"})],Wi.prototype,"helpText",2),b([se()],Wi.prototype,"placeholder",2),b([se({type:Number})],Wi.prototype,"rows",2),b([se()],Wi.prototype,"resize",2),b([se({type:Boolean,reflect:!0})],Wi.prototype,"disabled",2),b([se({type:Boolean,reflect:!0})],Wi.prototype,"readonly",2),b([se({reflect:!0})],Wi.prototype,"form",2),b([se({type:Boolean,reflect:!0})],Wi.prototype,"required",2),b([se({type:Number})],Wi.prototype,"minlength",2),b([se({type:Number})],Wi.prototype,"maxlength",2),b([se()],Wi.prototype,"autocapitalize",2),b([se()],Wi.prototype,"autocorrect",2),b([se()],Wi.prototype,"autocomplete",2),b([se({type:Boolean})],Wi.prototype,"autofocus",2),b([se()],Wi.prototype,"enterkeyhint",2),b([se({type:Boolean,converter:{fromAttribute:t=>!(!t||"false"===t),toAttribute:t=>t?"true":"false"}})],Wi.prototype,"spellcheck",2),b([se()],Wi.prototype,"inputmode",2),b([Ut()],Wi.prototype,"defaultValue",2),b([te("disabled",{waitUntilFirstUpdate:!0})],Wi.prototype,"handleDisabledChange",1),b([te("rows",{waitUntilFirstUpdate:!0})],Wi.prototype,"handleRowsChange",1),b([te("value",{waitUntilFirstUpdate:!0})],Wi.prototype,"handleValueChange",1),Wi.define("sl-textarea");var Ki=L`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,Xi=0,Yi=class extends de{constructor(){super(...arguments),this.localize=new Fe(this),this.attrId=++Xi,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,vt`
      <div
        part="base"
        class=${_e({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?vt`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};Yi.styles=[ee,Ki],Yi.dependencies={"sl-icon-button":Ui},b([le(".tab")],Yi.prototype,"tab",2),b([se({reflect:!0})],Yi.prototype,"panel",2),b([se({type:Boolean,reflect:!0})],Yi.prototype,"active",2),b([se({type:Boolean,reflect:!0})],Yi.prototype,"closable",2),b([se({type:Boolean,reflect:!0})],Yi.prototype,"disabled",2),b([se({type:Number,reflect:!0})],Yi.prototype,"tabIndex",2),b([te("active")],Yi.prototype,"handleActiveChange",1),b([te("disabled")],Yi.prototype,"handleDisabledChange",1),Yi.define("sl-tab");var Gi=L`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,Qi=L`
  :host {
    display: contents;
  }
`,Zi=class extends de{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(null!==t){const e=t.assignedElements({flatten:!0});this.observedElements.forEach(t=>this.resizeObserver.unobserve(t)),this.observedElements=[],e.forEach(t=>{this.resizeObserver.observe(t),this.observedElements.push(t)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return vt` <slot @slotchange=${this.handleSlotChange}></slot> `}};Zi.styles=[ee,Qi],b([se({type:Boolean,reflect:!0})],Zi.prototype,"disabled",2),b([te("disabled",{waitUntilFirstUpdate:!0})],Zi.prototype,"handleDisabledChange",1);var Ji=new Set;function ts(t){if(Ji.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const t=function(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}()+function(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}();let e=getComputedStyle(document.documentElement).scrollbarGutter;e&&"auto"!==e||(e="stable"),t<2&&(e=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",e),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function es(t){Ji.delete(t),0===Ji.size&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function os(t,e,o="vertical",i="smooth"){const s=function(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}(t,e),r=s.top+e.scrollTop,a=s.left+e.scrollLeft,n=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,c=e.scrollTop,d=e.scrollTop+e.offsetHeight;"horizontal"!==o&&"both"!==o||(a<n?e.scrollTo({left:a,behavior:i}):a+t.clientWidth>l&&e.scrollTo({left:a-e.offsetWidth+t.clientWidth,behavior:i})),"vertical"!==o&&"both"!==o||(r<c?e.scrollTo({top:r,behavior:i}):r+t.clientHeight>d&&e.scrollTo({top:r-e.offsetHeight+t.clientHeight,behavior:i}))}var is=class extends de{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new Fe(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{const e=t.filter(({target:t})=>{if(t===this)return!0;if(t.closest("sl-tab-group")!==this)return!1;const e=t.tagName.toLowerCase();return"sl-tab"===e||"sl-tab-panel"===e});if(0!==e.length)if(e.some(t=>!["aria-labelledby","aria-controls"].includes(t.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(t=>"disabled"===t.attributeName))this.syncTabsAndPanels();else if(e.some(t=>"active"===t.attributeName)){const t=e.filter(t=>"active"===t.attributeName&&"sl-tab"===t.target.tagName.toLowerCase()).map(t=>t.target),o=t.find(t=>t.active);o&&this.setActiveTab(o)}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((t,e)=>{var o;t[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab(null!=(o=this.getActiveTab())?o:this.tabs[0],{emitEvents:!1}),e.unobserve(t[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var t,e;super.disconnectedCallback(),null==(t=this.mutationObserver)||t.disconnect(),this.nav&&(null==(e=this.resizeObserver)||e.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>"sl-tab-panel"===t.tagName.toLowerCase())}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const e=t.target.closest("sl-tab");(null==e?void 0:e.closest("sl-tab-group"))===this&&null!==e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}handleKeyDown(t){const e=t.target.closest("sl-tab");if((null==e?void 0:e.closest("sl-tab-group"))===this&&(["Enter"," "].includes(t.key)&&null!==e&&(this.setActiveTab(e,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const e=this.tabs.find(t=>t.matches(":focus")),o="rtl"===this.localize.dir();let i=null;if("sl-tab"===(null==e?void 0:e.tagName.toLowerCase())){if("Home"===t.key)i=this.focusableTabs[0];else if("End"===t.key)i=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(o?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&"ArrowUp"===t.key){const t=this.tabs.findIndex(t=>t===e);i=this.findNextFocusableTab(t,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(o?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&"ArrowDown"===t.key){const t=this.tabs.findIndex(t=>t===e);i=this.findNextFocusableTab(t,"forward")}if(!i)return;i.tabIndex=0,i.focus({preventScroll:!0}),"auto"===this.activation?this.setActiveTab(i,{scrollBehavior:"smooth"}):this.tabs.forEach(t=>{t.tabIndex=t===i?0:-1}),["top","bottom"].includes(this.placement)&&os(i,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=f({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const o=this.activeTab;this.activeTab=t,this.tabs.forEach(t=>{t.active=t===this.activeTab,t.tabIndex=t===this.activeTab?0:-1}),this.panels.forEach(t=>{var e;return t.active=t.name===(null==(e=this.activeTab)?void 0:e.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&os(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(o&&this.emit("sl-tab-hide",{detail:{name:o.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(e=>e.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,o=t.clientHeight,i="rtl"===this.localize.dir(),s=this.getAllTabs(),r=s.slice(0,s.indexOf(t)).reduce((t,e)=>({left:t.left+e.clientWidth,top:t.top+e.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=i?-1*r.left+"px":`${r.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${o}px`,this.indicator.style.translate=`0 ${r.top}px`}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,e){let o=null;const i="forward"===e?1:-1;let s=t+i;for(;t<this.tabs.length;){if(o=this.tabs[s]||null,null===o){o="forward"===e?this.focusableTabs[0]:this.focusableTabs[this.focusableTabs.length-1];break}if(!o.disabled)break;s+=i}return o}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return"rtl"===this.localize.dir()?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const e=this.tabs.find(e=>e.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){const t="rtl"===this.localize.dir();return vt`
      <div
        part="base"
        class=${_e({"tab-group":!0,"tab-group--top":"top"===this.placement,"tab-group--bottom":"bottom"===this.placement,"tab-group--start":"start"===this.placement,"tab-group--end":"end"===this.placement,"tab-group--rtl":"rtl"===this.localize.dir(),"tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?vt`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${_e({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?vt`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${_e({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};is.styles=[ee,Gi],is.dependencies={"sl-icon-button":Ui,"sl-resize-observer":Zi},b([le(".tab-group")],is.prototype,"tabGroup",2),b([le(".tab-group__body")],is.prototype,"body",2),b([le(".tab-group__nav")],is.prototype,"nav",2),b([le(".tab-group__indicator")],is.prototype,"indicator",2),b([re()],is.prototype,"hasScrollControls",2),b([re()],is.prototype,"shouldHideScrollStartButton",2),b([re()],is.prototype,"shouldHideScrollEndButton",2),b([se()],is.prototype,"placement",2),b([se()],is.prototype,"activation",2),b([se({attribute:"no-scroll-controls",type:Boolean})],is.prototype,"noScrollControls",2),b([se({attribute:"fixed-scroll-controls",type:Boolean})],is.prototype,"fixedScrollControls",2),b([ae({passive:!0})],is.prototype,"updateScrollButtons",1),b([te("noScrollControls",{waitUntilFirstUpdate:!0})],is.prototype,"updateScrollControls",1),b([te("placement",{waitUntilFirstUpdate:!0})],is.prototype,"syncIndicator",1),is.define("sl-tab-group");var ss=L`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,rs=class extends de{constructor(){super(...arguments),this.effect="none"}render(){return vt`
      <div
        part="base"
        class=${_e({skeleton:!0,"skeleton--pulse":"pulse"===this.effect,"skeleton--sheen":"sheen"===this.effect})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};rs.styles=[ee,ss],b([se()],rs.prototype,"effect",2),rs.define("sl-skeleton");var as=L`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function ns(t,e){function o(o){const i=t.getBoundingClientRect(),s=t.ownerDocument.defaultView,r=i.left+s.scrollX,a=i.top+s.scrollY,n=o.pageX-r,l=o.pageY-a;(null==e?void 0:e.onMove)&&e.onMove(n,l)}document.addEventListener("pointermove",o,{passive:!0}),document.addEventListener("pointerup",function t(){document.removeEventListener("pointermove",o),document.removeEventListener("pointerup",t),(null==e?void 0:e.onStop)&&e.onStop()}),(null==e?void 0:e.initialEvent)instanceof PointerEvent&&o(e.initialEvent)}var ls=()=>null,cs=class extends de{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new Fe(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=ls,this.snapThreshold=12}toSnapFunction(t){const e=t.split(" ");return({pos:o,size:i,snapThreshold:s,isRtl:r,vertical:a})=>{let n=o,l=Number.POSITIVE_INFINITY;return e.forEach(e=>{let c;if(e.startsWith("repeat(")){const e=t.substring(7,t.length-1),s=e.endsWith("%"),n=Number.parseFloat(e),l=s?i*(n/100):n;c=Math.round((r&&!a?i-o:o)/l)*l}else c=e.endsWith("%")?i*(Number.parseFloat(e)/100):Number.parseFloat(e);r&&!a&&(c=i-c);const d=Math.abs(o-c);d<=s&&d<l&&(n=c,l=d)}),n}}set snap(t){this.snapValue=null!=t?t:"",this.snapFunction=t?"string"==typeof t?this.toSnapFunction(t):t:ls}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.resizeObserver)||t.unobserve(this)}detectSize(){const{width:t,height:e}=this.getBoundingClientRect();this.size=this.vertical?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){const e="rtl"===this.localize.dir();this.disabled||(t.cancelable&&t.preventDefault(),ns(this,{onMove:(t,o)=>{var i;let s=this.vertical?o:t;"end"===this.primary&&(s=this.size-s),s=null!=(i=this.snapFunction({pos:s,size:this.size,snapThreshold:this.snapThreshold,isRtl:e,vertical:this.vertical}))?i:s,this.position=Si(this.pixelsToPercentage(s),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let e=this.position;const o=(t.shiftKey?10:1)*("end"===this.primary?-1:1);if(t.preventDefault(),("ArrowLeft"===t.key&&!this.vertical||"ArrowUp"===t.key&&this.vertical)&&(e-=o),("ArrowRight"===t.key&&!this.vertical||"ArrowDown"===t.key&&this.vertical)&&(e+=o),"Home"===t.key&&(e="end"===this.primary?100:0),"End"===t.key&&(e="end"===this.primary?0:100),"Enter"===t.key)if(this.isCollapsed)e=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const t=this.position;e=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=t})}this.position=Si(e,0,100)}}handleResize(t){const{width:e,height:o}=t[0].contentRect;this.size=this.vertical?o:e,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const t=this.vertical?"gridTemplateRows":"gridTemplateColumns",e=this.vertical?"gridTemplateColumns":"gridTemplateRows",o="rtl"===this.localize.dir(),i=`\n      clamp(\n        0%,\n        clamp(\n          var(--min),\n          ${this.position}% - var(--divider-width) / 2,\n          var(--max)\n        ),\n        calc(100% - var(--divider-width))\n      )\n    `,s="auto";return"end"===this.primary?o&&!this.vertical?this.style[t]=`${i} var(--divider-width) ${s}`:this.style[t]=`${s} var(--divider-width) ${i}`:o&&!this.vertical?this.style[t]=`${s} var(--divider-width) ${i}`:this.style[t]=`${i} var(--divider-width) ${s}`,this.style[e]="",vt`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${xe(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};cs.styles=[ee,as],b([le(".divider")],cs.prototype,"divider",2),b([se({type:Number,reflect:!0})],cs.prototype,"position",2),b([se({attribute:"position-in-pixels",type:Number})],cs.prototype,"positionInPixels",2),b([se({type:Boolean,reflect:!0})],cs.prototype,"vertical",2),b([se({type:Boolean,reflect:!0})],cs.prototype,"disabled",2),b([se()],cs.prototype,"primary",2),b([se({reflect:!0})],cs.prototype,"snap",1),b([se({type:Number,attribute:"snap-threshold"})],cs.prototype,"snapThreshold",2),b([te("position")],cs.prototype,"handlePositionChange",1),b([te("positionInPixels")],cs.prototype,"handlePositionInPixelsChange",1),b([te("vertical")],cs.prototype,"handleVerticalChange",1),cs.define("sl-split-panel");var ds=L`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,hs=class extends de{constructor(){super(...arguments),this.formControlController=new C(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new jt(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){"ArrowLeft"===t.key&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),"ArrowRight"===t.key&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=!!this.helpText||!!t;return vt`
      <div
        class=${_e({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${_e({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":"small"===this.size,"switch--medium":"medium"===this.size,"switch--large":"large"===this.size})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${xe(this.value)}
            .checked=${ke(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};hs.styles=[ee,qt,ds],b([le('input[type="checkbox"]')],hs.prototype,"input",2),b([re()],hs.prototype,"hasFocus",2),b([se()],hs.prototype,"title",2),b([se()],hs.prototype,"name",2),b([se()],hs.prototype,"value",2),b([se({reflect:!0})],hs.prototype,"size",2),b([se({type:Boolean,reflect:!0})],hs.prototype,"disabled",2),b([se({type:Boolean,reflect:!0})],hs.prototype,"checked",2),b([Ut("checked")],hs.prototype,"defaultChecked",2),b([se({reflect:!0})],hs.prototype,"form",2),b([se({type:Boolean,reflect:!0})],hs.prototype,"required",2),b([se({attribute:"help-text"})],hs.prototype,"helpText",2),b([te("checked",{waitUntilFirstUpdate:!0})],hs.prototype,"handleCheckedChange",1),b([te("disabled",{waitUntilFirstUpdate:!0})],hs.prototype,"handleDisabledChange",1),hs.define("sl-switch"),Zi.define("sl-resize-observer");var us=L`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;class ps extends we{constructor(t){if(super(t),this.it=xt,2!==t.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===xt||null==t)return this._t=void 0,this.it=t;if(t===_t)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}ps.directiveName="unsafeHTML",ps.resultType=1;const fs=ye(ps);var ms=class extends de{constructor(){super(...arguments),this.formControlController=new C(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new jt(this,"help-text","label"),this.localize=new Fe(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>vt`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${e=>this.handleTagRemove(e,t)}
      >
        ${t.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,o=null!==e.closest(".select__clear"),i=null!==e.closest("sl-icon-button");if(!o&&!i){if("Escape"===t.key&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),"Enter"===t.key||" "===t.key&&""===this.typeToSelectString)return t.preventDefault(),t.stopImmediatePropagation(),this.open?void(this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))):void this.show();if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=this.getAllOptions(),o=e.indexOf(this.currentOption);let i=Math.max(0,o);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;"ArrowDown"===t.key?(i=o+1,i>e.length-1&&(i=0)):"ArrowUp"===t.key?(i=o-1,i<0&&(i=e.length-1)):"Home"===t.key?i=0:"End"===t.key&&(i=e.length-1),this.setCurrentOption(e[i])}if(t.key&&1===t.key.length||"Backspace"===t.key){const e=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if("Backspace"===t.key)return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),"Backspace"===t.key?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const t of e)if(t.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(t);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get value(){return this._value}set value(t){t=this.multiple?Array.isArray(t)?t:t.split(" "):Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),null==(t=this.closeWatcher)||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const e=t.composedPath().some(t=>t instanceof Element&&"sl-icon-button"===t.tagName.toLowerCase());this.disabled||e||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){"Tab"!==t.key&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,""!==this.value&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const e=t.target.closest("sl-option"),o=this.value;e&&!e.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(e):this.setSelectedOptions(e),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==o&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions(),e=this.valueHasChanged?this.value:this.defaultValue,o=Array.isArray(e)?e:[e],i=[];t.forEach(t=>i.push(t.value)),this.setSelectedOptions(t.filter(t=>o.includes(t.value)))}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(t=>{t.current=!1,t.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),o=Array.isArray(t)?t:[t];e.forEach(t=>t.selected=!1),o.length&&o.forEach(t=>t.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){t.selected=!0===e||!1===e?e:!t.selected,this.selectionChanged()}selectionChanged(){var t,e,o;const i=this.getAllOptions();this.selectedOptions=i.filter(t=>t.selected);const s=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(t=>t.value),this.placeholder&&0===this.value.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const i=this.selectedOptions[0];this.value=null!=(t=null==i?void 0:i.value)?t:"",this.displayLabel=null!=(o=null==(e=null==i?void 0:i.getTextLabel)?void 0:e.call(i))?o:""}this.valueHasChanged=s,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const o=this.getTag(t,e);return vt`<div @sl-remove=${e=>this.handleTagRemove(e,t)}>
          ${"string"==typeof o?fs(o):o}
        </div>`}return e===this.maxOptionsVisible?vt`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`:vt``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,e,o){if(super.attributeChangedCallback(t,e,o),"value"===t){const t=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=t}}handleValueChange(){if(!this.valueHasChanged){const t=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=t}const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(t=>e.includes(t.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await Ke(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=Ue(this,"select.show",{dir:this.localize.dir()});await qe(this.popup.popup,t,e),this.currentOption&&os(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Ke(this);const{keyframes:t,options:e}=Ue(this,"select.hide",{dir:this.localize.dir()});await qe(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(!this.open&&!this.disabled)return this.open=!0,Ci(this,"sl-after-show");this.open=!1}async hide(){if(this.open&&!this.disabled)return this.open=!1,Ci(this,"sl-after-hide");this.open=!1}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=!!this.label||!!t,i=!!this.helpText||!!e,s=this.clearable&&!this.disabled&&this.value.length>0,r=this.placeholder&&this.value&&this.value.length<=0;return vt`
      <div
        part="form-control"
        class=${_e({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":o,"form-control--has-help-text":i})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${o?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${_e({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":r,"select--top":"top"===this.placement,"select--bottom":"bottom"===this.placement,"select--small":"small"===this.size,"select--medium":"medium"===this.size,"select--large":"large"===this.size})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?vt`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${s?vt`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ms.styles=[ee,qt,us],ms.dependencies={"sl-icon":ve,"sl-popup":ki,"sl-tag":qi},b([le(".select")],ms.prototype,"popup",2),b([le(".select__combobox")],ms.prototype,"combobox",2),b([le(".select__display-input")],ms.prototype,"displayInput",2),b([le(".select__value-input")],ms.prototype,"valueInput",2),b([le(".select__listbox")],ms.prototype,"listbox",2),b([re()],ms.prototype,"hasFocus",2),b([re()],ms.prototype,"displayLabel",2),b([re()],ms.prototype,"currentOption",2),b([re()],ms.prototype,"selectedOptions",2),b([re()],ms.prototype,"valueHasChanged",2),b([se()],ms.prototype,"name",2),b([re()],ms.prototype,"value",1),b([se({attribute:"value"})],ms.prototype,"defaultValue",2),b([se({reflect:!0})],ms.prototype,"size",2),b([se()],ms.prototype,"placeholder",2),b([se({type:Boolean,reflect:!0})],ms.prototype,"multiple",2),b([se({attribute:"max-options-visible",type:Number})],ms.prototype,"maxOptionsVisible",2),b([se({type:Boolean,reflect:!0})],ms.prototype,"disabled",2),b([se({type:Boolean})],ms.prototype,"clearable",2),b([se({type:Boolean,reflect:!0})],ms.prototype,"open",2),b([se({type:Boolean})],ms.prototype,"hoist",2),b([se({type:Boolean,reflect:!0})],ms.prototype,"filled",2),b([se({type:Boolean,reflect:!0})],ms.prototype,"pill",2),b([se()],ms.prototype,"label",2),b([se({reflect:!0})],ms.prototype,"placement",2),b([se({attribute:"help-text"})],ms.prototype,"helpText",2),b([se({reflect:!0})],ms.prototype,"form",2),b([se({type:Boolean,reflect:!0})],ms.prototype,"required",2),b([se()],ms.prototype,"getTag",2),b([te("disabled",{waitUntilFirstUpdate:!0})],ms.prototype,"handleDisabledChange",1),b([te(["defaultValue","value"],{waitUntilFirstUpdate:!0})],ms.prototype,"handleValueChange",1),b([te("open",{waitUntilFirstUpdate:!0})],ms.prototype,"handleOpenChange",1),He("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),He("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),ms.define("sl-select"),Re.define("sl-spinner");var bs=L`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,gs=class extends de{constructor(){super(...arguments),this.formControlController=new C(this),this.hasSlotController=new jt(this,"help-text","label"),this.localize=new Fe(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.resizeObserver)||t.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",100*t+"%")}syncTooltip(t){if(null!==this.output){const e=this.input.offsetWidth,o=this.output.offsetWidth,i=getComputedStyle(this.input).getPropertyValue("--thumb-size"),s=e*t;if("rtl"===this.localize.dir()){const r=`${e-s}px + ${t} * ${i}`;this.output.style.translate=`calc((${r} - ${o/2}px - ${i} / 2))`}else{const e=`${s}px - ${t} * ${i}`;this.output.style.translate=`calc(${e} - ${o/2}px + ${i} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),"none"!==this.tooltip&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(t))}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=!!this.label||!!t,i=!!this.helpText||!!e;return vt`
      <div
        part="form-control"
        class=${_e({"form-control":!0,"form-control--medium":!0,"form-control--has-label":o,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${_e({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":"rtl"===this.localize.dir(),"range--tooltip-visible":this.hasTooltip,"range--tooltip-top":"top"===this.tooltip,"range--tooltip-bottom":"bottom"===this.tooltip})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${xe(this.name)}
              ?disabled=${this.disabled}
              min=${xe(this.min)}
              max=${xe(this.max)}
              step=${xe(this.step)}
              .value=${ke(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${"none"===this.tooltip||this.disabled?"":vt`
                  <output part="tooltip" class="range__tooltip">
                    ${"function"==typeof this.tooltipFormatter?this.tooltipFormatter(this.value):this.value}
                  </output>
                `}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};gs.styles=[ee,qt,bs],b([le(".range__control")],gs.prototype,"input",2),b([le(".range__tooltip")],gs.prototype,"output",2),b([re()],gs.prototype,"hasFocus",2),b([re()],gs.prototype,"hasTooltip",2),b([se()],gs.prototype,"title",2),b([se()],gs.prototype,"name",2),b([se({type:Number})],gs.prototype,"value",2),b([se()],gs.prototype,"label",2),b([se({attribute:"help-text"})],gs.prototype,"helpText",2),b([se({type:Boolean,reflect:!0})],gs.prototype,"disabled",2),b([se({type:Number})],gs.prototype,"min",2),b([se({type:Number})],gs.prototype,"max",2),b([se({type:Number})],gs.prototype,"step",2),b([se()],gs.prototype,"tooltip",2),b([se({attribute:!1})],gs.prototype,"tooltipFormatter",2),b([se({reflect:!0})],gs.prototype,"form",2),b([Ut()],gs.prototype,"defaultValue",2),b([ae({passive:!0})],gs.prototype,"handleThumbDragStart",1),b([te("value",{waitUntilFirstUpdate:!0})],gs.prototype,"handleValueChange",1),b([te("disabled",{waitUntilFirstUpdate:!0})],gs.prototype,"handleDisabledChange",1),b([te("hasTooltip",{waitUntilFirstUpdate:!0})],gs.prototype,"syncRange",1),gs.define("sl-range");var vs=L`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;const ys="important",ws=" !"+ys,_s=ye(class extends we{constructor(t){if(super(t),1!==t.type||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,o)=>{const i=t[o];return null==i?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(t,[e]){const{style:o}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?o.removeProperty(t):o[t]=null);for(const t in e){const i=e[t];if(null!=i){this.ft.add(t);const e="string"==typeof i&&i.endsWith(ws);t.includes("-")||e?o.setProperty(t,e?i.slice(0,-11):i,e?ys:""):o[t]=i}}return _t}});var xs=class extends de{constructor(){super(...arguments),this.localize=new Fe(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){const e="rtl"===this.localize.dir(),{left:o,right:i,width:s}=this.rating.getBoundingClientRect();return Si(e?this.roundToPrecision((i-t)/s*this.max,this.precision):this.roundToPrecision((t-o)/s*this.max,this.precision),0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.emit("sl-change"))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){const e="ltr"===this.localize.dir(),o="rtl"===this.localize.dir(),i=this.value;if(!this.disabled&&!this.readonly){if("ArrowDown"===t.key||e&&"ArrowLeft"===t.key||o&&"ArrowRight"===t.key){const e=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-e),t.preventDefault()}if("ArrowUp"===t.key||e&&"ArrowRight"===t.key||o&&"ArrowLeft"===t.key){const e=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+e),t.preventDefault()}"Home"===t.key&&(this.value=0,t.preventDefault()),"End"===t.key&&(this.value=this.max,t.preventDefault()),this.value!==i&&this.emit("sl-change")}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),t.preventDefault()}roundToPrecision(t,e=.5){const o=1/e;return Math.ceil(t*o)/o}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){const t="rtl"===this.localize.dir(),e=Array.from(Array(this.max).keys());let o=0;return o=this.disabled||this.readonly?this.value:this.isHovering?this.hoverValue:this.value,vt`
      <div
        part="base"
        class=${_e({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":t})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled||this.readonly?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${e.map(e=>o>e&&o<e+1?vt`
                <span
                  class=${_e({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(o)===e+1})}
                  role="presentation"
                >
                  <div
                    style=${_s({clipPath:t?`inset(0 ${100*(o-e)}% 0 0)`:`inset(0 0 0 ${100*(o-e)}%)`})}
                  >
                    ${fs(this.getSymbol(e+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${_s({clipPath:t?`inset(0 0 0 ${100-100*(o-e)}%)`:`inset(0 ${100-100*(o-e)}% 0 0)`})}
                  >
                    ${fs(this.getSymbol(e+1))}
                  </div>
                </span>
              `:vt`
              <span
                class=${_e({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(o)===e+1,"rating__symbol--active":o>=e+1})}
                role="presentation"
              >
                ${fs(this.getSymbol(e+1))}
              </span>
            `)}
        </span>
      </div>
    `}};xs.styles=[ee,vs],xs.dependencies={"sl-icon":ve},b([le(".rating")],xs.prototype,"rating",2),b([re()],xs.prototype,"hoverValue",2),b([re()],xs.prototype,"isHovering",2),b([se()],xs.prototype,"label",2),b([se({type:Number})],xs.prototype,"value",2),b([se({type:Number})],xs.prototype,"max",2),b([se({type:Number})],xs.prototype,"precision",2),b([se({type:Boolean,reflect:!0})],xs.prototype,"readonly",2),b([se({type:Boolean,reflect:!0})],xs.prototype,"disabled",2),b([se()],xs.prototype,"getSymbol",2),b([ae({passive:!0})],xs.prototype,"handleTouchMove",1),b([te("hoverValue")],xs.prototype,"handleHoverValueChange",1),b([te("isHovering")],xs.prototype,"handleIsHoveringChange",1),xs.define("sl-rating");var ks=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Cs=class extends de{constructor(){super(...arguments),this.localize=new Fe(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const o=e.getTime()-t.getTime(),{unit:i,value:s}=ks.find(t=>Math.abs(o)<t.max);if(this.isoTime=e.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(o/s),i,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let t;t=function(t){const e={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return e-Date.now()%e}("minute"===i?"second":"hour"===i?"minute":"day"===i?"hour":"day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),t)}return vt` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};b([re()],Cs.prototype,"isoTime",2),b([re()],Cs.prototype,"relativeTime",2),b([se()],Cs.prototype,"date",2),b([se()],Cs.prototype,"format",2),b([se()],Cs.prototype,"numeric",2),b([se({type:Boolean})],Cs.prototype,"sync",2),Cs.define("sl-relative-time");var $s=L`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,zs=L`
  ${$s}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,Ss=class extends de{constructor(){super(...arguments),this.hasSlotController=new jt(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled)return t.preventDefault(),void t.stopPropagation();this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return Hi`
      <div part="base" role="presentation">
        <button
          part="${"button"+(this.checked?" button--checked":"")}"
          role="radio"
          aria-checked="${this.checked}"
          class=${_e({button:!0,"button--default":!0,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${xe(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};Ss.styles=[ee,zs],b([le(".button")],Ss.prototype,"input",2),b([le(".hidden-input")],Ss.prototype,"hiddenInput",2),b([re()],Ss.prototype,"hasFocus",2),b([se({type:Boolean,reflect:!0})],Ss.prototype,"checked",2),b([se()],Ss.prototype,"value",2),b([se({type:Boolean,reflect:!0})],Ss.prototype,"disabled",2),b([se({reflect:!0})],Ss.prototype,"size",2),b([se({type:Boolean,reflect:!0})],Ss.prototype,"pill",2),b([te("disabled",{waitUntilFirstUpdate:!0})],Ss.prototype,"handleDisabledChange",1),Ss.define("sl-radio-button");var As=L`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,Es=L`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Ts=class extends de{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=Ds(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){const e=Ds(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){const e=Ds(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){const e=Ds(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const o=t.indexOf(e),i=Ds(e);i&&(i.toggleAttribute("data-sl-button-group__button",!0),i.toggleAttribute("data-sl-button-group__button--first",0===o),i.toggleAttribute("data-sl-button-group__button--inner",o>0&&o<t.length-1),i.toggleAttribute("data-sl-button-group__button--last",o===t.length-1),i.toggleAttribute("data-sl-button-group__button--radio","sl-radio-button"===i.tagName.toLowerCase()))})}render(){return vt`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};function Ds(t){var e;const o="sl-button, sl-radio-button";return null!=(e=t.closest(o))?e:t.querySelector(o)}Ts.styles=[ee,Es],b([le("slot")],Ts.prototype,"defaultSlot",2),b([re()],Ts.prototype,"disableRole",2),b([se()],Ts.prototype,"label",2);var Is=class extends de{constructor(){super(...arguments),this.formControlController=new C(this),this.hasSlotController=new jt(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return""!==this.customValidityMessage?S:t?z:$}get validationMessage(){const t=this.required&&!this.value;return""!==this.customValidityMessage?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){const e=t.target.closest("sl-radio, sl-radio-button"),o=this.getAllRadios(),i=this.value;e&&!e.disabled&&(this.value=e.value,o.forEach(t=>t.checked=t===e),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const o=this.getAllRadios().filter(t=>!t.disabled),i=null!=(e=o.find(t=>t.checked))?e:o[0],s=" "===t.key?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,r=this.value;let a=o.indexOf(i)+s;a<0&&(a=o.length-1),a>o.length-1&&(a=0),this.getAllRadios().forEach(t=>{t.checked=!1,this.hasButtonGroup||t.setAttribute("tabindex","-1")}),this.value=o[a].value,o[a].checked=!0,this.hasButtonGroup?o[a].shadowRoot.querySelector("button").focus():(o[a].setAttribute("tabindex","0"),o[a].focus()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;const o=this.getAllRadios();if(await Promise.all(o.map(async t=>{await t.updateComplete,t.checked=t.value===this.value,t.size=this.size})),this.hasButtonGroup=o.some(t=>"sl-radio-button"===t.tagName.toLowerCase()),o.length>0&&!o.some(t=>t.checked))if(this.hasButtonGroup){const e=null==(t=o[0].shadowRoot)?void 0:t.querySelector("button");e&&e.setAttribute("tabindex","0")}else o[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const t=null==(e=this.shadowRoot)?void 0:e.querySelector("sl-button-group");t&&(t.disableRole=!0)}}syncRadios(){customElements.get("sl-radio")&&customElements.get("sl-radio-button")?this.syncRadioElements():(customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios()))}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=""!==this.customValidityMessage;return!t&&!e||(this.formControlController.emitInvalidEvent(),!1)}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){const e=this.getAllRadios(),o=e.find(t=>t.checked),i=e.find(t=>!t.disabled),s=o||i;s&&s.focus(t)}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=!!this.label||!!t,i=!!this.helpText||!!e,s=vt`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return vt`
      <fieldset
        part="form-control"
        class=${_e({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--radio-group":!0,"form-control--has-label":o,"form-control--has-help-text":i})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${o?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?vt`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${s}
                </sl-button-group>
              `:s}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};Is.styles=[ee,qt,As],Is.dependencies={"sl-button-group":Ts},b([le("slot:not([name])")],Is.prototype,"defaultSlot",2),b([le(".radio-group__validation-input")],Is.prototype,"validationInput",2),b([re()],Is.prototype,"hasButtonGroup",2),b([re()],Is.prototype,"errorMessage",2),b([re()],Is.prototype,"defaultValue",2),b([se()],Is.prototype,"label",2),b([se({attribute:"help-text"})],Is.prototype,"helpText",2),b([se()],Is.prototype,"name",2),b([se({reflect:!0})],Is.prototype,"value",2),b([se({reflect:!0})],Is.prototype,"size",2),b([se({reflect:!0})],Is.prototype,"form",2),b([se({type:Boolean,reflect:!0})],Is.prototype,"required",2),b([te("size",{waitUntilFirstUpdate:!0})],Is.prototype,"handleSizeChange",1),b([te("value")],Is.prototype,"handleValueChange",1),Is.define("sl-radio-group");var Ls=L`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,Os=class extends de{constructor(){super(...arguments),this.localize=new Fe(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),e=2*Math.PI*t,o=e-this.value/100*e;this.indicatorOffset=`${o}px`}}render(){return vt`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};Os.styles=[ee,Ls],b([le(".progress-ring__indicator")],Os.prototype,"indicator",2),b([re()],Os.prototype,"indicatorOffset",2),b([se({type:Number,reflect:!0})],Os.prototype,"value",2),b([se()],Os.prototype,"label",2),Os.define("sl-progress-ring");var Ms=L`
  :host {
    display: inline-block;
  }
`;let Ps=null;class Fs{}Fs.render=function(t,e){Ps(t,e)},self.QrCreator=Fs,function(t){function e(e,o,i,s){var r={},a=t(i,o);a.u(e),a.J(),s=s||0;var n=a.h(),l=a.h()+2*s;return r.text=e,r.level=o,r.version=i,r.O=l,r.a=function(t,e){return e-=s,!(0>(t-=s)||t>=n||0>e||e>=n)&&a.a(t,e)},r}function o(t,e,o,i,s,r,a,n,l,c){function d(e,o,i,s,a,n,l){e?(t.lineTo(o+n,i+l),t.arcTo(o,i,s,a,r)):t.lineTo(o,i)}a?t.moveTo(e+r,o):t.moveTo(e,o),d(n,i,o,i,s,-r,0),d(l,i,s,e,s,0,-r),d(c,e,s,e,o,r,0),d(a,e,o,i,o,0,r)}function i(t,e,o,i,s,r,a,n,l,c){function d(e,o,i,s){t.moveTo(e+i,o),t.lineTo(e,o),t.lineTo(e,o+s),t.arcTo(e,o,e+i,o,r)}a&&d(e,o,r,r),n&&d(i,o,-r,r),l&&d(i,s,-r,-r),c&&d(e,s,r,-r)}function s(t,s){t:{var r=s.text,a=s.v,n=s.N,l=s.K,c=s.P;for(n=Math.max(1,n||1),l=Math.min(40,l||40);n<=l;n+=1)try{var d=e(r,a,n,c);break t}catch(t){}d=void 0}if(!d)return null;for(r=t.getContext("2d"),s.background&&(r.fillStyle=s.background,r.fillRect(s.left,s.top,s.size,s.size)),a=d.O,l=s.size/a,r.beginPath(),c=0;c<a;c+=1)for(n=0;n<a;n+=1){var h=r,u=s.left+n*l,p=s.top+c*l,f=c,m=n,b=d.a,g=u+l,v=p+l,y=f-1,w=f+1,_=m-1,x=m+1,k=Math.floor(Math.min(.5,Math.max(0,s.R))*l),C=b(f,m),$=b(y,_),z=b(y,m);y=b(y,x);var S=b(f,x);x=b(w,x),m=b(w,m),w=b(w,_),f=b(f,_),u=Math.round(u),p=Math.round(p),g=Math.round(g),v=Math.round(v),C?o(h,u,p,g,v,k,!z&&!f,!z&&!S,!m&&!S,!m&&!f):i(h,u,p,g,v,k,z&&f&&$,z&&S&&y,m&&S&&x,m&&f&&w)}return function(t,e){var o=e.fill;if("string"==typeof o)t.fillStyle=o;else{var i=o.type,s=o.colorStops;if(o=o.position.map(t=>Math.round(t*e.size)),"linear-gradient"===i)var r=t.createLinearGradient.apply(t,o);else{if("radial-gradient"!==i)throw Error("Unsupported fill");r=t.createRadialGradient.apply(t,o)}s.forEach(([t,e])=>{r.addColorStop(t,e)}),t.fillStyle=r}}(r,s),r.fill(),t}var r={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};Ps=function(t,e){var o={};Object.assign(o,r,t),o.N=o.minVersion,o.K=o.maxVersion,o.v=o.ecLevel,o.left=o.left,o.top=o.top,o.size=o.size,o.fill=o.fill,o.background=o.background,o.text=o.text,o.R=o.radius,o.P=o.quiet,e instanceof HTMLCanvasElement?(e.width===o.size&&e.height===o.size||(e.width=o.size,e.height=o.size),e.getContext("2d").clearRect(0,0,e.width,e.height),s(e,o)):((t=document.createElement("canvas")).width=o.size,t.height=o.size,o=s(t,o),e.appendChild(o))}}(function(){function t(s,a){function n(t,e){for(var o=-1;7>=o;o+=1)if(!(-1>=t+o||h<=t+o))for(var i=-1;7>=i;i+=1)-1>=e+i||h<=e+i||(d[t+o][e+i]=0<=o&&6>=o&&(0==i||6==i)||0<=i&&6>=i&&(0==o||6==o)||2<=o&&4>=o&&2<=i&&4>=i)}function l(t,o){for(var a=h=4*s+17,l=Array(a),f=0;f<a;f+=1){l[f]=Array(a);for(var m=0;m<a;m+=1)l[f][m]=null}for(d=l,n(0,0),n(h-7,0),n(0,h-7),a=i.G(s),l=0;l<a.length;l+=1)for(f=0;f<a.length;f+=1){m=a[l];var b=a[f];if(null==d[m][b])for(var g=-2;2>=g;g+=1)for(var v=-2;2>=v;v+=1)d[m+g][b+v]=-2==g||2==g||-2==v||2==v||0==g&&0==v}for(a=8;a<h-8;a+=1)null==d[a][6]&&(d[a][6]=0==a%2);for(a=8;a<h-8;a+=1)null==d[6][a]&&(d[6][a]=0==a%2);for(a=i.w(c<<3|o),l=0;15>l;l+=1)f=!t&&1==(a>>l&1),d[6>l?l:8>l?l+1:h-15+l][8]=f,d[8][8>l?h-l-1:9>l?15-l:14-l]=f;if(d[h-8][8]=!t,7<=s){for(a=i.A(s),l=0;18>l;l+=1)f=!t&&1==(a>>l&1),d[Math.floor(l/3)][l%3+h-8-3]=f;for(l=0;18>l;l+=1)f=!t&&1==(a>>l&1),d[l%3+h-8-3][Math.floor(l/3)]=f}if(null==u){for(t=r.I(s,c),a=function(){var t=[],e=0,o={B:function(){return t},c:function(e){return 1==(t[Math.floor(e/8)]>>>7-e%8&1)},put:function(t,e){for(var i=0;i<e;i+=1)o.m(1==(t>>>e-i-1&1))},f:function(){return e},m:function(o){var i=Math.floor(e/8);t.length<=i&&t.push(0),o&&(t[i]|=128>>>e%8),e+=1}};return o}(),l=0;l<p.length;l+=1)f=p[l],a.put(4,4),a.put(f.b(),i.f(4,s)),f.write(a);for(l=f=0;l<t.length;l+=1)f+=t[l].j;if(a.f()>8*f)throw Error("code length overflow. ("+a.f()+">"+8*f+")");for(a.f()+4<=8*f&&a.put(0,4);0!=a.f()%8;)a.m(!1);for(;!(a.f()>=8*f||(a.put(236,8),a.f()>=8*f));)a.put(17,8);var y=0;for(f=l=0,m=Array(t.length),b=Array(t.length),g=0;g<t.length;g+=1){var w=t[g].j,_=t[g].o-w;for(l=Math.max(l,w),f=Math.max(f,_),m[g]=Array(w),v=0;v<m[g].length;v+=1)m[g][v]=255&a.B()[v+y];for(y+=w,v=i.C(_),w=e(m[g],v.b()-1).l(v),b[g]=Array(v.b()-1),v=0;v<b[g].length;v+=1)_=v+w.b()-b[g].length,b[g][v]=0<=_?w.c(_):0}for(v=a=0;v<t.length;v+=1)a+=t[v].o;for(a=Array(a),v=y=0;v<l;v+=1)for(g=0;g<t.length;g+=1)v<m[g].length&&(a[y]=m[g][v],y+=1);for(v=0;v<f;v+=1)for(g=0;g<t.length;g+=1)v<b[g].length&&(a[y]=b[g][v],y+=1);u=a}for(t=u,a=-1,l=h-1,f=7,m=0,o=i.F(o),b=h-1;0<b;b-=2)for(6==b&&--b;;){for(g=0;2>g;g+=1)null==d[l][b-g]&&(v=!1,m<t.length&&(v=1==(t[m]>>>f&1)),o(l,b-g)&&(v=!v),d[l][b-g]=v,-1==--f&&(m+=1,f=7));if(0>(l+=a)||h<=l){l-=a,a=-a;break}}}var c=o[a],d=null,h=0,u=null,p=[],f={u:function(e){e=function(e){var o=t.s(e);return{S:function(){return 4},b:function(){return o.length},write:function(t){for(var e=0;e<o.length;e+=1)t.put(o[e],8)}}}(e),p.push(e),u=null},a:function(t,e){if(0>t||h<=t||0>e||h<=e)throw Error(t+","+e);return d[t][e]},h:function(){return h},J:function(){for(var t=0,e=0,o=0;8>o;o+=1){l(!0,o);var s=i.D(f);(0==o||t>s)&&(t=s,e=o)}l(!1,e)}};return f}function e(t,o){if(void 0===t.length)throw Error(t.length+"/"+o);var i=function(){for(var e=0;e<t.length&&0==t[e];)e+=1;for(var i=Array(t.length-e+o),s=0;s<t.length-e;s+=1)i[s]=t[s+e];return i}(),r={c:function(t){return i[t]},b:function(){return i.length},multiply:function(t){for(var o=Array(r.b()+t.b()-1),i=0;i<r.b();i+=1)for(var a=0;a<t.b();a+=1)o[i+a]^=s.i(s.g(r.c(i))+s.g(t.c(a)));return e(o,0)},l:function(t){if(0>r.b()-t.b())return r;for(var o=s.g(r.c(0))-s.g(t.c(0)),i=Array(r.b()),a=0;a<r.b();a+=1)i[a]=r.c(a);for(a=0;a<t.b();a+=1)i[a]^=s.i(s.g(t.c(a))+o);return e(i,0).l(t)}};return r}t.s=function(t){for(var e=[],o=0;o<t.length;o++){var i=t.charCodeAt(o);128>i?e.push(i):2048>i?e.push(192|i>>6,128|63&i):55296>i||57344<=i?e.push(224|i>>12,128|i>>6&63,128|63&i):(o++,i=65536+((1023&i)<<10|1023&t.charCodeAt(o)),e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|63&i))}return e};var o={L:1,M:0,Q:3,H:2},i=function(){function t(t){for(var e=0;0!=t;)e+=1,t>>>=1;return e}var o=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],i={w:function(e){for(var o=e<<10;0<=t(o)-t(1335);)o^=1335<<t(o)-t(1335);return 21522^(e<<10|o)},A:function(e){for(var o=e<<12;0<=t(o)-t(7973);)o^=7973<<t(o)-t(7973);return e<<12|o},G:function(t){return o[t-1]},F:function(t){switch(t){case 0:return function(t,e){return 0==(t+e)%2};case 1:return function(t){return 0==t%2};case 2:return function(t,e){return 0==e%3};case 3:return function(t,e){return 0==(t+e)%3};case 4:return function(t,e){return 0==(Math.floor(t/2)+Math.floor(e/3))%2};case 5:return function(t,e){return 0==t*e%2+t*e%3};case 6:return function(t,e){return 0==(t*e%2+t*e%3)%2};case 7:return function(t,e){return 0==(t*e%3+(t+e)%2)%2};default:throw Error("bad maskPattern:"+t)}},C:function(t){for(var o=e([1],0),i=0;i<t;i+=1)o=o.multiply(e([1,s.i(i)],0));return o},f:function(t,e){if(4!=t||1>e||40<e)throw Error("mode: "+t+"; type: "+e);return 10>e?8:16},D:function(t){for(var e=t.h(),o=0,i=0;i<e;i+=1)for(var s=0;s<e;s+=1){for(var r=0,a=t.a(i,s),n=-1;1>=n;n+=1)if(!(0>i+n||e<=i+n))for(var l=-1;1>=l;l+=1)0>s+l||e<=s+l||(0!=n||0!=l)&&a==t.a(i+n,s+l)&&(r+=1);5<r&&(o+=3+r-5)}for(i=0;i<e-1;i+=1)for(s=0;s<e-1;s+=1)r=0,t.a(i,s)&&(r+=1),t.a(i+1,s)&&(r+=1),t.a(i,s+1)&&(r+=1),t.a(i+1,s+1)&&(r+=1),(0==r||4==r)&&(o+=3);for(i=0;i<e;i+=1)for(s=0;s<e-6;s+=1)t.a(i,s)&&!t.a(i,s+1)&&t.a(i,s+2)&&t.a(i,s+3)&&t.a(i,s+4)&&!t.a(i,s+5)&&t.a(i,s+6)&&(o+=40);for(s=0;s<e;s+=1)for(i=0;i<e-6;i+=1)t.a(i,s)&&!t.a(i+1,s)&&t.a(i+2,s)&&t.a(i+3,s)&&t.a(i+4,s)&&!t.a(i+5,s)&&t.a(i+6,s)&&(o+=40);for(s=r=0;s<e;s+=1)for(i=0;i<e;i+=1)t.a(i,s)&&(r+=1);return o+Math.abs(100*r/e/e-50)/5*10}};return i}(),s=function(){for(var t=Array(256),e=Array(256),o=0;8>o;o+=1)t[o]=1<<o;for(o=8;256>o;o+=1)t[o]=t[o-4]^t[o-5]^t[o-6]^t[o-8];for(o=0;255>o;o+=1)e[t[o]]=o;return{g:function(t){if(1>t)throw Error("glog("+t+")");return e[t]},i:function(e){for(;0>e;)e+=255;for(;256<=e;)e-=255;return t[e]}}}(),r=function(){function t(t,i){switch(i){case o.L:return e[4*(t-1)];case o.M:return e[4*(t-1)+1];case o.Q:return e[4*(t-1)+2];case o.H:return e[4*(t-1)+3]}}var e=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],i={I:function(e,o){var i=t(e,o);if(void 0===i)throw Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+o);e=i.length/3,o=[];for(var s=0;s<e;s+=1)for(var r=i[3*s],a=i[3*s+1],n=i[3*s+2],l=0;l<r;l+=1){var c=n,d={};d.o=a,d.j=c,o.push(d)}return o}};return i}();return t}());const Rs=QrCreator;var Vs=class extends de{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&Rs.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:2*this.size},this.canvas)}render(){var t;return vt`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${(null==(t=this.label)?void 0:t.length)>0?this.label:this.value}
        style=${_s({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};Vs.styles=[ee,Ms],b([le("canvas")],Vs.prototype,"canvas",2),b([se()],Vs.prototype,"value",2),b([se()],Vs.prototype,"label",2),b([se({type:Number})],Vs.prototype,"size",2),b([se()],Vs.prototype,"fill",2),b([se()],Vs.prototype,"background",2),b([se({type:Number})],Vs.prototype,"radius",2),b([se({attribute:"error-correction"})],Vs.prototype,"errorCorrection",2),b([te(["background","errorCorrection","fill","radius","size","value"])],Vs.prototype,"generate",1),Vs.define("sl-qr-code");var Bs=L`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,Ns=class extends de{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return vt`
      <span
        part="base"
        class=${_e({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":"small"===this.size,"radio--medium":"medium"===this.size,"radio--large":"large"===this.size})}
      >
        <span part="${"control"+(this.checked?" control--checked":"")}" class="radio__control">
          ${this.checked?vt` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Ns.styles=[ee,Bs],Ns.dependencies={"sl-icon":ve},b([re()],Ns.prototype,"checked",2),b([re()],Ns.prototype,"hasFocus",2),b([se()],Ns.prototype,"value",2),b([se({reflect:!0})],Ns.prototype,"size",2),b([se({type:Boolean,reflect:!0})],Ns.prototype,"disabled",2),b([te("checked")],Ns.prototype,"handleCheckedChange",1),b([te("disabled",{waitUntilFirstUpdate:!0})],Ns.prototype,"handleDisabledChange",1),Ns.define("sl-radio");var Hs=L`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,Us=class extends de{constructor(){super(...arguments),this.localize=new Fe(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const t=this.closest("sl-select");t&&t.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){"string"!=typeof this.value&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let e="";return[...t].forEach(t=>{t.nodeType===Node.ELEMENT_NODE&&(t.hasAttribute("slot")||(e+=t.textContent)),t.nodeType===Node.TEXT_NODE&&(e+=t.textContent)}),e.trim()}render(){return vt`
      <div
        part="base"
        class=${_e({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};Us.styles=[ee,Hs],Us.dependencies={"sl-icon":ve},b([le(".option__label")],Us.prototype,"defaultSlot",2),b([re()],Us.prototype,"current",2),b([re()],Us.prototype,"selected",2),b([re()],Us.prototype,"hasHover",2),b([se({reflect:!0})],Us.prototype,"value",2),b([se({type:Boolean,reflect:!0})],Us.prototype,"disabled",2),b([te("disabled")],Us.prototype,"handleDisabledChange",1),b([te("selected")],Us.prototype,"handleSelectedChange",1),b([te("value")],Us.prototype,"handleValueChange",1),Us.define("sl-option"),ki.define("sl-popup");var qs=L`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,js=class extends de{constructor(){super(...arguments),this.localize=new Fe(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return vt`
      <div
        part="base"
        class=${_e({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":"rtl"===this.localize.dir()})}
        role="progressbar"
        title=${xe(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${_s({width:`${this.value}%`})}>
          ${this.indeterminate?"":vt` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};js.styles=[ee,qs],b([se({type:Number,reflect:!0})],js.prototype,"value",2),b([se({type:Boolean,reflect:!0})],js.prototype,"indeterminate",2),b([se()],js.prototype,"label",2),js.define("sl-progress-bar");var Ws=L`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,Ks=class extends de{render(){return vt` <slot part="base" class="menu-label"></slot> `}};Ks.styles=[ee,Ws],Ks.define("sl-menu-label");var Xs=L`
  :host {
    display: contents;
  }
`,Ys=class extends de{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.emit("sl-mutation",{detail:{mutationList:t}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const t="string"==typeof this.attr&&this.attr.length>0,e=t&&"*"!==this.attr?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch(t){}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return vt` <slot></slot> `}};Ys.styles=[ee,Xs],b([se({reflect:!0})],Ys.prototype,"attr",2),b([se({attribute:"attr-old-value",type:Boolean,reflect:!0})],Ys.prototype,"attrOldValue",2),b([se({attribute:"char-data",type:Boolean,reflect:!0})],Ys.prototype,"charData",2),b([se({attribute:"char-data-old-value",type:Boolean,reflect:!0})],Ys.prototype,"charDataOldValue",2),b([se({attribute:"child-list",type:Boolean,reflect:!0})],Ys.prototype,"childList",2),b([se({type:Boolean,reflect:!0})],Ys.prototype,"disabled",2),b([te("disabled")],Ys.prototype,"handleDisabledChange",1),b([te("attr",{waitUntilFirstUpdate:!0}),te("attr-old-value",{waitUntilFirstUpdate:!0}),te("char-data",{waitUntilFirstUpdate:!0}),te("char-data-old-value",{waitUntilFirstUpdate:!0}),te("childList",{waitUntilFirstUpdate:!0})],Ys.prototype,"handleChange",1),Ys.define("sl-mutation-observer");var Gs=L`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,Qs=class extends de{constructor(){super(...arguments),this.formControlController=new C(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new jt(this,"help-text","label"),this.localize=new Fe(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),""!==this.value&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;"Enter"!==t.key||e||setTimeout(()=>{t.defaultPrevented||t.isComposing||this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,i="preserve"){const s=null!=e?e:this.input.selectionStart,r=null!=o?o:this.input.selectionEnd;this.input.setRangeText(t,s,r,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=!!this.label||!!t,i=!!this.helpText||!!e,s=this.clearable&&!this.disabled&&!this.readonly&&("number"==typeof this.value||this.value.length>0);return vt`
      <div
        part="form-control"
        class=${_e({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":o,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${_e({input:!0,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${"password"===this.type&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${xe(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${xe(this.placeholder)}
              minlength=${xe(this.minlength)}
              maxlength=${xe(this.maxlength)}
              min=${xe(this.min)}
              max=${xe(this.max)}
              step=${xe(this.step)}
              .value=${ke(this.value)}
              autocapitalize=${xe(this.autocapitalize)}
              autocomplete=${xe(this.autocomplete)}
              autocorrect=${xe(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${xe(this.pattern)}
              enterkeyhint=${xe(this.enterkeyhint)}
              inputmode=${xe(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${s?vt`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?vt`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?vt`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:vt`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Qs.styles=[ee,qt,Gs],Qs.dependencies={"sl-icon":ve},b([le(".input__control")],Qs.prototype,"input",2),b([re()],Qs.prototype,"hasFocus",2),b([se()],Qs.prototype,"title",2),b([se({reflect:!0})],Qs.prototype,"type",2),b([se()],Qs.prototype,"name",2),b([se()],Qs.prototype,"value",2),b([Ut()],Qs.prototype,"defaultValue",2),b([se({reflect:!0})],Qs.prototype,"size",2),b([se({type:Boolean,reflect:!0})],Qs.prototype,"filled",2),b([se({type:Boolean,reflect:!0})],Qs.prototype,"pill",2),b([se()],Qs.prototype,"label",2),b([se({attribute:"help-text"})],Qs.prototype,"helpText",2),b([se({type:Boolean})],Qs.prototype,"clearable",2),b([se({type:Boolean,reflect:!0})],Qs.prototype,"disabled",2),b([se()],Qs.prototype,"placeholder",2),b([se({type:Boolean,reflect:!0})],Qs.prototype,"readonly",2),b([se({attribute:"password-toggle",type:Boolean})],Qs.prototype,"passwordToggle",2),b([se({attribute:"password-visible",type:Boolean})],Qs.prototype,"passwordVisible",2),b([se({attribute:"no-spin-buttons",type:Boolean})],Qs.prototype,"noSpinButtons",2),b([se({reflect:!0})],Qs.prototype,"form",2),b([se({type:Boolean,reflect:!0})],Qs.prototype,"required",2),b([se()],Qs.prototype,"pattern",2),b([se({type:Number})],Qs.prototype,"minlength",2),b([se({type:Number})],Qs.prototype,"maxlength",2),b([se()],Qs.prototype,"min",2),b([se()],Qs.prototype,"max",2),b([se()],Qs.prototype,"step",2),b([se()],Qs.prototype,"autocapitalize",2),b([se()],Qs.prototype,"autocorrect",2),b([se()],Qs.prototype,"autocomplete",2),b([se({type:Boolean})],Qs.prototype,"autofocus",2),b([se()],Qs.prototype,"enterkeyhint",2),b([se({type:Boolean,converter:{fromAttribute:t=>!(!t||"false"===t),toAttribute:t=>t?"true":"false"}})],Qs.prototype,"spellcheck",2),b([se()],Qs.prototype,"inputmode",2),b([te("disabled",{waitUntilFirstUpdate:!0})],Qs.prototype,"handleDisabledChange",1),b([te("step",{waitUntilFirstUpdate:!0})],Qs.prototype,"handleStepChange",1),b([te("value",{waitUntilFirstUpdate:!0})],Qs.prototype,"handleValueChange",1),Qs.define("sl-input");var Zs=L`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,Js=class extends de{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const e=["menuitem","menuitemcheckbox"],o=t.composedPath(),i=o.find(t=>{var o;return e.includes((null==(o=null==t?void 0:t.getAttribute)?void 0:o.call(t,"role"))||"")});if(!i)return;if(o.find(t=>{var e;return"menu"===(null==(e=null==t?void 0:t.getAttribute)?void 0:e.call(t,"role"))})!==this)return;const s=i;"checkbox"===s.type&&(s.checked=!s.checked),this.emit("sl-select",{detail:{item:s}})}handleKeyDown(t){if("Enter"===t.key||" "===t.key){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),null==e||e.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),o=this.getCurrentItem();let i=o?e.indexOf(o):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),"ArrowDown"===t.key?i++:"ArrowUp"===t.key?i--:"Home"===t.key?i=0:"End"===t.key&&(i=e.length-1),i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.setCurrentItem(e[i]),e[i].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return"sl-menu-item"===t.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(null!=(e=t.getAttribute("role"))?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>"0"===t.getAttribute("tabindex"))}setCurrentItem(t){this.getAllItems().forEach(e=>{e.setAttribute("tabindex",e===t?"0":"-1")})}render(){return vt`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Js.styles=[ee,Zs],b([le("slot")],Js.prototype,"defaultSlot",2),Js.define("sl-menu");var tr=L`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;const er=(t,e)=>{const o=t._$AN;if(void 0===o)return!1;for(const t of o)t._$AO?.(e,!1),er(t,e);return!0},or=t=>{let e,o;do{if(void 0===(e=t._$AM))break;o=e._$AN,o.delete(t),t=e}while(0===o?.size)},ir=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(void 0===o)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),ar(e)}};function sr(t){void 0!==this._$AN?(or(this),this._$AM=t,ir(this)):this._$AM=t}function rr(t,e=!1,o=0){const i=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size)if(e)if(Array.isArray(i))for(let t=o;t<i.length;t++)er(i[t],!1),or(i[t]);else null!=i&&(er(i,!1),or(i));else er(this,t)}const ar=t=>{2==t.type&&(t._$AP??=rr,t._$AQ??=sr)};class nr extends we{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,o){super._$AT(t,e,o),ir(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(er(this,t),or(this))}setValue(t){if(ue(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class lr{}const cr=new WeakMap,dr=ye(class extends nr{render(t){return xt}update(t,[e]){const o=e!==this.G;return o&&void 0!==this.G&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),xt}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.G){const e=this.ht??globalThis;let o=cr.get(e);void 0===o&&(o=new WeakMap,cr.set(e,o)),void 0!==o.get(this.G)&&this.G.call(this.ht,void 0),o.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?cr.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var hr=class{constructor(t,e){this.popupRef=new lr,this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=t=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${t.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${t.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=t=>{switch(t.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":t.target!==this.host&&(t.preventDefault(),t.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(t)}},this.handleClick=t=>{var e;t.target===this.host?(t.preventDefault(),t.stopPropagation()):t.target instanceof Element&&("sl-menu-item"===t.target.tagName||(null==(e=t.target.role)?void 0:e.startsWith("menuitem")))&&this.disableSubmenu()},this.handleFocusOut=t=>{t.relatedTarget&&t.relatedTarget instanceof Element&&this.host.contains(t.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=t=>{t.stopPropagation()},this.handlePopupReposition=()=>{const t=this.host.renderRoot.querySelector("slot[name='submenu']"),e=null==t?void 0:t.assignedElements({flatten:!0}).filter(t=>"sl-menu"===t.localName)[0],o="rtl"===getComputedStyle(this.host).direction;if(!e)return;const{left:i,top:s,width:r,height:a}=e.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${o?i+r:i}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${s}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${o?i+r:i}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${s+a}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e)return void console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);let o=null;for(const t of e.assignedElements())if(o=t.querySelectorAll("sl-menu-item, [role^='menuitem']"),0!==o.length)break;if(o&&0!==o.length){o[0].setAttribute("tabindex","0");for(let t=1;t!==o.length;++t)o[t].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?o[0]instanceof HTMLElement&&o[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{o[0]instanceof HTMLElement&&o[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!(null==(t=this.host.parentElement)?void 0:t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),o=["padding-top","border-top-width","margin-top"].reduce((t,o)=>{var i;const s=null!=(i=e.get(o))?i:new CSSUnitValue(0,"px");return t-(s instanceof CSSUnitValue?s:new CSSUnitValue(0,"px")).to("px").value},0);this.skidding=o}isExpanded(){return!!this.popupRef.value&&this.popupRef.value.active}renderSubmenu(){const t="rtl"===getComputedStyle(this.host).direction;return this.isConnected?vt`
      <sl-popup
        ${dr(this.popupRef)}
        placement=${t?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:vt` <slot name="submenu" hidden></slot> `}},ur=class extends de{constructor(){super(...arguments),this.localize=new Fe(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new jt(this,"submenu"),this.submenuController=new hr(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();void 0!==this.cachedTextLabel?t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1})):this.cachedTextLabel=t}handleCheckedChange(){if(this.checked&&"checkbox"!==this.type)return this.checked=!1,void console.error('The checked attribute can only be used on menu items with type="checkbox"',this);"checkbox"===this.type?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){"checkbox"===this.type?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return function(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let o="";return[...e].forEach(t=>{t.nodeType===Node.TEXT_NODE&&(o+=t.textContent)}),o}(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t="rtl"===this.localize.dir(),e=this.submenuController.isExpanded();return vt`
      <div
        id="anchor"
        part="base"
        class=${_e({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?vt` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};ur.styles=[ee,tr],ur.dependencies={"sl-icon":ve,"sl-popup":ki,"sl-spinner":Re},b([le("slot:not([name])")],ur.prototype,"defaultSlot",2),b([le(".menu-item")],ur.prototype,"menuItem",2),b([se()],ur.prototype,"type",2),b([se({type:Boolean,reflect:!0})],ur.prototype,"checked",2),b([se()],ur.prototype,"value",2),b([se({type:Boolean,reflect:!0})],ur.prototype,"loading",2),b([se({type:Boolean,reflect:!0})],ur.prototype,"disabled",2),b([te("checked")],ur.prototype,"handleCheckedChange",1),b([te("disabled")],ur.prototype,"handleDisabledChange",1),b([te("type")],ur.prototype,"handleTypeChange",1),ur.define("sl-menu-item");var pr=L`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,fr=class extends de{constructor(){super(...arguments),this.localize=new Fe(this),this.position=50}handleDrag(t){const{width:e}=this.base.getBoundingClientRect(),o="rtl"===this.localize.dir();t.preventDefault(),ns(this.base,{onMove:t=>{this.position=parseFloat(Si(t/e*100,0,100).toFixed(2)),o&&(this.position=100-this.position)},initialEvent:t})}handleKeyDown(t){const e="ltr"===this.localize.dir(),o="rtl"===this.localize.dir();if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){const i=t.shiftKey?10:1;let s=this.position;t.preventDefault(),(e&&"ArrowLeft"===t.key||o&&"ArrowRight"===t.key)&&(s-=i),(e&&"ArrowRight"===t.key||o&&"ArrowLeft"===t.key)&&(s+=i),"Home"===t.key&&(s=0),"End"===t.key&&(s=100),s=Si(s,0,100),this.position=s}}handlePositionChange(){this.emit("sl-change")}render(){const t="rtl"===this.localize.dir();return vt`
      <div
        part="base"
        id="image-comparer"
        class=${_e({"image-comparer":!0,"image-comparer--rtl":t})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${_s({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${_s({left:t?100-this.position+"%":`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};fr.styles=[ee,pr],fr.scopedElement={"sl-icon":ve},b([le(".image-comparer")],fr.prototype,"base",2),b([le(".image-comparer__handle")],fr.prototype,"handle",2),b([se({type:Number,reflect:!0})],fr.prototype,"position",2),b([te("position",{waitUntilFirstUpdate:!0})],fr.prototype,"handlePositionChange",1),fr.define("sl-image-comparer");var mr=L`
  :host {
    display: block;
  }
`,br=new Map,gr=class extends de{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){const e=document.createElement("script");[...t.attributes].forEach(t=>e.setAttribute(t.name,t.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{const t=this.src,e=await function(t,e="cors"){const o=br.get(t);if(void 0!==o)return Promise.resolve(o);const i=fetch(t,{mode:e}).then(async e=>{const o={ok:e.ok,status:e.status,html:await e.text()};return br.set(t,o),o});return br.set(t,i),i}(t,this.mode);if(t!==this.src)return;if(!e.ok)return void this.emit("sl-error",{detail:{status:e.status}});this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(t=>this.executeScript(t)),this.emit("sl-load")}catch(t){this.emit("sl-error",{detail:{status:-1}})}}render(){return vt`<slot></slot>`}};gr.styles=[ee,mr],b([se()],gr.prototype,"src",2),b([se()],gr.prototype,"mode",2),b([se({attribute:"allow-scripts",type:Boolean})],gr.prototype,"allowScripts",2),b([te("src")],gr.prototype,"handleSrcChange",1),gr.define("sl-include"),ve.define("sl-icon"),Ui.define("sl-icon-button");var vr=class extends de{constructor(){super(...arguments),this.localize=new Fe(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const t="bit"===this.unit?["","kilo","mega","giga","tera"]:["","kilo","mega","giga","tera","peta"],e=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),t.length-1)),o=t[e]+this.unit,i=parseFloat((this.value/Math.pow(1e3,e)).toPrecision(3));return this.localize.number(i,{style:"unit",unit:o,unitDisplay:this.display})}};b([se({type:Number})],vr.prototype,"value",2),b([se()],vr.prototype,"unit",2),b([se()],vr.prototype,"display",2),vr.define("sl-format-bytes");var yr=class extends de{constructor(){super(...arguments),this.localize=new Fe(this),this.date=new Date,this.hourFormat="auto"}render(){const t=new Date(this.date),e="auto"===this.hourFormat?void 0:"12"===this.hourFormat;if(!isNaN(t.getMilliseconds()))return vt`
      <time datetime=${t.toISOString()}>
        ${this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e})}
      </time>
    `}};b([se()],yr.prototype,"date",2),b([se()],yr.prototype,"weekday",2),b([se()],yr.prototype,"era",2),b([se()],yr.prototype,"year",2),b([se()],yr.prototype,"month",2),b([se()],yr.prototype,"day",2),b([se()],yr.prototype,"hour",2),b([se()],yr.prototype,"minute",2),b([se()],yr.prototype,"second",2),b([se({attribute:"time-zone-name"})],yr.prototype,"timeZoneName",2),b([se({attribute:"time-zone"})],yr.prototype,"timeZone",2),b([se({attribute:"hour-format"})],yr.prototype,"hourFormat",2),yr.define("sl-format-date");var wr=class extends de{constructor(){super(...arguments),this.localize=new Fe(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};b([se({type:Number})],wr.prototype,"value",2),b([se()],wr.prototype,"type",2),b([se({attribute:"no-grouping",type:Boolean})],wr.prototype,"noGrouping",2),b([se()],wr.prototype,"currency",2),b([se({attribute:"currency-display"})],wr.prototype,"currencyDisplay",2),b([se({attribute:"minimum-integer-digits",type:Number})],wr.prototype,"minimumIntegerDigits",2),b([se({attribute:"minimum-fraction-digits",type:Number})],wr.prototype,"minimumFractionDigits",2),b([se({attribute:"maximum-fraction-digits",type:Number})],wr.prototype,"maximumFractionDigits",2),b([se({attribute:"minimum-significant-digits",type:Number})],wr.prototype,"minimumSignificantDigits",2),b([se({attribute:"maximum-significant-digits",type:Number})],wr.prototype,"maximumSignificantDigits",2),wr.define("sl-format-number");var _r=L`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,xr=class extends de{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};xr.styles=[ee,_r],b([se({type:Boolean,reflect:!0})],xr.prototype,"vertical",2),b([te("vertical")],xr.prototype,"handleVerticalChange",1),xr.define("sl-divider");var kr=L`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function*Cr(t=document.activeElement){var e,o,i,s,r;null!=t&&(yield t,"shadowRoot"in t&&t.shadowRoot&&"closed"!==t.shadowRoot.mode&&(yield*(e=Cr(t.shadowRoot.activeElement),i=e[h("asyncIterator")],s=!1,r={},null==i?(i=e[h("iterator")](),o=t=>r[t]=e=>i[t](e)):(i=i.call(e),o=t=>r[t]=e=>{if(s){if(s=!1,"throw"===t)throw e;return e}return s=!0,{done:!1,value:new v(new Promise(o=>{var s=i[t](e);s instanceof Object||u("Object expected"),o(s)}),1)}}),r[h("iterator")]=()=>r,o("next"),"throw"in i?o("throw"):r.throw=t=>{throw t},"return"in i&&o("return"),r)))}function $r(){return[...Cr()].pop()}var zr=new WeakMap;function Sr(t){let e=zr.get(t);return e||(e=window.getComputedStyle(t,null),zr.set(t,e)),e}function Ar(t){const e=new WeakMap,o=[];return function i(s){if(s instanceof Element){if(s.hasAttribute("inert")||s.closest("[inert]"))return;if(e.has(s))return;e.set(s,!0),!o.includes(s)&&function(t){const e=t.tagName.toLowerCase(),o=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(o)||o<=-1))return!1;if(t.hasAttribute("disabled"))return!1;if(t.closest("[inert]"))return!1;if("input"===e&&"radio"===t.getAttribute("type")){const e=t.getRootNode(),o=`input[type='radio'][name="${t.getAttribute("name")}"]`,i=e.querySelector(`${o}:checked`);return i?i===t:e.querySelector(o)===t}return!!function(t){if("function"==typeof t.checkVisibility)return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=Sr(t);return"hidden"!==e.visibility&&"none"!==e.display}(t)&&(!("audio"!==e&&"video"!==e||!t.hasAttribute("controls"))||!!t.hasAttribute("tabindex")||!(!t.hasAttribute("contenteditable")||"false"===t.getAttribute("contenteditable"))||!!["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)||function(t){const e=Sr(t),{overflowY:o,overflowX:i}=e;return"scroll"===o||"scroll"===i||"auto"===o&&"auto"===i&&(t.scrollHeight>t.clientHeight&&"auto"===o||!(!(t.scrollWidth>t.clientWidth)||"auto"!==i))}(t))}(s)&&o.push(s),s instanceof HTMLSlotElement&&function(t,e){var o;return(null==(o=t.getRootNode({composed:!0}))?void 0:o.host)!==e}(s,t)&&s.assignedElements({flatten:!0}).forEach(t=>{i(t)}),null!==s.shadowRoot&&"open"===s.shadowRoot.mode&&i(s.shadowRoot)}for(const t of s.children)i(t)}(t),o.sort((t,e)=>{const o=Number(t.getAttribute("tabindex"))||0;return(Number(e.getAttribute("tabindex"))||0)-o})}var Er=[],Tr=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var e;if("Tab"!==t.key||this.isExternalActivated)return;if(!this.isActive())return;const o=$r();if(this.previousFocus=o,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const i=Ar(this.element);let s=i.findIndex(t=>t===o);this.previousFocus=this.currentFocus;const r="forward"===this.tabDirection?1:-1;for(;;){s+r>=i.length?s=0:s+r<0?s=i.length-1:s+=r,this.previousFocus=this.currentFocus;const o=i[s];if("backward"===this.tabDirection&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;if(o&&this.possiblyHasTabbableChildren(o))return;t.preventDefault(),this.currentFocus=o,null==(e=this.currentFocus)||e.focus({preventScroll:!1});const a=[...Cr()];if(a.includes(this.currentFocus)||!a.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){Er.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Er=Er.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Er[Er.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=Ar(this.element);if(!this.element.matches(":focus-within")){const e=t[0],o=t[t.length-1],i="forward"===this.tabDirection?e:o;"function"==typeof(null==i?void 0:i.focus)&&(this.currentFocus=i,i.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}},Dr=t=>{var e;const{activeElement:o}=document;o&&t.contains(o)&&(null==(e=document.activeElement)||e.blur())};function Ir(t){return t.charAt(0).toUpperCase()+t.slice(1)}var Lr=class extends de{constructor(){super(...arguments),this.hasSlotController=new jt(this,"footer"),this.localize=new Fe(this),this.modal=new Tr(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||"Escape"===t.key&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),ts(this)))}disconnectedCallback(){super.disconnectedCallback(),es(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const t=Ue(this,"drawer.denyClose",{dir:this.localize.dir()});return void qe(this.panel,t.keyframes,t.options)}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),null==(t=this.closeWatcher)||t.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),ts(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Ke(this.drawer),Ke(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=Ue(this,`drawer.show${Ir(this.placement)}`,{dir:this.localize.dir()}),o=Ue(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([qe(this.panel,e.keyframes,e.options),qe(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{Dr(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),es(this)),await Promise.all([Ke(this.drawer),Ke(this.overlay)]);const t=Ue(this,`drawer.hide${Ir(this.placement)}`,{dir:this.localize.dir()}),e=Ue(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([qe(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),qe(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const o=this.originalTrigger;"function"==typeof(null==o?void 0:o.focus)&&setTimeout(()=>o.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),ts(this)),this.open&&this.contained&&(this.modal.deactivate(),es(this))}async show(){if(!this.open)return this.open=!0,Ci(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ci(this,"sl-after-hide")}render(){return vt`
      <div
        part="base"
        class=${_e({drawer:!0,"drawer--open":this.open,"drawer--top":"top"===this.placement,"drawer--end":"end"===this.placement,"drawer--bottom":"bottom"===this.placement,"drawer--start":"start"===this.placement,"drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":"rtl"===this.localize.dir(),"drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${xe(this.noHeader?this.label:void 0)}
          aria-labelledby=${xe(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":vt`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Lr.styles=[ee,kr],Lr.dependencies={"sl-icon-button":Ui},b([le(".drawer")],Lr.prototype,"drawer",2),b([le(".drawer__panel")],Lr.prototype,"panel",2),b([le(".drawer__overlay")],Lr.prototype,"overlay",2),b([se({type:Boolean,reflect:!0})],Lr.prototype,"open",2),b([se({reflect:!0})],Lr.prototype,"label",2),b([se({reflect:!0})],Lr.prototype,"placement",2),b([se({type:Boolean,reflect:!0})],Lr.prototype,"contained",2),b([se({attribute:"no-header",type:Boolean,reflect:!0})],Lr.prototype,"noHeader",2),b([te("open",{waitUntilFirstUpdate:!0})],Lr.prototype,"handleOpenChange",1),b([te("contained",{waitUntilFirstUpdate:!0})],Lr.prototype,"handleNoModalChange",1),He("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),He("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}}),He("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),He("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}}),He("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),He("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}}),He("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),He("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}}),He("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}}),He("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),He("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),Lr.define("sl-drawer");var Or=L`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,Mr=class extends de{constructor(){super(...arguments),this.localize=new Fe(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&"Escape"===t.key&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if("Escape"===t.key&&this.open&&!this.closeWatcher)return t.stopPropagation(),this.focusOnTrigger(),void this.hide();if("Tab"===t.key){if(this.open&&"sl-menu-item"===(null==(e=document.activeElement)?void 0:e.tagName.toLowerCase()))return t.preventDefault(),this.hide(),void this.focusOnTrigger();const o=(t,e)=>{if(!t)return null;const i=t.closest(e);if(i)return i;const s=t.getRootNode();return s instanceof ShadowRoot?o(s.host,e):null};setTimeout(()=>{var t;const e=(null==(t=this.containingElement)?void 0:t.getRootNode())instanceof ShadowRoot?$r():document.activeElement;this.containingElement&&o(e,this.containingElement.tagName.toLowerCase())===this.containingElement||this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;this.stayOpenOnSelect||"sl-menu"!==e.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];"function"==typeof(null==t?void 0:t.focus)&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>"sl-menu"===t.tagName.toLowerCase())}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key))return t.preventDefault(),void this.handleTriggerClick();const e=this.getMenu();if(e){const o=e.getAllItems(),i=o[0],s=o[o.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),o.length>0&&this.updateComplete.then(()=>{"ArrowDown"!==t.key&&"Home"!==t.key||(e.setCurrentItem(i),i.focus()),"ArrowUp"!==t.key&&"End"!==t.key||(e.setCurrentItem(s),s.focus())}))}}handleTriggerKeyUp(t){" "===t.key&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(t=>function(t){var e,o;const i=Ar(t);return{start:null!=(e=i[0])?e:null,end:null!=(o=i[i.length-1])?o:null}}(t).start);let e;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":e=t.button;break;default:e=t}e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Ci(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ci(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),null==(t=this.closeWatcher)||t.destroy()}async handleOpenChange(){if(this.disabled)this.open=!1;else if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Ke(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=Ue(this,"dropdown.show",{dir:this.localize.dir()});await qe(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Ke(this);const{keyframes:t,options:e}=Ue(this,"dropdown.hide",{dir:this.localize.dir()});await qe(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return vt`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${xe(this.sync?this.sync:void 0)}
        class=${_e({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};Mr.styles=[ee,Or],Mr.dependencies={"sl-popup":ki},b([le(".dropdown")],Mr.prototype,"popup",2),b([le(".dropdown__trigger")],Mr.prototype,"trigger",2),b([le(".dropdown__panel")],Mr.prototype,"panel",2),b([se({type:Boolean,reflect:!0})],Mr.prototype,"open",2),b([se({reflect:!0})],Mr.prototype,"placement",2),b([se({type:Boolean,reflect:!0})],Mr.prototype,"disabled",2),b([se({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Mr.prototype,"stayOpenOnSelect",2),b([se({attribute:!1})],Mr.prototype,"containingElement",2),b([se({type:Number})],Mr.prototype,"distance",2),b([se({type:Number})],Mr.prototype,"skidding",2),b([se({type:Boolean})],Mr.prototype,"hoist",2),b([se({reflect:!0})],Mr.prototype,"sync",2),b([te("open",{waitUntilFirstUpdate:!0})],Mr.prototype,"handleOpenChange",1),He("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),He("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),Mr.define("sl-dropdown");var Pr=L`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,Fr=class extends de{constructor(){super(...arguments),this.localize=new Fe(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){const e=this.getRootNode(),o=this.from.includes("."),i=this.from.includes("[")&&this.from.includes("]");let s=this.from,r="";o?[s,r]=this.from.trim().split("."):i&&([s,r]=this.from.trim().replace(/\]$/,"").split("["));const a="getElementById"in e?e.getElementById(s):null;a?t=i?a.getAttribute(r)||"":o?a[r]||"":a.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(t)try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.emit("sl-copy",{detail:{value:t}})}catch(t){this.showStatus("error"),this.emit("sl-error")}else this.showStatus("error"),this.emit("sl-error")}async showStatus(t){const e=this.copyLabel||this.localize.term("copy"),o=this.successLabel||this.localize.term("copied"),i=this.errorLabel||this.localize.term("error"),s="success"===t?this.successIcon:this.errorIcon,r=Ue(this,"copy.in",{dir:"ltr"}),a=Ue(this,"copy.out",{dir:"ltr"});this.tooltip.content="success"===t?o:i,await this.copyIcon.animate(a.keyframes,a.options).finished,this.copyIcon.hidden=!0,this.status=t,s.hidden=!1,await s.animate(r.keyframes,r.options).finished,setTimeout(async()=>{await s.animate(a.keyframes,a.options).finished,s.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(r.keyframes,r.options).finished,this.tooltip.content=e,this.isCopying=!1},this.feedbackDuration)}render(){const t=this.copyLabel||this.localize.term("copy");return vt`
      <sl-tooltip
        class=${_e({"copy-button":!0,"copy-button--success":"success"===this.status,"copy-button--error":"error"===this.status})}
        content=${t}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};Fr.styles=[ee,Pr],Fr.dependencies={"sl-icon":ve,"sl-tooltip":$i},b([le('slot[name="copy-icon"]')],Fr.prototype,"copyIcon",2),b([le('slot[name="success-icon"]')],Fr.prototype,"successIcon",2),b([le('slot[name="error-icon"]')],Fr.prototype,"errorIcon",2),b([le("sl-tooltip")],Fr.prototype,"tooltip",2),b([re()],Fr.prototype,"isCopying",2),b([re()],Fr.prototype,"status",2),b([se()],Fr.prototype,"value",2),b([se()],Fr.prototype,"from",2),b([se({type:Boolean,reflect:!0})],Fr.prototype,"disabled",2),b([se({attribute:"copy-label"})],Fr.prototype,"copyLabel",2),b([se({attribute:"success-label"})],Fr.prototype,"successLabel",2),b([se({attribute:"error-label"})],Fr.prototype,"errorLabel",2),b([se({attribute:"feedback-duration",type:Number})],Fr.prototype,"feedbackDuration",2),b([se({attribute:"tooltip-placement"})],Fr.prototype,"tooltipPlacement",2),b([se({type:Boolean})],Fr.prototype,"hoist",2),He("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}}),He("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}}),Fr.define("sl-copy-button");var Rr=L`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,Vr=class extends de{constructor(){super(...arguments),this.localize=new Fe(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const e of t)"attributes"===e.type&&"open"===e.attributeName&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.detailsObserver)||t.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.open?this.hide():this.show()),"ArrowUp"!==t.key&&"ArrowLeft"!==t.key||(t.preventDefault(),this.hide()),"ArrowDown"!==t.key&&"ArrowRight"!==t.key||(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented)return this.open=!1,void(this.details.open=!1);await Ke(this.body);const{keyframes:t,options:e}=Ue(this,"details.show",{dir:this.localize.dir()});await qe(this.body,Xe(t,this.body.scrollHeight),e),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented)return this.details.open=!0,void(this.open=!0);await Ke(this.body);const{keyframes:t,options:e}=Ue(this,"details.hide",{dir:this.localize.dir()});await qe(this.body,Xe(t,this.body.scrollHeight),e),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!this.open&&!this.disabled)return this.open=!0,Ci(this,"sl-after-show")}async hide(){if(this.open&&!this.disabled)return this.open=!1,Ci(this,"sl-after-hide")}render(){const t="rtl"===this.localize.dir();return vt`
      <details
        part="base"
        class=${_e({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};Vr.styles=[ee,Rr],Vr.dependencies={"sl-icon":ve},b([le(".details")],Vr.prototype,"details",2),b([le(".details__header")],Vr.prototype,"header",2),b([le(".details__body")],Vr.prototype,"body",2),b([le(".details__expand-icon-slot")],Vr.prototype,"expandIconSlot",2),b([se({type:Boolean,reflect:!0})],Vr.prototype,"open",2),b([se()],Vr.prototype,"summary",2),b([se({type:Boolean,reflect:!0})],Vr.prototype,"disabled",2),b([te("open",{waitUntilFirstUpdate:!0})],Vr.prototype,"handleOpenChange",1),He("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}}),He("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}}),Vr.define("sl-details");var Br=L`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Nr=class extends de{constructor(){super(...arguments),this.hasSlotController=new jt(this,"footer"),this.localize=new Fe(this),this.modal=new Tr(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{"Escape"===t.key&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),ts(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),es(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const t=Ue(this,"dialog.denyClose",{dir:this.localize.dir()});return void qe(this.panel,t.keyframes,t.options)}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),ts(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Ke(this.dialog),Ke(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=Ue(this,"dialog.show",{dir:this.localize.dir()}),o=Ue(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([qe(this.panel,e.keyframes,e.options),qe(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{Dr(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Ke(this.dialog),Ke(this.overlay)]);const t=Ue(this,"dialog.hide",{dir:this.localize.dir()}),e=Ue(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([qe(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),qe(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,es(this);const o=this.originalTrigger;"function"==typeof(null==o?void 0:o.focus)&&setTimeout(()=>o.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Ci(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ci(this,"sl-after-hide")}render(){return vt`
      <div
        part="base"
        class=${_e({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${xe(this.noHeader?this.label:void 0)}
          aria-labelledby=${xe(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":vt`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Nr.styles=[ee,Br],Nr.dependencies={"sl-icon-button":Ui},b([le(".dialog")],Nr.prototype,"dialog",2),b([le(".dialog__panel")],Nr.prototype,"panel",2),b([le(".dialog__overlay")],Nr.prototype,"overlay",2),b([se({type:Boolean,reflect:!0})],Nr.prototype,"open",2),b([se({reflect:!0})],Nr.prototype,"label",2),b([se({attribute:"no-header",type:Boolean,reflect:!0})],Nr.prototype,"noHeader",2),b([te("open",{waitUntilFirstUpdate:!0})],Nr.prototype,"handleOpenChange",1),He("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),He("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),He("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),He("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),He("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),Nr.define("sl-dialog"),Ce.define("sl-checkbox");var Hr=L`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Ur=class extends de{constructor(){super(...arguments),this.formControlController=new C(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new jt(this,"[default]","prefix","suffix"),this.localize=new Fe(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:$}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){"submit"===this.type&&this.formControlController.submit(this),"reset"===this.type&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?Vi`a`:Vi`button`;return Hi`
      <${e}
        part="base"
        class=${_e({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${xe(t?void 0:this.disabled)}
        type=${xe(t?void 0:this.type)}
        title=${this.title}
        name=${xe(t?void 0:this.name)}
        value=${xe(t?void 0:this.value)}
        href=${xe(t&&!this.disabled?this.href:void 0)}
        target=${xe(t?this.target:void 0)}
        download=${xe(t?this.download:void 0)}
        rel=${xe(t?this.rel:void 0)}
        role=${xe(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Hi` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Hi`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};function qr(t,e){(function(t){return"string"==typeof t&&-1!==t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");const o=function(t){return"string"==typeof t&&-1!==t.indexOf("%")}(t);return t=360===e?t:Math.min(e,Math.max(0,parseFloat(t))),o&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:t=360===e?(t<0?t%e+e:t%e)/parseFloat(String(e)):t%e/parseFloat(String(e))}function jr(t){return Math.min(1,Math.max(0,t))}function Wr(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Kr(t){return Number(t)<=1?100*Number(t)+"%":t}function Xr(t){return 1===t.length?"0"+t:String(t)}function Yr(t,e,o){t=qr(t,255),e=qr(e,255),o=qr(o,255);const i=Math.max(t,e,o),s=Math.min(t,e,o);let r=0,a=0;const n=(i+s)/2;if(i===s)a=0,r=0;else{const l=i-s;switch(a=n>.5?l/(2-i-s):l/(i+s),i){case t:r=(e-o)/l+(e<o?6:0);break;case e:r=(o-t)/l+2;break;case o:r=(t-e)/l+4}r/=6}return{h:r,s:a,l:n}}function Gr(t,e,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?t+6*o*(e-t):o<.5?e:o<2/3?t+(e-t)*(2/3-o)*6:t}function Qr(t,e,o){t=qr(t,255),e=qr(e,255),o=qr(o,255);const i=Math.max(t,e,o),s=Math.min(t,e,o);let r=0;const a=i,n=i-s,l=0===i?0:n/i;if(i===s)r=0;else{switch(i){case t:r=(e-o)/n+(e<o?6:0);break;case e:r=(o-t)/n+2;break;case o:r=(t-e)/n+4}r/=6}return{h:r,s:l,v:a}}function Zr(t,e,o,i){const s=[Xr(Math.round(t).toString(16)),Xr(Math.round(e).toString(16)),Xr(Math.round(o).toString(16))];return i&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0):s.join("")}function Jr(t,e,o){let i=1-t/255,s=1-e/255,r=1-o/255,a=Math.min(i,s,r);return 1===a?(i=0,s=0,r=0):(i=(i-a)/(1-a)*100,s=(s-a)/(1-a)*100,r=(r-a)/(1-a)*100),a*=100,{c:Math.round(i),m:Math.round(s),y:Math.round(r),k:Math.round(a)}}function ta(t){return Math.round(255*parseFloat(t)).toString(16)}function ea(t){return oa(t)/255}function oa(t){return parseInt(t,16)}Ur.styles=[ee,$s],Ur.dependencies={"sl-icon":ve,"sl-spinner":Re},b([le(".button")],Ur.prototype,"button",2),b([re()],Ur.prototype,"hasFocus",2),b([re()],Ur.prototype,"invalid",2),b([se()],Ur.prototype,"title",2),b([se({reflect:!0})],Ur.prototype,"variant",2),b([se({reflect:!0})],Ur.prototype,"size",2),b([se({type:Boolean,reflect:!0})],Ur.prototype,"caret",2),b([se({type:Boolean,reflect:!0})],Ur.prototype,"disabled",2),b([se({type:Boolean,reflect:!0})],Ur.prototype,"loading",2),b([se({type:Boolean,reflect:!0})],Ur.prototype,"outline",2),b([se({type:Boolean,reflect:!0})],Ur.prototype,"pill",2),b([se({type:Boolean,reflect:!0})],Ur.prototype,"circle",2),b([se()],Ur.prototype,"type",2),b([se()],Ur.prototype,"name",2),b([se()],Ur.prototype,"value",2),b([se()],Ur.prototype,"href",2),b([se()],Ur.prototype,"target",2),b([se()],Ur.prototype,"rel",2),b([se()],Ur.prototype,"download",2),b([se()],Ur.prototype,"form",2),b([se({attribute:"formaction"})],Ur.prototype,"formAction",2),b([se({attribute:"formenctype"})],Ur.prototype,"formEnctype",2),b([se({attribute:"formmethod"})],Ur.prototype,"formMethod",2),b([se({attribute:"formnovalidate",type:Boolean})],Ur.prototype,"formNoValidate",2),b([se({attribute:"formtarget"})],Ur.prototype,"formTarget",2),b([te("disabled",{waitUntilFirstUpdate:!0})],Ur.prototype,"handleDisabledChange",1);const ia={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};const sa="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",ra="[\\s|\\(]+("+sa+")[,|\\s]+("+sa+")[,|\\s]+("+sa+")\\s*\\)?",aa="[\\s|\\(]+("+sa+")[,|\\s]+("+sa+")[,|\\s]+("+sa+")[,|\\s]+("+sa+")\\s*\\)?",na={CSS_UNIT:new RegExp(sa),rgb:new RegExp("rgb"+ra),rgba:new RegExp("rgba"+aa),hsl:new RegExp("hsl"+ra),hsla:new RegExp("hsla"+aa),hsv:new RegExp("hsv"+ra),hsva:new RegExp("hsva"+aa),cmyk:new RegExp("cmyk"+aa),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function la(t){return"number"==typeof t?!Number.isNaN(t):na.CSS_UNIT.test(t)}class ca{constructor(t="",e={}){if(t instanceof ca)return t;"number"==typeof t&&(t=function(t){return{r:t>>16,g:(65280&t)>>8,b:255&t}}(t)),this.originalInput=t;const o=function(t){let e={r:0,g:0,b:0},o=1,i=null,s=null,r=null,a=!1,n=!1;return"string"==typeof t&&(t=function(t){if(0===(t=t.trim().toLowerCase()).length)return!1;let e=!1;if(ia[t])t=ia[t],e=!0;else if("transparent"===t)return{r:0,g:0,b:0,a:0,format:"name"};let o=na.rgb.exec(t);return o?{r:o[1],g:o[2],b:o[3]}:(o=na.rgba.exec(t),o?{r:o[1],g:o[2],b:o[3],a:o[4]}:(o=na.hsl.exec(t),o?{h:o[1],s:o[2],l:o[3]}:(o=na.hsla.exec(t),o?{h:o[1],s:o[2],l:o[3],a:o[4]}:(o=na.hsv.exec(t),o?{h:o[1],s:o[2],v:o[3]}:(o=na.hsva.exec(t),o?{h:o[1],s:o[2],v:o[3],a:o[4]}:(o=na.cmyk.exec(t),o?{c:o[1],m:o[2],y:o[3],k:o[4]}:(o=na.hex8.exec(t),o?{r:oa(o[1]),g:oa(o[2]),b:oa(o[3]),a:ea(o[4]),format:e?"name":"hex8"}:(o=na.hex6.exec(t),o?{r:oa(o[1]),g:oa(o[2]),b:oa(o[3]),format:e?"name":"hex"}:(o=na.hex4.exec(t),o?{r:oa(o[1]+o[1]),g:oa(o[2]+o[2]),b:oa(o[3]+o[3]),a:ea(o[4]+o[4]),format:e?"name":"hex8"}:(o=na.hex3.exec(t),!!o&&{r:oa(o[1]+o[1]),g:oa(o[2]+o[2]),b:oa(o[3]+o[3]),format:e?"name":"hex"}))))))))))}(t)),"object"==typeof t&&(la(t.r)&&la(t.g)&&la(t.b)?(e=function(t,e,o){return{r:255*qr(t,255),g:255*qr(e,255),b:255*qr(o,255)}}(t.r,t.g,t.b),a=!0,n="%"===String(t.r).substr(-1)?"prgb":"rgb"):la(t.h)&&la(t.s)&&la(t.v)?(i=Kr(t.s),s=Kr(t.v),e=function(t,e,o){t=6*qr(t,360),e=qr(e,100),o=qr(o,100);const i=Math.floor(t),s=t-i,r=o*(1-e),a=o*(1-s*e),n=o*(1-(1-s)*e),l=i%6;return{r:255*[o,a,r,r,n,o][l],g:255*[n,o,o,a,r,r][l],b:255*[r,r,n,o,o,a][l]}}(t.h,i,s),a=!0,n="hsv"):la(t.h)&&la(t.s)&&la(t.l)?(i=Kr(t.s),r=Kr(t.l),e=function(t,e,o){let i,s,r;if(t=qr(t,360),e=qr(e,100),o=qr(o,100),0===e)s=o,r=o,i=o;else{const a=o<.5?o*(1+e):o+e-o*e,n=2*o-a;i=Gr(n,a,t+1/3),s=Gr(n,a,t),r=Gr(n,a,t-1/3)}return{r:255*i,g:255*s,b:255*r}}(t.h,i,r),a=!0,n="hsl"):la(t.c)&&la(t.m)&&la(t.y)&&la(t.k)&&(e=function(t,e,o,i){const s=i/100;return{r:255*(1-t/100)*(1-s),g:255*(1-e/100)*(1-s),b:255*(1-o/100)*(1-s)}}(t.c,t.m,t.y,t.k),a=!0,n="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(o=t.a)),o=Wr(o),{ok:a,format:t.format||n,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:o}}(t);this.originalInput=t,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=e.format??o.format,this.gradientType=e.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3}getLuminance(){const t=this.toRgb();let e,o,i;const s=t.r/255,r=t.g/255,a=t.b/255;return e=s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4),o=r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4),i=a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4),.2126*e+.7152*o+.0722*i}getAlpha(){return this.a}setAlpha(t){return this.a=Wr(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return 0===t}toHsv(){const t=Qr(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=Qr(this.r,this.g,this.b),e=Math.round(360*t.h),o=Math.round(100*t.s),i=Math.round(100*t.v);return 1===this.a?`hsv(${e}, ${o}%, ${i}%)`:`hsva(${e}, ${o}%, ${i}%, ${this.roundA})`}toHsl(){const t=Yr(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}}toHslString(){const t=Yr(this.r,this.g,this.b),e=Math.round(360*t.h),o=Math.round(100*t.s),i=Math.round(100*t.l);return 1===this.a?`hsl(${e}, ${o}%, ${i}%)`:`hsla(${e}, ${o}%, ${i}%, ${this.roundA})`}toHex(t=!1){return Zr(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return function(t,e,o,i,s){const r=[Xr(Math.round(t).toString(16)),Xr(Math.round(e).toString(16)),Xr(Math.round(o).toString(16)),Xr(ta(i))];return s&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))&&r[3].startsWith(r[3].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0)+r[3].charAt(0):r.join("")}(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return 1===this.a?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),e=Math.round(this.g),o=Math.round(this.b);return 1===this.a?`rgb(${t}, ${e}, ${o})`:`rgba(${t}, ${e}, ${o}, ${this.roundA})`}toPercentageRgb(){const t=t=>`${Math.round(100*qr(t,255))}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=t=>Math.round(100*qr(t,255));return 1===this.a?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toCmyk(){return{...Jr(this.r,this.g,this.b)}}toCmykString(){const{c:t,m:e,y:o,k:i}=Jr(this.r,this.g,this.b);return`cmyk(${t}, ${e}, ${o}, ${i})`}toName(){if(0===this.a)return"transparent";if(this.a<1)return!1;const t="#"+Zr(this.r,this.g,this.b,!1);for(const[e,o]of Object.entries(ia))if(t===o)return e;return!1}toString(t){const e=Boolean(t);t=t??this.format;let o=!1;const i=this.a<1&&this.a>=0;return e||!i||!t.startsWith("hex")&&"name"!==t?("rgb"===t&&(o=this.toRgbString()),"prgb"===t&&(o=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(o=this.toHexString()),"hex3"===t&&(o=this.toHexString(!0)),"hex4"===t&&(o=this.toHex8String(!0)),"hex8"===t&&(o=this.toHex8String()),"name"===t&&(o=this.toName()),"hsl"===t&&(o=this.toHslString()),"hsv"===t&&(o=this.toHsvString()),"cmyk"===t&&(o=this.toCmykString()),o||this.toHexString()):"name"===t&&0===this.a?this.toName():this.toRgbString()}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new ca(this.toString())}lighten(t=10){const e=this.toHsl();return e.l+=t/100,e.l=jr(e.l),new ca(e)}brighten(t=10){const e=this.toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(-t/100*255))),e.g=Math.max(0,Math.min(255,e.g-Math.round(-t/100*255))),e.b=Math.max(0,Math.min(255,e.b-Math.round(-t/100*255))),new ca(e)}darken(t=10){const e=this.toHsl();return e.l-=t/100,e.l=jr(e.l),new ca(e)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const e=this.toHsl();return e.s-=t/100,e.s=jr(e.s),new ca(e)}saturate(t=10){const e=this.toHsl();return e.s+=t/100,e.s=jr(e.s),new ca(e)}greyscale(){return this.desaturate(100)}spin(t){const e=this.toHsl(),o=(e.h+t)%360;return e.h=o<0?360+o:o,new ca(e)}mix(t,e=50){const o=this.toRgb(),i=new ca(t).toRgb(),s=e/100,r={r:(i.r-o.r)*s+o.r,g:(i.g-o.g)*s+o.g,b:(i.b-o.b)*s+o.b,a:(i.a-o.a)*s+o.a};return new ca(r)}analogous(t=6,e=30){const o=this.toHsl(),i=360/e,s=[this];for(o.h=(o.h-(i*t>>1)+720)%360;--t;)o.h=(o.h+i)%360,s.push(new ca(o));return s}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new ca(t)}monochromatic(t=6){const e=this.toHsv(),{h:o}=e,{s:i}=e;let{v:s}=e;const r=[],a=1/t;for(;t--;)r.push(new ca({h:o,s:i,v:s})),s=(s+a)%1;return r}splitcomplement(){const t=this.toHsl(),{h:e}=t;return[this,new ca({h:(e+72)%360,s:t.s,l:t.l}),new ca({h:(e+216)%360,s:t.s,l:t.l})]}onBackground(t){const e=this.toRgb(),o=new ca(t).toRgb(),i=e.a+o.a*(1-e.a);return new ca({r:(e.r*e.a+o.r*o.a*(1-e.a))/i,g:(e.g*e.a+o.g*o.a*(1-e.a))/i,b:(e.b*e.a+o.b*o.a*(1-e.a))/i,a:i})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const e=this.toHsl(),{h:o}=e,i=[this],s=360/t;for(let r=1;r<t;r++)i.push(new ca({h:(o+r*s)%360,s:e.s,l:e.l}));return i}equals(t){const e=new ca(t);return"cmyk"===this.format||"cmyk"===e.format?this.toCmykString()===e.toCmykString():this.toRgbString()===e.toRgbString()}}var da="EyeDropper"in window,ha=class extends de{constructor(){super(),this.formControlController=new C(this),this.isSafeValue=!1,this.localize=new Fe(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),o=e.querySelector(".color-picker__slider-handle"),{width:i}=e.getBoundingClientRect();let s=this.value,r=this.value;o.focus(),t.preventDefault(),ns(e,{onMove:t=>{this.alpha=Si(t/i*100,0,100),this.syncValues(),this.value!==r&&(r=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==s&&(s=this.value,this.emit("sl-change"))},initialEvent:t})}handleHueDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),o=e.querySelector(".color-picker__slider-handle"),{width:i}=e.getBoundingClientRect();let s=this.value,r=this.value;o.focus(),t.preventDefault(),ns(e,{onMove:t=>{this.hue=Si(t/i*360,0,360),this.syncValues(),this.value!==r&&(r=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==s&&(s=this.value,this.emit("sl-change"))},initialEvent:t})}handleGridDrag(t){const e=this.shadowRoot.querySelector(".color-picker__grid"),o=e.querySelector(".color-picker__grid-handle"),{width:i,height:s}=e.getBoundingClientRect();let r=this.value,a=this.value;o.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,ns(e,{onMove:(t,e)=>{this.saturation=Si(t/i*100,0,100),this.brightness=Si(100-e/s*100,0,100),this.syncValues(),this.value!==a&&(a=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:t})}handleAlphaKeyDown(t){const e=t.shiftKey?10:1,o=this.value;"ArrowLeft"===t.key&&(t.preventDefault(),this.alpha=Si(this.alpha-e,0,100),this.syncValues()),"ArrowRight"===t.key&&(t.preventDefault(),this.alpha=Si(this.alpha+e,0,100),this.syncValues()),"Home"===t.key&&(t.preventDefault(),this.alpha=0,this.syncValues()),"End"===t.key&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(t){const e=t.shiftKey?10:1,o=this.value;"ArrowLeft"===t.key&&(t.preventDefault(),this.hue=Si(this.hue-e,0,360),this.syncValues()),"ArrowRight"===t.key&&(t.preventDefault(),this.hue=Si(this.hue+e,0,360),this.syncValues()),"Home"===t.key&&(t.preventDefault(),this.hue=0,this.syncValues()),"End"===t.key&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(t){const e=t.shiftKey?10:1,o=this.value;"ArrowLeft"===t.key&&(t.preventDefault(),this.saturation=Si(this.saturation-e,0,100),this.syncValues()),"ArrowRight"===t.key&&(t.preventDefault(),this.saturation=Si(this.saturation+e,0,100),this.syncValues()),"ArrowUp"===t.key&&(t.preventDefault(),this.brightness=Si(this.brightness+e,0,100),this.syncValues()),"ArrowDown"===t.key&&(t.preventDefault(),this.brightness=Si(this.brightness-e,0,100),this.syncValues()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(t){const e=t.target,o=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value):this.value="",this.value!==o&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(t){this.formControlController.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if("Enter"===t.key){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleTouchMove(t){t.preventDefault()}parseColor(t){const e=new ca(t);if(!e.isValid)return null;const o=e.toHsl(),i={h:o.h,s:100*o.s,l:100*o.l,a:o.a},s=e.toRgb(),r=e.toHexString(),a=e.toHex8String(),n=e.toHsv(),l={h:n.h,s:100*n.s,v:100*n.v,a:n.a};return{hsl:{h:i.h,s:i.s,l:i.l,string:this.setLetterCase(`hsl(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%)`)},hsla:{h:i.h,s:i.s,l:i.l,a:i.a,string:this.setLetterCase(`hsla(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${i.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:s.r,g:s.g,b:s.b,string:this.setLetterCase(`rgb(${Math.round(s.r)}, ${Math.round(s.g)}, ${Math.round(s.b)})`)},rgba:{r:s.r,g:s.g,b:s.b,a:s.a,string:this.setLetterCase(`rgba(${Math.round(s.r)}, ${Math.round(s.g)}, ${Math.round(s.b)}, ${s.a.toFixed(2).toString()})`)},hex:this.setLetterCase(r),hexa:this.setLetterCase(a)}}setColor(t){const e=this.parseColor(t);return null!==e&&(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?100*e.hsva.a:100,this.syncValues(),!0)}setLetterCase(t){return"string"!=typeof t?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);null!==t&&("hsl"===this.format?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:"rgb"===this.format?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:"hsv"===this.format?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){da&&(new EyeDropper).open().then(t=>{const e=this.value;this.setColor(t.sRGBHex),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(t){const e=this.value;this.disabled||(this.setColor(t),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(t,e,o,i=100){const s=new ca(`hsva(${t}, ${e}%, ${o}%, ${i/100})`);return s.isValid?s.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const o=this.parseColor(e);null!==o?(this.inputValue=this.value,this.hue=o.hsva.h,this.saturation=o.hsva.s,this.brightness=o.hsva.v,this.alpha=100*o.hsva.a,this.syncValues()):this.inputValue=null!=t?t:""}}focus(t){this.inline?this.base.focus(t):this.trigger.focus(t)}blur(){var t;const e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),(null==(t=this.dropdown)?void 0:t.open)&&this.dropdown.hide()}getFormattedValue(t="hex"){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(null===e)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.inline||this.validity.valid?this.input.reportValidity():(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1)}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.saturation,e=100-this.brightness,o=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(t=>""!==t.trim()),i=vt`
      <div
        part="base"
        class=${_e({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?vt`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${_s({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${_e({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${_s({top:`${e}%`,left:`${t}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${xe(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${_s({left:(0===this.hue?0:100/(360/this.hue))+"%"})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${xe(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?vt`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${_s({backgroundImage:`linear-gradient(\n                          to right,\n                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,\n                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%\n                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${_s({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${xe(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${_s({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":vt`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${da?vt`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${o.length>0?vt`
              <div part="swatches" class="color-picker__swatches">
                ${o.map(t=>{const e=this.parseColor(t);return e?vt`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${xe(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${t}
                      @click=${()=>this.selectSwatch(t)}
                      @keydown=${t=>!this.disabled&&"Enter"===t.key&&this.setColor(e.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${_s({backgroundColor:e.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${t}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?i:vt`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containingElement=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${_e({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":"small"===this.size,"color-dropdown__trigger--medium":"medium"===this.size,"color-dropdown__trigger--large":"large"===this.size,"color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${_s({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${i}
      </sl-dropdown>
    `}};ha.styles=[ee,Hr],ha.dependencies={"sl-button-group":Ts,"sl-button":Ur,"sl-dropdown":Mr,"sl-icon":ve,"sl-input":Qs,"sl-visually-hidden":Di},b([le('[part~="base"]')],ha.prototype,"base",2),b([le('[part~="input"]')],ha.prototype,"input",2),b([le(".color-dropdown")],ha.prototype,"dropdown",2),b([le('[part~="preview"]')],ha.prototype,"previewButton",2),b([le('[part~="trigger"]')],ha.prototype,"trigger",2),b([re()],ha.prototype,"hasFocus",2),b([re()],ha.prototype,"isDraggingGridHandle",2),b([re()],ha.prototype,"isEmpty",2),b([re()],ha.prototype,"inputValue",2),b([re()],ha.prototype,"hue",2),b([re()],ha.prototype,"saturation",2),b([re()],ha.prototype,"brightness",2),b([re()],ha.prototype,"alpha",2),b([se()],ha.prototype,"value",2),b([Ut()],ha.prototype,"defaultValue",2),b([se()],ha.prototype,"label",2),b([se()],ha.prototype,"format",2),b([se({type:Boolean,reflect:!0})],ha.prototype,"inline",2),b([se({reflect:!0})],ha.prototype,"size",2),b([se({attribute:"no-format-toggle",type:Boolean})],ha.prototype,"noFormatToggle",2),b([se()],ha.prototype,"name",2),b([se({type:Boolean,reflect:!0})],ha.prototype,"disabled",2),b([se({type:Boolean})],ha.prototype,"hoist",2),b([se({type:Boolean})],ha.prototype,"opacity",2),b([se({type:Boolean})],ha.prototype,"uppercase",2),b([se()],ha.prototype,"swatches",2),b([se({reflect:!0})],ha.prototype,"form",2),b([se({type:Boolean,reflect:!0})],ha.prototype,"required",2),b([ae({passive:!1})],ha.prototype,"handleTouchMove",1),b([te("format",{waitUntilFirstUpdate:!0})],ha.prototype,"handleFormatChange",1),b([te("opacity",{waitUntilFirstUpdate:!0})],ha.prototype,"handleOpacityChange",1),b([te("value")],ha.prototype,"handleValueChange",1),ha.define("sl-color-picker");var ua=L`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,pa=class extends de{constructor(){super(...arguments),this.hasSlotController=new jt(this,"footer","header","image")}render(){return vt`
      <div
        part="base"
        class=${_e({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};pa.styles=[ee,ua],pa.define("sl-card");var fa=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},ma=L`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,ba=class extends de{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new fa(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new Fe(this),this.pendingSlideChange=!1,this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[t.clientX,t.clientY]),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const e=t.scrollLeft,o=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");const i=t.scrollLeft,s=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:o,behavior:"instant"}),requestAnimationFrame(async()=>{e===i&&o===s||(t.scrollTo({left:i,top:s,behavior:We()?"auto":"smooth"}),await Ci(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=t=>{t.some(t=>[...t.addedNodes,...t.removedNodes].some(t=>this.isCarouselItem(t)&&!t.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.mutationObserver)||t.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:o,loop:i}=this,s=i?t/o:(t-e)/o+1;return Math.ceil(s)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleClick(t){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const e=Math.abs(this.dragStartPosition[0]-t.clientX),o=Math.abs(this.dragStartPosition[1]-t.clientY);Math.sqrt(e*e+o*o)>=10&&t.preventDefault()}}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=t.target,o="rtl"===this.localize.dir(),i=null!==e.closest('[part~="pagination-item"]'),s="ArrowDown"===t.key||!o&&"ArrowRight"===t.key||o&&"ArrowLeft"===t.key,r="ArrowUp"===t.key||!o&&"ArrowLeft"===t.key||o&&"ArrowRight"===t.key;t.preventDefault(),r&&this.previous(),s&&this.next(),"Home"===t.key&&this.goToSlide(0),"End"===t.key&&this.goToSlide(this.getSlides().length-1),i&&this.updateComplete.then(()=>{var t;const e=null==(t=this.shadowRoot)?void 0:t.querySelector('[part~="pagination-item--active"]');e&&e.focus()})}}handleMouseDragStart(t){this.mouseDragging&&0===t.button&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const t=new IntersectionObserver(e=>{t.disconnect();for(const t of e){const e=t.target;e.toggleAttribute("inert",!t.isIntersecting),e.classList.toggle("--in-view",t.isIntersecting),e.setAttribute("aria-hidden",t.isIntersecting?"false":"true")}const o=e.find(t=>t.isIntersecting);if(!o)return;const i=this.getSlides({excludeClones:!1}),s=this.getSlides().length,r=i.indexOf(o.target),a=this.loop?r-this.slidesPerPage:r;if(this.activeSlide=(Math.ceil(a/this.slidesPerMove)*this.slidesPerMove+s)%s,!this.scrolling&&this.loop&&o.target.hasAttribute("data-clone")){const t=Number(o.target.getAttribute("data-clone"));this.goToSlide(t,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)})}handleScrollEnd(){this.scrolling&&!this.dragging&&(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(t){return t instanceof Element&&"sl-carousel-item"===t.tagName.toLowerCase()}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((t,e)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("role","group"),t.setAttribute("aria-label",this.localize.term("slideNum",e+1)),this.pagination&&(t.setAttribute("id",`slide-${e+1}`),t.setAttribute("role","tabpanel"),t.removeAttribute("aria-label"),t.setAttribute("aria-labelledby",`tab-${e+1}`)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const t=this.getSlides(),e=this.slidesPerPage,o=t.slice(-e),i=t.slice(0,e);o.reverse().forEach((e,o)=>{const i=e.cloneNode(!0);i.setAttribute("data-clone",String(t.length-o-1)),this.prepend(i)}),i.forEach((t,e)=>{const o=t.cloneNode(!0);o.setAttribute("data-clone",String(e)),this.append(o)})}handleSlideChange(){const t=this.getSlides();t.forEach((t,e)=>{t.classList.toggle("--is-active",e===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:t[this.activeSlide]}})}updateSlidesSnap(){const t=this.getSlides(),e=this.slidesPerMove;t.forEach((t,o)=>{(o+e)%e===0?t.style.removeProperty("scroll-snap-align"):t.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){const{slidesPerPage:o,loop:i}=this,s=this.getSlides(),r=this.getSlides({excludeClones:!1});if(!s.length)return;const a=i?(t+s.length)%s.length:Si(t,0,s.length-o);this.activeSlide=a;const n=r[Si(t+(i?o:0)+("rtl"===this.localize.dir()?o-1:0),0,r.length-1)];this.scrollToSlide(n,We()?"auto":e)}scrollToSlide(t,e="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const o=this.scrollContainer,i=o.getBoundingClientRect(),s=t.getBoundingClientRect(),r=s.left-i.left,a=s.top-i.top;r||a?(this.pendingSlideChange=!0,o.scrollTo({left:r+o.scrollLeft,top:a+o.scrollTop,behavior:e})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:t,scrolling:e}=this,o=this.getPageCount(),i=this.getCurrentPage(),s=this.canScrollPrev(),r=this.canScrollNext(),a="ltr"===this.localize.dir();return vt`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${_e({carousel__slides:!0,"carousel__slides--horizontal":"horizontal"===this.orientation,"carousel__slides--vertical":"vertical"===this.orientation,"carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${e?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
          @click=${this.handleClick}
        >
          <slot></slot>
        </div>

        ${this.navigation?vt`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${_e({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!s})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${s?"false":"true"}"
                  @click=${s?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${a?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${_e({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!r})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${r?"false":"true"}"
                  @click=${r?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${a?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?vt`
              <div part="pagination" role="tablist" class="carousel__pagination">
                ${function*(t,e){if(void 0!==t){let o=0;for(const i of t)yield e(i,o++)}}(function*(t,e,o=1){const i=void 0===e?0:t;e??=t;for(let t=i;o>0?t<e:e<t;t+=o)yield t}(o),e=>{const s=e===i;return vt`
                    <button
                      part="pagination-item ${s?"pagination-item--active":""}"
                      class="${_e({"carousel__pagination-item":!0,"carousel__pagination-item--active":s})}"
                      role="tab"
                      id="tab-${e+1}"
                      aria-controls="slide-${e+1}"
                      aria-selected="${s?"true":"false"}"
                      aria-label="${s?this.localize.term("slideNum",e+1):this.localize.term("goToSlide",e+1,o)}"
                      tabindex=${s?"0":"-1"}
                      @click=${()=>this.goToSlide(e*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};ba.styles=[ee,ma],ba.dependencies={"sl-icon":ve},b([se({type:Boolean,reflect:!0})],ba.prototype,"loop",2),b([se({type:Boolean,reflect:!0})],ba.prototype,"navigation",2),b([se({type:Boolean,reflect:!0})],ba.prototype,"pagination",2),b([se({type:Boolean,reflect:!0})],ba.prototype,"autoplay",2),b([se({type:Number,attribute:"autoplay-interval"})],ba.prototype,"autoplayInterval",2),b([se({type:Number,attribute:"slides-per-page"})],ba.prototype,"slidesPerPage",2),b([se({type:Number,attribute:"slides-per-move"})],ba.prototype,"slidesPerMove",2),b([se()],ba.prototype,"orientation",2),b([se({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],ba.prototype,"mouseDragging",2),b([le(".carousel__slides")],ba.prototype,"scrollContainer",2),b([le(".carousel__pagination")],ba.prototype,"paginationContainer",2),b([re()],ba.prototype,"activeSlide",2),b([re()],ba.prototype,"scrolling",2),b([re()],ba.prototype,"dragging",2),b([ae({passive:!0})],ba.prototype,"handleScroll",1),b([te("loop",{waitUntilFirstUpdate:!0}),te("slidesPerPage",{waitUntilFirstUpdate:!0})],ba.prototype,"initializeSlides",1),b([te("activeSlide")],ba.prototype,"handleSlideChange",1),b([te("slidesPerMove")],ba.prototype,"updateSlidesSnap",1),b([te("autoplay")],ba.prototype,"handleAutoplayChange",1),ba.define("sl-carousel");var ga=(t,e)=>{let o=0;return function(...i){window.clearTimeout(o),o=window.setTimeout(()=>{t.call(this,...i)},e)}},va=(t,e,o)=>{const i=t[e];t[e]=function(...t){i.call(this,...t),o.call(this,i,...t)}};(()=>{if("undefined"!=typeof window&&!("onscrollend"in window)){const t=new Set,e=new WeakMap,o=e=>{for(const o of e.changedTouches)t.add(o.identifier)},i=e=>{for(const o of e.changedTouches)t.delete(o.identifier)};document.addEventListener("touchstart",o,!0),document.addEventListener("touchend",i,!0),document.addEventListener("touchcancel",i,!0),va(EventTarget.prototype,"addEventListener",function(o,i){if("scrollend"!==i)return;const s=ga(()=>{t.size?s():this.dispatchEvent(new Event("scrollend"))},100);o.call(this,"scroll",s,{passive:!0}),e.set(this,s)}),va(EventTarget.prototype,"removeEventListener",function(t,o){if("scrollend"!==o)return;const i=e.get(this);i&&t.call(this,"scroll",i,{passive:!0})})}})();var ya=L`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,wa=class extends de{connectedCallback(){super.connectedCallback()}render(){return vt` <slot></slot> `}};wa.styles=[ee,ya],wa.define("sl-carousel-item");var _a=L`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,xa=class extends de{constructor(){super(...arguments),this.hasSlotController=new jt(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const t=this.defaultSlot.assignedElements({flatten:!0}).filter(t=>"sl-dropdown"===t.tagName.toLowerCase()).length>0;this.href?this.renderType="link":this.renderType=t?"dropdown":"button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return vt`
      <div
        part="base"
        class=${_e({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${"link"===this.renderType?vt`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${xe(this.target?this.target:void 0)}"
                rel=${xe(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${"button"===this.renderType?vt`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${"dropdown"===this.renderType?vt`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:""}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};xa.styles=[ee,_a],b([le("slot:not([name])")],xa.prototype,"defaultSlot",2),b([re()],xa.prototype,"renderType",2),b([se()],xa.prototype,"href",2),b([se()],xa.prototype,"target",2),b([se()],xa.prototype,"rel",2),b([te("href",{waitUntilFirstUpdate:!0})],xa.prototype,"hrefChanged",1),xa.define("sl-breadcrumb-item"),Ts.define("sl-button-group");var ka=L`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,Ca=class extends de{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const t=vt`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let e=vt``;return e=this.initials?vt`<div part="initials" class="avatar__initials">${this.initials}</div>`:vt`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,vt`
      <div
        part="base"
        class=${_e({avatar:!0,"avatar--circle":"circle"===this.shape,"avatar--rounded":"rounded"===this.shape,"avatar--square":"square"===this.shape})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};Ca.styles=[ee,ka],Ca.dependencies={"sl-icon":ve},b([re()],Ca.prototype,"hasError",2),b([se()],Ca.prototype,"image",2),b([se()],Ca.prototype,"label",2),b([se()],Ca.prototype,"initials",2),b([se()],Ca.prototype,"loading",2),b([se({reflect:!0})],Ca.prototype,"shape",2),b([te("image")],Ca.prototype,"handleImageChange",1),Ca.define("sl-avatar");var $a=L`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,za=class extends de{constructor(){super(...arguments),this.localize=new Fe(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(t=>t.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>"sl-breadcrumb-item"===t.tagName.toLowerCase());t.forEach((e,o)=>{const i=e.querySelector('[slot="separator"]');null===i?e.append(this.getSeparator()):i.hasAttribute("data-default")&&i.replaceWith(this.getSeparator()),o===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),vt`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${"rtl"===this.localize.dir()?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};za.styles=[ee,$a],za.dependencies={"sl-icon":ve},b([le("slot")],za.prototype,"defaultSlot",2),b([le('slot[name="separator"]')],za.prototype,"separatorSlot",2),b([se()],za.prototype,"label",2),za.define("sl-breadcrumb"),Ur.define("sl-button");var Sa=L`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,Aa=class extends de{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const t=document.createElement("canvas"),{width:e,height:o}=this.animatedImage;t.width=e,t.height=o,t.getContext("2d").drawImage(this.animatedImage,0,0,e,o),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return vt`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?vt`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};Aa.styles=[ee,Sa],Aa.dependencies={"sl-icon":ve},b([le(".animated-image__animated")],Aa.prototype,"animatedImage",2),b([re()],Aa.prototype,"frozenFrame",2),b([re()],Aa.prototype,"isLoaded",2),b([se()],Aa.prototype,"src",2),b([se()],Aa.prototype,"alt",2),b([se({type:Boolean,reflect:!0})],Aa.prototype,"play",2),b([te("play",{waitUntilFirstUpdate:!0})],Aa.prototype,"handlePlayChange",1),b([te("src")],Aa.prototype,"handleSrcChange",1),Aa.define("sl-animated-image");var Ea=L`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,Ta=class extends de{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return vt`
      <span
        part="base"
        class=${_e({badge:!0,"badge--primary":"primary"===this.variant,"badge--success":"success"===this.variant,"badge--neutral":"neutral"===this.variant,"badge--warning":"warning"===this.variant,"badge--danger":"danger"===this.variant,"badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Ta.styles=[ee,Ea],b([se({reflect:!0})],Ta.prototype,"variant",2),b([se({type:Boolean,reflect:!0})],Ta.prototype,"pill",2),b([se({type:Boolean,reflect:!0})],Ta.prototype,"pulse",2),Ta.define("sl-badge");var Da=L`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    margin-inline-end: var(--sl-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,Ia=class t extends de{constructor(){super(...arguments),this.hasSlotController=new jt(this,"icon","suffix"),this.localize=new Fe(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;null==(t=this.countdownAnimation)||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),null==(t=this.countdownAnimation)||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:t}=this,e="100%",o="0";this.countdownAnimation=t.animate([{width:e},{width:o}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Ke(this.base),this.base.hidden=!1;const{keyframes:t,options:e}=Ue(this,"alert.show",{dir:this.localize.dir()});await qe(this.base,t,e),this.emit("sl-after-show")}else{Dr(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await Ke(this.base);const{keyframes:t,options:e}=Ue(this,"alert.hide",{dir:this.localize.dir()});await qe(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Ci(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ci(this,"sl-after-hide")}async toast(){return new Promise(e=>{this.handleCountdownChange(),null===t.toastStack.parentElement&&document.body.append(t.toastStack),t.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{t.toastStack.removeChild(this),e(),null===t.toastStack.querySelector("sl-alert")&&t.toastStack.remove()},{once:!0})})}render(){return vt`
      <div
        part="base"
        class=${_e({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":"primary"===this.variant,"alert--success":"success"===this.variant,"alert--neutral":"neutral"===this.variant,"alert--warning":"warning"===this.variant,"alert--danger":"danger"===this.variant})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?vt`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?vt`
              <div
                class=${_e({alert__countdown:!0,"alert__countdown--ltr":"ltr"===this.countdown})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};Ia.styles=[ee,Da],Ia.dependencies={"sl-icon-button":Ui},b([le('[part~="base"]')],Ia.prototype,"base",2),b([le(".alert__countdown-elapsed")],Ia.prototype,"countdownElement",2),b([se({type:Boolean,reflect:!0})],Ia.prototype,"open",2),b([se({type:Boolean,reflect:!0})],Ia.prototype,"closable",2),b([se({reflect:!0})],Ia.prototype,"variant",2),b([se({type:Number})],Ia.prototype,"duration",2),b([se({type:String,reflect:!0})],Ia.prototype,"countdown",2),b([re()],Ia.prototype,"remainingTime",2),b([te("open",{waitUntilFirstUpdate:!0})],Ia.prototype,"handleOpenChange",1),b([te("duration")],Ia.prototype,"handleDurationChange",1);var La=Ia;He("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),He("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),La.define("sl-alert");const Oa=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],Ma=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],Pa=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],Fa=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],Ra=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Va=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Ba=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Na=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ha=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ua=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],qa=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],ja=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Wa=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ka=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Xa=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Ya=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Ga=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Qa=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Za=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],Ja=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],tn=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],en=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],on=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],sn=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],rn=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],an=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],nn=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],ln=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],cn=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],dn=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],hn=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],un=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],pn=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fn=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],mn=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],bn=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],gn=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],vn=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],yn=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],wn=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],_n=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],xn=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],kn=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Cn=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],$n=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],zn=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],Sn=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],An=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],En=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],Tn=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],Dn=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],In=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],Ln=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],On=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],Mn=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],Pn=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],Fn=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],Rn=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -190deg)",easing:"ease-out"},{offset:.5,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -170deg)",easing:"ease-in"},{offset:.8,transform:"perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, 0deg)",easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],Vn=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Bn=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Nn=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],Hn=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],Un=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],qn=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],jn=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],Wn=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],Kn=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Xn=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Yn=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Gn=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Qn=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Zn=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],Jn=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],tl=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],el=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],ol=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],il=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],sl=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],rl=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],al=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],nl=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],ll=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],cl=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],dl=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],hl=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],ul=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],pl=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fl=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],ml=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],bl=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],gl=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],vl=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],yl=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],wl=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],_l=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],xl=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],kl=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],Cl=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],$l={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"};var zl=L`
  :host {
    display: contents;
  }
`,Sl=class extends de{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var t,e;return null!=(e=null==(t=this.animation)?void 0:t.currentTime)?e:0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var t,e;const o=null!=(t=$l[this.easing])?t:this.easing,s=null!=(e=this.keyframes)?e:i[this.name],r=(await this.defaultSlot).assignedElements()[0];return!(!r||!s||(this.destroyAnimation(),this.animation=r.animate(s,{delay:this.delay,direction:this.direction,duration:this.duration,easing:o,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),0))}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return!!this.animation&&(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0)}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var t;null==(t=this.animation)||t.cancel()}finish(){var t;null==(t=this.animation)||t.finish()}render(){return vt` <slot @slotchange=${this.handleSlotChange}></slot> `}};Sl.styles=[ee,zl],b([(t,e)=>ne(t,e,{async get(){return await this.updateComplete,this.renderRoot?.querySelector("slot")??null}})],Sl.prototype,"defaultSlot",2),b([se()],Sl.prototype,"name",2),b([se({type:Boolean,reflect:!0})],Sl.prototype,"play",2),b([se({type:Number})],Sl.prototype,"delay",2),b([se()],Sl.prototype,"direction",2),b([se({type:Number})],Sl.prototype,"duration",2),b([se()],Sl.prototype,"easing",2),b([se({attribute:"end-delay",type:Number})],Sl.prototype,"endDelay",2),b([se()],Sl.prototype,"fill",2),b([se({type:Number})],Sl.prototype,"iterations",2),b([se({attribute:"iteration-start",type:Number})],Sl.prototype,"iterationStart",2),b([se({attribute:!1})],Sl.prototype,"keyframes",2),b([se({attribute:"playback-rate",type:Number})],Sl.prototype,"playbackRate",2),b([te(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Sl.prototype,"handleAnimationChange",1),b([te("play")],Sl.prototype,"handlePlayChange",1),b([te("playbackRate")],Sl.prototype,"handlePlaybackRateChange",1),Sl.define("sl-animation");var Al=o(72),El=o.n(Al),Tl=o(825),Dl=o.n(Tl),Il=o(659),Ll=o.n(Il),Ol=o(56),Ml=o.n(Ol),Pl=o(540),Fl=o.n(Pl),Rl=o(113),Vl=o.n(Rl),Bl=o(495),Nl={};Nl.styleTagTransform=Vl(),Nl.setAttributes=Ml(),Nl.insert=Ll().bind(null,"head"),Nl.domAPI=Dl(),Nl.insertStyleElement=Fl(),El()(Bl.A,Nl),Bl.A&&Bl.A.locals&&Bl.A.locals,Kt("/lib/shoelace")})();