import type { ThumbKind } from '../data/tools';

interface ToolThumbProps {
  kind: ThumbKind;
  dimmed?: boolean;
}

const nodePositions = [
  [76, 54], [146, 42], [222, 62], [55, 118], [138, 112], [232, 124],
  [76, 190], [148, 204], [222, 182], [114, 79], [184, 88], [115, 158], [188, 160],
];

function CrystalThumb() {
  const back = 'M76 54 146 42 222 62 222 182 148 204 76 190Z';
  const front = 'M55 118 138 112 232 124 232 124 222 182 148 204 76 190 55 118Z';
  return (
    <>
      <defs>
        <radialGradient id="crystal-node" cx="32%" cy="25%" r="72%">
          <stop offset="0" stopColor="#b9e5ff" />
          <stop offset=".24" stopColor="#3aa8ff" />
          <stop offset="1" stopColor="#075dbb" />
        </radialGradient>
        <radialGradient id="crystal-glow">
          <stop stopColor="#168dff" stopOpacity=".36" />
          <stop offset="1" stopColor="#168dff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="148" cy="212" rx="104" ry="18" fill="url(#crystal-glow)" />
      <g fill="none" stroke="#49a8ff" strokeOpacity=".68" strokeWidth="1.2">
        <path d={back} />
        <path d={front} />
        <path d="M76 54 55 118M146 42 138 112M222 62 232 124M76 190 138 112 222 182M55 118 148 204 232 124M76 54 138 112 222 62M146 42 138 112 148 204" />
      </g>
      {nodePositions.map(([cx, cy], index) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r={index % 4 === 0 ? 15 : 11} fill="#168dff" opacity=".16" />
          <circle cx={cx} cy={cy} r={index % 4 === 0 ? 9 : 7} fill="url(#crystal-node)" stroke="#75c5ff" strokeWidth=".7" />
        </g>
      ))}
    </>
  );
}

function TernaryThumb() {
  return (
    <>
      <defs>
        <radialGradient id="ternary-fill" cx="50%" cy="68%" r="65%">
          <stop offset="0" stopColor="#ff3c24" />
          <stop offset=".2" stopColor="#ff9f1c" />
          <stop offset=".42" stopColor="#f0e833" />
          <stop offset=".62" stopColor="#28d674" />
          <stop offset=".82" stopColor="#168dff" />
          <stop offset="1" stopColor="#6747c7" />
        </radialGradient>
        <clipPath id="ternary-clip">
          <path d="M150 22 35 211h230Z" />
        </clipPath>
      </defs>
      <path d="M150 22 35 211h230Z" fill="url(#ternary-fill)" opacity=".9" />
      <g clipPath="url(#ternary-clip)" stroke="#e9f5ff" strokeOpacity=".36" strokeWidth=".8">
        {[54, 81, 108, 135, 162, 189].map((y, index) => {
          const half = ((y - 22) / 189) * 115;
          return <path d={`M${150 - half} ${y}H${150 + half}`} key={y} />;
        })}
        {[0, 1, 2, 3, 4, 5, 6].map((index) => (
          <path d={`M${35 + index * 19.15} 211 ${150 + index * 19.15} 22`} key={`r-${index}`} />
        ))}
        {[0, 1, 2, 3, 4, 5, 6].map((index) => (
          <path d={`M${265 - index * 19.15} 211 ${150 - index * 19.15} 22`} key={`l-${index}`} />
        ))}
      </g>
      <path d="M150 22 35 211h230Z" fill="none" stroke="#d9eeff" strokeWidth="1.7" />
      <g fill="#dcecff" fontSize="15" fontWeight="600">
        <text x="150" y="16" textAnchor="middle">A</text>
        <text x="23" y="224" textAnchor="middle">B</text>
        <text x="277" y="224" textAnchor="middle">C</text>
      </g>
    </>
  );
}

