

const Parallax = ({type, tag, value}) => {
  return (
    <div>
      <div className={type} id={tag}>{value}</div>
    </div>
  );
};

export default Parallax;
