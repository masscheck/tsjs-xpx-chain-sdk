import './GavelStyle.scss';

const Gavel: React.FC = () => {
  return (
    <svg
      className='gavel'
      width='256px'
      height='256px'
      version='1.1'
      id='Capa_1'
      x='0px'
      y='0px'
      viewBox='0 0 512 512'
    >
      <g>
        <g>
          <path
            d='M497.5,497.3c-9.7,9.7-22.5,14.5-35.1,14.5c-12.7,0-25.4-4.8-35.1-14.5L251.1,321.2l70.3-70.3l176.1,176.1
			C516.8,446.5,516.8,477.9,497.5,497.3z'
          />
          <path d='M204.2,321.5L87,204.3L204.4,86.9l117.2,117.2L204.2,321.5z' />
          <path
            d='M28.4,215.8c6.5-6.5,17-6.5,23.3,0l140.9,140.7c6.5,6.5,6.5,17,0,23.3l-23.6,23.6c-3.2,3.2-7.5,4.8-11.7,4.8
			c-4.2,0-8.5-1.7-11.7-4.8L4.9,262.8c-6.5-6.5-6.5-17,0-23.3L28.4,215.8L28.4,215.8z'
          />
          <path
            d='M216,51.8c-6.5-6.5-6.5-17,0-23.3l23.6-23.6c6.5-6.5,17-6.5,23.3,0l140.7,140.7c6.5,6.5,6.5,17,0,23.3l-23.6,23.6
			c-6.5,6.5-17,6.5-23.3,0L216,51.8z'
          />
        </g>
      </g>
    </svg>
  );
};

export default Gavel;
