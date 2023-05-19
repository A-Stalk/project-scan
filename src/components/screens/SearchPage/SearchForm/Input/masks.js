const innMask = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
];

const getMaskByInputName = ({ name }) => {
  switch (name) {
    case 'inn':
      return innMask;

    default:
      return false;
  }
};

export default getMaskByInputName;
