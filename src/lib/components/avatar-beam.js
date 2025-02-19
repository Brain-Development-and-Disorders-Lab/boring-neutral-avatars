import * as React from 'react';
import { hashCode, getUnit, getBoolean, getRandomColor, getContrast } from '../utilities';

const SIZE = 36;

function generateData(name, colors) {
  const numFromName = hashCode(name);
  const range = colors && colors.length;
  const wrapperColor = getRandomColor(numFromName, colors, range);
  const preTranslateX = getUnit(numFromName, 10, 1);
  const wrapperTranslateX = preTranslateX < 5 ? preTranslateX + SIZE / 9 : preTranslateX;
  const preTranslateY = getUnit(numFromName, 10, 2);
  const wrapperTranslateY = preTranslateY < 5 ? preTranslateY + SIZE / 9 : preTranslateY;

  const data = {
    wrapperColor: wrapperColor,
    faceColor: getContrast(wrapperColor),
    backgroundColor: getRandomColor(numFromName + 13, colors, range),
    wrapperTranslateX: wrapperTranslateX,
    wrapperTranslateY: wrapperTranslateY,
    wrapperRotate: getUnit(numFromName, 360),
    wrapperScale: 1 + getUnit(numFromName, SIZE / 12) / 10,
    isCircle: getBoolean(numFromName, 1),
    eyeSpread: getUnit(numFromName, 5),
    mouthSpread: getUnit(numFromName, 3),
    faceRotate: getUnit(numFromName, 10, 3),
    faceTranslateX:
      wrapperTranslateX > SIZE / 6 ? wrapperTranslateX / 2 : getUnit(numFromName, 8, 1),
    faceTranslateY:
      wrapperTranslateY > SIZE / 6 ? wrapperTranslateY / 2 : getUnit(numFromName, 7, 2),
  };

  return data;
}

const AvatarBeam = (props) => {
  const data = generateData(props.name, props.colors);

  return (
    <svg
      viewBox={'0 0 ' + SIZE + ' ' + SIZE}
      fill="none"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
    >
      <title>{props.name}</title>
      <mask id="mask__beam" maskUnits="userSpaceOnUse" x={0} y={0} width={SIZE} height={SIZE}>
        <rect width={SIZE} height={SIZE} rx={props.square ?  undefined : SIZE * 2 } fill="#FFFFFF" />
      </mask>
      <g mask="url(#mask__beam)">
        <rect width={SIZE} height={SIZE} fill={data.backgroundColor} />
        <rect
          x="0"
          y="0"
          width={SIZE}
          height={SIZE}
          transform={
            'translate(' +
            data.wrapperTranslateX +
            ' ' +
            data.wrapperTranslateY +
            ') rotate(' +
            data.wrapperRotate +
            ' ' +
            SIZE / 2 +
            ' ' +
            SIZE / 2 +
            ') scale(' +
            data.wrapperScale +
            ')'
          }
          fill={data.wrapperColor}
          rx={data.isCircle ? SIZE : SIZE / 6}
        />
        <g
          transform={
            'translate(' +
            data.faceTranslateX +
            ' ' +
            data.faceTranslateY +
            ') rotate(' +
            data.faceRotate +
            ' ' +
            SIZE / 2 +
            ' ' +
            SIZE / 2 +
            ')'
          }
        >
          <path
            d={'M18 ' + (19 + data.mouthSpread) + `l ${data.faceTranslateX < 0 ? '-' : ''}2,4 h${data.faceTranslateX < 0 ? '' : '-'}2`}
            stroke={data.faceColor}
            fill="none"
            strokeLinecap="round"
          />
          <rect
            x={14 - data.eyeSpread}
            y={14}
            width={4}
            height={4}
            rx={2}
            stroke="none"
            fill={data.faceColor}
          />
          <rect
            x={20 + data.eyeSpread}
            y={14}
            width={4}
            height={4}
            rx={2}
            stroke="none"
            fill={data.faceColor}
          />
        </g>
      </g>
    </svg>
  );
};

export default AvatarBeam;