function IronCarbonThumb() {
  return (
    <>
      <defs>
        <linearGradient id="fec-hot" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#7045a9" stopOpacity=".52" />
          <stop offset="1" stopColor="#f28a31" stopOpacity=".22" />
        </linearGradient>
      </defs>
      <g transform="translate(45 16)">
        <path d="M0 0V178H226" fill="none" stroke="#8ba4c2" strokeWidth="1.2" />
        <path d="M0 12 58 72 126 75 181 40 226 8V178H0Z" fill="url(#fec-hot)" />
        <path d="M0 12 58 72 126 75 181 40 226 8M58 72 40 126 104 148 181 40M40 126 0 142M104 148 226 89M181 40 226 8M0 178 40 126 104 148 226 89" fill="none" stroke="#29b6ff" strokeWidth="1.1" />
        <path d="M0 12 126 75 181 40" fill="none" stroke="#c674ff" strokeWidth="1.1" />
        <path d="M40 126c28 18 53 22 64 22 18 0 43-13 62-24" fill="none" stroke="#e8ce3a" strokeWidth="1" />
        <g stroke="#72869d" strokeWidth=".75">
          {[0, 45, 89, 134, 178].map((y) => <path d={`M-4 ${y}H0`} key={y} />)}
          {[0, 34, 68, 102, 136, 170, 204, 226].map((x) => <path d={`M${x} 178v4`} key={x} />)}
        </g>
        <g fill="#aab9c9" fontSize="9.5">
          <text x="-10" y="4" textAnchor="end">1600</text>
          <text x="-10" y="49" textAnchor="end">1200</text>
          <text x="-10" y="93" textAnchor="end">800</text>
          <text x="-10" y="138" textAnchor="end">400</text>
          <text x="0" y="193" textAnchor="middle">0</text>
          <text x="34" y="193" textAnchor="middle">1</text>
          <text x="68" y="193" textAnchor="middle">2</text>
          <text x="102" y="193" textAnchor="middle">3</text>
          <text x="136" y="193" textAnchor="middle">4</text>
          <text x="170" y="193" textAnchor="middle">5</text>
          <text x="204" y="193" textAnchor="middle">6</text>
          <text x="226" y="193" textAnchor="middle">6.69</text>
        </g>
        <g fill="#d7e8f7" fontSize="11">
          <text x="121" y="29">L</text>
          <text x="71" y="61">L + γ</text>
          <text x="24" y="96">γ</text>
          <text x="112" y="103">γ + Fe₃C</text>
          <text x="62" y="164">α + Fe₃C</text>
        </g>
        <text x="-37" y="8" fill="#aab9c9" fontSize="10">温度 (°C)</text>
        <text x="113" y="211" fill="#aab9c9" fontSize="10" textAnchor="middle">碳含量 (wt%)</text>
      </g>
    </>
  );
}

function PlaneThumb() {
  return (
    <>
      <defs>
        <linearGradient id="plane-fill" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#1588ff" stopOpacity=".68" />
          <stop offset="1" stopColor="#075dbb" stopOpacity=".2" />
        </linearGradient>
        <marker id="plane-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0 0 7 3.5 0 7Z" fill="#2aa4ff" />
        </marker>
      </defs>
      <g fill="none" stroke="#8fb1d4" strokeWidth="1.15">
        <path d="M72 65 182 42 240 85 130 110ZM72 65v110l58 35 110-25V85M130 110v100M72 175l110-24 58 34M182 42v109" />
      </g>
      <path d="M72 65 130 210 215 191Z" fill="url(#plane-fill)" stroke="#178cff" strokeWidth="1.2" />
      <g fill="#8fcaff">
        {[72, 182, 240, 130, 72, 130, 240, 182].map((cx, index) => {
          const cy = [65, 42, 85, 110, 175, 210, 185, 151][index];
          return <circle cx={cx} cy={cy} r="5.5" key={`${cx}-${cy}`} />;
        })}
      </g>
      <g stroke="#2aa4ff" strokeWidth="1.4" markerEnd="url(#plane-arrow)">
        <path d="M72 175 35 199" />
        <path d="M72 175 72 127" />
        <path d="M72 175 120 190" />
        <path d="M130 174 218 125" />
      </g>
      <g fill="#d7e8f7" fontSize="11">
        <text x="24" y="208">x</text>
        <text x="65" y="120">z</text>
        <text x="125" y="198">y</text>
        <text x="222" y="123">[111]</text>
      </g>
    </>
  );
}

