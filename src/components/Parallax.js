

const Parallax = ({type, tag}) => {
  return (
    <div>
      <div className={type} id={tag}></div>
    </div>
  );
};

export default Parallax;