function CalcThumb() {
  const atoms = [
    [43, 83, 10], [76, 59, 13], [111, 75, 10], [151, 53, 14], [190, 70, 11], [234, 55, 12],
    [58, 126, 12], [101, 116, 14], [142, 106, 10], [179, 126, 15], [222, 111, 12],
    [42, 173, 11], [83, 162, 13], [124, 177, 14], [164, 159, 12], [207, 175, 14], [249, 151, 11],
  ];
  const edges = [[0,1],[0,6],[1,2],[1,6],[1,7],[2,3],[2,7],[2,8],[3,4],[3,8],[3,9],[4,5],[4,9],[4,10],[5,10],[6,7],[6,11],[6,12],[7,8],[7,12],[8,9],[8,13],[8,14],[9,10],[9,14],[9,15],[10,16],[11,12],[12,13],[13,14],[14,15],[15,16]];
  return (
    <>
      <defs>
        <radialGradient id="calc-atom" cx="30%" cy="24%" r="70%">
          <stop stopColor="#9eb0c5" />
          <stop offset=".26" stopColor="#46586c" />
          <stop offset="1" stopColor="#152331" />
        </radialGradient>
      </defs>
      <g stroke="#6e8298" strokeOpacity=".55" strokeWidth="1.2">
        {edges.map(([from, to]) => <line x1={atoms[from][0]} y1={atoms[from][1]} x2={atoms[to][0]} y2={atoms[to][1]} key={`${from}-${to}`} />)}
      </g>
      {atoms.map(([cx, cy, r], index) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r={r + 6} fill="#54708b" opacity=".08" />
          <circle cx={cx} cy={cy} r={r} fill="url(#calc-atom)" stroke="#688098" strokeWidth=".5" />
        </g>
      ))}
    </>
  );
}

function XrdThumb() {
  const ticks = [10, 20, 30, 40, 50, 60, 70, 80];
  return (
    <>
      <g transform="translate(42 22)">
        <path d="M0 0V174H229" fill="none" stroke="#8ba4c2" strokeWidth="1.2" />
        <path
          d="M0 163 18 163 23 160 28 161 31 157 34 117 37 155 41 162 60 162 63 158 66 25 69 150 74 160 89 161 92 156 96 83 100 155 104 161 119 161 122 158 127 116 131 155 136 161 145 161 148 153 152 126 156 156 161 161 173 161 176 156 181 100 185 154 190 160 198 160 202 133 206 158 212 162 229 162"
          fill="none"
          stroke="#b9dcff"
          strokeWidth="1.25"
          strokeLinejoin="round"
        />
        <path d="M66 25V162" stroke="#1588ff" strokeOpacity=".22" strokeWidth="7" />
        <g fill="#9fb0c2" fontSize="9.5">
          {ticks.map((tick, index) => (
            <g key={tick}>
              <path d={`M${index * 31.7} 174v4`} stroke="#71859a" />
              <text x={index * 31.7} y="191" textAnchor="middle">{tick}</text>
            </g>
          ))}
          <text x="114" y="210" textAnchor="middle">2θ (°)</text>
          <text x="-15" y="92" textAnchor="middle" transform="rotate(-90 -15 92)">强度 (a.u.)</text>
        </g>
      </g>
    </>
  );
}

export function ToolThumb({ kind, dimmed = false }: ToolThumbProps) {
  const drawing = {
    crystal: <CrystalThumb />,
    ternary: <TernaryThumb />,
    fec: <IronCarbonThumb />,
    plane: <PlaneThumb />,
    calc: <CalcThumb />,
    xrd: <XrdThumb />,
  }[kind];

  return (
    <svg
      className={`tool-thumb${dimmed ? ' tool-thumb-dimmed' : ''}`}
      viewBox="0 0 300 240"
      role="img"
      aria-label={`${kind} 工具示意图`}
    >
      {drawing}
    </svg>
  );
}
